import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Languages, Volume2, Loader2, Info } from 'lucide-react';

type Props = {
  onBack: () => void;
};

type TranscriptMessage = {
  id: string;
  role: 'user' | 'model';
  english: string;
  chinese: string;
  pinyin?: string;
};

export default function TranslationView({ onBack }: Props) {
  const [activeTab, setActiveTab] = useState<'voice' | 'text'>('text');

  const [messages, setMessages] = useState<TranscriptMessage[]>([]);

  // Text state
  const [textInput, setTextInput] = useState('');
  const [isTranslatingText, setIsTranslatingText] = useState(false);

  const handleTextTranslation = async () => {
    if (!textInput.trim()) return;
    setIsTranslatingText(true);

    try {
      const systemPrompt = `You are an expert English-Chinese translator.
Translate the given text. Detect the language automatically.
Return a JSON object with exactly these three keys:
- "english": the English version of the text
- "chinese": the Mandarin Chinese (Hanzi) version
- "pinyin": the pinyin romanisation of the Chinese text
Return ONLY valid JSON with no markdown wrapper.`;

      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          feature: 'translation',
          messages: [{ role: 'user', content: `Translate for an HSK learner: "${textInput}". Return ONLY valid JSON: { "english": "...", "chinese": "...", "pinyin": "..." }` }],
        }),
      });

      if (!res.ok) throw new Error(`Proxy error ${res.status}`);

      const data = await res.json();
      // Strip markdown code fences if the model wraps with them
      const raw = (data.content as string).replace(/```json\n?|```/g, '').trim();
      const result = JSON.parse(raw);

      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          english: result.english ?? '',
          chinese: result.chinese ?? '',
          pinyin: result.pinyin ?? '',
        },
      ]);
    } catch (err) {
      console.error('Text translation error:', err);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          english: 'Translation failed. Please try again.',
          chinese: '',
          pinyin: '',
        },
      ]);
    } finally {
      setIsTranslatingText(false);
    }
  };

  const playTranslation = (text: string, isChinese: boolean) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = isChinese ? 'zh-CN' : 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-stone-900 font-sans flex flex-col">
      <header className="bg-white border-b border-stone-200 py-4 px-6 shadow-sm z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 -ml-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-colors"
            title="Back to menu"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-stone-800 tracking-tight">Translator</h1>
        </div>
      </header>

      <main className="flex-1 max-w-3xl w-full mx-auto p-6 flex flex-col gap-6">
        {/* Tabs */}
        <div className="flex p-1 bg-stone-200/50 rounded-xl mb-2">
          <button
            onClick={() => setActiveTab('voice')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'voice'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            Voice (coming soon)
          </button>
          <button
            onClick={() => setActiveTab('text')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${
              activeTab === 'text'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            Text Translator
          </button>
        </div>

        {activeTab === 'voice' ? (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 flex flex-col items-center gap-4 text-center">
            <Info size={32} className="text-amber-500" />
            <h2 className="text-xl font-bold text-stone-800">Voice Translation — Coming Soon</h2>
            <p className="text-stone-500 max-w-sm">
              Real-time voice translation requires a live audio streaming API. The free OpenRouter models used by this app are text-only.
              Use the <strong>Text Translator</strong> tab for instant translations powered by{' '}
              <span className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">stepfun/step-3.5-flash:free</span>.
            </p>
            <button
              onClick={() => setActiveTab('text')}
              className="mt-2 px-6 py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-colors"
            >
              Switch to Text Translator
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-stone-800 mb-2">
              <Languages size={24} className="text-red-500" />
              <h2 className="text-xl font-bold">Text Translator</h2>
            </div>

            <textarea
              value={textInput}
              onChange={e => setTextInput(e.target.value)}
              placeholder="Enter English or Chinese text here…"
              className="w-full h-32 p-4 rounded-2xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 resize-none"
            />

            <button
              onClick={handleTextTranslation}
              disabled={isTranslatingText || !textInput.trim()}
              className="w-full py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isTranslatingText ? (
                <><Loader2 size={20} className="animate-spin" /> Translating…</>
              ) : 'Translate'}
            </button>

            {messages.length > 0 && (
              <div className="mt-2 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider">Translation History</h3>
                  <button
                    onClick={() => setMessages([])}
                    className="text-[10px] font-bold text-red-500 uppercase tracking-widest hover:text-red-700"
                  >
                    Clear
                  </button>
                </div>
                {[...messages].reverse().map(msg => (
                  <div key={msg.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-xs font-bold text-stone-400 mb-1 uppercase tracking-wider">English</div>
                        <div className="text-base text-stone-800 whitespace-pre-wrap">{msg.english}</div>
                      </div>
                      <button
                        onClick={() => playTranslation(msg.english, false)}
                        className="p-2 bg-white text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg border border-stone-200 transition-all shadow-sm shrink-0"
                        title="Listen to English"
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                    {msg.chinese && (
                      <>
                        <div className="h-px bg-stone-200/50 w-full" />
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="text-xs font-bold text-stone-400 mb-1 uppercase tracking-wider">Chinese</div>
                            <div className="text-xl text-stone-800 whitespace-pre-wrap">{msg.chinese}</div>
                            {msg.pinyin && <div className="text-sm text-stone-500 mt-1 font-medium">{msg.pinyin}</div>}
                          </div>
                          <button
                            onClick={() => playTranslation(msg.chinese, true)}
                            className="p-2 bg-white text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg border border-stone-200 transition-all shadow-sm shrink-0"
                            title="Listen to Chinese"
                          >
                            <Volume2 size={16} />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
