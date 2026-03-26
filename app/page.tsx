'use client';

import React, { useState, useEffect, useRef } from 'react';
// Clerk removed
import { 
  Mic, MicOff, Loader2, Volume2, MessageSquare, BookOpen, Activity, 
  ArrowLeft, ChevronRight, HelpCircle, Languages, RefreshCw, 
  Sparkles, Trophy, User, Shield, Key, Mail, AlertCircle, 
  CheckCircle2, Pencil 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AudioRecorder, AudioPlayer } from '@/src/utils/audio';

// Component imports
import VocabularyView from '@/src/components/VocabularyView';
import ProgressView from '@/src/components/ProgressView';
import QuizView from '@/src/components/QuizView';
import TranslationView from '@/src/components/TranslationView';
import CharacterWritingView from '@/src/components/CharacterWritingView';
import ReadingView from '@/src/components/ReadingView';
import AITutorView from '@/src/components/AITutorView';
import GrammarView from '@/src/components/GrammarView';
import SentenceBuilderView from '@/src/components/SentenceBuilderView';
import CurriculumView from '@/src/components/CurriculumView';
import PronunciationTutor from '@/src/components/PronunciationTutor';
import ProfileView from '@/src/components/ProfileView';
import FlashcardsView from '@/src/components/FlashcardsView';
import PinyinChartView from '@/src/components/PinyinChartView';
import SessionHistoryView from '@/src/components/SessionHistoryView';
import StatsWidget from '@/src/components/StatsWidget';
import HskDropdown from '@/src/components/HskDropdown';
import PreferencesPanel from '@/src/components/PreferencesPanel';
import ScenarioLibraryView from '@/src/components/ScenarioLibraryView';
import VocabularyMasteryView from '@/src/components/VocabularyMasteryView';
import { Scenario } from '@/src/data/scenarios';
import { Lesson } from '@/src/data/curriculum';
import { determineUserRole, UserRole } from '@/src/utils/roles';

const MandarinLogo = ({ size = 40, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <text 
      x="50" 
      y="52" 
      fontSize="46" 
      fontFamily="'Noto Serif SC', 'STKaiti', 'KaiTi', serif" 
      fontWeight="bold" 
      textAnchor="middle" 
      dominantBaseline="central"
      letterSpacing="2"
    >
      中文
    </text>
  </svg>
);

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
  structured?: {
    english?: string;
    chinese?: string;
    pinyin?: string;
  };
};

type ViewState = 'menu' | 'lesson' | 'vocabulary' | 'progress' | 'quiz' | 'translation' | 'grammar' | 'sentence-builder' | 'ai-tutor' | 'flashcards' | 'profile' | 'curriculum' | 'writing' | 'reading' | 'pinyin-chart' | 'session-history' | 'scenarios' | 'vocabulary-mastery';

export default function Home() {
  const [isHomeView, setIsHomeView] = useState(true); // Control landing vs dashboard
  const [guestId, setGuestId] = useState<string>('guest_user');
  const isLoaded = true; // No longer waiting for Clerk
  const [userRole, setUserRole] = useState<'admin' | 'user' | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>('menu');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [hskLevel, setHskLevel] = useState<'HSK 1' | 'HSK 2' | 'HSK 3' | 'HSK 4' | 'HSK 5' | 'HSK 6'>('HSK 1');
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModelSpeaking, setIsModelSpeaking] = useState(false);
  const [isUserSpeaking, setIsUserSpeaking] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [speakingRate, setSpeakingRate] = useState(1.0);
  const [voiceId, setVoiceId] = useState('zh-CN-Standard-A');
  const [autoPlay, setAutoPlay] = useState(true);
  
  const sessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      // Local storage persistence for quest
      const storageKey = `hskTutor_users_${guestId}`;
      const storedData = localStorage.getItem(storageKey);
      
      if (storedData) {
        try {
          const data = JSON.parse(storedData);
          setUserRole(data.role || 'user');
          
          if (data.config) {
            setSpeakingRate(data.config.speakingRate ?? 1.0);
            setVoiceId(data.config.voiceId ?? 'zh-CN-Standard-A');
            setAutoPlay(data.config.autoPlay ?? true);
          }
        } catch (err) {
          console.error("Error parsing user data:", err);
        }
      } else {
        const role = 'user';
        setUserRole(role);
        localStorage.setItem(storageKey, JSON.stringify({
          uid: guestId,
          email: 'guest@hsk-tutor.ai',
          name: 'Guest Scholar',
          role: role,
          config: { speakingRate: 1.0, voiceId: 'zh-CN-Standard-A', autoPlay: true },
          createdAt: new Date().toISOString()
        }));
      }
  }, [guestId]);

  useEffect(() => {
    // guest logic

    const loadData = () => {
      try {
        const historyKey = `hskTutor_users_${guestId}_history_${hskLevel}`;
        const historyData = localStorage.getItem(historyKey);
        setMessages(historyData ? JSON.parse(historyData).messages || [] : []);

        const progressKey = `hskTutor_users_${guestId}_progress_${hskLevel}`;
        const progressData = localStorage.getItem(progressKey);
        setProgressPercentage(progressData ? JSON.parse(progressData).percentage || 0 : 0);
      } catch (err) {
        console.error("Error loading user data from localStorage:", err);
      }
    };

    loadData();
  }, [hskLevel, guestId]);

  useEffect(() => {
    if (!guestId || messages.length === 0) return;

    const saveData = () => {
      try {
        const historyKey = `hskTutor_users_${guestId}_history_${hskLevel}`;
        localStorage.setItem(historyKey, JSON.stringify({
          messages,
          lastUpdated: new Date().toISOString()
        }));

        const newProgress = Math.min(100, messages.length * 5);
        if (newProgress !== progressPercentage) {
          setProgressPercentage(newProgress);
          const progressKey = `hskTutor_users_${guestId}_progress_${hskLevel}`;
          localStorage.setItem(progressKey, JSON.stringify({
            hskLevel,
            percentage: newProgress,
            lastUpdated: new Date().toISOString()
          }));
        }
      } catch (err) {
        console.error("Error saving user data to localStorage:", err);
      }
    };

    const timeoutId = setTimeout(saveData, 2000);
    return () => clearTimeout(timeoutId);
  }, [messages, hskLevel]);
  
  const clearHistory = () => {
    setMessages([]);
    if (guestId) {
      try {
        const historyKey = `hskTutor_users_${guestId}_history_${hskLevel}`;
        localStorage.setItem(historyKey, JSON.stringify({
          messages: [],
          lastUpdated: new Date().toISOString()
        }));
        
        setProgressPercentage(0);
        const progressKey = `hskTutor_users_${guestId}_progress_${hskLevel}`;
        localStorage.setItem(progressKey, JSON.stringify({
          hskLevel,
          percentage: 0,
          lastUpdated: new Date().toISOString()
        }));
      } catch (err) {
        console.error("Error clearing history in localStorage:", err);
      }
    }
  };

  useEffect(() => {
    if (!guestId || !isLoaded) return;
    
    const savePrefs = () => {
      try {
        const storageKey = `hskTutor_users_${guestId}`;
        const existingData = localStorage.getItem(storageKey);
        const data = existingData ? JSON.parse(existingData) : {};
        localStorage.setItem(storageKey, JSON.stringify({
          ...data,
          config: { speakingRate, voiceId, autoPlay }
        }));
      } catch (err) {
        console.error("Error saving preferences:", err);
      }
    };
    
    const timeoutId = setTimeout(savePrefs, 1000);
    return () => clearTimeout(timeoutId);
  }, [speakingRate, voiceId, autoPlay, guestId, isLoaded]);

  const handleBackToMenu = () => {
    setCurrentView('menu');
    setActiveScenario(null);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-surface-secondary flex items-center justify-center">
        <div className="text-red-600">
          <Loader2 size={40} />
        </div>
      </div>
    );
  }

  // Handle Logged Out State
  if (isHomeView) {
    return (
      <div className="min-h-screen bg-surface-primary flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="flex flex-col items-center">
            <div className="bg-accent-primary w-20 h-20 rounded-3xl text-white flex items-center justify-center shadow-2xl mb-6">
              <MandarinLogo size={40} />
            </div>
            <h1 className="text-5xl font-black text-text-primary tracking-tighter mb-4">
              HSK Tutor <span className="text-accent-primary">AI</span>
            </h1>
            <p className="text-xl text-text-secondary font-medium max-w-lg mx-auto leading-relaxed">
              Experience the scholar-level Mandarin learning platform powered by advanced AI. 
              Master tones, vocab, and conversation in real-time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-surface-sunken w-full max-w-xs transition-all hover:shadow-md">
              <Sparkles className="text-amber-500 mb-2 mx-auto" size={24} />
              <h3 className="font-bold text-text-primary">Keyless Mastery</h3>
              <p className="text-xs text-text-tertiary">Access our sandbox environments instantly and securely.</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-surface-sunken w-full max-w-xs transition-all hover:shadow-md">
              <Mic className="text-accent-primary mb-2 mx-auto" size={24} />
              <h3 className="font-bold text-text-primary">Voice-First AI</h3>
              <p className="text-xs text-text-tertiary">Practice speaking with low-latency AI response and tone feedback.</p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button 
              onClick={() => setIsHomeView(false)}
              className="px-10 py-4 text-lg font-bold text-white bg-[#1260CC] hover:bg-[#0f50b0] rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Main App Logic ---
  const renderView = () => {
    return (
      <div className="min-h-screen">
        {currentView === 'vocabulary' && <VocabularyView userId={guestId} onBack={handleBackToMenu} />}
        {currentView === 'progress' && <ProgressView userId={guestId} userRole={userRole} onBack={handleBackToMenu} />}
        {currentView === 'quiz' && <QuizView userId={guestId} onBack={handleBackToMenu} />}
        {currentView === 'translation' && <TranslationView onBack={handleBackToMenu} />}
        {currentView === 'flashcards' && <FlashcardsView onBack={handleBackToMenu} />}
        {currentView === 'profile' && <ProfileView userId={guestId} onBack={handleBackToMenu} />}
        {currentView === 'curriculum' && <CurriculumView hskLevel={hskLevel} onBack={handleBackToMenu} onStartLesson={(lesson) => { setSelectedLesson(lesson); setCurrentView('lesson'); }} />}
        {currentView === 'scenarios' && (
          <ScenarioLibraryView 
            onBack={handleBackToMenu} 
            onSelectScenario={(s) => {
              setActiveScenario(s);
              setCurrentView('ai-tutor');
            }} 
          />
        )}
        {currentView === 'ai-tutor' && (
          <AITutorView 
            userId={guestId} 
            hskLevel={hskLevel} 
            onHskLevelChange={setHskLevel} 
            onBack={handleBackToMenu}
            speakingRate={speakingRate}
            voiceId={voiceId}
            autoPlay={autoPlay}
            scenario={activeScenario}
          />
        )}
        {currentView === 'session-history' && <SessionHistoryView userId={guestId} onBack={handleBackToMenu} />}
        {currentView === 'vocabulary-mastery' && <VocabularyMasteryView userId={guestId} onBack={handleBackToMenu} />}
        {currentView === 'writing' && <CharacterWritingView onBack={handleBackToMenu} />}
        {currentView === 'reading' && <ReadingView onBack={handleBackToMenu} hskLevel={hskLevel} />}
        {currentView === 'pinyin-chart' && <PinyinChartView onBack={handleBackToMenu} />}
        {currentView === 'grammar' && (
          <div className="min-h-screen bg-surface-primary flex flex-col">
            <header className="bg-white border-b border-surface-sunken py-4 px-6 shadow-sm sticky top-0 z-40">
              <div className="max-w-4xl mx-auto flex items-center gap-4">
                <button onClick={handleBackToMenu} className="p-2 -ml-2 text-text-tertiary hover:text-text-primary hover:bg-surface-sunken rounded-full transition-colors" title="Back to menu"><ArrowLeft size={24} /></button>
                <h1 className="text-lg font-bold text-text-primary tracking-tight">Grammar Guide</h1>
              </div>
            </header>
            <main className="flex-1 max-w-4xl w-full mx-auto p-6">
              <div className="bg-white rounded-3xl shadow-sm border border-surface-sunken overflow-hidden h-[calc(100vh-120px)]">
                <GrammarView level={hskLevel} onLevelChange={setHskLevel} />
              </div>
            </main>
          </div>
        )}
        {currentView === 'sentence-builder' && <SentenceBuilderView userId={guestId} onBack={handleBackToMenu} />}
        {currentView === 'lesson' && <PronunciationTutor hskLevel={hskLevel} onBack={handleBackToMenu} />}
        {currentView === 'menu' && renderMenu()}
      </div>
    );
  };

  const renderMenu = () => {
    const sessionsCompleted = messages.filter(m => m.role === 'model').length;
    const quizzesCompleted = Math.max(1, Math.round(progressPercentage / 10));
    const wordsInLevel: Record<string, number> = { 'HSK 1': 150, 'HSK 2': 300, 'HSK 3': 600, 'HSK 4': 1200, 'HSK 5': 2500, 'HSK 6': 5000 };
    const wordsMastered = Math.round((wordsInLevel[hskLevel] ?? 150) * progressPercentage / 100);

    const chartW = 580, chartH = 160, pad = 28;
    const chartLine1 = [20, 38, 28, 55, 42, 65, 45, 72, 58, 80];
    const chartLine2 = [32, 25, 44, 32, 58, 48, 62, 44, 68, 60];
    const toSvgPts = (pts: number[]) =>
      pts.map((v, i) => {
        const x = pad + (i / (pts.length - 1)) * (chartW - pad * 2);
        const y = chartH - pad - (v / 100) * (chartH - pad * 2);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      }).join(' ');

    const sideNavItems: { label: string; icon: React.ElementType; view: ViewState }[] = [
      { label: 'Vocabulary', icon: BookOpen, view: 'vocabulary' },
      { label: 'AI Scholar', icon: MessageSquare, view: 'ai-tutor' },
      { label: 'Quick Practice', icon: Mic, view: 'lesson' },
      { label: 'Quiz', icon: HelpCircle, view: 'quiz' },
      { label: 'Writing', icon: Pencil, view: 'writing' },
      { label: 'Grammar', icon: Languages, view: 'grammar' },
      { label: 'Reading', icon: BookOpen, view: 'reading' },
      { label: 'Flashcards', icon: RefreshCw, view: 'flashcards' },
      { label: 'Situations', icon: Sparkles, view: 'scenarios' },
      { label: 'Mastery', icon: Trophy, view: 'vocabulary-mastery' },
      { label: 'History', icon: Activity, view: 'session-history' },
      { label: 'Progress', icon: ChevronRight, view: 'progress' },
    ];

    const modules: { title: string; progress: number; total: string; view: ViewState }[] = [
      { title: 'Vocabulary & Reading', progress: Math.min(100, progressPercentage + 15), total: '7/8', view: 'vocabulary' },
      { title: 'Grammar & Structure', progress: Math.max(10, progressPercentage - 10), total: '4/10', view: 'grammar' },
      { title: 'Pronunciation & Tones', progress: Math.max(5, progressPercentage - 25), total: '3/10', view: 'lesson' },
    ];

    const streakCount = Math.min(7, Math.max(0, Math.floor(progressPercentage / 15)));
    const streakDays = Array.from({ length: 7 }, (_, i) => i < streakCount);

    const todayItems = [
      { time: '06:30 pm', title: 'Vocabulary Review', sub: `${hskLevel} – Core Words` },
      { time: '08:00 pm', title: 'AI Conversation', sub: 'Speaking Practice' },
    ];

    const upcomingEvents = [
      { title: '3-Day Vocabulary Sprint', instructor: 'AI Tutor' },
      { title: 'Pronunciation Drills', instructor: 'AI Tutor' },
      { title: '7-Day Grammar BootCamp', instructor: 'AI Tutor' },
      { title: 'Character Writing', instructor: 'AI Tutor' },
    ];

    const overallBars = [
      { label: 'Assessments', pct: Math.min(100, progressPercentage + 20), color: '#4CAF50' },
      { label: 'Courses', pct: progressPercentage, color: '#2196F3' },
      { label: 'Quizzes', pct: Math.max(5, progressPercentage - 15), color: '#F44336' },
    ];

    const scheduleSlots = ['06:00 pm', '06:30 pm', '07:00 pm', '07:30 pm', '08:00 pm', '08:30 pm', '09:00 pm', '09:30 pm'];

    return (
      <div className="flex h-screen overflow-hidden bg-white text-[#464255]">
        {/* ── SIDEBAR ── */}
        <aside className="w-[225px] bg-white border-r border-[#CCCCCC] flex flex-col shrink-0 overflow-y-auto">
          <div className="h-[100px] border-b border-[#C0C0C0] flex items-center px-5 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#1260CC] rounded-xl flex items-center justify-center shadow-sm">
                <MandarinLogo size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg text-[#464255] tracking-tight">
                HSK<span className="text-[#1260CC]">Tutor</span>
              </span>
            </div>
          </div>
          <nav className="flex-1 py-2">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1260CC] rounded-r-full" />
              <div className="flex items-center gap-3 pl-5 pr-4 py-3 text-[#1260CC] bg-[#1260CC]/5 font-semibold text-[15px]">
                <Activity size={17} />
                <span>Dashboard</span>
              </div>
            </div>
            {sideNavItems.map(({ label, icon: Icon, view }) => (
              <button
                key={view}
                onClick={() => setCurrentView(view)}
                className="w-full flex items-center gap-3 pl-5 pr-4 py-[10px] text-[#606060] hover:bg-gray-50 hover:text-[#464255] transition-colors text-[15px] text-left"
              >
                <Icon size={17} className="shrink-0" />
                <span>{label}</span>
              </button>
            ))}
            <div className="mx-5 my-2 border-t border-[#EFEFEF]" />
            <button
              onClick={() => setCurrentView('profile')}
              className="w-full flex items-center gap-3 pl-5 pr-4 py-[10px] text-[#606060] hover:bg-gray-50 hover:text-[#464255] transition-colors text-[15px]"
            >
              <Shield size={17} />
              <span>Settings</span>
            </button>
            <button
              onClick={() => setIsPreferencesOpen(true)}
              className="w-full flex items-center gap-3 pl-5 pr-4 py-[10px] text-[#606060] hover:bg-gray-50 hover:text-[#464255] transition-colors text-[15px]"
            >
              <HelpCircle size={17} />
              <span>Help Center</span>
            </button>
            <button className="w-full flex items-center gap-3 pl-5 pr-4 py-[10px] text-[#606060] hover:bg-gray-50 hover:text-[#464255] transition-colors text-[15px]">
              <AlertCircle size={17} />
              <span>Report a Problem</span>
            </button>
          </nav>
          <div className="p-4 shrink-0">
            <div className="bg-[#EEF4FF] rounded-2xl p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <div className="w-6 h-6 bg-[#1260CC] rounded-md flex items-center justify-center">
                  <MandarinLogo size={12} className="text-white" />
                </div>
                <span className="text-xs font-bold text-[#1260CC]">Free Plan</span>
              </div>
              <p className="text-[11px] text-[#848484] mb-3 leading-snug">Unlock unlimited AI, practice sessions and more</p>
              <button className="w-full bg-[#1260CC] text-white text-[12px] font-bold py-2 rounded-xl hover:bg-[#0f50b0] transition-colors">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </aside>

        {/* ── MAIN AREA ── */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* ── NAVBAR ── */}
          <header className="h-[100px] bg-white border-b border-[#C0C0C0] flex items-center px-7 gap-5 shrink-0">
            <div className="flex-1 max-w-[480px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-[52px] pl-10 pr-4 bg-white border border-[#AFAFAF] rounded-[10px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.1)] text-[15px] text-[#464255] placeholder-[#8D8D8D] outline-none focus:border-[#1260CC] transition-colors"
                />
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8D8D8D]" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <HskDropdown value={hskLevel} onChange={setHskLevel} />
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 rounded-xl border border-amber-100">
                <span className="text-[15px]">🪙</span>
                <span className="font-medium text-[14px] text-[#464255]">{(sessionsCompleted * 250 + 1000).toLocaleString()}</span>
              </div>
              <button className="w-10 h-10 flex items-center justify-center text-[#606060] hover:text-[#464255] hover:bg-gray-100 rounded-full transition-colors">
                <MessageSquare size={20} />
              </button>
              <button
                onClick={() => setIsPreferencesOpen(true)}
                className="w-10 h-10 flex items-center justify-center text-[#606060] hover:text-[#464255] hover:bg-gray-100 rounded-full transition-colors"
              >
                <HelpCircle size={20} />
              </button>
              <div className="h-[52px] w-px bg-[#C0C0C0]" />
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="font-medium text-[15px] text-[#464255] leading-tight">Guest Scholar</p>
                  <p className="text-[11px] text-[#848484]">Beginner</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1260CC]/10 flex items-center justify-center">
                  <User size={20} className="text-[#1260CC]" />
                </div>
              </div>
            </div>
          </header>

          {/* ── CONTENT ROW ── */}
          <div className="flex flex-1 overflow-hidden">
            {/* ── MAIN CONTENT ── */}
            <main className="flex-1 overflow-y-auto p-6 space-y-5 bg-white">
              {/* HERO BANNER */}
              <div className="relative bg-[#D6E4F7] rounded-[20px] p-7 overflow-hidden flex items-center justify-between" style={{ minHeight: 140 }}>
                <div className="relative z-10">
                  <h2 className="text-[22px] font-bold text-[#464255] mb-1">
                    Welcome Scholar!
                  </h2>
                  <p className="text-[#606060] text-[14px] mb-4 max-w-[340px] leading-relaxed">
                    Ready to dive into your Mandarin journey with HSK Tutor?
                  </p>
                  <button
                    onClick={() => setCurrentView('curriculum')}
                    className="bg-[#1260CC] text-white text-[13px] font-semibold px-5 py-2.5 rounded-md hover:bg-[#0f50b0] transition-colors"
                  >
                    Let&apos;s Go
                  </button>
                </div>
                <div className="absolute right-10 bottom-0 text-[90px] select-none leading-none pointer-events-none">🎓</div>
                <div className="absolute top-[-30px] right-[200px] w-[130px] h-[130px] rounded-full bg-[#1260CC]/10 pointer-events-none" />
                <div className="absolute top-[20px] right-[120px] w-[90px] h-[90px] rounded-full bg-[#1260CC]/5 pointer-events-none" />
              </div>

              {/* STATS ROW */}
              <div className="grid grid-cols-3 overflow-hidden border border-[#CCCCCC]">
                {[
                  { value: sessionsCompleted || 7, label: 'Sessions Completed' },
                  { value: quizzesCompleted || 7, label: 'Quizzes Completed' },
                  { value: wordsMastered || 7, label: 'Words Mastered' },
                ].map((stat, i) => (
                  <div key={stat.label} className={`flex items-center gap-4 px-7 py-5 bg-white${i < 2 ? ' border-r border-[#CCCCCC]' : ''}`}>
                    <span className="text-[32px] font-medium text-[#464255] tabular-nums">
                      {String(stat.value).padStart(2, '0').slice(0, 4)}
                    </span>
                    <div className="w-px h-8 bg-[#DDDDDD] shrink-0" />
                    <span className="text-[15px] font-medium text-[#464255] leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* PROGRESS CHART */}
              <div className="border border-[#CCCCCC] rounded-[10px] p-5 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[17px] font-medium text-[#464255]">Progress Report</h3>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#EE4444]" />
                      <span className="text-[13px] text-[#A3A3A3]" style={{ fontFamily: 'Barlow, sans-serif' }}>Total Visits</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#44AA44]" />
                      <span className="text-[13px] text-[#A3A3A3]" style={{ fontFamily: 'Barlow, sans-serif' }}>Session Duration</span>
                    </div>
                  </div>
                </div>
                <svg width="100%" height="160" viewBox={`0 0 ${chartW} ${chartH}`} preserveAspectRatio="xMidYMid meet">
                  {[20, 40, 60, 80, 100].map(v => {
                    const y = chartH - pad - (v / 100) * (chartH - pad * 2);
                    return (
                      <g key={v}>
                        <line x1={pad + 18} y1={y} x2={chartW - pad / 2} y2={y} stroke="#ECEBEF" strokeWidth="1" />
                        <text x={pad - 4} y={y + 4} fontSize="9" fill="#B9BBBD" textAnchor="end">{v}</text>
                      </g>
                    );
                  })}
                  <polyline points={toSvgPts(chartLine1)} fill="none" stroke="#EE4444" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                  <polyline points={toSvgPts(chartLine2)} fill="none" stroke="#44AA44" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                  {chartLine1.map((v, i) => {
                    const x = pad + (i / (chartLine1.length - 1)) * (chartW - pad * 2);
                    const y = chartH - pad - (v / 100) * (chartH - pad * 2);
                    return <circle key={i} cx={x} cy={y} r="3.5" fill="white" stroke="#EE4444" strokeWidth="1.5" />;
                  })}
                  {chartLine2.map((v, i) => {
                    const x = pad + (i / (chartLine2.length - 1)) * (chartW - pad * 2);
                    const y = chartH - pad - (v / 100) * (chartH - pad * 2);
                    return <circle key={i} cx={x} cy={y} r="3.5" fill="white" stroke="#44AA44" strokeWidth="1.5" />;
                  })}
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'].map((d, i) => {
                    const x = pad + (i / (chartLine1.length - 1)) * (chartW - pad * 2);
                    return <text key={i} x={x} y={chartH - 4} textAnchor="middle" fontSize="9" fill="#B9BBBD">{d}</text>;
                  })}
                </svg>
              </div>

              {/* ONGOING MODULES */}
              <div className="border border-[#CCCCCC] rounded-[10px] overflow-hidden bg-white">
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#CCCCCC]">
                  <h3 className="text-[17px] font-medium text-[#464255]">Ongoing Modules</h3>
                  <button
                    onClick={() => setCurrentView('curriculum')}
                    className="text-[13px] text-[#A3A3A3] hover:text-[#1260CC] transition-colors"
                    style={{ fontFamily: 'Barlow, sans-serif' }}
                  >
                    View All
                  </button>
                </div>
                {modules.map((mod, idx) => (
                  <div key={mod.title} className={`flex items-center gap-5 px-5 py-4 bg-white${idx < modules.length - 1 ? ' border-b border-[#CCCCCC]' : ''}`}>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[16px] text-[#464255]">{mod.title}</p>
                      <p className="text-[13px] text-[#848484] mt-0.5">AI Tutor</p>
                    </div>
                    <div className="shrink-0 text-right w-[90px]">
                      <p className="text-[12px] text-[#848484]">Duration</p>
                      <p className="font-medium text-[13px] text-[#0F0F0F]">~30 mins</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-semibold text-[14px] text-[#464255] w-9 text-right">{mod.progress}%</span>
                      <div className="relative bg-[#D9D9D9] rounded-full h-3 w-[140px]">
                        <div className="absolute left-0 top-0 h-3 rounded-full bg-[#1260CC]" style={{ width: `${mod.progress}%` }} />
                      </div>
                      <span className="font-semibold text-[13px] text-[#464255] w-8">{mod.total}</span>
                    </div>
                    <button
                      onClick={() => setCurrentView(mod.view)}
                      className="bg-[#212121] text-white rounded-[5px] px-4 py-1.5 text-[13px] font-medium hover:bg-[#3A3A3A] transition-colors shrink-0"
                    >
                      Continue
                    </button>
                  </div>
                ))}
              </div>

              {/* BOTTOM ROW */}
              <div className="grid grid-cols-3 gap-5 pb-4">
                {/* Leaderboard */}
                <div className="border border-[#CCCCCC] rounded-[10px] p-5 bg-white">
                  <h3 className="text-[16px] font-medium text-[#464255] mb-4">Leaderboard</h3>
                  <div className="flex items-end justify-center gap-4 mb-5">
                    {[
                      { pos: '2nd', bg: 'bg-purple-100', sz: 60 },
                      { pos: '1st', bg: 'bg-amber-50', sz: 76, crown: true },
                      { pos: '3rd', bg: 'bg-green-100', sz: 60 },
                    ].map(({ pos, bg, sz, crown }) => (
                      <div key={pos} className="flex flex-col items-center gap-1">
                        <div className={`relative ${bg} rounded-full flex items-center justify-center`} style={{ width: sz, height: sz }}>
                          <User size={sz / 2.5} className="text-gray-400" />
                          {crown && <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[16px]">👑</span>}
                        </div>
                        <span className="text-[11px] font-semibold text-[#464255]">{pos}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="grid grid-cols-[36px_1fr_68px] bg-[#F1F1F1] px-3 py-2 text-[11px] font-medium text-[#464255] rounded-sm">
                      <span>Rank</span><span>Username</span><span className="text-right">Points</span>
                    </div>
                    {[
                      { rank: '1st', name: 'You', pts: (sessionsCompleted * 250 + 1000) },
                      { rank: '2nd', name: 'Haris K.', pts: 9350 },
                      { rank: '3rd', name: 'Abeeha R.', pts: 7200 },
                      { rank: '4th', name: 'Adil H.', pts: 5400 },
                    ].map(row => (
                      <div key={row.rank} className="grid grid-cols-[36px_1fr_68px] px-3 py-2 text-[11px] text-[#464255] border-b border-[#F1F1F1]">
                        <span className="font-medium">{row.rank}</span>
                        <span>{row.name}</span>
                        <span className="text-right">{row.pts.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Overall Progress */}
                <div className="border border-[#CCCCCC] rounded-[10px] p-5 bg-white">
                  <h3 className="text-[16px] font-medium text-[#464255] mb-4">Overall Progress</h3>
                  <div className="flex justify-center mb-4">
                    <div className="relative w-[100px] h-[100px]">
                      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                        <circle cx="60" cy="60" r="45" fill="none" stroke="#E8E8E8" strokeWidth="13" />
                        <circle
                          cx="60" cy="60" r="45" fill="none" stroke="#1260CC" strokeWidth="13"
                          strokeDasharray={`${(progressPercentage / 100) * 282.74} 282.74`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[16px] font-semibold text-[#464255]">{progressPercentage}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {overallBars.map(b => (
                      <div key={b.label}>
                        <div className="flex justify-between text-[12px] mb-1">
                          <span className="text-[#464255] font-medium">{b.label}</span>
                          <span className="font-semibold text-[#464255]">{b.pct}%</span>
                        </div>
                        <div className="relative bg-[#D9D9D9] rounded-full h-2.5">
                          <div className="absolute left-0 top-0 h-2.5 rounded-full transition-all" style={{ width: `${b.pct}%`, backgroundColor: b.color }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore More */}
                <div className="border border-[#CCCCCC] rounded-[10px] p-5 bg-white flex flex-col items-center justify-center text-center">
                  <div className="text-[64px] mb-4 select-none leading-none">📚</div>
                  <button
                    onClick={() => setCurrentView('scenarios')}
                    className="bg-[#212121] text-white px-6 py-2.5 rounded-[6px] text-[13px] font-medium hover:bg-[#3A3A3A] transition-colors"
                  >
                    Explore More Courses
                  </button>
                </div>
              </div>
            </main>

            {/* ── RIGHT PANEL ── */}
            <aside className="w-[300px] border-l border-[#CCCCCC] bg-white flex flex-col overflow-y-auto shrink-0 p-5 gap-6">
              {/* Daily Streak */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[15px] font-medium text-[#464255]">Daily Streak</h3>
                  <span className="text-[13px] font-semibold text-[#464255]">{streakCount}/7</span>
                </div>
                <div className="flex gap-1.5">
                  {streakDays.map((done, i) =>
                    done
                      ? <div key={i} className="w-9 h-9 rounded-full bg-[#1260CC]/10 flex items-center justify-center text-[16px]">⚡</div>
                      : <div key={i} className="w-9 h-9 rounded-full border-2 border-[#D9D9D9]" />
                  )}
                </div>
              </div>

              {/* Today's Schedule */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-[12px] text-[#A3A3A3]">Today</p>
                    <p className="font-semibold text-[16px] text-[#464255]">
                      {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                  <button className="p-1.5 text-[#606060] hover:bg-gray-100 rounded-lg transition-colors">
                    <CheckCircle2 size={18} />
                  </button>
                </div>
                <div>
                  {scheduleSlots.map(time => {
                    const ev = todayItems.find(s => s.time === time);
                    return (
                      <div key={time} className="flex gap-3 items-start min-h-[38px]">
                        <span className="text-[11px] text-[#A3A3A3] w-[58px] shrink-0 pt-1.5">{time}</span>
                        <div className="flex-1 border-t border-[#F0F0F0] pt-1">
                          {ev && (
                            <div className="bg-white border border-[#D9D9D9] rounded-[8px] px-3 py-1.5 mb-1">
                              <p className="text-[11px] font-medium text-[#464255]">{ev.title}</p>
                              <p className="text-[9px] text-[#A3A3A3]">{ev.sub}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[15px] font-medium text-[#464255]">Upcoming Sessions</h3>
                  <button className="text-[12px] text-[#A3A3A3] hover:text-[#1260CC] transition-colors" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    View All
                  </button>
                </div>
                <div className="space-y-2">
                  {upcomingEvents.map(ev => (
                    <div key={ev.title} className="flex items-center justify-between bg-white border border-[#CCCCCC] rounded-[8px] px-3 py-2.5">
                      <div>
                        <p className="text-[12px] font-semibold text-[#464255]">{ev.title}</p>
                        <p className="text-[10px] text-[#848484]">{ev.instructor}</p>
                      </div>
                      <button className="text-[#A3A3A3] text-[18px] leading-none">⋯</button>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        <PreferencesPanel
          isOpen={isPreferencesOpen}
          onClose={() => setIsPreferencesOpen(false)}
          speakingRate={speakingRate}
          setSpeakingRate={setSpeakingRate}
          voiceId={voiceId}
          setVoiceId={setVoiceId}
          autoPlay={autoPlay}
          setAutoPlay={setAutoPlay}
        />
      </div>
    );
  };


  return renderView();
}
