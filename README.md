<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# HSK Tutor AI

**The Digital Scholar's Companion for Mandarin Mastery.**

HSK Tutor AI is a next-generation Mandarin learning platform designed to bridge the gap between textbook study and natural conversation. Powered by advanced AI models, it provides a "scholar-level" training environment with real-time feedback and cultural immersion.

---

## 🚀 Key Features

### 🌟 Mistake Mirror (Reflective Correction)

An intelligent correction engine that doesn't just fix your errors but reflects them back in a way that helps you understand the *why*. It focuses on tone accuracy, grammar structures, and natural phrasing.

### 📚 Chengyu-GPT (Advanced Idiom Engine)

Master the art of the four-character idiom (成语 - Chéngyǔ). HSK Tutor AI contextually weaves advanced idioms into conversations and provides deep dives into their literal meanings, historical origins, and modern usage.

### 🧠 Cultural Intelligence (CQ) Layer

Mandarin is more than just words. The CQ Layer provides passive context during your practice sessions, explaining the cultural nuances, social etiquette, and regional variations that make your speech truly authentic.

### 🎚️ Smart-HSK Adaptive Difficulty

Seamlessly toggle between HSK 1 and HSK 6. The platform dynamically adjusts vocabulary complexity, speaking speed (via the Preferences Panel), and grammar strictness based on your selected level.

### ⚡ Guest-First Architecture

We've eliminated the friction of traditional sign-ups.

- **Instant Access**: Jump straight from the landing page into your dashboard.
- **Local Persistence**: All your progress, vocabulary mastery, and session history are securely stored in your browser's `localStorage` via a robust guest-based system.
- **No Clerk Middleware**: Decoupled from third-party auth services for maximum performance and immediate accessibility.

### 🎙️ Voice-First Interaction

Practice your tones with low-latency AI response times. Features include:

- Adjustable speaking rates (0.5x to 2.0x).
- Choice of standard Mandarin voices.
- Automatic playback for continuous immersion.

---

## 🛠️ Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS)
- NPM or Yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Oxdemox/HSK-Tutor-AI.git
   cd HSK-Tutor-AI
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment:**

   Create or edit `.env.local`:

   ```env
   # OpenRouter API Key for AI interaction
   OPENROUTER_API_KEY=your_api_key_here
   
   # Public App URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Launch Development Server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to start learning.

---

## 📅 Platform Overview & Roadmap

Explore the [platform_overview.md](docs/platform_overview.md) for a deep dive into the underlying architecture and future milestones including:

- **Character Writing Verification**
- **Enhanced Pronunciation Scoring**
- **Collaborative Scenario Library**

---

<div align="center">
Proudly built for the global cohort of Mandarin scholars. 🎓
</div>
