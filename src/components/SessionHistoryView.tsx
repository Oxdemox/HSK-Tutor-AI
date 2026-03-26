import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Eye, Trophy, Book, MessageSquare, Star, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

type Props = {
  userId: string;
  onBack: () => void;
};

type SessionReviewData = {
  id: string;
  content: string;
  hskLevel: string;
  timestamp: number;
  type: string;
};

export default function SessionHistoryView({ userId, onBack }: Props) {
  const [reviews, setReviews] = useState<SessionReviewData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState<SessionReviewData | null>(null);

  useEffect(() => {
    if (!userId) {
      setReviews([]);
      setLoading(false);
      return;
    }

    const storageKey = `session_history_${userId}`;
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const sessions = JSON.parse(stored);
      const reviewsData = Object.values(sessions) as SessionReviewData[];
      setReviews(reviewsData.sort((a, b) => b.timestamp - a.timestamp));
    }
    setLoading(false);
  }, [userId]);

  const parseSections = (text: string) => {
    const sections = text.split('\n\n');
    return sections.map(section => {
      const lower = section.toLowerCase();
      if (lower.includes('vocabulary')) return { type: 'vocabulary', content: section };
      if (lower.includes('grammar')) return { type: 'grammar', content: section };
      if (lower.includes('fluency') || lower.includes('score')) return { type: 'fluency', content: section };
      return { type: 'other', content: section };
    });
  };

  const formatDate = (timestamp: number) => {
    if (!timestamp) return 'Unknown Date';
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (selectedReview) {
    const sections = parseSections(selectedReview.content);
    
    return (
      <div className="min-h-screen bg-[#fdfdfb] text-stone-900 font-sans flex flex-col h-screen overflow-hidden">
        <header className="bg-white/80 backdrop-blur-md border-b border-stone-100 py-4 px-6 sticky top-0 z-20">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSelectedReview(null)}
                className="p-2 -ml-2 text-stone-400 hover:text-stone-800 hover:bg-stone-50 rounded-full transition-all"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <h1 className="text-xl font-bold text-stone-800 tracking-tight">Session Details</h1>
                <p className="text-xs text-stone-400 font-medium flex items-center gap-1">
                  <Calendar size={12} /> {formatDate(selectedReview.timestamp)} • {selectedReview.hskLevel}
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-linear-to-b from-white to-stone-50/50">
          <div className="max-w-3xl mx-auto space-y-8 pb-12">
            <div className="flex items-center gap-3 mb-2 p-2 px-4 bg-red-50 text-red-700 rounded-2xl w-fit">
              <Trophy size={20} className="animate-bounce" />
              <span className="font-bold text-sm tracking-wide uppercase">Practice Summary</span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {sections.map((section, idx) => {
                let icon = <Star className="text-stone-400" />;
                let colorClass = "bg-stone-100 border-stone-200";
                let iconBg = "bg-white text-stone-400";
                let title = "Notes";

                if (section.type === 'vocabulary') {
                  icon = <Book size={20} />;
                  colorClass = "bg-emerald-50 border-emerald-100 text-emerald-900";
                  iconBg = "bg-emerald-600 text-white";
                  title = "Key Vocabulary";
                } else if (section.type === 'grammar') {
                  icon = <MessageSquare size={20} />;
                  colorClass = "bg-indigo-50 border-indigo-100 text-indigo-900";
                  iconBg = "bg-indigo-600 text-white";
                  title = "Grammar Insights";
                } else if (section.type === 'fluency') {
                  icon = <Sparkles size={20} />;
                  colorClass = "bg-amber-50 border-amber-100 text-amber-900";
                  iconBg = "bg-amber-500 text-white";
                  title = "Fluency & Performance";
                }

                return (
                  <div key={idx} className={`p-6 rounded-3xl border-2 shadow-xs transition-all ${colorClass}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl shadow-sm ${iconBg}`}>
                        {icon}
                      </div>
                      <h3 className="font-bold text-lg tracking-tight">{title}</h3>
                    </div>
                    <div className="prose prose-sm max-w-none opacity-90 leading-relaxed">
                      <ReactMarkdown>{section.content}</ReactMarkdown>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button 
              onClick={() => setSelectedReview(null)}
              className="w-full py-4 bg-stone-900 text-white rounded-2xl font-bold shadow-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2"
            >
              Back to History
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-secondary text-stone-900 font-sans flex flex-col h-screen overflow-hidden">
      <header className="bg-white border-b border-stone-200 py-4 px-6 shadow-sm z-10 sticky top-0">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 -ml-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-colors"
            title="Back to menu"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-stone-800 tracking-tight">Session History</h1>
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Your Pedagogical Journey</p>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-12">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
              <Loader2 className="animate-spin text-red-600" size={40} />
              <p className="text-stone-400 font-medium">Loading your archives...</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="bg-white rounded-5xl p-12 text-center border-2 border-dashed border-stone-200 shadow-sm mt-8">
              <div className="bg-stone-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar size={40} className="text-stone-300" />
              </div>
              <h2 className="text-2xl font-bold text-stone-800 mb-2">No history yet</h2>
              <p className="text-stone-500 max-w-sm mx-auto mb-8">
                Complete your first AI Tutor practice session to start building your pedagogical archive.
              </p>
              <button 
                onClick={onBack}
                className="px-8 py-3 bg-stone-900 text-white rounded-2xl font-bold hover:shadow-xl transition-all"
              >
                Start Practice Now
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {reviews.map(review => (
                <div 
                  key={review.id}
                  onClick={() => setSelectedReview(review)}
                  className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pl-4 pb-4">
                    <Eye size={20} className="text-red-600" />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="px-3 py-1 bg-stone-900 text-white text-[10px] font-bold rounded-lg uppercase tracking-wider">
                      {review.hskLevel}
                    </div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest flex items-center gap-1">
                      <Calendar size={10} /> {formatDate(review.timestamp)}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-stone-800 mb-4 line-clamp-1 group-hover:text-red-700 transition-colors">
                    AI Session Summary
                  </h3>
                  
                  <div className="flex items-center gap-4 text-stone-400">
                    <div className="flex items-center gap-1">
                      <Book size={14} />
                      <span className="text-xs font-medium">Vocab</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare size={14} />
                      <span className="text-xs font-medium">Grammar</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sparkles size={14} />
                      <span className="text-xs font-medium">Fluency</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="p-6 bg-white border-t border-stone-100 sticky bottom-0 z-10 text-center">
        <p className="text-[10px] text-stone-300 font-bold uppercase tracking-[0.2em]">
          End of history · Record of excellence
        </p>
      </footer>
    </div>
  );
}
