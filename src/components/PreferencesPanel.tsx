import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Volume2, FastForward, Play, User } from 'lucide-react';

interface PreferencesProps {
  isOpen: boolean;
  onClose: () => void;
  speakingRate: number;
  setSpeakingRate: (rate: number) => void;
  voiceId: string;
  setVoiceId: (id: string) => void;
  autoPlay: boolean;
  setAutoPlay: (auto: boolean) => void;
}

const VOICES = [
  { id: 'zh-CN-Standard-A', name: 'Standard Female (Soft)', type: 'Female' },
  { id: 'zh-CN-Standard-B', name: 'Standard Male (Clear)', type: 'Male' },
  { id: 'zh-CN-Standard-C', name: 'Narrator (Formal)', type: 'Female' },
  { id: 'zh-CN-Standard-D', name: 'Casual Male (Modern)', type: 'Male' },
];

const PreferencesPanel: React.FC<PreferencesProps> = ({
  isOpen,
  onClose,
  speakingRate,
  setSpeakingRate,
  voiceId,
  setVoiceId,
  autoPlay,
  setAutoPlay
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-md z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-[70] flex flex-col border-l border-stone-200"
          >
            <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
              <div className="flex items-center gap-2">
                <Settings className="text-stone-400" size={20} />
                <h2 className="font-bold text-stone-800 tracking-tight">Tutor Settings</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-stone-200/50 rounded-xl transition-colors text-stone-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* SPEAKING RATE */}
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-stone-800 font-bold text-sm uppercase tracking-wider">
                    <FastForward size={16} className="text-accent-primary" />
                    <span>Speaking Speed</span>
                  </div>
                  <span className="bg-accent-primary/10 text-accent-primary px-2 py-1 rounded-lg text-xs font-black">
                    {speakingRate.toFixed(1)}x
                  </span>
                </div>
                <input 
                  type="range"
                  min="0.5"
                  max="1.5"
                  step="0.1"
                  value={speakingRate}
                  onChange={(e) => setSpeakingRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-accent-primary"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-bold uppercase tracking-widest px-1">
                  <span>Slow</span>
                  <span>Normal</span>
                  <span>Fast</span>
                </div>
              </section>

              {/* VOICE SELECTION */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-stone-800 font-bold text-sm uppercase tracking-wider">
                  <User size={16} className="text-indigo-600" />
                  <span>AI Voice Persona</span>
                </div>
                <div className="space-y-2">
                  {VOICES.map((voice) => (
                    <button
                      key={voice.id}
                      onClick={() => setVoiceId(voice.id)}
                      className={`w-full p-4 rounded-2xl text-left transition-all border ${
                        voiceId === voice.id 
                          ? 'bg-indigo-50 border-indigo-200 shadow-sm' 
                          : 'bg-white border-stone-100 hover:border-stone-200'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className={`font-bold text-sm ${voiceId === voice.id ? 'text-indigo-700' : 'text-stone-700'}`}>
                          {voice.name}
                        </span>
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                          voiceId === voice.id ? 'bg-indigo-200/50 text-indigo-700' : 'bg-stone-100 text-stone-400'
                        }`}>
                          {voice.type}
                        </span>
                      </div>
                      <p className="text-[10px] text-stone-400">High-fidelity neural synthesis</p>
                    </button>
                  ))}
                </div>
              </section>

              {/* AUTO PLAY */}
              <section className="bg-stone-50 rounded-3xl p-6 border border-stone-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-stone-400 shadow-sm">
                      <Play size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800 text-sm">Auto-Playback</h3>
                      <p className="text-[10px] text-stone-500">Play audio immediately</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setAutoPlay(!autoPlay)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${
                      autoPlay ? 'bg-accent-primary' : 'bg-stone-200'
                    }`}
                  >
                    <motion.div 
                      animate={{ x: autoPlay ? 26 : 4 }}
                      className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                    />
                  </button>
                </div>
              </section>
            </div>

            <div className="p-6 bg-stone-50 border-t border-stone-200">
              <button 
                onClick={onClose}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95"
              >
                Apply Settings
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PreferencesPanel;
