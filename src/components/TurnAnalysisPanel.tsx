import React from 'react';
import { X, Sparkles, BookOpen, Quote, CheckCircle2, AlertCircle, Plus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  userText: string;
  analysis: string | null;
  isLoading: boolean;
  userId: string;
};

interface MasteredWord {
  word: string;
  pinyin: string;
  translation: string;
  masteredAt?: number;
}

interface ChengyuSuggestion {
  idiom: string;
  pinyin: string;
  translation: string;
  explanation: string;
}

export default function TurnAnalysisPanel({ isOpen, onClose, userText, analysis, isLoading, userId }: Props) {
  const [masteredWords, setMasteredWords] = React.useState<Record<string, boolean>>({});

  // Parse custom metadata [[WORDS: word1:pinyin:translation, word2...]]
  const extractedWords: MasteredWord[] = React.useMemo(() => {
    if (!analysis) return [];
    const match = analysis.match(/\[\[WORDS:\s*(.*?)\]\]/);
    if (!match) return [];
    
    return match[1].split(',').map(part => {
      const [word, pinyin, translation] = part.trim().split(':');
      return { word, pinyin, translation };
    }).filter(w => w.word);
  }, [analysis]);

  const culturalInsight = React.useMemo(() => {
    if (!analysis) return null;
    const match = analysis.match(/\[\[CULTURE:\s*(.*?)\]\]/);
    return match ? match[1].trim() : null;
  }, [analysis]);

  const chengyu = React.useMemo(() => {
    if (!analysis) return null;
    const match = analysis.match(/\[\[CHENGYU:\s*(.*?)\]\]/);
    if (!match) return null;
    const [idiom, pinyin, translation, explanation] = match[1].split(':').map(s => s.trim());
    return { idiom, pinyin, translation, explanation };
  }, [analysis]);

  const cleanAnalysis = React.useMemo(() => {
    if (!analysis) return null;
    return analysis.replace(/\[\[WORDS:.*?\]\]/g, '')
                   .replace(/\[\[CULTURE:.*?\]\]/g, '')
                   .replace(/\[\[CHENGYU:.*?\]\]/g, '')
                   .trim();
  }, [analysis]);

  const toggleMastery = (item: MasteredWord) => {
    const wordId = item.word;
    const isCurrentlyMastered = masteredWords[wordId];
    
    // Optimistic UI
    setMasteredWords(prev => ({ ...prev, [wordId]: !isCurrentlyMastered }));

    if (!userId) return;

    const storageKey = `mastered_vocab_${userId}`;
    const stored = localStorage.getItem(storageKey);
    let vocab: Record<string, MasteredWord> = stored ? JSON.parse(stored) : {};

    if (isCurrentlyMastered) {
      delete vocab[wordId];
    } else {
      vocab[wordId] = { ...item, masteredAt: Date.now() };
    }

    localStorage.setItem(storageKey, JSON.stringify(vocab));
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-y-0 right-0 w-full md:w-[500px] bg-white shadow-2xl z-100 flex flex-col border-l border-stone-200"
    >
      <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
        <div className="flex items-center gap-3">
          <div className="bg-red-500 text-white p-2 rounded-xl">
            <Sparkles size={18} />
          </div>
          <h2 className="text-xl font-bold text-stone-800 tracking-tight">Turn Analysis</h2>
        </div>
        <button 
          onClick={onClose}
          className="p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-all"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* User's Original Message */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[10px] font-bold text-stone-400 uppercase tracking-widest">
            <Quote size={12} /> Your Turn
          </div>
          <div className="bg-stone-900 text-white p-5 rounded-3xl shadow-lg border border-stone-800">
            <p className="text-lg font-medium leading-relaxed italic">"{userText}"</p>
          </div>
        </div>

        {/* AI Analysis Content */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-[10px] font-bold text-stone-400 uppercase tracking-widest">
            <span>Pedagogical Feedback</span>
            {isLoading && <span className="text-red-500 animate-pulse">Analyzing...</span>}
          </div>

          {!isLoading && analysis ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-sm max-w-none text-stone-700 leading-relaxed"
            >
              <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100 space-y-4 shadow-sm">
                 <div className="markdown-body">
                   <ReactMarkdown>{cleanAnalysis}</ReactMarkdown>
                 </div>
              </div>

               {/* VOCABULARY CHIPS */}
               {extractedWords.length > 0 && (
                 <div className="space-y-4">
                   <div className="flex items-center gap-2 text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                     <BookOpen size={12} /> Key Vocabulary
                   </div>
                   <div className="flex flex-wrap gap-2">
                     {extractedWords.map((item, idx) => {
                       const isMastered = masteredWords[item.word];
                       return (
                         <motion.button
                           key={idx}
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           onClick={() => toggleMastery(item)}
                           className={`flex flex-col items-start p-3 rounded-2xl border transition-all text-left min-w-[120px] ${
                             isMastered 
                               ? 'bg-emerald-50 border-emerald-200 ring-2 ring-emerald-500/20' 
                               : 'bg-white border-stone-200 hover:border-emerald-300'
                           }`}
                         >
                           <div className="flex items-center justify-between w-full mb-1">
                             <span className="text-lg font-black text-stone-800">{item.word}</span>
                             {isMastered ? (
                               <Check size={14} className="text-emerald-600" />
                             ) : (
                               <Plus size={14} className="text-stone-300 group-hover:text-emerald-500" />
                             )}
                           </div>
                           <span className="text-[10px] text-stone-500 font-bold uppercase tracking-tight">{item.pinyin}</span>
                           <span className="text-[10px] text-stone-400 font-medium leading-tight mt-1">{item.translation}</span>
                         </motion.button>
                       );
                     })}
                   </div>
                 </div>
               )}

               {/* CHENGYU SUGGESTION */}
               {chengyu && (
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 space-y-3"
                 >
                   <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                     <Sparkles size={12} /> Chengyu Level-Up
                   </div>
                   <div>
                     <div className="flex items-baseline gap-2">
                       <span className="text-2xl font-black text-indigo-900">{chengyu.idiom}</span>
                       <span className="text-xs font-bold text-indigo-500 uppercase">{chengyu.pinyin}</span>
                     </div>
                     <p className="text-sm font-bold text-indigo-700 mt-1">{chengyu.translation}</p>
                     <p className="text-xs text-indigo-600/70 font-medium leading-relaxed mt-2 italic">"{chengyu.explanation}"</p>
                   </div>
                 </motion.div>
               )}

               {/* CULTURAL INSIGHT */}
               {culturalInsight && (
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="bg-amber-50 border border-amber-100 rounded-3xl p-6 space-y-3"
                 >
                   <div className="flex items-center gap-2 text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                     <AlertCircle size={12} /> Cultural Intelligence
                   </div>
                   <p className="text-sm text-amber-900 font-medium leading-relaxed">
                     {culturalInsight}
                   </p>
                 </motion.div>
               )}
              
              <div className="mt-8 p-4 bg-stone-50 rounded-2xl border border-stone-100 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-600 mt-0.5" />
                <p className="text-xs text-stone-500 font-medium">
                  Reviewing these corrections helps reinforce natural sentence patterns and HSK vocabulary.
                </p>
              </div>
            </motion.div>
          ) : isLoading ? (
            <div className="space-y-4 animate-pulse pt-4">
              <div className="h-4 bg-stone-100 rounded-full w-3/4" />
              <div className="h-4 bg-stone-100 rounded-full w-full" />
              <div className="h-4 bg-stone-100 rounded-full w-5/6" />
              <div className="h-32 bg-stone-50 rounded-3xl w-full mt-6" />
            </div>
          ) : (
            <div className="text-center py-12 text-stone-300">
              <AlertCircle size={40} className="mx-auto mb-4 opacity-50" />
              <p className="text-sm font-medium">Click on any of your messages to see a detailed analysis here.</p>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 border-t border-stone-100 bg-stone-50/30 text-center">
        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
          HSK Tutor AI • Advanced Pedagogy
        </p>
      </div>
    </motion.div>
  );
}
