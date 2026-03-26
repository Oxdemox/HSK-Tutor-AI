import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, RefreshCw, Loader2, Volume2, CheckCircle2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import HskDropdown from './HskDropdown';

type Props = {
  onBack: () => void;
  hskLevel: string;
};

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

type ReadingContent = {
  title: string;
  chinese: string;
  pinyin: string;
  english: string;
  questions: Question[];
};

export default function ReadingView({ onBack, hskLevel: initialHskLevel }: Props) {
  const [hskLevel, setHskLevel] = useState(initialHskLevel);
  const [content, setContent] = useState<ReadingContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const generateContent = async () => {
    setIsLoading(true);
    setContent(null);
    setSelectedAnswers({});
    setShowResults(false);

    try {
      const systemPrompt = `You are a Chinese language teacher creating reading exercises for ${hskLevel} students.
Generate a short reading comprehension exercise.
Return ONLY valid JSON (no markdown) with this structure:
{
  "title": "...",
  "chinese": "...",
  "pinyin": "...",
  "english": "...",
  "questions": [
    { "question": "...", "options": ["A","B","C","D"], "answer": 0, "explanation": "..." }
  ]
}`;

      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          feature: 'quiz',
          userLevel: hskLevel,
          messages: [{ role: 'user', content: `Generate an HSK ${hskLevel} reading exercise. Return ONLY valid JSON: { "title": "...", "chinese": "...", "pinyin": "...", "english": "...", "questions": [ { "question": "...", "options": ["A","B","C","D"], "answer": 0, "explanation": "..." } ] }` }],
        }),
      });

      if (!res.ok) throw new Error(`Proxy error ${res.status}`);

      const data = await res.json();
      const raw = (data.content as string).replace(/```json\n?|```/g, '').trim();
      const parsed = JSON.parse(raw);
      setContent(parsed);
    } catch (error) {
      console.error('Error generating reading content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generateContent();
  }, [hskLevel]);

  const handleOptionSelect = (qIdx: number, oIdx: number) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const playStory = () => {
    if (!content) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(content.chinese);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.8; // Slightly slower for learners
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-stone-900 font-sans flex flex-col">
      <header className="bg-white border-b border-stone-200 py-4 px-6 shadow-sm z-10 sticky top-0">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 -ml-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-colors"
              title="Back to menu"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-stone-800 tracking-tight">Reading Practice</h1>
          </div>
          <HskDropdown 
            value={hskLevel as any}
            onChange={(val) => setHskLevel(val)}
          />
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-6 flex flex-col gap-6">
        {isLoading ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 py-20">
            <Loader2 className="animate-spin text-red-600" size={48} />
            <p className="text-stone-500 font-medium">Generating a story for {hskLevel}...</p>
          </div>
        ) : content ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Story Section */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-stone-800 text-center flex-1">{content.title}</h2>
                <button 
                  onClick={playStory}
                  className="p-3 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-colors shadow-sm"
                  title="Listen to story"
                >
                  <Volume2 size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <p className="text-3xl leading-relaxed text-stone-800 font-medium mb-4 tracking-wide">
                    {content.chinese}
                  </p>
                  <p className="text-lg text-stone-500 italic font-mono mb-4">
                    {content.pinyin}
                  </p>
                  <div className="pt-4 border-top border-stone-200">
                    <p className="text-stone-600 leading-relaxed">
                      {content.english}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button 
                  onClick={generateContent}
                  className="flex items-center gap-2 px-6 py-3 bg-stone-100 text-stone-700 rounded-xl font-bold hover:bg-stone-200 transition-colors"
                >
                  <RefreshCw size={18} />
                  <span>Generate New Story</span>
                </button>
              </div>
            </div>

            {/* Questions Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                <CheckCircle2 size={24} className="text-emerald-600" />
                <span>Comprehension Questions</span>
              </h3>

              {content.questions.map((q, qIdx) => (
                <div key={qIdx} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
                  <p className="text-lg font-bold text-stone-800 mb-4">{qIdx + 1}. {q.question}</p>
                  <div className="grid grid-cols-1 gap-3">
                    {q.options.map((option, oIdx) => {
                      const isSelected = selectedAnswers[qIdx] === oIdx;
                      const isCorrect = q.answer === oIdx;
                      
                      let bgColor = 'bg-stone-50 border-stone-100 hover:bg-stone-100';
                      let textColor = 'text-stone-700';
                      
                      if (showResults) {
                        if (isCorrect) {
                          bgColor = 'bg-emerald-50 border-emerald-200';
                          textColor = 'text-emerald-700';
                        } else if (isSelected) {
                          bgColor = 'bg-red-50 border-red-200';
                          textColor = 'text-red-700';
                        }
                      } else if (isSelected) {
                        bgColor = 'bg-red-50 border-red-200';
                        textColor = 'text-red-700';
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleOptionSelect(qIdx, oIdx)}
                          disabled={showResults}
                          className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${bgColor} ${textColor}`}
                        >
                          <span className="font-medium">{option}</span>
                          {showResults && isCorrect && <CheckCircle2 size={18} />}
                          {showResults && isSelected && !isCorrect && <XCircle size={18} />}
                        </button>
                      );
                    })}
                  </div>
                  {showResults && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 p-4 bg-blue-50 rounded-xl text-blue-800 text-sm"
                    >
                      <p className="font-bold mb-1">Explanation:</p>
                      <p>{q.explanation}</p>
                    </motion.div>
                  )}
                </div>
              ))}

              {!showResults && (
                <button 
                  onClick={checkAnswers}
                  disabled={Object.keys(selectedAnswers).length < content.questions.length}
                  className="w-full py-4 bg-red-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-red-200 hover:bg-red-700 transition-all disabled:opacity-50 disabled:shadow-none"
                >
                  Check Answers
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 py-20">
            <p className="text-stone-500">Failed to load content. Please try again.</p>
            <button onClick={generateContent} className="text-red-600 font-bold hover:underline">Retry</button>
          </div>
        )}
      </main>
    </div>
  );
}
