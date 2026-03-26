'use client';

import React, { useState, useEffect, useRef } from 'react';
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
import { authClient } from '@/lib/auth-client';
import Header from '@/src/components/Header';
import Link from 'next/link';
import Button from '@/src/components/ui/Button';

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
  const { data: session, isPending } = authClient.useSession();
  const [guestId, setGuestId] = useState<string>('guest_user');
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
  const [autoPlay, setAutoPlay] = useState(true);
  const [voiceId, setVoiceId] = useState('zh-CN-Standard-A');
  const [speakingRate, setSpeakingRate] = useState(1.0);
  const [isLoaded, setIsLoaded] = useState(true);
  
  const userId = session?.user?.id || guestId;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      // Local storage persistence for quest
      const storageKey = `hskTutor_users_${userId}`;
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
          uid: userId,
          email: session?.user?.email || 'guest@hsk-tutor.ai',
          name: session?.user?.name || 'Scholar',
          role: role,
          config: { speakingRate: 1.0, voiceId: 'zh-CN-Standard-A', autoPlay: true },
          createdAt: new Date().toISOString()
        }));
      }
  }, [userId, session]);

  useEffect(() => {
    const loadData = () => {
      try {
        const historyKey = `hskTutor_users_${userId}_history_${hskLevel}`;
        const historyData = localStorage.getItem(historyKey);
        setMessages(historyData ? JSON.parse(historyData).messages || [] : []);

        const progressKey = `hskTutor_users_${userId}_progress_${hskLevel}`;
        const progressData = localStorage.getItem(progressKey);
        setProgressPercentage(progressData ? JSON.parse(progressData).percentage || 0 : 0);
      } catch (err) {
        console.error("Error loading user data from localStorage:", err);
      }
    };

    loadData();
  }, [hskLevel, userId]);

  useEffect(() => {
    if (!userId || messages.length === 0) return;

    const saveData = () => {
      try {
        const historyKey = `hskTutor_users_${userId}_history_${hskLevel}`;
        localStorage.setItem(historyKey, JSON.stringify({
          messages,
          lastUpdated: new Date().toISOString()
        }));

        const newProgress = Math.min(100, messages.length * 5);
        if (newProgress !== progressPercentage) {
          setProgressPercentage(newProgress);
          const progressKey = `hskTutor_users_${userId}_progress_${hskLevel}`;
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
    try {
      const historyKey = `hskTutor_users_${userId}_history_${hskLevel}`;
      localStorage.setItem(historyKey, JSON.stringify({
        messages: [],
        lastUpdated: new Date().toISOString()
      }));
      
      setProgressPercentage(0);
      const progressKey = `hskTutor_users_${userId}_progress_${hskLevel}`;
      localStorage.setItem(progressKey, JSON.stringify({
        hskLevel,
        percentage: 0,
        lastUpdated: new Date().toISOString()
      }));
    } catch (err) {
      console.error("Error clearing history in localStorage:", err);
    }
  };

  useEffect(() => {
    const savePrefs = () => {
      try {
        const storageKey = `hskTutor_users_${userId}`;
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
  }, [speakingRate, voiceId, autoPlay, userId]);

  const handleBackToMenu = () => {
    setCurrentView('menu');
    setActiveScenario(null);
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-500 w-10 h-10" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/black-linen-2.png')]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full text-center space-y-10"
        >
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[32px] flex items-center justify-center shadow-2xl mb-8 border border-white/20">
              <MandarinLogo size={48} className="text-white" />
            </div>
            <h1 className="text-6xl font-black text-white tracking-tighter mb-4">
              HSK Tutor <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed">
              Step into the future of Mandarin learning. Specialized scholar tools powered by native AI authentication.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-left">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="text-blue-400" size={20} />
              </div>
              <h3 className="font-bold text-white mb-1">Native Auth</h3>
              <p className="text-sm text-gray-500 leading-snug">Secure session management built for the open web.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-left">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="text-cyan-400" size={20} />
              </div>
              <h3 className="font-bold text-white mb-1">Scholar History</h3>
              <p className="text-sm text-gray-500 leading-snug">Every conversation, quiz, and level-up synced to your profile.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link href="/sign-up" className="w-full sm:w-auto">
              <Button size="xl" variant="accent" className="w-full sm:w-48 py-7 text-lg font-bold rounded-2xl shadow-xl shadow-blue-500/20">
                Join the Cohort
              </Button>
            </Link>
            <Link href="/sign-in" className="w-full sm:w-auto">
              <Button size="xl" variant="secondary" className="w-full sm:w-48 py-7 text-lg font-bold rounded-2xl border border-white/10">
                Log In
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // --- Dashboard Logic ---
  const renderView = () => {
    return (
      <div className="min-h-screen">
        {currentView === 'vocabulary' && <VocabularyView userId={userId} onBack={handleBackToMenu} />}
        {currentView === 'progress' && <ProgressView userId={userId} userRole={userRole} onBack={handleBackToMenu} />}
        {currentView === 'quiz' && <QuizView userId={userId} onBack={handleBackToMenu} />}
        {currentView === 'translation' && <TranslationView onBack={handleBackToMenu} />}
        {currentView === 'flashcards' && <FlashcardsView onBack={handleBackToMenu} />}
        {currentView === 'profile' && <ProfileView userId={userId} onBack={handleBackToMenu} />}
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
            userId={userId} 
            hskLevel={hskLevel} 
            onHskLevelChange={setHskLevel} 
            onBack={handleBackToMenu}
            speakingRate={speakingRate}
            voiceId={voiceId}
            autoPlay={autoPlay}
            scenario={activeScenario}
          />
        )}
        {currentView === 'session-history' && <SessionHistoryView userId={userId} onBack={handleBackToMenu} />}
        {currentView === 'vocabulary-mastery' && <VocabularyMasteryView userId={userId} onBack={handleBackToMenu} />}
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
        {currentView === 'sentence-builder' && <SentenceBuilderView userId={userId} onBack={handleBackToMenu} />}
        {currentView === 'lesson' && <PronunciationTutor hskLevel={hskLevel} onBack={handleBackToMenu} />}
        {currentView === 'menu' && renderMenu()}
      </div>
    );
  };

  const renderMenu = () => {
    const sessionsCompleted = messages.filter(m => m.role === 'model').length;
    const items: { label: string; icon: any; view: ViewState; color: string }[] = [
      { label: 'AI Tutor', icon: MessageSquare, view: 'ai-tutor', color: 'bg-blue-500' },
      { label: 'Vocabulary', icon: BookOpen, view: 'vocabulary', color: 'bg-cyan-500' },
      { label: 'Character Writing', icon: Pencil, view: 'writing', color: 'bg-emerald-500' },
      { label: 'Quizzes', icon: HelpCircle, view: 'quiz', color: 'bg-amber-500' },
      { label: 'Grammar', icon: Languages, view: 'grammar', color: 'bg-indigo-500' },
      { label: 'Reading', icon: BookOpen, view: 'reading', color: 'bg-purple-500' },
      { label: 'Flashcards', icon: RefreshCw, view: 'flashcards', color: 'bg-rose-500' },
      { label: 'Situation Lab', icon: Sparkles, view: 'scenarios', color: 'bg-violet-500' },
    ];

    return (
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Hero Card */}
          <div className="lg:col-span-2 row-span-2 p-8 bg-blue-600 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 transform group-hover:scale-110 transition-transform duration-500">
              <MandarinLogo size={120} className="opacity-20" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-black mb-4 tracking-tighter">Ready for scholar-level practice?</h2>
                <p className="text-blue-100 text-lg max-w-sm mb-8">Your specialized Mandarin training environment is powered up and ready for session #{messages.length + 1}.</p>
              </div>
              <Button 
                onClick={() => setCurrentView('ai-tutor')}
                size="xl" 
                variant="accent" 
                className="w-full bg-white text-blue-600 hover:bg-blue-50 py-6 text-lg font-bold rounded-2xl"
              >
                Start AI Session
              </Button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="p-8 bg-white border border-[#eaeaea] rounded-[40px] shadow-sm flex flex-col justify-between">
            <div>
              <Activity className="text-blue-600 mb-4" size={32} />
              <h3 className="text-3xl font-black text-gray-900">{progressPercentage}%</h3>
              <p className="text-gray-500 font-medium">HSK 1 Mastery</p>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600" style={{ width: `${progressPercentage}%` }} />
            </div>
          </div>

          <div className="p-8 bg-white border border-[#eaeaea] rounded-[40px] shadow-sm flex flex-col justify-between">
            <div>
              <Trophy className="text-amber-500 mb-4" size={32} />
              <h3 className="text-3xl font-black text-gray-900">Level 1</h3>
              <p className="text-gray-500 font-medium">Scholar Status</p>
            </div>
          </div>

          {/* Tool Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            {items.map((item) => (
              <motion.button
                key={item.view}
                onClick={() => setCurrentView(item.view)}
                whileHover={{ y: -5 }}
                className="p-6 bg-white border border-[#eaeaea] rounded-[40px] shadow-sm hover:shadow-xl transition-all text-left group"
              >
                <div className={`${item.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={22} />
                </div>
                <h4 className="font-bold text-gray-900 border-b border-transparent group-hover:border-blue-500 pb-1 inline-block transition-all">{item.label}</h4>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a]">
      <Header />
      {renderView()}
      
      {isPreferencesOpen && (
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
      )}
    </div>
  );
}
