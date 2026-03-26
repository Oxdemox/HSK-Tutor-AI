import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, BookOpen, ChevronRight, CheckCircle2, Play, Info, HelpCircle, Volume2 } from 'lucide-react';
import { curriculumData, Module, Lesson } from '../data/curriculum';

type Props = {
  hskLevel: string;
  onBack: () => void;
  onStartLesson: (lesson: Lesson) => void;
};

export default function CurriculumView({ hskLevel, onBack, onStartLesson }: Props) {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const modules = curriculumData[hskLevel] || [];

  if (selectedLesson) {
    return (
      <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
        <header className="bg-white border-b border-stone-200 py-4 px-6 shadow-sm sticky top-0 z-40">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSelectedLesson(null)}
                className="p-2 -ml-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <h1 className="text-lg font-bold text-stone-800 tracking-tight">{selectedLesson.title}</h1>
                <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">{hskLevel} • {selectedModule?.title}</p>
              </div>
            </div>
            <button 
              onClick={() => onStartLesson(selectedLesson)}
              className="bg-red-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <Play size={16} fill="currentColor" />
              Practice with AI
            </button>
          </div>
        </header>

        <main className="flex-1 max-w-4xl w-full mx-auto p-6 space-y-8">
          {/* Vocabulary Section */}
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
                <BookOpen size={20} />
              </div>
              <h2 className="text-xl font-bold text-stone-800">Vocabulary</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedLesson.vocabulary.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl border border-stone-100 group hover:border-amber-200 transition-colors">
                  <div>
                    <p className="text-2xl font-bold text-stone-900">{item.word}</p>
                    <p className="text-sm text-stone-500 font-medium">{item.pinyin}</p>
                  </div>
                  <p className="text-stone-600 font-medium">{item.translation}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Grammar Section */}
          {selectedLesson.grammar.length > 0 && (
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                  <Info size={20} />
                </div>
                <h2 className="text-xl font-bold text-stone-800">Grammar</h2>
              </div>
              <div className="space-y-8">
                {selectedLesson.grammar.map((point, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-lg font-bold text-stone-800 border-l-4 border-blue-500 pl-4">{point.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{point.explanation}</p>
                    <div className="bg-stone-50 rounded-2xl p-6 space-y-4">
                      {point.examples.map((ex, eIdx) => (
                        <div key={eIdx} className="space-y-1">
                          <p className="text-xl font-bold text-stone-900">{ex.chinese}</p>
                          <p className="text-sm text-stone-500">{ex.pinyin}</p>
                          <p className="text-stone-600 italic">{ex.english}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Exercises Section */}
          {selectedLesson.exercises.length > 0 && (
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
                  <HelpCircle size={20} />
                </div>
                <h2 className="text-xl font-bold text-stone-800">Practice Exercises</h2>
              </div>
              <div className="space-y-6">
                {selectedLesson.exercises.map((ex, idx) => (
                  <div key={idx} className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                    <p className="font-bold text-stone-800 mb-4">{ex.question}</p>
                    {ex.type === 'multiple-choice' && ex.options && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {ex.options.map((opt, oIdx) => (
                          <button 
                            key={oIdx}
                            className="p-3 bg-white border border-stone-200 rounded-xl text-left hover:border-emerald-500 hover:bg-emerald-50 transition-all font-medium"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                    {ex.type === 'translation' && (
                      <input 
                        type="text" 
                        placeholder="Type your answer here..."
                        className="w-full p-3 bg-white border border-stone-200 rounded-xl outline-none focus:border-emerald-500 transition-all"
                      />
                    )}
                    {ex.type === 'speaking' && (
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-emerald-700 transition-colors">
                          <Volume2 size={18} />
                          Record Answer
                        </button>
                        <p className="text-xs text-stone-400">Practice speaking this phrase.</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
      <header className="bg-white border-b border-stone-200 py-4 px-6 shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 -ml-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-xl text-white">
              <BookOpen size={20} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-stone-800 tracking-tight">{hskLevel} Curriculum</h1>
              <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Modules & Lessons</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-6">
        <div className="space-y-6">
          {modules.map((module, mIdx) => {
            // Calculate the starting number for this module's lessons
            const previousLessonsCount = modules.slice(0, mIdx).reduce((acc, m) => acc + m.lessons.length, 0);
            
            return (
              <div key={module.id} className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden">
                <div className="p-6 bg-stone-50 border-b border-stone-100 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-stone-800">{module.title}</h2>
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{module.lessons.length} Lessons</span>
                </div>
                <div className="divide-y divide-stone-100">
                  {module.lessons.map((lesson, lIdx) => (
                    <button 
                      key={lesson.id}
                      onClick={() => {
                        setSelectedModule(module);
                        setSelectedLesson(lesson);
                      }}
                      className="w-full p-6 flex items-center justify-between hover:bg-stone-50 transition-colors text-left group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold group-hover:bg-red-600 group-hover:text-white transition-colors">
                          {previousLessonsCount + lIdx + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-stone-800 group-hover:text-red-600 transition-colors">{lesson.title}</h3>
                          <p className="text-sm text-stone-500 line-clamp-1">{lesson.description}</p>
                        </div>
                      </div>
                      <ChevronRight size={20} className="text-stone-300 group-hover:text-red-600 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}

          {modules.length === 0 && (
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-stone-200 text-center">
              <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-400">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">No Curriculum Found</h3>
              <p className="text-stone-500">We are still building the curriculum for {hskLevel}. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
