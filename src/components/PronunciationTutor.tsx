'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Loader2, Sparkles, ArrowLeft, Volume2, Languages, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Props = {
  hskLevel: string;
  onBack: () => void;
};

type Feedback = {
  text: string;
  pinyin?: string;
  corrections?: string;
  score?: number;
};

export default function PronunciationTutor({ hskLevel, onBack }: Props) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Web Speech API
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'zh-CN';

      recognitionRef.current.onresult = (event: any) => {
        const current = event.resultIndex;
        const resultTranscript = event.results[current][0].transcript;
        setTranscript(resultTranscript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        // Automatically process once listening ends if transcript isn't empty
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        setError("Microphone error. Please ensure permissions are granted.");
        setIsListening(false);
      };
    } else {
      setError("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
    }

    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
    };
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setError(null);
      setTranscript('');
      setFeedback(null);
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const getAiFeedback = async () => {
    if (!transcript) return;
    setIsProcessing(true);
    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          feature: 'pronunciation',
          userLevel: hskLevel,
          messages: [
            { role: 'user', content: `Analyze the pronunciation of: "${transcript}". Provide HSK ${hskLevel} level feedback on: 1. Pinyin accuracy, 2. Tone, 3. Guidance. Score 1-10.` }
          ]
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setFeedback({ text: data.content });
    } catch (err) {
      console.error("Feedback error:", err);
      setError("Failed to get AI feedback. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const speakText = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-surface-secondary flex flex-col">
      <header className="bg-white border-b border-surface-sunken py-4 px-6 shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack} 
              className="p-2 -ml-2 text-text-tertiary hover:text-text-primary hover:bg-surface-sunken rounded-full transition-colors"
              title="Back"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-lg font-bold text-text-primary tracking-tight">Pronunciation Tutor</h1>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-lg text-xs font-bold text-stone-500 uppercase tracking-wider">
            {hskLevel}
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-6 flex flex-col gap-6">
        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-surface-sunken flex flex-col items-center justify-center text-center relative overflow-hidden backdrop-blur-3xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-20" />
          
          <div className="relative z-10 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={isListening ? 'listening' : 'idle'}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="flex flex-col items-center"
              >
                <motion.button
                  onClick={toggleListening}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-32 h-32 rounded-full flex items-center justify-center shadow-2xl transition-all relative ${isListening ? 'bg-red-600 text-white animate-pulse' : 'bg-text-primary text-white'}`}
                  title={isListening ? "Stop Recording" : "Start Speaking"}
                >
                  {isListening ? <Mic size={48} /> : <MicOff size={48} />}
                  {isListening && (
                    <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping" />
                  )}
                </motion.button>

                <h2 className="text-2xl font-bold mt-8 mb-2">
                  {isListening ? "Listening..." : "Tap to Speak"}
                </h2>
                <p className="text-text-tertiary max-w-xs mx-auto">Speak a word or sentence in Mandarin to get instant AI feedback.</p>
              </motion.div>
            </AnimatePresence>

            {transcript && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-surface-sunken rounded-2xl border border-surface-sunken max-w-lg mx-auto"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest text-left">Your Speech</span>
                  <button onClick={() => speakText(transcript)} className="text-text-tertiary hover:text-accent-primary p-1" title="Speak transcript"><Volume2 size={16} /></button>
                </div>
                <p className="text-xl font-bold text-text-primary mb-4 chinese">{transcript}</p>
                
                {!isListening && !feedback && !isProcessing && (
                  <button
                    onClick={getAiFeedback}
                    className="w-full bg-slate-900 text-white py-4 rounded-4xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg active:scale-98"
                    title="Get AI Feedback"
                  >
                    <Sparkles size={18} /> Get AI Feedback
                  </button>
                )}
              </motion.div>
            )}

            {isProcessing && (
              <div className="mt-8 flex flex-col items-center">
                 <Loader2 className="animate-spin text-accent-primary mb-2" size={32} />
                 <p className="text-text-tertiary text-sm animate-pulse">Trinity is analyzing your pronunciation...</p>
              </div>
            )}

            {error && (
              <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-2 justify-center">
                <MicOff size={16} /> {error}
              </div>
            )}
          </div>
        </div>

        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 bg-white rounded-4xl p-8 shadow-sm border border-surface-sunken overflow-y-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent-soft p-2 rounded-xl text-accent-primary">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-primary">AI Evaluation</h3>
            </div>
            
            <div className="prose prose-stone max-w-none">
               <div className="whitespace-pre-wrap text-text-secondary leading-relaxed">
                  {feedback.text}
               </div>
            </div>

            <button 
              onClick={toggleListening}
              className="mt-8 px-6 py-2.5 bg-stone-100 text-stone-800 rounded-xl font-bold hover:bg-stone-200 transition-colors flex items-center gap-2"
            >
               Practice Another
            </button>
          </motion.div>
        )}
      </main>
    </div>
  );
}
