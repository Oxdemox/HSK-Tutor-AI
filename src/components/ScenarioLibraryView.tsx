import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Coffee, Plane, Briefcase, Hospital, Home, ChevronRight, Sparkles } from 'lucide-react';
import { SCENARIOS, Scenario } from '../data/scenarios';

interface Props {
  onBack: () => void;
  onSelectScenario: (scenario: Scenario) => void;
}

const ICON_MAP: Record<string, any> = {
  '☕': Coffee,
  '✈️': Plane,
  '💼': Briefcase,
  '🏥': Hospital,
  '🏠': Home
};

export default function ScenarioLibraryView({ onBack, onSelectScenario }: Props) {
  return (
    <div className="min-h-screen bg-surface-primary text-text-primary flex flex-col p-6">
      <div className="max-w-5xl w-full mx-auto space-y-10">
        <header className="flex items-center gap-6">
          <button 
            onClick={onBack}
            className="p-3 bg-white rounded-2xl border border-surface-sunken shadow-sm text-text-tertiary hover:text-text-primary transition-all"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-3xl font-black tracking-tight">Practice Scenarios</h1>
            <p className="text-sm text-text-tertiary font-bold uppercase tracking-widest">Situational Mastery</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCENARIOS.map((scenario, index) => {
            const IconComponent = ICON_MAP[scenario.icon] || BookOpen;
            return (
              <motion.button
                key={scenario.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onSelectScenario(scenario)}
                className="bg-white p-6 rounded-5xl border border-stone-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all group text-left flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-stone-50 rounded-3xl flex items-center justify-center text-stone-400 group-hover:bg-accent-primary group-hover:text-white transition-colors shadow-inner">
                    <IconComponent size={32} />
                  </div>
                  <span className="bg-stone-100 text-stone-500 text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest">
                    {scenario.targetLevel}
                  </span>
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-black text-stone-800 group-hover:text-accent-primary transition-colors leading-tight">
                    {scenario.title}
                  </h3>
                  <p className="text-sm text-stone-500 font-medium leading-relaxed">
                    {scenario.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-50 flex items-center justify-between">
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest shrink-0">
                    {scenario.category}
                  </span>
                  <div className="flex items-center gap-2 text-accent-primary opacity-0 group-hover:opacity-100 transition-all font-black text-xs uppercase tracking-tighter">
                    <span>Start Practice</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </motion.button>
            );
          })}

          {/* COMING SOON CARD */}
          <div className="bg-white/50 p-6 rounded-5xl border border-dashed border-stone-200 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
            <div className="w-16 h-16 bg-stone-50 rounded-3xl flex items-center justify-center text-stone-300">
               <Sparkles size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-400">More Scenarios</h3>
              <p className="text-xs text-stone-400 font-medium mt-1">Generated daily by AI Scholar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
