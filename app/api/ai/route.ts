import { NextRequest, NextResponse } from 'next/server';

// Rate limiting store (in-memory for development, use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 20; // 20 requests per minute per IP

/**
 * Input validation schema for AI requests
 */
const VALID_FEATURES = ['ai-tutor', 'translation', 'pronunciation', 'quiz', 'progress', 'session-review', 'turn-analysis'] as const;
const MAX_MESSAGE_LENGTH = 4000;
const MAX_MESSAGES = 50;

function sanitizeString(input: string, maxLength: number): string {
  // Remove potential prompt injection patterns
  const sanitized = input
    .replace(/<\s*system\s*>/gi, '')
    .replace(/<\s*\/\s*system\s*>/gi, '')
    .replace(/\[SYSTEM\]/gi, '')
    .replace(/\[\/SYSTEM\]/gi, '')
    .replace(/ignore previous instructions/gi, '')
    .replace(/ignore all previous/gi, '')
    .trim();
  
  return sanitized.slice(0, maxLength);
}

function validateInput(body: unknown): { valid: boolean; error?: string; data?: {
  feature: string;
  messages: Array<{ role: string; content: string }>;
  userLevel?: string;
  smartHskEnabled?: boolean;
}} {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const { feature, messages, userLevel, smartHskEnabled } = body as Record<string, unknown>;

  // Validate feature
  if (!feature || typeof feature !== 'string' || !VALID_FEATURES.includes(feature as typeof VALID_FEATURES[number])) {
    return { valid: false, error: `Invalid feature. Must be one of: ${VALID_FEATURES.join(', ')}` };
  }

  // Validate messages
  if (!messages || !Array.isArray(messages)) {
    return { valid: false, error: 'Messages must be an array' };
  }

  if (messages.length === 0) {
    return { valid: false, error: 'Messages array cannot be empty' };
  }

  if (messages.length > MAX_MESSAGES) {
    return { valid: false, error: `Too many messages. Maximum is ${MAX_MESSAGES}` };
  }

  const validatedMessages: Array<{ role: string; content: string }> = [];
  
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    
    if (!msg || typeof msg !== 'object') {
      return { valid: false, error: `Invalid message at index ${i}` };
    }

    const { role, content } = msg as Record<string, unknown>;

    if (role !== 'user' && role !== 'assistant' && role !== 'model') {
      return { valid: false, error: `Invalid role at index ${i}. Must be 'user', 'assistant', or 'model'` };
    }

    if (!content || typeof content !== 'string') {
      return { valid: false, error: `Invalid content at index ${i}` };
    }

    validatedMessages.push({
      role: role as string,
      content: sanitizeString(content as string, MAX_MESSAGE_LENGTH),
    });
  }

  // Validate optional fields
  const result: ReturnType<typeof validateInput>['data'] = {
    feature: feature as string,
    messages: validatedMessages,
  };

  if (userLevel !== undefined) {
    if (typeof userLevel !== 'string' || !userLevel.match(/^HSK [1-6]$/)) {
      return { valid: false, error: 'Invalid userLevel. Must be "HSK 1" through "HSK 6"' };
    }
    result.userLevel = userLevel;
  }

  if (smartHskEnabled !== undefined) {
    if (typeof smartHskEnabled !== 'boolean') {
      return { valid: false, error: 'smartHskEnabled must be a boolean' };
    }
    result.smartHskEnabled = smartHskEnabled;
  }

  return { valid: true, data: result };
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    const resetTime = now + RATE_LIMIT_WINDOW_MS;
    rateLimitStore.set(ip, { count: 1, resetTime });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetTime };
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - record.count, resetTime: record.resetTime };
}

/**
 * Free OpenRouter models per feature, as per PRD.
 * Keys match the `feature` field sent by the client.
 */
const MODEL_MAP: Record<string, string> = {
  'ai-tutor':        'qwen/qwen3-next-80b-a3b-instruct:free',
  'translation':     'stepfun/step-3.5-flash:free',
  'pronunciation':   'arcee-ai/trinity-large-preview:free',
  'quiz':            'minimax/minimax-m2.5:free',
  'progress':        'nvidia/nemotron-3-super-120b-a12b:free',
};

const SOUL_BASE = `
### AI Prompt Structure: SOUL (Scope, Output constraints, Usage, Limits)
#### Scope:
- Restricted to HSK learning tasks (vocabulary, grammar, sentences, quizzes).
- No outside knowledge or unsolicited information should be provided.
- Stay focused on helping the learner improve language skills as defined by the HSK curriculum.

#### Output Constraints:
- Accurate, clear, and concise: Avoid unnecessary verbosity.
- Non-speculative: Do not hallucinate. Provide only factual, curriculum-based content.
- Structured: Use format "Example → Rule → Quiz" where applicable for consistent user experience.

#### Limits:
- No unrelated conversations (pop culture, history, etc.).
- Limit knowledge to HSK-focused language learning.
- No personal opinions.

#### Risk Mitigation:
- If outside scope, return: "I can only assist with Chinese language learning. Please ask me questions related to HSK vocabulary, grammar, and practice tasks."
`;

const SYSTEM_PROMPTS: Record<string, string> = {
  'ai-tutor': `${SOUL_BASE}\nAct as an HSK Tutor. Correct errors and explain grammar using the SOUL structure.`,
  'translation': `${SOUL_BASE}\nProvide accurate Mandarin translation, Pinyin, and a brief grammar note.`,
  'pronunciation': `${SOUL_BASE}\nAnalyze the student's transcript. Provide HSK-level pinyin corrections and a score 1-10.`,
  'quiz': `${SOUL_BASE}\nGenerate HSK-compliant questions. For AI Mode, follow the requested JSON format strictly without extra text.`,
  'progress': `${SOUL_BASE}\nAnalyze user progress data. Provide encouraging, factual HSK study advice.`,
  'session-review': `${SOUL_BASE}\nAnalyze the just-completed HSK session history. Provide a summary with: 1. Key Vocabulary learned, 2. Grammar Mistakes corrected, 3. Overall Fluency Score (1-10). Use the SOUL example-rule structure. End your response with [[SCORE: X]] where X is the numeric fluency score.`,
  'turn-analysis': `${SOUL_BASE}\nAnalyze the student's *specific latest turn* in the context of the conversation. Provide:\n1. Precise Pinyin transcription.\n2. Specific Grammar corrections (if any).\n3. HSK-appropriate vocabulary suggestions.\n4. **Cultural Intelligence**: If a term or phrase has strong cultural/social context (e.g. Mianzi, etiquette), explain it briefly.\n5. **Chengyu Level-Up**: If possible, suggest a 4-character idiom (Chengyu) that could replace a simple part of their sentence.\n\nKeep it concise. VERY IMPORTANT: End your response with these exact tags if relevant:\n[[WORDS: word1:pinyin:translation, ...]]\n[[CULTURE: Your brief cultural insight here]]\n[[CHENGYU: idiom:pinyin:translation:explanation]]\n[[MISTAKE: true]] (Include ONLY if the student made a significant grammatical error that requires reflection)`,
};

const DEFAULT_MODEL = 'nvidia/nemotron-3-super-120b-a12b:free';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
      || req.headers.get('x-real-ip') 
      || 'unknown';

    // Check rate limit
    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded. Please try again later.',
          resetTime: rateLimit.resetTime 
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetTime.toString(),
          }
        }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenRouter API key is not configured on the server.' },
        { status: 500 }
      );
    }

    const body = await req.json();

    // Validate and sanitize input
    const validation = validateInput(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { feature, messages, userLevel, smartHskEnabled } = validation.data!;

    const model = MODEL_MAP[feature] ?? DEFAULT_MODEL;
    let basePrompt = SYSTEM_PROMPTS[feature] ?? SOUL_BASE;

    if (smartHskEnabled) {
      basePrompt += `\n**SMART-HSK ACTIVE**: Dynamically adjust your linguistic complexity. If the student is performing well, use more advanced HSK vocabulary and slightly more complex grammar (Input + 1). If they struggle, simplify your language and be more descriptive.`;
    }

    const finalSystemPrompt = userLevel ? `${basePrompt}\nTarget Level: ${userLevel}` : basePrompt;

    // Build the full message array, prepending the structured system prompt
    const fullMessages: Array<{ role: string; content: string }> = [
      { role: 'system', content: finalSystemPrompt },
      ...messages
    ];

    const openRouterResponse = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
        'X-Title': 'HSK Tutor',
      },
      body: JSON.stringify({
        model,
        messages: fullMessages,
        stream: false,
      }),
    });

    if (!openRouterResponse.ok) {
      const errorText = await openRouterResponse.text();
      console.error('OpenRouter error:', openRouterResponse.status, errorText);
      return NextResponse.json(
        { error: `OpenRouter request failed: ${openRouterResponse.status}` },
        { status: openRouterResponse.status }
      );
    }

    const data = await openRouterResponse.json();
    const content = data.choices?.[0]?.message?.content ?? '';

    return NextResponse.json({ content, model });
  } catch (error) {
    console.error('AI proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error in AI proxy.' },
      { status: 500 }
    );
  }
}
