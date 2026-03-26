import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, RefreshCw, Volume2, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { hskVocabulary, HSKLevel, VocabularyItem } from '../data/hsk';
import HskDropdown from './HskDropdown';

type Props = {
  onBack: () => void;
};

export default function FlashcardsView({ onBack }: Props) {
  const [activeLevel, setActiveLevel] = useState<HSKLevel>('HSK 1');
  const [cards, setCards] = useState<VocabularyItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const vocab = hskVocabulary.filter(v => v.level === activeLevel);
    setCards([...vocab].sort(() => 0.5 - Math.random()));
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [activeLevel]);

  const playAudio = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    window.speechSynthesis.speak(utterance);
  };

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 150);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 150);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-stone-900 font-sans flex flex-col">
      <header className="bg-white border-b border-stone-200 py-4 px-6 shadow-sm z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 -ml-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-stone-800 tracking-tight">Flashcards</h1>
          </div>
          <HskDropdown 
            value={activeLevel}
            onChange={(val) => setActiveLevel(val as HSKLevel)}
          />
        </div>
      </header>

      <main className="flex-1 max-w-2xl w-full mx-auto p-6 flex flex-col items-center justify-center gap-8">
        {cards.length > 0 && currentCard ? (
          <>
            <div className="w-full perspective-1000 h-[400px]">
              <motion.div
                className="relative w-full h-full transition-all duration-500 preserve-3d cursor-pointer"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-[2.5rem] shadow-xl border border-stone-200 flex flex-col items-center justify-center p-8">
                  <span className="absolute top-6 left-6 text-xs font-bold text-stone-300 uppercase tracking-widest">Front</span>
                  <h2 className="text-8xl font-bold text-stone-800 mb-6">{currentCard.hanzi}</h2>
                  <p className="text-2xl text-stone-400 font-medium mb-2">{currentCard.pinyin}</p>
                  <p className="text-xl text-stone-500 font-bold">{currentCard.english}</p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio(currentCard.hanzi);
                    }}
                    className="mt-8 p-4 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-colors"
                  >
                    <Volume2 size={32} />
                  </button>
                </div>

                {/* Back */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden bg-stone-900 rounded-[2.5rem] shadow-xl border border-stone-800 flex flex-col items-center justify-center p-8"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <span className="absolute top-6 left-6 text-xs font-bold text-stone-600 uppercase tracking-widest">Back</span>
                  <h2 className="text-4xl font-bold text-white text-center leading-tight mb-4">{currentCard.english}</h2>
                  <div className="w-12 h-1 bg-red-500 rounded-full mb-6"></div>
                  <p className="text-xl text-stone-400 font-medium">{currentCard.hanzi}</p>
                  <p className="text-lg text-stone-500">{currentCard.pinyin}</p>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center gap-8">
              <button 
                onClick={prevCard}
                className="p-4 bg-white text-stone-600 rounded-full shadow-md border border-stone-200 hover:bg-stone-50 transition-all active:scale-95"
              >
                <ChevronLeft size={32} />
              </button>
              
              <div className="text-center">
                <span className="text-lg font-bold text-stone-800">{currentIndex + 1}</span>
                <span className="text-stone-400 mx-1">/</span>
                <span className="text-stone-400">{cards.length}</span>
              </div>

              <button 
                onClick={nextCard}
                className="p-4 bg-white text-stone-600 rounded-full shadow-md border border-stone-200 hover:bg-stone-50 transition-all active:scale-95"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <p className="text-stone-400 text-sm font-medium animate-pulse">Tap the card to flip</p>
          </>
        ) : (
          <div className="text-stone-500">Loading cards...</div>
        )}
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}} />
    </div>
  );
}
