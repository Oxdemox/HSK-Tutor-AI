import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Trash2, Search, Filter, Loader2, Sparkles, Trophy } from 'lucide-react';

interface MasteredWord {
  word: string;
  pinyin: string;
  translation: string;
  masteredAt: number;
}

interface Props {
  userId: string;
  onBack: () => void;
}

export default function VocabularyMasteryView({ userId, onBack }: Props) {
  const [words, setWords] = useState<MasteredWord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!userId) {
      setWords([]);
      setIsLoading(false);
      return;
    }

    const storageKey = `mastered_vocab_${userId}`;
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const vocab = JSON.parse(stored);
      const wordsData = Object.values(vocab) as MasteredWord[];
      setWords(wordsData.sort((a, b) => b.masteredAt - a.masteredAt));
    }
    setIsLoading(false);
  }, [userId]);

  const removeWord = (word: string) => {
    if (!window.confirm(`Remove "${word}" from mastered list?`)) return;
    
    const storageKey = `mastered_vocab_${userId}`;
    const stored = localStorage.getItem(storageKey);
    let vocab = stored ? JSON.parse(stored) : {};
    delete vocab[word];
    localStorage.setItem(storageKey, JSON.stringify(vocab));
    
    // Update local state
    setWords(prev => prev.filter(w => w.word !== word));
  };

  const filteredWords = words.filter(w => 
    w.word.includes(searchTerm) || 
    w.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.pinyin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-surface-primary text-text-primary flex flex-col p-6">
      <div className="max-w-5xl w-full mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack}
              className="p-3 bg-white rounded-2xl border border-surface-sunken shadow-sm text-text-tertiary hover:text-text-primary transition-all"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-black tracking-tight flex items-center gap-3">
                Vocabulary Mastery <Trophy className="text-amber-400" size={28} />
              </h1>
              <p className="text-sm text-text-tertiary font-bold uppercase tracking-widest">Your Neural Lexicon</p>
            </div>
          </div>

          <div className="relative group max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-accent-primary transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search your mastered words..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-stone-100 rounded-3xl shadow-sm focus:outline-none focus:ring-4 focus:ring-accent-primary/10 focus:border-accent-primary transition-all font-medium"
            />
          </div>
        </header>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-accent-primary" size={40} />
            <p className="text-stone-400 font-bold uppercase tracking-widest text-xs">Loading...</p>
          </div>
        ) : words.length === 0 ? (
          <div className="bg-white rounded-5xl border border-stone-100 p-12 text-center space-y-6 shadow-sm max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-stone-50 rounded-4xl flex items-center justify-center mx-auto text-stone-300">
              <BookOpen size={40} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-stone-800">Your lexicon is empty</h3>
              <p className="text-stone-500 font-medium max-w-md mx-auto">
                Practice with the AI Tutor and click on words in the Turn Analysis panel to add them to your mastery list.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredWords.map((item, idx) => (
                <motion.div
                  key={item.word}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                   className="bg-white p-6 rounded-4xl border border-stone-50 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-black text-stone-800 leading-none">{item.word}</span>
                      <button 
                        onClick={() => removeWord(item.word)}
                        className="p-2 text-stone-200 hover:text-red-500 hover:bg-red-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-xs font-black text-accent-primary uppercase tracking-widest">{item.pinyin}</p>
                    <p className="text-sm text-stone-500 font-medium mt-3 leading-snug">{item.translation}</p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-stone-50 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-300 font-bold uppercase tracking-tighter">
                       <Sparkles size={10} /> Mastered
                    </div>
                    <span className="text-[10px] text-stone-300 font-medium italic">
                      {new Date(item.masteredAt).toLocaleDateString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
