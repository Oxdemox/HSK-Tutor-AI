import React, { useEffect, useState } from 'react';
import { ArrowLeft, Trophy, Star, BookOpen, RefreshCw, Loader2, Sparkles } from 'lucide-react';
type Props = {
  userId: string | null;
  userRole: 'admin' | 'user' | null;
  onBack: () => void;
};

type ProgressData = {
  [key: string]: {
    quizScore: number;
    totalQuizzes: number;
    sentenceScore: number;
    totalSentences: number;
  }
};

export default function ProgressView({ userId, userRole, onBack }: Props) {
  const [loading, setLoading] = useState(true);
  const [resetting, setResetting] = useState(false);
  const [progress, setProgress] = useState<ProgressData>({
    'HSK 1': { quizScore: 0, totalQuizzes: 0, sentenceScore: 0, totalSentences: 0 },
    'HSK 2': { quizScore: 0, totalQuizzes: 0, sentenceScore: 0, totalSentences: 0 },
    'HSK 3': { quizScore: 0, totalQuizzes: 0, sentenceScore: 0, totalSentences: 0 },
    'HSK 4': { quizScore: 0, totalQuizzes: 0, sentenceScore: 0, totalSentences: 0 },
    'HSK 5': { quizScore: 0, totalQuizzes: 0, sentenceScore: 0, totalSentences: 0 },
    'HSK 6': { quizScore: 0, totalQuizzes: 0, sentenceScore: 0, totalSentences: 0 },
  });

  useEffect(() => {
    if (!userId) return;

    const loadProgress = () => {
      const levels = ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'];
      const newProgress: ProgressData = {};
      
      for (const level of levels) {
        const stored = localStorage.getItem(`progress_${userId}_${level}`);
        if (stored) {
          newProgress[level] = JSON.parse(stored);
        } else {
          newProgress[level] = { quizScore: 0, totalQuizzes: 0, sentenceScore: 0, totalSentences: 0 };
        }
      }
      setProgress(newProgress);
      setLoading(false);
    };

    loadProgress();
  }, [userId]);

  const handleReset = async () => {
    if (!userId) return;
    if (!window.confirm("Are you sure you want to reset all your progress? This cannot be undone.")) return;

    setResetting(true);
    try {
      const levels = ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'];
      const emptyProgress = { quizScore: 0, totalQuizzes: 0, sentenceScore: 0, totalSentences: 0 };
      
      for (const level of levels) {
        localStorage.setItem(`progress_${userId}_${level}`, JSON.stringify(emptyProgress));
        localStorage.setItem(`history_${userId}_${level}`, JSON.stringify({ messages: [] }));
      }
      
      setProgress({
        'HSK 1': { ...emptyProgress },
        'HSK 2': { ...emptyProgress },
        'HSK 3': { ...emptyProgress },
        'HSK 4': { ...emptyProgress },
        'HSK 5': { ...emptyProgress },
        'HSK 6': { ...emptyProgress },
      });
      
      alert("Progress reset successfully!");
    } catch (err) {
      console.error("Error resetting progress:", err);
      alert("Failed to reset progress. Please try again.");
    } finally {
      setResetting(false);
    }
  };

  const [insights, setInsights] = useState<string | null>(null);
  const [isGeneratingInsights, setIsGeneratingInsights] = useState(false);

  const generateInsights = async () => {
    setIsGeneratingInsights(true);
    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          feature: 'progress',
          messages: [
            { role: 'user', content: `Analyze my HSK progress data and provide factual, encouraging HSK study advice and actionable tips. Data: ${JSON.stringify(progress)}` }
          ]
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setInsights(data.content);
    } catch (err) {
      console.error("Insights error:", err);
      alert("Failed to generate insights. Please try again.");
    } finally {
      setIsGeneratingInsights(false);
    }
  };

  const levels = ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'];

  return (
    <div className="min-h-screen bg-surface-secondary text-stone-900 font-sans flex flex-col">
      <header className="bg-white border-b border-stone-200 py-4 px-6 shadow-sm z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 -ml-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-colors"
              title="Back to menu"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-stone-800 tracking-tight">My Progress</h1>
          </div>
          
          <button
            onClick={generateInsights}
            disabled={isGeneratingInsights}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-sm hover:bg-indigo-700 transition-all disabled:opacity-50"
            title="Get AI Insights"
          >
            {isGeneratingInsights ? <Loader2 className="animate-spin" size={16} /> : <Star size={16} />}
            AI Insights
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-6 flex flex-col gap-6">
        {insights && (
          <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100 relative group animate-in fade-in slide-in-from-top-4 duration-500">
             <button 
               onClick={() => setInsights(null)} 
               className="absolute top-4 right-4 text-indigo-300 hover:text-indigo-600 transition-colors"
               title="Clear insights"
             >
                <RefreshCw size={18} />
             </button>
             <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-600 p-2 rounded-xl text-white">
                   <Sparkles size={20} />
                </div>
                <h3 className="text-lg font-bold text-indigo-900">Personalized Learning Insights</h3>
             </div>
             <div className="prose prose-indigo max-w-none text-indigo-800/80 leading-relaxed italic whitespace-pre-wrap">
                {insights}
             </div>
          </div>
        )}

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 text-center">
          <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-amber-200">
            <Trophy size={40} className="text-amber-500" />
          </div>
          <h2 className="text-2xl font-bold text-stone-800 mb-2">Learning Journey</h2>
          <p className="text-stone-500 max-w-md mx-auto mb-6">Track your quiz performance across all HSK levels.</p>
          
          <button
            onClick={handleReset}
            disabled={resetting}
            className="flex items-center gap-2 mx-auto px-6 py-2.5 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors border border-red-100 disabled:opacity-50"
          >
            {resetting ? <Loader2 className="animate-spin" size={18} /> : <RefreshCw size={18} />}
            <span>Reset My Progress</span>
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-red-600 mb-4" size={40} />
            <p className="text-stone-500 font-medium tracking-wide">Loading your progress...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map(level => {
            const data = progress[level] || { quizScore: 0, totalQuizzes: 0, sentenceScore: 0, totalSentences: 0 };
            
            const quizPercentage = data.totalQuizzes > 0 
              ? Math.round((data.quizScore / data.totalQuizzes) * 100) 
              : 0;
            
            const sentencePercentage = data.totalSentences > 0
              ? Math.round((data.sentenceScore / data.totalSentences) * 100)
              : 0;

            return (
              <div key={level} className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200 flex flex-col">
                <h3 className="text-xl font-bold text-stone-800 mb-6 text-center">{level}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20 mb-2">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          className="text-stone-100"
                          strokeWidth="3"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className={quizPercentage > 0 ? "text-emerald-500" : "text-stone-200"}
                          strokeWidth="3"
                          strokeDasharray={`${quizPercentage}, 100`}
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-stone-800">{quizPercentage}%</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Quiz</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20 mb-2">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          className="text-stone-100"
                          strokeWidth="3"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className={sentencePercentage > 0 ? "text-indigo-500" : "text-stone-200"}
                          strokeWidth="3"
                          strokeDasharray={`${sentencePercentage}, 100`}
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-stone-800">{sentencePercentage}%</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Sentences</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-stone-50 rounded-xl border border-stone-100">
                    <span className="text-xs font-medium text-stone-500">Quiz Correct</span>
                    <span className="text-xs font-bold text-stone-800">{data.quizScore}/{data.totalQuizzes}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-stone-50 rounded-xl border border-stone-100">
                    <span className="text-xs font-medium text-stone-500">Sentences Built</span>
                    <span className="text-xs font-bold text-stone-800">{data.sentenceScore}/{data.totalSentences}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        )}
      </main>
    </div>
  );
}

