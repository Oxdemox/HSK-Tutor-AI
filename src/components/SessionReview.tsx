import React from 'react';
import { X, Trophy, Book, MessageSquare, Star } from 'lucide-react';

interface ReviewProps {
  isOpen: boolean;
  content: string;
  onClose: () => void;
}

const SessionReview: React.FC<ReviewProps> = ({ isOpen, content, onClose }) => {
  if (!isOpen) return null;

  // Simple parser to make the HSK structure look good
  // We expect "Example → Rule → Quiz" or similar from SOUL
  const sections = content.split('\n\n').filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
        <div className="bg-indigo-600 p-8 text-white relative">
          <button 
            onClick={onClose}
            title="Close"
            aria-label="Close review"
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors font-bold text-white"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Trophy size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Session Complete!</h2>
              <p className="text-indigo-100 italic">Excellent progress on your HSK journey.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-xs text-indigo-200 uppercase tracking-wider font-bold mb-1">Focus</div>
              <div className="font-semibold text-sm">Vocabulary</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-xs text-indigo-200 uppercase tracking-wider font-bold mb-1">Method</div>
              <div className="font-semibold text-sm">Conversational</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-xs text-indigo-200 uppercase tracking-wider font-bold mb-1">Status</div>
              <div className="font-semibold text-sm">Analyzed</div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-[#fdfdfb]">
          <div className="space-y-6">
            {sections.map((section, idx) => {
              const isVocab = section.toLowerCase().includes('vocabulary');
              const isGrammar = section.toLowerCase().includes('grammar');
              const isFluency = section.toLowerCase().includes('fluency');

              return (
                <div key={idx} className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 p-2 rounded-lg ${
                      isVocab ? 'bg-amber-100 text-amber-600' :
                      isGrammar ? 'bg-indigo-100 text-indigo-600' :
                      'bg-emerald-100 text-emerald-600'
                    }`}>
                      {isVocab ? <Book size={18} /> : 
                       isGrammar ? <MessageSquare size={18} /> : 
                       <Star size={18} />}
                    </div>
                    <div>
                      <h3 className="text-stone-800 font-bold mb-2">
                        {isVocab ? 'Key Vocabulary' : 
                         isGrammar ? 'Grammar Insights' : 
                         isFluency ? 'Fluency Assessment' : 'Session Insight'}
                      </h3>
                      <div className="text-stone-600 leading-relaxed whitespace-pre-wrap text-sm">
                        {section}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-6 bg-stone-50 border-t border-stone-200 flex justify-center">
          <button
            onClick={onClose}
            className="w-full bg-slate-900 text-white py-4 rounded-4xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg active:scale-98"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionReview;
