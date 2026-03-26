# HSK Tutor Platform - UI/UX Revamp PRD
## Product Requirements Document for Scholar-Level Interface Enhancement

---

## Executive Summary

Transform HSK Tutor from a functional learning app into a **premium, immersive Mandarin learning experience** that rivals award-winning educational platforms. The redesign will focus on visual hierarchy, restrained elegance, intuitive interactions, and a journey-driven user experience.

---

## 1. Visual Thesis

> *"A serene, scholarly sanctuary where ancient Chinese aesthetics meet modern minimalism—calm surfaces, generous whitespace, and purposeful motion that guides learners through their Mandarin journey with clarity and confidence."*

**Core Design Pillars:**
- **Scholarly Calm**: Zen-like surfaces with purposeful breathing room
- **Ink & Paper**: Subtle textures inspired by traditional Chinese calligraphy
- **Progressive Revelation**: Content unfolds as users advance, creating discovery moments
- **Red Accent System**: Strategic use of Chinese red (#dc2626) as the sole accent color

---

## 2. Current State Analysis

### 2.1 Strengths to Preserve
- ✅ Solid React/TypeScript architecture
- ✅ Motion/Framer Motion already integrated
- ✅ Good icon system (Lucide)
- ✅ Functional Firebase integration
- ✅ Core learning features complete

### 2.2 Areas for Enhancement

| Component | Current State | Target State |
|-----------|--------------|--------------|
| **Home/Menu** | Grid of colored cards | Immersive dashboard with learning journey visualization |
| **VocabularyView** | Basic list layout | Elegant, scannable vocabulary explorer with visual hierarchy |
| **FlashcardsView** | Simple flip cards | Tactile, gesture-driven card experience with momentum |
| **QuizView** | Functional quiz UI | Gamified challenge mode with celebratory feedback |
| **CurriculumView** | Standard accordion | Visual learning path with progress milestones |
| **AITutorView** | Basic chat interface | Conversational AI with personality and visual presence |
| **CharacterWritingView** | Hanzi Writer integration | Immersive stroke practice with artistic feedback |
| **ProgressView** | Basic progress display | Achievement gallery with visual progress narrative |
| **Authentication** | Standard login forms | Seamless, branded auth experience |

---

## 3. Design System Specifications

### 3.1 Color Palette

```css
/* Primary Surfaces */
--surface-primary: #fafaf8;      /* Warm paper white */
--surface-secondary: #f5f5f0;    /* Current background */
--surface-elevated: #ffffff;     /* Cards/modals */
--surface-sunken: #efefea;       /* Sunken elements */

/* Brand Accent */
--accent-primary: #dc2626;       /* Chinese red */
--accent-hover: #b91c1c;         /* Darker red */
--accent-soft: #fef2f2;          /* Red tint */
--accent-glow: rgba(220, 38, 38, 0.15);

/* Text Hierarchy */
--text-primary: #1c1917;         /* Near black */
--text-secondary: #57534e;       /* Body text */
--text-tertiary: #a8a29e;        /* Muted text */
--text-inverse: #ffffff;         /* On dark */

/* Semantic Colors */
--success: #059669;
--warning: #d97706;
--error: #dc2626;

/* Ink Wash Gradients */
--gradient-ink: linear-gradient(135deg, #fafaf8 0%, #f5f5f0 100%);
--gradient-depth: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.02) 100%);
```

### 3.2 Typography System

```css
/* Typeface Pairing */
--font-display: 'Inter', system-ui, sans-serif;  /* Headlines */
--font-body: 'Inter', system-ui, sans-serif;      /* Body */
--font-chinese: 'Noto Serif SC', 'STKaiti', serif; /* Chinese characters */
--font-mono: 'JetBrains Mono', monospace;          /* Pinyin/numbers */

/* Type Scale */
--text-xs: 0.75rem;      /* 12px - Labels */
--text-sm: 0.875rem;     /* 14px - Secondary */
--text-base: 1rem;       /* 16px - Body */
--text-lg: 1.125rem;     /* 18px - Emphasis */
--text-xl: 1.25rem;      /* 20px - Subhead */
--text-2xl: 1.5rem;      /* 24px - Section */
--text-3xl: 1.875rem;    /* 30px - Headline */
--text-4xl: 2.25rem;     /* 36px - Display */
--text-5xl: 3rem;         /* 48px - Hero */
--text-6xl: 3.75rem;      /* 60px - Chinese hero */
--text-7xl: 4.5rem;       /* 72px - Feature characters */

/* Font Weights */
--weight-normal: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
--weight-black: 900;
```

### 3.3 Spacing System

```css
/* 8px Base Grid */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### 3.4 Border Radius

```css
--radius-sm: 0.5rem;     /* 8px - Buttons, tags */
--radius-md: 0.75rem;    /* 12px - Cards small */
--radius-lg: 1rem;       /* 16px - Cards medium */
--radius-xl: 1.5rem;     /* 24px - Cards large */
--radius-2xl: 2rem;      /* 32px - Containers */
--radius-3xl: 2.5rem;    /* 40px - Hero cards */
--radius-full: 9999px;   /* Circular */
```

### 3.5 Shadow System

```css
/* Elevation Shadows */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.15);

/* Accent Glow */
--shadow-accent: 0 10px 40px -10px rgba(220, 38, 38, 0.3);
--shadow-accent-lg: 0 20px 60px -15px rgba(220, 38, 38, 0.4);
```

---

## 4. Component Redesign Specifications

### 4.1 Home/Dashboard View

**Visual Thesis:** A personal learning sanctuary that welcomes users back to their journey

**Layout Structure:**
```
┌─────────────────────────────────────────────────────────┐
│  Header: Logo | HSK Level Badge | Profile              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  HERO: Full-bleed gradient with Chinese         │   │
│  │  character watermark + personalized greeting    │   │
│  │  + Continue Learning CTA                       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │  DAILY PROGRESS RING                            │  │
│  │  Streak | Words Learned | Time Today            │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  LEARNING PATH (Horizontal scroll, visual journey)     │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐             │
│  │  1  │→│  2  │→│  3  │→│  4  │→│  5  │             │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘             │
│                                                         │
│  QUICK ACTIONS (Minimal, icon-led)                     │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐         │
│  │Flashcards│ │  Quiz  │ │  AI    │ │ Writing│         │
│  └────────┘ └────────┘ └────────┘ └────────┘         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Key Features:**
- Full-bleed hero with subtle Chinese character watermark (opacity: 0.03)
- Personalized greeting based on time of day
- Animated progress ring showing daily goal
- Visual learning path with milestone markers
- Quick actions with hover lift effect

**Motion Requirements:**
1. Hero entrance: Staggered fade-up for greeting, CTA, and background element
2. Progress ring: Animated stroke-dashoffset on load
3. Learning path: Slide-in from left with stagger
4. Quick actions: Scale up on hover with shadow enhancement

---

### 4.2 Vocabulary Explorer

**Visual Thesis:** An elegant, browsable library of Chinese characters

**Redesign Goals:**
- Replace card grid with clean list layout
- Add visual hierarchy through typography scale
- Implement smooth scroll with sticky headers
- Add search/filter with instant feedback

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  ← Back     VOCABULARY           HSK Dropdown  ⚙️      │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐   │
│  │  🔍 Search characters, pinyin, or meaning...    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐              │
│  │ All      │ │ Starred  │ │ Learned  │              │
│  └──────────┘ └──────────┘ └──────────┘              │
│                                                         │
│  ─── LESSON 1 ───────────────────────────── 15 words   │
│                                                         │
│     01   你好                                     ⭐ 🔊 │
│          nǐ hǎo                                        │
│          hello                                         │
│     ───────────────────────────────────────────────    │
│     02   谢谢                                     ⭐ 🔊 │
│          xiè xie                                       │
│          thank you                                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Typography Hierarchy:**
- Lesson headers: `text-sm font-bold uppercase tracking-widest text-stone-400`
- Chinese characters: `text-4xl font-serif text-stone-900`
- Pinyin: `text-base font-medium text-stone-500`
- English: `text-base text-stone-600`

**Interactions:**
- Hover: Subtle background tint, audio button appears
- Tap character: Plays pronunciation
- Long press: Quick add to starred
- Swipe right: Mark as learned

---

### 4.3 Flashcards Experience

**Visual Thesis:** Tactile, focused practice with physical card feel

**Redesign Goals:**
- Full-screen card experience (no chrome during practice)
- Gesture-based navigation (swipe left/right)
- Satisfying flip animation with 3D perspective
- Progress indicator as subtle dots

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  · · ● · · · · · · · ·                                X │
│                                                         │
│                                                         │
│         ┌───────────────────────────────────┐          │
│         │                                   │          │
│         │              你好                  │          │
│         │                                   │          │
│         │            [Tap to reveal]        │          │
│         │                                   │          │
│         └───────────────────────────────────┘          │
│                                                         │
│                                                         │
│         ← Swipe to navigate  ·  Tap to flip →         │
│                                                         │
│                                                         │
│  ┌─────────┐              ┌─────────┐                 │
│  │  ← Back │              │  Next → │                 │
│  └─────────┘              └─────────┘                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Card States:**
- Front: Large Chinese character, minimal chrome
- Back: Pinyin, English, example sentence, audio button

**Motion Requirements:**
1. Flip: 3D rotateY with perspective, 600ms ease
2. Swipe: Follow finger with resistance, spring back on release
3. Stack effect: Cards slightly offset behind, parallax on swipe
4. Completion: Confetti burst with HSK-appropriate icons

---

### 4.4 Quiz Challenge Mode

**Visual Thesis:** Focused challenge with celebratory feedback

**Redesign Goals:**
- Full-screen question focus
- Timer with visual countdown
- Answer feedback with motion
- Streak counter for motivation

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  ← Back              5/20               🔥 Streak: 3   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ⏱️ 0:45                                        │   │
│  │  ════════════════════════░░░░░░░░░░            │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│                                                         │
│                    你好                                 │
│                   nǐ hǎo                                │
│                                                         │
│         What does this mean?                           │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  A. Goodbye                                     │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │  B. Hello                            ✓ Correct! │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │  C. Thank you                                   │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │  D. Sorry                                       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Feedback Animations:**
- Correct: Green pulse, checkmark burst, streak flame animation
- Incorrect: Gentle shake, correct answer highlights
- Streak milestone: Special celebration at 5, 10, 20

---

### 4.5 Curriculum Learning Path

**Visual Thesis:** A visual journey through Chinese mastery

**Redesign Goals:**
- Horizontal scrolling path visualization
- Module nodes with progress indicators
- Lesson previews with vocabulary sneak peek
- Smooth transitions between path and lesson

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  ← Back         LEARNING PATH          HSK 1 ▼        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Your Progress                                  │   │
│  │  ████████████░░░░░░░░░░░░░░░░░░░░  35%         │   │
│  │  47 of 134 words • 3 of 8 lessons complete     │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ══════════════════════════════════════════════════   │
│  ●──────────●──────────○──────────○──────────○        │
│  │ Module 1  │ Module 2  │ Module 3  │              │
│  │ 100%      │  60%      │   0%      │              │
│  └───────────┴───────────┴───────────┴              │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  📖 Module 2: Daily Life                        │   │
│  │  ────────────────────────────────────────────   │   │
│  │  Lesson 2.1: Greetings & Introductions          │   │
│  │  15 words • 2 grammar points • 10 min           │   │
│  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐            │   │
│  │  │你好│ │谢谢│ │再见│ │对不起│ │没关系│           │   │
│  │  └────┘ └────┘ └────┘ └────┘ └────┘            │   │
│  │                                                 │   │
│  │  [Continue Lesson →]                            │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 4.6 AI Tutor Chat

**Visual Thesis:** A wise, patient mentor with personality

**Redesign Goals:**
- Distinct visual identity for AI vs user
- Typing indicator with personality
- Code blocks for pinyin/characters
- Suggested quick replies

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  ← Back        🤖 AI TUTOR            HSK 1 ▼         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌───────────────────────────────────────────┐        │
│  │ 🎓 Tutor                                   │        │
│  │ Great question! The character 你 (nǐ)     │        │
│  │ means "you". It's pronounced with a       │        │
│  │ falling-rising tone. Try saying it:       │        │
│  │                                           │        │
│  │ ┌─────────────────────────────────────┐   │        │
│  │ │  你 (nǐ)                            │   │        │
│  │ │  "you" (singular)                   │   │        │
│  │ │  🔊 Play pronunciation              │   │        │
│  │ └─────────────────────────────────────┘   │        │
│  └───────────────────────────────────────────┘        │
│                                                         │
│                    ┌─────────────────────────┐         │
│                    │ How do I use it in a    │         │
│                    │ sentence?               │         │
│                    └─────────────────────────┘         │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 💡 Suggested: "Show me examples" "Practice tones"│  │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Ask anything about Chinese...              📤   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 4.7 Character Writing Practice

**Visual Thesis:** Meditative stroke practice with artistic feedback

**Redesign Goals:**
- Full-canvas practice area
- Ghost character guide with fade
- Stroke order animation
- Achievement for perfect strokes

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  ← Back        ✍️ WRITING PRACTICE                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  你 (nǐ) - "you"                                │   │
│  │  Stroke 3 of 7                                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                 │   │
│  │                                                 │   │
│  │              [Canvas Area]                      │   │
│  │           Draw the character here               │   │
│  │                                                 │   │
│  │                                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Reference:    你    Strokes: 7    Radicals: 亻+尔│   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │  Retry   │  │  Hint    │  │  Next →  │            │
│  └──────────┘  └──────────┘  └──────────┘            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 4.8 Progress & Achievements

**Visual Thesis:** A gallery of accomplishments and visual learning narrative

**Redesign Goals:**
- Visual progress timeline
- Achievement badges with unlock animations
- Statistics with clear visual hierarchy
- Streak calendar with heat map

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  ← Back         MY PROGRESS                            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  🔥 15 Day Streak!                              │   │
│  │  Keep going! You're on fire!                    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐            │
│  │  847      │ │   12      │ │   45      │            │
│  │  Words    │ │  Lessons  │ │  Hours    │            │
│  └───────────┘ └───────────┘ └───────────┘            │
│                                                         │
│  HSK Progress                                           │
│  ┌─────────────────────────────────────────────────┐   │
│  │  HSK 1 ████████████████████████ 100%  ✓        │   │
│  │  HSK 2 ████████████████░░░░░░░░░░  65%         │   │
│  │  HSK 3 ████████░░░░░░░░░░░░░░░░░░  35%         │   │
│  │  HSK 4 ██░░░░░░░░░░░░░░░░░░░░░░░░   10%         │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Recent Achievements                                    │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐             │
│  │ 🎯  │ │ 📚  │ │ 🔥  │ │ ⭐  │ │ 🏆  │             │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 4.9 Authentication Flow

**Visual Thesis:** Seamless, branded entry experience

**Redesign Goals:**
- Split-screen hero with Chinese aesthetic
- Social login options
- Smooth transition to app on success
- Password strength indicator

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌─────────────────────┬───────────────────────────┐   │
│  │                     │                           │   │
│  │                     │  Welcome Back             │   │
│  │                     │                           │   │
│  │      中文           │  ┌───────────────────┐   │   │
│  │     HSK Tutor       │  │ 📧 Email          │   │   │
│  │                     │  └───────────────────┘   │   │
│  │  Master Mandarin    │  ┌───────────────────┐   │   │
│  │  with AI-Powered    │  │ 🔒 Password       │   │   │
│  │  Learning           │  └───────────────────┘   │   │
│  │                     │                           │   │
│  │                     │  [    Sign In     ]       │   │
│  │                     │                           │   │
│  │                     │  ───── or ─────          │   │
│  │                     │                           │   │
│  │                     │  [G] [Apple] [WeChat]    │   │
│  │                     │                           │   │
│  │                     │  No account? Sign up     │   │
│  └─────────────────────┴───────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 5. Motion Design System

### 5.1 Core Animations

| Animation | Duration | Easing | Use Case |
|-----------|----------|--------|----------|
| `fade-up` | 400ms | ease-out | Content entrance |
| `scale-in` | 200ms | spring | Button feedback |
| `slide-right` | 300ms | ease-in-out | Page transitions |
| `flip` | 600ms | ease-in-out | Card flips |
| `pulse` | 2000ms | ease-in-out | Attention indicators |
| `shimmer` | 2s | linear | Loading states |

### 5.2 Page Transitions

```typescript
const pageVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3
};
```

### 5.3 Micro-interactions

1. **Button Press**: Scale down to 0.95, shadow reduction
2. **Card Hover**: Lift 4px, shadow enhancement
3. **Input Focus**: Border color transition, subtle glow
4. **Success State**: Green pulse, checkmark draw
5. **Error State**: Shake animation, red border flash

---

## 6. Responsive Breakpoints

```css
/* Mobile First */
--bp-sm: 640px;    /* Small tablets */
--bp-md: 768px;    /* Tablets */
--bp-lg: 1024px;   /* Laptops */
--bp-xl: 1280px;   /* Desktops */
--bp-2xl: 1536px;  /* Large screens */
```

### Layout Adaptations

| Breakpoint | Layout Changes |
|------------|----------------|
| Mobile (<640px) | Single column, bottom nav, full-screen modals |
| Tablet (640-1024px) | Two columns, side nav option, sheet modals |
| Desktop (>1024px) | Multi-column, persistent sidebar, centered modals |

---

## 7. Accessibility Requirements

- **Color Contrast**: WCAG AA minimum (4.5:1 for text)
- **Focus States**: Visible focus rings on all interactive elements
- **Keyboard Navigation**: Full app navigable via keyboard
- **Screen Reader**: Semantic HTML, ARIA labels where needed
- **Motion Preference**: Respect `prefers-reduced-motion`
- **Touch Targets**: Minimum 44px for all tappable elements

---

## 8. Implementation Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Design system CSS variables
- [ ] Typography scale implementation
- [ ] Color palette application
- [ ] Base component library setup

### Phase 2: Core Views (Week 3-4)
- [ ] Home/Dashboard redesign
- [ ] Authentication flow enhancement
- [ ] Navigation system overhaul
- [ ] Vocabulary Explorer rebuild

### Phase 3: Learning Features (Week 5-6)
- [ ] Flashcards experience
- [ ] Quiz challenge mode
- [ ] Curriculum learning path
- [ ] Progress visualization

### Phase 4: Advanced Features (Week 7-8)
- [ ] AI Tutor chat enhancement
- [ ] Character writing practice
- [ ] Reading view improvements
- [ ] Pinyin chart redesign

### Phase 5: Polish & Motion (Week 9-10)
- [ ] Page transitions
- [ ] Micro-interactions
- [ ] Loading states
- [ ] Celebration animations

---

## 9. Success Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Time to First Interaction | ~3s | <1.5s |
| Task Completion Rate | 75% | 95% |
| User Satisfaction (NPS) | Unknown | 50+ |
| Daily Active Users | Baseline | +40% |
| Session Duration | Baseline | +25% |
| Feature Adoption | Baseline | +60% |

---

## 10. Technical Considerations

### 10.1 Performance Targets
- First Contentful Paint: <1s
- Largest Contentful Paint: <2s
- Time to Interactive: <3s
- Cumulative Layout Shift: <0.1

### 10.2 Bundle Size Budget
- Initial JS: <150KB gzipped
- Initial CSS: <30KB gzipped
- Total page weight: <500KB

### 10.3 Animation Performance
- Use `transform` and `opacity` only for animations
- Implement `will-change` sparingly
- Target 60fps for all animations
- Use CSS variables for theme switching

---

## Appendix A: Component Checklist

### Must Have (MVP)
- [ ] Button (primary, secondary, ghost, icon)
- [ ] Input (text, password, search)
- [ ] Card (base, interactive, media)
- [ ] Modal (centered, sheet, full-screen)
- [ ] Navigation (header, tabs, bottom bar)
- [ ] Progress (ring, bar, steps)
- [ ] Badge (status, count, achievement)
- [ ] Avatar (user, AI, placeholder)
- [ ] Toast (success, error, info)
- [ ] Skeleton (text, card, list)

### Nice to Have
- [ ] Tooltip
- [ ] Popover
- [ ] Command palette
- [ ] Keyboard shortcuts
- [ ] Dark mode toggle

---

## Appendix B: File Structure

```
src/
├── styles/
│   ├── variables.css      # Design tokens
│   ├── typography.css     # Type styles
│   ├── animations.css     # Keyframes & transitions
│   └── utilities.css      # Helper classes
├── components/
│   ├── ui/               # Base components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Progress.tsx
│   │   └── ...
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── Sidebar.tsx
│   │   └── ...
│   └── features/         # Feature components
│       ├── vocabulary/
│       ├── flashcards/
│       ├── quiz/
│       └── ...
├── hooks/
│   ├── useAnimation.ts
│   ├── useTheme.ts
│   └── ...
└── utils/
    ├── animations.ts
    ├── styling.ts
    └── ...
```

---

*Document Version: 1.0*
*Last Updated: March 2026*
*Author: HSK Tutor Design Team*