import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, Mic, MessageSquare, RefreshCw, HelpCircle, Languages, 
  Pencil, Volume2, Activity, Sparkles, Trophy, ChevronRight,
  GraduationCap, Target, Flame
} from 'lucide-react';
import { Button, Card, CardContent, ProgressRing, ProgressBar } from '../ui';

interface HomeViewProps {
  hskLevel: string;
  progressPercentage: number;
  onNavigate: (view: string) => void;
  userName?: string;
}

const features = [
  {
    id: 'curriculum',
    title: 'Learning Path',
    description: 'Structured lessons for your level',
    icon: BookOpen,
    color: 'bg-stone-900',
    accentColor: 'text-stone-900',
    size: 'large',
  },
  {
    id: 'lesson',
    title: 'Quick Practice',
    description: 'Jump into AI conversation',
    icon: Mic,
    color: 'bg-red-600',
    accentColor: 'text-red-600',
    size: 'medium',
  },
  {
    id: 'ai-tutor',
    title: 'AI Tutor Chat',
    description: 'Ask grammar & culture questions',
    icon: MessageSquare,
    color: 'bg-indigo-600',
    accentColor: 'text-indigo-600',
    size: 'medium',
  },
  {
    id: 'flashcards',
    title: 'Flashcards',
    description: 'Review vocabulary',
    icon: RefreshCw,
    color: 'bg-amber-500',
    accentColor: 'text-amber-500',
    size: 'small',
  },
  {
    id: 'quiz',
    title: 'Vocab Quiz',
    description: 'Test your knowledge',
    icon: HelpCircle,
    color: 'bg-emerald-500',
    accentColor: 'text-emerald-500',
    size: 'small',
  },
  {
    id: 'sentence-builder',
    title: 'Sentence Builder',
    description: 'Master word order',
    icon: Languages,
    color: 'bg-purple-600',
    accentColor: 'text-purple-600',
    size: 'wide',
  },
  {
    id: 'writing',
    title: 'Writing',
    description: 'Stroke practice',
    icon: Pencil,
    color: 'bg-rose-500',
    accentColor: 'text-rose-500',
    size: 'small',
  },
  {
    id: 'reading',
    title: 'Reading',
    description: 'AI stories',
    icon: BookOpen,
    color: 'bg-teal-600',
    accentColor: 'text-teal-600',
    size: 'small',
  },
  {
    id: 'pinyin-chart',
    title: 'Pinyin Chart',
    description: 'Pronunciation guide',
    icon: Volume2,
    color: 'bg-blue-500',
    accentColor: 'text-blue-500',
    size: 'small',
  },
  {
    id: 'grammar',
    title: 'Grammar',
    description: 'Sentence structures',
    icon: Activity,
    color: 'bg-violet-600',
    accentColor: 'text-violet-600',
    size: 'small',
  },
];

export default function HomeView({ hskLevel, progressPercentage, onNavigate, userName }: HomeViewProps) {
  const greeting = getGreeting();
  
  return (
    <div className="min-h-screen bg-[var(--surface-primary)]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-primary)] via-[var(--surface-primary)] to-[var(--surface-secondary)]" />
        
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20"
              >
                <span className="text-white font-chinese text-2xl font-bold">中</span>
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">HSK Tutor</h1>
                <p className="text-sm text-[var(--text-tertiary)] font-medium">Master Mandarin</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate('progress')}
                leftIcon={<Trophy size={16} />}
              >
                Progress
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate('profile')}
                leftIcon={<GraduationCap size={16} />}
              >
                Profile
              </Button>
            </div>
          </div>
          
          {/* Welcome Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
              {greeting}{userName ? `, ${userName}` : ''}!
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Ready to continue your <span className="font-semibold text-red-600">{hskLevel}</span> journey?
            </p>
          </motion.div>
          
          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            <Card className="p-5 text-center">
              <div className="flex justify-center mb-3">
                <ProgressRing percentage={progressPercentage} size={80} strokeWidth={6} />
              </div>
              <p className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Progress</p>
            </Card>
            
            <Card className="p-5 text-center">
              <div className="w-14 h-14 mx-auto mb-3 bg-amber-100 rounded-2xl flex items-center justify-center">
                <Flame className="w-7 h-7 text-amber-500" />
              </div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">7</p>
              <p className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Day Streak</p>
            </Card>
            
            <Card className="p-5 text-center">
              <div className="w-14 h-14 mx-auto mb-3 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Target className="w-7 h-7 text-emerald-500" />
              </div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">150</p>
              <p className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Words Learned</p>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {/* Learning Path - Large */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('curriculum')}
            className="col-span-2 row-span-2 bg-stone-900 p-8 rounded-[2rem] shadow-xl shadow-stone-900/20 flex flex-col justify-between text-left hover:bg-stone-800 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <BookOpen size={120} />
            </div>
            <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4">
              <BookOpen size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Learning Path</h3>
              <p className="text-stone-300">Structured modules and lessons for {hskLevel}.</p>
            </div>
          </motion.button>
          
          {/* Quick Practice */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('lesson')}
            className="col-span-2 bg-red-600 p-6 rounded-[1.5rem] shadow-lg shadow-red-600/20 flex items-center gap-5 text-left hover:bg-red-700 transition-colors"
          >
            <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0">
              <Mic size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Quick Practice</h3>
              <p className="text-red-100 text-sm">Jump into AI conversation</p>
            </div>
          </motion.button>
          
          {/* AI Tutor */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('ai-tutor')}
            className="col-span-2 bg-indigo-600 p-6 rounded-[1.5rem] shadow-lg shadow-indigo-600/20 flex items-center gap-5 text-left hover:bg-indigo-700 transition-colors"
          >
            <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0">
              <MessageSquare size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">AI Tutor Chat</h3>
              <p className="text-indigo-100 text-sm">Ask grammar & culture questions</p>
            </div>
          </motion.button>
          
          {/* Flashcards */}
          <FeatureCard 
            feature={features.find(f => f.id === 'flashcards')!} 
            onClick={() => onNavigate('flashcards')} 
          />
          
          {/* Quiz */}
          <FeatureCard 
            feature={features.find(f => f.id === 'quiz')!} 
            onClick={() => onNavigate('quiz')} 
          />
          
          {/* Sentence Builder - Wide */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('sentence-builder')}
            className="col-span-2 bg-purple-600 p-6 rounded-[1.5rem] shadow-lg shadow-purple-600/20 flex items-center gap-5 text-left hover:bg-purple-700 transition-colors"
          >
            <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0">
              <Languages size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Sentence Builder</h3>
              <p className="text-purple-100 text-sm">Master Chinese word order and syntax</p>
            </div>
          </motion.button>
          
          {/* Writing */}
          <FeatureCard 
            feature={features.find(f => f.id === 'writing')!} 
            onClick={() => onNavigate('writing')} 
          />
          
          {/* Reading */}
          <FeatureCard 
            feature={features.find(f => f.id === 'reading')!} 
            onClick={() => onNavigate('reading')} 
          />
          
          {/* Pinyin */}
          <FeatureCard 
            feature={features.find(f => f.id === 'pinyin-chart')!} 
            onClick={() => onNavigate('pinyin-chart')} 
          />
          
          {/* Grammar */}
          <FeatureCard 
            feature={features.find(f => f.id === 'grammar')!} 
            onClick={() => onNavigate('grammar')} 
          />
          
          {/* Vocabulary List */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('vocabulary')}
            className="col-span-2 bg-gradient-to-r from-yellow-400 to-amber-400 p-6 rounded-[1.5rem] shadow-lg shadow-amber-400/20 flex items-center gap-5 text-left hover:from-yellow-500 hover:to-amber-500 transition-colors"
          >
            <div className="bg-black/10 w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
              <BookOpen size={28} className="text-stone-900" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900">Vocabulary List</h3>
              <p className="text-stone-800/70 text-sm">Browse all HSK words</p>
            </div>
            <ChevronRight size={20} className="ml-auto text-stone-900/50" />
          </motion.button>
        </motion.div>
        
        {/* Translator CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Card hover className="p-6 flex flex-col sm:flex-row items-center justify-between gap-6 group">
            <div className="flex items-center gap-4">
              <div className="bg-red-50 p-3 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Sparkles size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)]">Try our advanced translator</h4>
                <p className="text-sm text-[var(--text-secondary)]">Real-time AI translation with voice support</p>
              </div>
            </div>
            <Button 
              variant="accent"
              onClick={() => onNavigate('translation')}
              rightIcon={<ChevronRight size={16} />}
            >
              Open Translator
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ feature, onClick }: { feature: typeof features[0]; onClick: () => void }) {
  const Icon = feature.icon;
  
  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${feature.color} p-5 rounded-[1.25rem] shadow-lg ${feature.color}/20 flex flex-col justify-between text-left hover:opacity-90 transition-opacity h-full min-h-[140px]`}
    >
      <div className="bg-white/20 w-11 h-11 rounded-xl flex items-center justify-center text-white">
        <Icon size={22} />
      </div>
      <div>
        <h3 className="text-base font-bold text-white">{feature.title}</h3>
        <p className="text-white/70 text-xs mt-0.5">{feature.description}</p>
      </div>
    </motion.button>
  );
}

// Get time-based greeting
function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}