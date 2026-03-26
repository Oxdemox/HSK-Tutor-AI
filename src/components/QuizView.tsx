import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, XCircle, RefreshCw, Volume2, Sparkles, Loader2 } from 'lucide-react';
import { hskVocabulary, HSKLevel, VocabularyItem } from '../data/hsk';
import HskDropdown from './HskDropdown';
type Props = {
  userId: string | null;
  onBack: () => void;
};

type QuestionType = 'reading' | 'listening' | 'pinyin';

type QuizQuestion = {
  item: VocabularyItem;
  type: QuestionType;
  options: string[];
};

export default function QuizView({ userId, onBack }: Props) {
  const [activeLevel, setActiveLevel] = useState<HSKLevel>('HSK 1');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAiMode, setIsAiMode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateOptions = (correctItem: VocabularyItem, allVocab: VocabularyItem[], type: QuestionType): string[] => {
    const wrongItems = allVocab
      .filter(v => v.id !== correctItem.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    let options: string[] = [];
    if (type === 'reading') {
      options = [...wrongItems.map(v => v.english), correctItem.english];
    } else {
      // For listening and pinyin, options are Hanzi
      options = [...wrongItems.map(v => v.hanzi), correctItem.hanzi];
    }
    
    return options.sort(() => 0.5 - Math.random());
  };

  useEffect(() => {
    if (!isAiMode) {
      startQuiz(activeLevel);
    }
  }, [activeLevel, isAiMode]);

  const startQuiz = (level: HSKLevel) => {
    const vocab = hskVocabulary.filter(v => v.level === level);
    const shuffled = [...vocab].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    const generatedQuestions: QuizQuestion[] = shuffled.map(item => {
      const types: QuestionType[] = ['reading', 'listening', 'pinyin'];
      const type = types[Math.floor(Math.random() * types.length)];
      return {
        item,
        type,
        options: generateOptions(item, vocab, type)
      };
    });

    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const startAiQuiz = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          feature: 'quiz',
          userLevel: activeLevel,
          messages: [
            { role: 'user', content: `Generate 5 multiple-choice questions for ${activeLevel} Mandarin learner. Return ONLY a JSON array of objects with this structure: { "hanzi": "...", "pinyin": "...", "english": "...", "type": "reading" | "pinyin", "options": ["option1", "option2", "option3", "option4"] }. One option MUST match the correct answer (english for reading, hanzi for pinyin). Focus strictly on ${activeLevel} vocabulary and grammar.` }
          ]
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      // Clean the response if it contains markdown markers
      const text = data.content.replace(/```json\n?|\n?```/g, '').trim();
      const aiQuestions = JSON.parse(text);

      const formattedQuestions: QuizQuestion[] = aiQuestions.map((q: any) => ({
        item: { id: Math.random(), hanzi: q.hanzi, pinyin: q.pinyin, english: q.english, level: activeLevel },
        type: q.type,
        options: q.options
      }));

      setQuestions(formattedQuestions);
      setCurrentIndex(0);
      setScore(0);
      setShowResult(false);
      setSelectedAnswer(null);
    } catch (err) {
      console.error("AI Quiz error:", err);
      setError("Failed to generate AI questions. Try again or use Standard mode.");
    } finally {
      setIsGenerating(false);
    }
  };

  const [error, setError] = useState<string | null>(null);

  const playAudio = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    window.speechSynthesis.speak(utterance);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return; // Prevent multiple clicks
    
    setSelectedAnswer(answer);
    const currentQ = questions[currentIndex];
    const isCorrect = 
      (currentQ.type === 'reading' && answer === currentQ.item.english) ||
      (currentQ.type !== 'reading' && answer === currentQ.item.hanzi);
    
    const newScore = score + (isCorrect ? 1 : 0);
    if (isCorrect) {
      setScore(newScore);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(i => i + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        saveProgress(activeLevel, newScore, questions.length);
      }
    }, 1500);
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

    data.quizScore = (data.quizScore || 0) + correct;
    data.totalQuizzes = (data.totalQuizzes || 0) + total;

    localStorage.setItem(`progress_${userId}_${level}`, JSON.stringify(data));
  };

  return (
    <div className="min-h-screen bg-surface-secondary text-stone-900 font-sans flex flex-col">
      <header className="bg-white border-b border-stone-200 py-4 px-6 shadow-sm z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
          onClick={onBack}
          title="Back to Dashboard"
          aria-label="Back to dashboard"
          className="p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-all"
        >
          <ArrowLeft size={20} />
        </button>
            <h1 className="text-xl font-bold text-stone-800 tracking-tight">Vocabulary Quiz</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200">
              <button 
                onClick={() => setIsAiMode(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${!isAiMode ? 'bg-white text-stone-800 shadow-sm' : 'text-stone-500'}`}
                title="Standard local mode"
              >
                Standard
              </button>
              <button 
                onClick={() => setIsAiMode(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${isAiMode ? 'bg-red-600 text-white shadow-sm' : 'text-stone-500'}`}
                title="AI dynamic mode"
              >
                <Sparkles size={14} /> AI Mode
              </button>
            </div>
            <HskDropdown 
              value={activeLevel}
              onChange={(val) => setActiveLevel(val as HSKLevel)}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-2xl w-full mx-auto p-6 flex flex-col justify-center">
        {isAiMode && questions.length === 0 && !isGenerating && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 text-center">
            <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
               <Sparkles size={40} className="text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">AI-Powered Quiz</h2>
            <p className="text-stone-500 mb-8">Generate unique, adaptive questions for {activeLevel} level.</p>
            <button 
              onClick={startAiQuiz}
              className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              title="Generate AI Quiz"
            >
              Start AI Quiz
            </button>
          </div>
        )}

        {isGenerating ? (
          <div className="text-center py-20 flex flex-col items-center">
            <Loader2 className="animate-spin text-red-600 mb-4" size={48} />
            <p className="text-stone-600 font-bold text-xl animate-pulse">Generating dynamic questions...</p>
            <p className="text-stone-400 text-sm mt-2">Connecting to Minimax M2.5</p>
          </div>
        ) : error ? (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 text-center">
            <XCircle className="text-red-500 mx-auto mb-4" size={48} />
            <h2 className="text-xl font-bold text-stone-800 mb-2">Oops!</h2>
            <p className="text-stone-500 mb-6">{error}</p>
            <button onClick={isAiMode ? startAiQuiz : () => startQuiz(activeLevel)} className="text-red-600 font-bold underline">Try again</button>
          </div>
        ) : questions.length === 0 ? (
          <div className="text-center text-stone-500">Loading questions...</div>
        ) : showResult ? (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 text-center">
            <div className="bg-emerald-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-200">
              <span className="text-4xl font-bold text-emerald-600">{score}/{questions.length}</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">Quiz Complete!</h2>
            <p className="text-stone-500 mb-8">Great job practicing your {activeLevel} vocabulary.</p>
            
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => startQuiz(activeLevel)}
                className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-red-600/20 hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw size={20} />
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm font-bold text-stone-400 uppercase tracking-wider">Question {currentIndex + 1} of {questions.length}</span>
              <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Score: {score}</span>
            </div>

            <div className="text-center mb-10 min-h-[120px] flex flex-col items-center justify-center">
              {questions[currentIndex].type === 'reading' && (
                <>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <h2 className="text-6xl font-bold text-stone-800">{questions[currentIndex].item.hanzi}</h2>
                    <button 
                      onClick={() => playAudio(questions[currentIndex].item.hanzi)}
                      className="p-3 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      title="Play pronunciation"
                    >
                      <Volume2 size={32} />
                    </button>
                  </div>
                  <p className="text-2xl text-stone-500 font-medium">{questions[currentIndex].item.pinyin}</p>
                </>
              )}
              {questions[currentIndex].type === 'pinyin' && (
                <>
                  <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4">Choose the correct characters for:</p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <h2 className="text-5xl font-bold text-stone-800">{questions[currentIndex].item.pinyin}</h2>
                    <button 
                      onClick={() => playAudio(questions[currentIndex].item.hanzi)}
                      className="p-3 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      title="Play pronunciation"
                    >
                      <Volume2 size={32} />
                    </button>
                  </div>
                </>
              )}
              {questions[currentIndex].type === 'listening' && (
                <>
                  <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-6">Listen and choose the correct characters:</p>
                  <button 
                    onClick={() => playAudio(questions[currentIndex].item.hanzi)}
                    className="w-24 h-24 bg-red-50 text-red-600 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors shadow-sm border border-red-100 mb-4"
                  >
                    <Volume2 size={40} />
                  </button>
                </>
              )}
            </div>

            <div className="space-y-3">
              {questions[currentIndex].options.map((option) => {
                const currentQ = questions[currentIndex];
                const isCorrect = 
                  (currentQ.type === 'reading' && option === currentQ.item.english) ||
                  (currentQ.type !== 'reading' && option === currentQ.item.hanzi);
                const isSelected = option === selectedAnswer;
                
                return (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    disabled={!!selectedAnswer}
                    className={`w-full p-4 rounded-2xl text-lg font-bold transition-all border-2 text-left flex items-center justify-between ${
                      !selectedAnswer 
                        ? 'bg-white border-stone-200 text-stone-700 hover:border-red-400 hover:bg-red-50'
                        : isCorrect
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                          : isSelected
                            ? 'bg-red-50 border-red-500 text-red-700'
                            : 'bg-stone-50 border-stone-200 text-stone-400 opacity-50'
                    }`}
                    title={`Select answer: ${option}`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={currentQ.type !== 'reading' ? 'text-2xl font-bold' : ''}>{option}</span>
                      {selectedAnswer && isCorrect && <CheckCircle2 className="text-emerald-500" />}
                      {selectedAnswer && isSelected && !isCorrect && <XCircle className="text-red-500" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
