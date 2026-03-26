import React, { useState, useEffect } from 'react';
import { ArrowLeft, Volume2, Star, StarOff, Filter } from 'lucide-react';
import { hskVocabulary, HSKLevel } from '../data/hsk';
import HskDropdown from './HskDropdown';

type Props = {
  userId: string | null;
  onBack: () => void;
};

export default function VocabularyView({ userId, onBack }: Props) {
  const [activeLevel, setActiveLevel] = useState<HSKLevel>('HSK 1');
  const [starredWords, setStarredWords] = useState<Set<string>>(new Set());
  const [showStarredOnly, setShowStarredOnly] = useState(false);

  useEffect(() => {
    if (!userId) {
      setStarredWords(new Set());
      return;
    }

    const storageKey = `starred_words_${userId}`;
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const starred = JSON.parse(stored);
      setStarredWords(new Set(Object.keys(starred)));
    }
  }, [userId]);

  const toggleStar = (wordId: string) => {
    if (!userId) return;

    const storageKey = `starred_words_${userId}`;
    const stored = localStorage.getItem(storageKey);
    let starred = stored ? JSON.parse(stored) : {};

    if (starredWords.has(wordId)) {
      delete starred[wordId];
    } else {
      starred[wordId] = { timestamp: Date.now() };
    }

    localStorage.setItem(storageKey, JSON.stringify(starred));
    setStarredWords(new Set(Object.keys(starred)));
  };

  const filteredVocab = hskVocabulary.filter(v => 
    v.level === activeLevel && (!showStarredOnly || starredWords.has(v.id))
  );

  const groupedVocab = filteredVocab.reduce((acc, item) => {
    if (!acc[item.lesson]) {
      acc[item.lesson] = [];
    }
    acc[item.lesson].push(item);
    return acc;
  }, {} as Record<number, typeof filteredVocab>);

  return (
    <div className="min-h-screen bg-surface-primary text-text-primary font-sans flex flex-col">
      <header className="bg-white border-b border-surface-sunken py-4 px-6 shadow-sm z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 -ml-2 text-text-tertiary hover:text-text-primary hover:bg-surface-sunken rounded-full transition-colors"
              title="Back to menu"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-text-primary tracking-tight">Vocabulary List</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowStarredOnly(!showStarredOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                showStarredOnly 
                  ? 'bg-amber-100 text-amber-600 border border-amber-200' 
                  : 'bg-surface-sunken text-text-tertiary border border-surface-sunken hover:bg-surface-secondary'
              }`}
              title={showStarredOnly ? "Show all words" : "Show starred only"}
            >
              <Star size={16} fill={showStarredOnly ? "currentColor" : "none"} />
              <span>Starred</span>
            </button>
            <HskDropdown 
              value={activeLevel}
              onChange={(val) => setActiveLevel(val as HSKLevel)}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-6 flex flex-col gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-surface-sunken space-y-8">
          {Object.entries(groupedVocab).map(([lesson, items]) => (
            <div key={lesson} className="border-b border-surface-sunken pb-8 last:border-0 last:pb-0">
              <h2 className="text-xl font-bold text-text-primary mb-4">Lesson {lesson}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item) => {
                  const num = item.id.split('-')[1];
                  return (
                    <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl border border-surface-sunken bg-surface-primary hover:bg-surface-secondary transition-colors">
                      <div className="flex items-start gap-4">
                        <span className="text-text-tertiary font-mono text-sm mt-1">{num}.</span>
                        <div>
                          <div className="flex items-baseline gap-3 mb-1">
                            <span className="text-2xl font-bold text-text-primary chinese">{item.hanzi}</span>
                            <span className="text-sm text-text-tertiary font-medium">{item.pinyin}</span>
                          </div>
                          <p className="text-text-secondary">{item.english}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          className={`p-2 rounded-full transition-colors ${
                            starredWords.has(item.id) 
                              ? 'text-amber-500 bg-amber-50' 
                              : 'text-text-tertiary hover:text-amber-500 hover:bg-amber-50'
                          }`}
                          onClick={() => toggleStar(item.id)}
                          title={starredWords.has(item.id) ? "Unstar word" : "Star word"}
                        >
                          <Star size={20} fill={starredWords.has(item.id) ? "currentColor" : "none"} />
                        </button>
                        <button 
                          className="p-2 text-text-tertiary hover:text-accent-primary hover:bg-accent-soft rounded-full transition-colors"
                          onClick={() => {
                            window.speechSynthesis.cancel();
                            const utterance = new SpeechSynthesisUtterance(item.hanzi);
                            utterance.lang = 'zh-CN';
                            window.speechSynthesis.speak(utterance);
                          }}
                          title="Listen to pronunciation"
                        >
                          <Volume2 size={20} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
