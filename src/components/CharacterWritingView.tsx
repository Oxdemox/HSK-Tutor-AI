import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, RefreshCw, Play, Info, Pencil, Eraser, ChevronLeft, ChevronRight, Search, BookOpen, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import HanziWriter from 'hanzi-writer';
import hskCharacters from '../data/hskCharacters.json';

type Props = {
  onBack: () => void;
};

type Character = {
  char: string;
  pinyin: string;
  meaning: string;
};

const CHARACTERS_BY_LEVEL = hskCharacters as Record<string, Character[]>;

export default function CharacterWritingView({ onBack }: Props) {
  const [selectedLevel, setSelectedLevel] = useState('HSK 1');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [writer, setWriter] = useState<HanziWriter | null>(null);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [isStrictMode, setIsStrictMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const targetRef = useRef<HTMLDivElement>(null);

  const characters = CHARACTERS_BY_LEVEL[selectedLevel];
  const currentChar = characters[currentCharIndex];

  useEffect(() => {
    if (targetRef.current) {
      // Clear previous content
      targetRef.current.innerHTML = '';
      
      const newWriter = HanziWriter.create(targetRef.current, currentChar.char, {
        width: 300,
        height: 300,
        padding: 20,
        showOutline: true,
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 200,
        strokeColor: '#dc2626', // red-600
        outlineColor: '#e5e7eb', // gray-200
        drawingColor: '#1f2937', // gray-800
      });
      
      setWriter(newWriter);
    }
  }, [currentChar]);

  const handleAnimate = () => {
    writer?.animateCharacter();
  };

  const handleReset = () => {
    writer?.showCharacter();
    if (isQuizMode) {
      writer?.quiz();
    }
  };

  const toggleQuizMode = () => {
    const newMode = !isQuizMode;
    setIsQuizMode(newMode);
    if (newMode) {
      writer?.quiz({
        showHintAfterMisses: isStrictMode ? 1 : 3,
      });
    } else {
      writer?.showCharacter();
    }
  };

  const toggleStrictMode = () => {
    setIsStrictMode(!isStrictMode);
    if (isQuizMode) {
      writer?.quiz({
        showHintAfterMisses: !isStrictMode ? 1 : 3,
      });
    }
  };

  const handleNext = () => {
    setCurrentCharIndex((prev) => (prev + 1) % characters.length);
    setIsQuizMode(false);
  };

  const handlePrev = () => {
    setCurrentCharIndex((prev) => (prev - 1 + characters.length) % characters.length);
    setIsQuizMode(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    
    // Search in current level first
    let index = characters.findIndex(c => c.char === searchQuery || c.pinyin === searchQuery.toLowerCase());
    if (index !== -1) {
      setCurrentCharIndex(index);
      setSearchQuery('');
      return;
    }

    // Search in all levels
    for (const level of Object.keys(CHARACTERS_BY_LEVEL)) {
      const foundIndex = CHARACTERS_BY_LEVEL[level].findIndex(c => c.char === searchQuery || c.pinyin === searchQuery.toLowerCase());
      if (foundIndex !== -1) {
        setSelectedLevel(level);
        setCurrentCharIndex(foundIndex);
        setSearchQuery('');
        return;
      }
    }

    alert('Character not found in our HSK lists.');
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-stone-900 font-sans flex flex-col">
      <header className="bg-white border-b border-stone-200 py-4 px-6 shadow-sm z-10 sticky top-0">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 -ml-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-stone-800 tracking-tight">Character Writing</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <select 
              value={selectedLevel}
              onChange={(e) => {
                setSelectedLevel(e.target.value);
                setCurrentCharIndex(0);
                setIsQuizMode(false);
              }}
              className="bg-stone-100 border-none rounded-lg py-2 px-3 text-sm font-bold focus:ring-2 focus:ring-red-500/20"
            >
              {Object.keys(CHARACTERS_BY_LEVEL).map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>

            <form onSubmit={handleSearch} className="relative hidden sm:block">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-stone-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-red-500/20 w-32 transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
            </form>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-6 flex flex-col items-center">
        <div className="w-full flex flex-col lg:flex-row gap-8 items-start justify-center mt-4">
          {/* Character Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200 flex flex-col items-center w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="text-center mb-6">
              <h2 className="text-5xl font-bold text-stone-800 mb-2">{currentChar.char}</h2>
              <p className="text-xl text-red-600 font-bold uppercase tracking-widest">{currentChar.pinyin}</p>
              <p className="text-stone-500 mt-1">{currentChar.meaning}</p>
            </div>

            <div 
              ref={targetRef} 
              className="bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200 cursor-crosshair mb-8"
              style={{ width: '300px', height: '300px' }}
            />

            <div className="grid grid-cols-2 gap-4 w-full">
              <button 
                onClick={handleAnimate}
                className="flex items-center justify-center gap-2 py-3 bg-stone-800 text-white rounded-xl font-bold hover:bg-stone-700 transition-colors"
              >
                <Play size={18} />
                <span>Animate</span>
              </button>
              <button 
                onClick={handleReset}
                className="flex items-center justify-center gap-2 py-3 bg-stone-100 text-stone-700 rounded-xl font-bold hover:bg-stone-200 transition-colors"
              >
                <RefreshCw size={18} />
                <span>Reset</span>
              </button>
              <button 
                onClick={toggleQuizMode}
                className={`col-span-2 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${
                  isQuizMode 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                    : 'bg-red-50 text-red-600 border border-red-100 hover:bg-red-100'
                }`}
              >
                {isQuizMode ? <Pencil size={18} /> : <Info size={18} />}
                <span>{isQuizMode ? 'Quiz Mode: ON' : 'Start Writing Quiz'}</span>
              </button>
              
              {isQuizMode && (
                <button 
                  onClick={toggleStrictMode}
                  className={`col-span-2 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all border ${
                    isStrictMode 
                      ? 'bg-stone-800 text-white border-stone-800' 
                      : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <Shield size={18} />
                  <span>{isStrictMode ? 'Strict Mode: ON' : 'Strict Mode: OFF'}</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Navigation & List */}
          <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <BookOpen size={20} className="text-red-600" />
                  <span>{selectedLevel} Characters</span>
                </h3>
                <span className="text-xs text-stone-400 font-mono">{currentCharIndex + 1} / {characters.length}</span>
              </div>
              <div className="grid grid-cols-5 gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {characters.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentCharIndex(idx);
                      setIsQuizMode(false);
                    }}
                    className={`w-full aspect-square flex items-center justify-center text-xl rounded-xl transition-all ${
                      idx === currentCharIndex 
                        ? 'bg-red-600 text-white shadow-md' 
                        : 'bg-stone-50 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {c.char}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <button 
                onClick={handlePrev}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-white border border-stone-200 rounded-2xl text-stone-600 font-bold hover:bg-stone-50 transition-all"
              >
                <ChevronLeft size={20} />
                <span>Previous</span>
              </button>
              <button 
                onClick={handleNext}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-white border border-stone-200 rounded-2xl text-stone-600 font-bold hover:bg-stone-50 transition-all"
              >
                <span>Next</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
