import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { hskGrammar, HSKLevel, GrammarPoint } from '../data/hskGrammar';

interface GrammarViewProps {
  level: HSKLevel;
  onLevelChange: (level: HSKLevel) => void;
}

export default function GrammarView({ level, onLevelChange }: GrammarViewProps) {
  const [expandedPoint, setExpandedPoint] = useState<string | null>(null);

  const levels: HSKLevel[] = ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'];
  const grammarPoints = hskGrammar[level] || [];

  const togglePoint = (id: string) => {
    setExpandedPoint(prev => prev === id ? null : id);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="bg-white border-b border-slate-200 p-4 sticky top-0 z-10">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-slate-800">Grammar Guide</h2>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {levels.map((l) => (
            <button
              key={l}
              onClick={() => onLevelChange(l)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                level === l
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {grammarPoints.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            No grammar points available for {level} yet.
          </div>
        ) : (
          grammarPoints.map((point: GrammarPoint) => (
            <div 
              key={point.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => togglePoint(point.id)}
                className="w-full px-4 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors text-left"
              >
                <div>
                  <h3 className="text-lg font-medium text-slate-800">{point.title}</h3>
                  <p className="text-sm text-indigo-600 font-mono mt-1">{point.structure}</p>
                </div>
                {expandedPoint === point.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              
              <AnimatePresence>
                {expandedPoint === point.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 pb-4 pt-2 border-t border-slate-100">
                      <div className="mb-6 space-y-2">
                        <p className="text-slate-800 font-medium">{point.explanation.chinese}</p>
                        <p className="text-indigo-600 font-mono text-sm">{point.explanation.pinyin}</p>
                        <p className="text-slate-600">{point.explanation.english}</p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Examples</h4>
                        {point.examples.map((example, index) => (
                          <div key={index} className="bg-slate-50 rounded-lg p-3">
                            <p className="text-lg text-slate-800 font-medium">{example.chinese}</p>
                            <p className="text-sm text-indigo-600 font-mono mt-1">{example.pinyin}</p>
                            <p className="text-sm text-slate-600 mt-1">{example.english}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
