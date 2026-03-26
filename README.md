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

### 🔐 Native Scholar Authentication (Better Auth)
HSK Tutor AI now uses **Better Auth**, a lightweight, open-source authentication system.
- **Persistent Progress**: Your HSK levels, vocabulary banks, and session histories are securely tied to your account.
- **Multi-Provider Support**: Sign in with Email, Google, Apple, Microsoft, or LinkedIn.
- **Admin Management**: Dedicated scholar-level administrative tools built natively into the platform.
- **Postgres-Backed**: Powered by Drizzle ORM and a high-performance PostgreSQL database.

### 🎙️ Voice-First Interaction
Practice your tones with low-latency AI response times. Features include:
- Adjustable speaking rates (0.5x to 2.0x).
- Choice of standard Mandarin voices.
- Automatic playback for continuous immersion.

---

## 🛠️ Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (Latest LTS)
- [PostgreSQL](https://www.postgresql.org/) (Local or Cloud instance)

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
   Copy `.env.example` to `.env.local` and fill in:
   ```env
   DATABASE_URL=your_postgres_url
   BETTER_AUTH_SECRET=your_secret
   BETTER_AUTH_URL=http://localhost:3000
   OPENROUTER_API_KEY=your_key
   ```

4. **Initialize Database:**
   ```bash
   npx drizzle-kit push
   ```

5. **Launch Development Server:**
   ```bash
   npm run dev
   ```

---

## 📁 Project Structure & Docs
- [AUTH.md](docs/AUTH.md): Detailed authentication setup and role management.
- [platform_overview.md](docs/platform_overview.md): Deep dive into the AI architecture and roadmap.

---

<div align="center">
Proudly built for the global cohort of Mandarin scholars by <b>MedKhed</b>. 🎓
</div>
