import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  ArrowLeft,
  ChevronLeft, 
  Settings, 
  RefreshCw, 
  MessageSquare, 
  BarChart3, 
  MoreVertical, 
  Languages, 
  BookOpen, 
  Mic, 
  Volume2, 
  AlertCircle, 
  Sparkles, 
  CheckCircle2,
  BrainCircuit,
  User,
  ExternalLink,
  ChevronRight,
  Bot,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import HskDropdown, { HSKLevel } from './HskDropdown';
import SessionReview from './SessionReview';
import TurnAnalysisPanel from './TurnAnalysisPanel';
import { db } from '../firebase';
import { Scenario } from '../data/scenarios';

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

type Props = {
  userId: string;
  hskLevel: string;
  onHskLevelChange: (level: HSKLevel) => void;
  onBack: () => void;
  speakingRate: number;
  voiceId: string;
  autoPlay: boolean;
  scenario?: Scenario | null;
};

export default function AITutorView({ 
  userId, 
  hskLevel, 
  onHskLevelChange, 
  onBack,
  speakingRate,
  voiceId,
  autoPlay,
  scenario
}: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [reviewContent, setReviewContent] = useState<string | null>(null);
  const [startTime] = useState(Date.now());
  const [selectedTurnText, setSelectedTurnText] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false); // Added new state
  const [turnAnalysis, setTurnAnalysis] = useState<string | null>(null);
  const [isReflecting, setIsReflecting] = useState(false); // Added new state
  const [smartHskEnabled, setSmartHskEnabled] = useState(false);
  const [isAnalyzingTurn, setIsAnalyzingTurn] = useState(false);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const speak = (text: string) => {
    if (!window.speechSynthesis) return;
    
    // Stop any existing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = speakingRate;
    
    // Find the selected voice
    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices.find(v => v.name.includes(voiceId) || v.voiceURI.includes(voiceId));
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  // Smart HSK feature is disabled - Firebase is not available

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize or Reset messages when scenario changes
    if (scenario) {
      setMessages([
        {
          id: 'scenario-start',
          role: 'model',
          text: scenario.startingMessage
        }
      ]);
      // Play initial message if autoPlay is on
      if (autoPlay) {
        setTimeout(() => speak(scenario.startingMessage), 500);
      }
    } else if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          role: 'model',
          text: "Hello! I'm your AI Chinese Tutor. You can ask me anything about HSK vocabulary, grammar points, or Chinese culture. How can I help you today?"
        }
      ]);
    }
  }, [scenario]);

  const handleFinishPractice = async () => {
    if (messages.length <= 1) {
      onBack();
      return;
    }

    setIsLoading(true);
    try {
      const history = messages.slice(-20).map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.text,
      }));

      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          feature: 'session-review',
          messages: history,
          userLevel: hskLevel,
        }),
      });

      if (!res.ok) throw new Error('Review failed');
      const data = await res.json();
      setReviewContent(data.content);
      setShowReview(true);

      // Extract duration and fluency for Story 4.2
      const durationSeconds = Math.floor((Date.now() - startTime) / 1000);
      const scoreMatch = data.content.match(/\[\[SCORE:\s*(\d+)\]\]/);
      const fluencyScore = scoreMatch ? parseInt(scoreMatch[1]) : 0;

    } catch (error) {
      console.error('Finish Practice Error:', error);
      onBack();
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnalyzeTurn = async (text: string) => {
    setSelectedTurnText(text);
    setTurnAnalysis(null);
    setIsAnalyzingTurn(true);
    setIsAnalysisOpen(true);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          feature: 'turn-analysis',
          messages: messages.map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text })),
          userLevel: hskLevel,
          smartHskEnabled,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setTurnAnalysis(data.content);
        // Added logic for Mistake Mirror
        if (data.content.includes('[[MISTAKE: true]]')) {
          setIsReflecting(true);
        }
      } else {
        setTurnAnalysis("Failed to analyze this turn. Please try again.");
      }
    } catch (error) {
      console.error('Turn Analysis Error:', error);
      setTurnAnalysis("Error connecting to AI tutor.");
    } finally {
      setIsAnalyzingTurn(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);


    try {
      // Build the OpenAI-compatible message history for the proxy
      // Keep only the last 20 messages to stay within context limits (Story 2.4 AC #5)
      const history = messages.slice(-20).map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.text,
      }));
      history.push({ role: 'user', content: input });

      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          feature: 'ai-tutor',
          messages: history,
          userLevel: hskLevel,
          systemPrompt: scenario?.systemPrompt
        }),
      });

      if (!res.ok) {
        throw new Error(`Proxy error ${res.status}`);
      }

      const data = await res.json();
      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: data.content || "I'm sorry, I couldn't generate a response. Please try again.",
      };

      setMessages(prev => [...prev, modelMessage]);
      
      // Auto-play if enabled
      if (autoPlay) {
        speak(modelMessage.text);
      }
    } catch (error) {
      console.error('AI Tutor Error:', error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          text: 'Sorry, I encountered an error. Please check your connection and try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-stone-900 font-sans flex flex-col h-screen">
      <header className="bg-white border-b border-stone-200 py-4 px-6 shadow-sm z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 -ml-2 text-text-tertiary hover:text-text-primary hover:bg-surface-sunken rounded-full transition-colors"
              title="Back to menu"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              <Sparkles className="text-red-500" size={20} />
              <h1 className="text-xl font-bold text-stone-800 tracking-tight">
                {scenario ? scenario.title : 'AI HSK Tutor'}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Reset this session? This will clear the chat.')) {
                  setMessages([{
                    id: Date.now().toString(),
                    role: 'model',
                    text: "Session reset. How can I help you practice your Chinese now?",
                  }]);
                }
              }}
              className="px-3 py-1.5 text-xs font-bold text-stone-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all border border-stone-200"
              title="Clear conversation"
            >
              Reset
            </button>
            <button
              onClick={handleFinishPractice}
              disabled={isLoading}
              className="px-4 py-1.5 text-xs font-bold bg-stone-900 text-white hover:bg-stone-800 rounded-lg transition-all shadow-lg hover:shadow-stone-200 disabled:opacity-50"
              title="Finish practice and see summary"
            >
              Finish Practice
            </button>
            <HskDropdown value={hskLevel} onChange={onHskLevelChange} />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6" ref={scrollRef}>
        <div className="max-w-3xl mx-auto space-y-6">
          {/* MISTAKE MIRROR BANNER */}
          {isReflecting && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-6 mb-4 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-center justify-between gap-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <AlertCircle size={16} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-rose-900">Mistake Mirror Active</p>
                  <p className="text-xs text-rose-700 font-medium">Please review the corrections in the Analysis Panel and try to recast your last sentence correctly.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAnalysisOpen(true)}
                className="px-3 py-1.5 bg-rose-500 text-white text-[10px] font-bold rounded-lg hover:bg-rose-600 transition-colors uppercase tracking-widest whitespace-nowrap"
              >
                View Correction
              </button>
            </motion.div>
          )}
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'user' ? 'bg-stone-800 text-white' : 'bg-red-100 text-red-600'
                  }`}
                >
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <button
                  onClick={() => msg.role === 'user' && handleAnalyzeTurn(msg.text)}
                  className={`p-4 rounded-2xl shadow-sm border text-left transition-all ${
                    msg.role === 'user'
                      ? 'bg-stone-900 text-white border-stone-800 hover:ring-2 hover:ring-red-500 cursor-pointer group relative'
                      : 'bg-white text-stone-900 border-stone-100'
                  }`}
                >
                  {msg.role === 'user' && (
                    <div className="absolute -top-6 right-0 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="bg-red-500 text-white text-[8px] font-bold px-2 py-1 rounded-md shadow-sm">
                        CLICK TO ANALYZE
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <div className="markdown-body prose prose-sm max-w-none">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                    {msg.role === 'model' && (
                      <button 
                        onClick={() => speak(msg.text)}
                        className="ml-2 p-1.5 text-stone-400 hover:text-accent-primary transition-colors"
                        title="Listen to this"
                      >
                        <Volume2 size={16} />
                      </button>
                    )}
                  </div>
                </button>
              </div>
            </div>
          ))}
          {isLoading && !showReview && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-stone-400" />
                  <span className="text-stone-400 text-sm font-medium">Tutor is thinking…</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {showReview && reviewContent && (
        <SessionReview
          isOpen={showReview}
          onClose={() => setShowReview(false)}
          content={reviewContent}
        />
      )}

      <TurnAnalysisPanel
        isOpen={isAnalysisOpen}
        onClose={() => setIsAnalysisOpen(false)}
        userText={selectedTurnText || ''}
        analysis={turnAnalysis}
        isLoading={isAnalyzingTurn}
        userId={userId}
      />
      <footer className="bg-white border-t border-stone-200 p-4 md:p-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder={isReflecting ? "Mirror the correction here..." : "Ask about grammar, words, or HSK levels…"}
              className={`w-full p-4 pr-14 rounded-2xl bg-stone-50 border transition-all ${isReflecting ? 'border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20' : 'border-stone-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500'}`}
            />
            <button
              onClick={() => {
                handleSend();
                if (isReflecting) setIsReflecting(false);
              }}
              disabled={!input.trim() || isLoading}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-xl hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${isReflecting ? 'bg-rose-500 text-white hover:bg-rose-600' : 'bg-stone-900 text-white'}`}
              title="Send message"
            >
              {isReflecting ? <CheckCircle2 size={20} /> : <Send size={20} />}
            </button>
          </div>
          <p className="text-[10px] text-stone-400 mt-3 text-center uppercase tracking-widest font-bold">
            {isReflecting ? "Reflection Required to Continue" : "Powered by OpenRouter · Free AI Models · HSK Expert Mode"}
          </p>
        </div>
      </footer>
    </div>
  );
}
