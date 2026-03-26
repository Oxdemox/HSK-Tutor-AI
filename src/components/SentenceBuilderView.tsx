import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, RefreshCw, CheckCircle2, XCircle, Lightbulb, ChevronRight } from 'lucide-react';
import { sentencePuzzles, HSKLevel, WordTile, SentencePuzzle } from '../data/sentenceBuilderData';
import HskDropdown from './HskDropdown';
interface SentenceBuilderViewProps {
  userId: string | null;
  onBack: () => void;
}

export default function SentenceBuilderView({ userId, onBack }: SentenceBuilderViewProps) {
  const [level, setLevel] = useState<HSKLevel>('HSK 1');
  const [shuffledPuzzles, setShuffledPuzzles] = useState<SentencePuzzle[]>([]);
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [availableTiles, setAvailableTiles] = useState<WordTile[]>([]);
  const [selectedTiles, setSelectedTiles] = useState<WordTile[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [wrongIndices, setWrongIndices] = useState<number[]>([]);

  // Filter and shuffle puzzles when level changes
  useEffect(() => {
    const puzzles = sentencePuzzles.filter(p => p.level === level);
    const shuffled = [...puzzles].sort(() => Math.random() - 0.5);
    setShuffledPuzzles(shuffled);
    setCurrentPuzzleIndex(0);
  }, [level]);

  const currentPuzzle = shuffledPuzzles[currentPuzzleIndex];

  // Initialize or reset a puzzle
  useEffect(() => {
    if (currentPuzzle) {
      const shuffled = [...currentPuzzle.words];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setAvailableTiles(shuffled);
      setSelectedTiles([]);
      setIsChecking(false);
      setIsCorrect(null);
      setWrongIndices([]);
    }
  }, [currentPuzzle]);

  const handleLevelChange = (newLevel: HSKLevel) => {
    setLevel(newLevel);
  };

  const handleSelectTile = (tile: WordTile) => {
    if (isChecking && isCorrect) return; // Don't allow changes if already correct
    
    setAvailableTiles(prev => prev.filter(t => t.id !== tile.id));
    setSelectedTiles(prev => [...prev, tile]);
    
    // Reset checking state when user makes a change
    if (isChecking) {
      setIsChecking(false);
      setIsCorrect(null);
      setWrongIndices([]);
    }
  };

  const handleDeselectTile = (tile: WordTile) => {
    if (isChecking && isCorrect) return;
    
    setSelectedTiles(prev => prev.filter(t => t.id !== tile.id));
    setAvailableTiles(prev => [...prev, tile]);
    
    if (isChecking) {
      setIsChecking(false);
      setIsCorrect(null);
      setWrongIndices([]);
    }
  };

  const checkAnswer = () => {
    if (!currentPuzzle || selectedTiles.length !== currentPuzzle.words.length) return;
    
    setIsChecking(true);
    
    const newWrongIndices: number[] = [];
    let allCorrect = true;
    
    selectedTiles.forEach((tile, index) => {
      if (tile.chinese !== currentPuzzle.words[index].chinese) {
        newWrongIndices.push(index);
        allCorrect = false;
      }
    });
    
    setWrongIndices(newWrongIndices);
    setIsCorrect(allCorrect);

    if (allCorrect) {
      saveProgress(level, 1, 1);
    }
  };

  const saveProgress = (level: string, correct: number, total: number) => {
    if (!userId) return;

    const stored = localStorage.getItem(`progress_${userId}_${level}`);
    let data = {
      quizScore: 0,
      totalQuizzes: 0,
      sentenceScore: 0,
      totalSentences: 0
    };

    if (stored) {
      data = JSON.parse(stored);
    }

    data.sentenceScore = (data.sentenceScore || 0) + correct;
    data.totalSentences = (data.totalSentences || 0) + total;

    localStorage.setItem(`progress_${userId}_${level}`, JSON.stringify(data));
  };

  const loadNextPuzzle = () => {
    if (currentPuzzleIndex < shuffledPuzzles.length - 1) {
      setCurrentPuzzleIndex(prev => prev + 1);
    } else {
      // Loop back to start and reshuffle
      const shuffled = [...shuffledPuzzles].sort(() => Math.random() - 0.5);
      setShuffledPuzzles(shuffled);
      setCurrentPuzzleIndex(0);
    }
  };

  if (!currentPuzzle) {
    return (
      <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
        <header className="bg-white border-b border-stone-200 py-4 px-6 shadow-sm sticky top-0 z-40">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <button 
              onClick={onBack} 
              className="p-2 -ml-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-colors"
              title="Back to menu"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-lg font-bold text-stone-800 tracking-tight">Sentence Builder</h1>
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <p className="text-stone-500 mb-4">No puzzles available for this level yet.</p>
            <div className="flex gap-2 justify-center flex-wrap">
              {(['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'] as HSKLevel[]).map(l => (
                <button
                  key={l}
                  onClick={() => handleLevelChange(l)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${level === l ? 'bg-red-600 text-white' : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 py-4 px-6 shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 -ml-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-colors"
              aria-label="Back to Menu"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-lg font-bold text-stone-800 tracking-tight">Sentence Builder</h1>
              <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Word Order Practice</p>
            </div>
          </div>
          <HskDropdown 
            value={level}
            onChange={(val) => handleLevelChange(val as HSKLevel)}
          />
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-6 flex flex-col gap-6">
        
        {/* Progress & Target Sentence */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200">
          <div className="flex justify-between items-center">
            <span className="bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Puzzle {currentPuzzleIndex + 1} of {shuffledPuzzles.length}
            </span>
          </div>
          
          {/* English translation removed per user request */}
        </div>

        {/* Answer Area (Top Row) */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200 min-h-[200px] flex flex-col">
          <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">Your Answer</h3>
          
          <div className="flex-1 flex flex-wrap content-start gap-3 p-4 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200 min-h-[120px]">
            <AnimatePresence>
              {selectedTiles.map((tile, index) => {
                const isWrong = isChecking && wrongIndices.includes(index);
                const isRight = isChecking && !wrongIndices.includes(index);
                
                return (
                  <motion.button
                    key={tile.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => handleDeselectTile(tile)}
                    className={`
                      flex flex-col items-center justify-center p-3 rounded-xl shadow-sm border-2 transition-all
                      ${isWrong ? 'bg-red-50 border-red-300' : isRight ? 'bg-emerald-50 border-emerald-300' : 'bg-white border-stone-200 hover:border-stone-300 hover:shadow-md'}
                    `}
                  >
                    <span className="text-xs text-stone-500 mb-1">{tile.pinyin}</span>
                    <span className={`text-2xl font-medium mb-1 ${isWrong ? 'text-red-700' : isRight ? 'text-emerald-700' : 'text-stone-800'}`}>
                      {tile.chinese}
                    </span>
                    <span className="text-xs font-medium text-stone-400">{tile.english}</span>
                  </motion.button>
                );
              })}
            </AnimatePresence>
            {selectedTiles.length === 0 && (
              <div className="w-full h-full flex items-center justify-center text-stone-400 text-sm">
                Click words below to build the sentence
              </div>
            )}
          </div>
        </div>

        {/* Available Words (Bottom Row) */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200">
          <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">Available Words</h3>
          
          <div className="flex flex-wrap gap-3 min-h-[100px]">
            <AnimatePresence>
              {availableTiles.map((tile) => (
                <motion.button
                  key={tile.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => handleSelectTile(tile)}
                  className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border-2 border-stone-200 hover:border-indigo-300 hover:shadow-md transition-all active:scale-95"
                >
                  <span className="text-xs text-stone-500 mb-1">{tile.pinyin}</span>
                  <span className="text-2xl font-medium text-stone-800 mb-1">{tile.chinese}</span>
                  <span className="text-xs font-medium text-stone-400">{tile.english}</span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Controls & Feedback */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {isCorrect === true && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-3 rounded-2xl border border-emerald-200"
                >
                  <CheckCircle2 size={24} />
                  <span className="font-medium">Correct! Great job!</span>
                </motion.div>
              )}
              {isCorrect === false && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-2xl border border-red-200"
                >
                  <div className="flex items-center gap-2">
                    <XCircle size={24} />
                    <span className="font-medium">Not quite. The correct order is:</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {currentPuzzle.words.map(w => (
                      <div key={w.id} className="flex flex-col items-center bg-white/50 px-2 py-1 rounded-lg border border-red-100">
                        <span className="text-[10px] text-red-400 font-medium">{w.pinyin}</span>
                        <span className="text-xl font-bold text-red-700">{w.chinese}</span>
                        <span className="text-[10px] text-red-400 font-medium">{w.english}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            {isCorrect ? (
              <button
                onClick={loadNextPuzzle}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-2xl font-bold transition-colors shadow-sm shadow-emerald-600/20"
              >
                Next Sentence
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                onClick={checkAnswer}
                disabled={selectedTiles.length !== currentPuzzle.words.length || isChecking}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-stone-300 disabled:text-stone-500 text-white px-8 py-3 rounded-2xl font-bold transition-colors shadow-sm shadow-indigo-600/20 disabled:shadow-none"
              >
                Check Answer
              </button>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}
