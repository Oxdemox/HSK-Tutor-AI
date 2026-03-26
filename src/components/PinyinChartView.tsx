import React, { useState } from 'react';
import { ArrowLeft, Volume2, Info } from 'lucide-react';
import { motion } from 'motion/react';

type Props = {
  onBack: () => void;
};

const INITIALS = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w'];
const FINALS = ['a', 'o', 'e', 'i', 'u', 'ü', 'ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er', 'an', 'en', 'in', 'un', 'ün', 'ang', 'eng', 'ing', 'ong'];

const SOUND_MAPPING: Record<string, string> = {
  // Initials (using helper vowels for clarity: bo, po, mo, fo, de, te, ne, le...)
  'b': '播', 'p': '泼', 'm': '摸', 'f': '佛',
  'd': '得', 't': '特', 'n': '讷', 'l': '勒',
  'g': '哥', 'k': '科', 'h': '喝',
  'j': '鸡', 'q': '七', 'x': '希',
  'zh': '知', 'ch': '吃', 'sh': '师', 'r': '日',
  'z': '资', 'c': '疵', 's': '思',
  'y': '衣', 'w': '乌',
  // Finals (using tone 1 where possible for pure sound)
  'a': '阿', 'o': '喔', 'e': '婀', 'i': '衣', 'u': '屋', 'ü': '淤',
  'ai': '哀', 'ei': '诶', 'ui': '威', 'ao': '凹', 'ou': '欧', 'iu': '优',
  'ie': '耶', 'üe': '约', 'er': '儿', 'an': '安', 'en': '恩', 'in': '因',
  'un': '温', 'ün': '晕', 'ang': '肮', 'eng': '亨', 'ing': '英', 'ong': '轰',
  
  // Tone Recognition Syllables (Mapping to characters ensures 100% accurate tones)
  // ma
  'mā': '妈', 'má': '麻', 'mǎ': '马', 'mà': '骂',
  // ba
  'bā': '八', 'bá': '拔', 'bǎ': '把', 'bà': '爸',
  // li
  'lī': '哩', 'lí': '离', 'lǐ': '李', 'lì': '利',
  // fu
  'fū': '夫', 'fú': '扶', 'fǔ': '府', 'fù': '父',
  // tang
  'tāng': '汤', 'táng': '糖', 'tǎng': '躺', 'tàng': '烫',
  // shi
  'shī': '师', 'shí': '十', 'shǐ': '史', 'shì': '是',
  // yi
  'yī': '一', 'yí': '移', 'yǐ': '已', 'yì': '意',
  // wu
  'wū': '屋', 'wú': '无', 'wǔ': '五', 'wù': '误',
  // ni
  'nī': '妮', 'ní': '尼', 'nǐ': '你', 'nì': '逆',
  // ta
  'tā': '他', 'tá': '沓', 'tǎ': '塔', 'tà': '踏',
  // wo
  'wō': '喔', 'wó': '喔', 'wǒ': '我', 'wò': '卧',
  // da
  'dā': '搭', 'dá': '答', 'dǎ': '打', 'dà': '大',
  // ge
  'gē': '哥', 'gé': '格', 'gě': '葛', 'gè': '个',
  // he
  'hē': '喝', 'hé': '河', 'hě': '核', 'hè': '贺',
  // la
  'lā': '拉', 'lá': '乏', 'lǎ': '喇', 'là': '辣',
  // na
  'nā': '那', 'ná': '拿', 'nǎ': '哪', 'nà': '那',
  // mi
  'mī': '咪', 'mí': '迷', 'mǐ': '米', 'mì': '密'
};

const TONES = [
  { symbol: 'ˉ', number: 1 },
  { symbol: 'ˊ', number: 2 },
  { symbol: 'ˇ', number: 3 },
  { symbol: 'ˋ', number: 4 }
];

const TONE_MARKS: Record<string, string[]> = {
  'a': ['ā', 'á', 'ǎ', 'à'],
  'e': ['ē', 'é', 'ě', 'è'],
  'o': ['ō', 'ó', 'ǒ', 'ò'],
  'i': ['ī', 'í', 'ǐ', 'ì'],
  'u': ['ū', 'ú', 'ǔ', 'ù'],
  'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ']
};

const getPinyinWithTone = (initial: string, final: string, tone: number): string => {
  if (!initial && !final) return '';
  const combined = final;
  const toneIdx = tone - 1;
  
  let markedFinal = final;
  if (final.includes('a')) {
    markedFinal = final.replace('a', TONE_MARKS['a'][toneIdx]);
  } else if (final.includes('e')) {
    markedFinal = final.replace('e', TONE_MARKS['e'][toneIdx]);
  } else if (final.includes('o')) {
    markedFinal = final.replace('o', TONE_MARKS['o'][toneIdx]);
  } else if (final.includes('ui')) {
    markedFinal = final.replace('i', TONE_MARKS['i'][toneIdx]);
  } else if (final.includes('iu')) {
    markedFinal = final.replace('u', TONE_MARKS['u'][toneIdx]);
  } else if (final.includes('i')) {
    markedFinal = final.replace('i', TONE_MARKS['i'][toneIdx]);
  } else if (final.includes('u')) {
    markedFinal = final.replace('u', TONE_MARKS['u'][toneIdx]);
  } else if (final.includes('ü')) {
    markedFinal = final.replace('ü', TONE_MARKS['ü'][toneIdx]);
  }

  return initial + markedFinal;
};

const TONE_DESCRIPTIONS = [
  { 
    name: '1st Tone', 
    symbol: 'mā', 
    desc: 'High and level', 
    example: 'mā', 
    meaning: 'Mother (妈)' 
  },
  { 
    name: '2nd Tone', 
    symbol: 'má', 
    desc: 'Rising', 
    example: 'má', 
    meaning: 'Hemp (麻)' 
  },
  { 
    name: '3rd Tone', 
    symbol: 'mǎ', 
    desc: 'Falling then rising', 
    example: 'mǎ', 
    meaning: 'Horse (马)' 
  },
  { 
    name: '4th Tone', 
    symbol: 'mà', 
    desc: 'Falling', 
    example: 'mà', 
    meaning: 'Scold (骂)' 
  }
];

export default function PinyinChartView({ onBack }: Props) {
  // Quiz state
  const [quizSyllable, setQuizSyllable] = useState<{ syllable: string, tone: number } | null>(null);
  const [quizFeedback, setQuizFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [userGuess, setUserGuess] = useState<number | null>(null);
  const [quizStats, setQuizStats] = useState({ correct: 0, total: 0 });

  const QUIZ_SYLLABLES = ['ma', 'ba', 'li', 'fu', 'tang', 'shi', 'yi', 'wu', 'ni', 'ta', 'wo', 'da', 'ge', 'he', 'la', 'na', 'mi'];

  const startNewQuiz = () => {
    const syllable = QUIZ_SYLLABLES[Math.floor(Math.random() * QUIZ_SYLLABLES.length)];
    const tone = Math.floor(Math.random() * 4) + 1;
    setQuizSyllable({ syllable, tone });
    setQuizFeedback(null);
    setUserGuess(null);
    
    // Play the sound automatically
    setTimeout(() => {
      playSyllable(syllable, tone);
    }, 100);
  };

  const playSyllable = (syllable: string, tone: number) => {
    // Simple logic to find where to put the tone for the quiz
    let initial = '';
    let final = syllable;
    
    // Basic split for common syllables
    const initials = ['zh', 'ch', 'sh', 'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'r', 'z', 'c', 's', 'y', 'w'];
    for (const i of initials) {
      if (syllable.startsWith(i)) {
        initial = i;
        final = syllable.substring(i.length);
        break;
      }
    }
    
    playSound(getPinyinWithTone(initial, final, tone));
  };

  const handleQuizGuess = (guess: number) => {
    if (!quizSyllable || quizFeedback) return;

    setUserGuess(guess);
    const isCorrect = guess === quizSyllable.tone;
    setQuizFeedback(isCorrect ? 'correct' : 'incorrect');
    setQuizStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
  };

  // Pre-load voices for better reliability
  React.useEffect(() => {
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const playSound = (text: string) => {
    window.speechSynthesis.cancel();
    
    // Use mapping for single initials/finals or tone examples
    const speechText = SOUND_MAPPING[text] || text;
    
    // Create utterance
    const utterance = new SpeechSynthesisUtterance(speechText);
    
    // Find the best available Chinese voice
    const voices = window.speechSynthesis.getVoices();
    
    // Priority: Google Chinese -> Any zh-CN -> Any zh
    const zhVoice = voices.find(v => v.lang.toLowerCase().includes('zh-cn') && v.name.includes('Google')) || 
                    voices.find(v => v.lang.toLowerCase().includes('zh-cn')) ||
                    voices.find(v => v.lang.toLowerCase().startsWith('zh'));
    
    if (zhVoice) {
      utterance.voice = zhVoice;
    }
    
    utterance.lang = 'zh-CN';
    // Slightly faster for single sounds to avoid distortion, slower for tones/quiz
    const isShortSound = text.length <= 3 && (INITIALS.includes(text) || FINALS.includes(text));
    utterance.rate = isShortSound ? 0.8 : 0.6; 
    utterance.pitch = isShortSound ? 1.1 : 1.0; // Slightly higher pitch for short sounds for better clarity
    utterance.volume = 1.0;
    
    // Small timeout to ensure cancel() has taken effect in some browsers
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 50);
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
            <h1 className="text-xl font-bold text-stone-800 tracking-tight">Pinyin Chart</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-6 space-y-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center gap-2 text-amber-600 mb-6 bg-amber-50 p-4 rounded-2xl border border-amber-100">
            <Info size={20} />
            <p className="text-sm font-medium">Click on any sound to hear its pronunciation.</p>
          </div>

          <div className="space-y-8">
            {/* Tones Section */}
            <div className="pb-8 border-b border-stone-100">
              <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
                Learn the 4 Tones (声调)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TONE_DESCRIPTIONS.map((tone, idx) => (
                  <button
                    key={idx}
                    onClick={() => playSound(tone.example)} // This will use the character mapping (妈, 麻, 马, 骂)
                    className="flex items-center gap-4 p-4 bg-stone-50 border border-stone-100 rounded-2xl hover:bg-blue-50 hover:border-blue-100 transition-all group text-left"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl font-bold text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                      {tone.symbol}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-stone-800">{tone.name}</h3>
                        <Volume2 size={16} className="text-stone-400 group-hover:text-blue-600" />
                      </div>
                      <p className="text-xs text-stone-500">{tone.desc}</p>
                      <p className="text-xs font-medium text-stone-400 mt-1">Example: {tone.example} ({tone.meaning})</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Initials Section */}
            <div>
              <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-red-600 rounded-full"></span>
                Initials (声母)
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                {INITIALS.map(initial => (
                  <button
                    key={initial}
                    onClick={() => playSound(initial)}
                    className="aspect-square flex items-center justify-center bg-stone-50 border border-stone-100 rounded-xl text-xl font-bold text-stone-700 hover:bg-red-50 hover:text-red-600 hover:border-red-100 active:scale-95 transition-all shadow-sm"
                  >
                    {initial}
                  </button>
                ))}
              </div>
            </div>

            {/* Finals Section */}
            <div>
              <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-emerald-600 rounded-full"></span>
                Finals (韵母)
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                {FINALS.map(final => (
                  <button
                    key={final}
                    onClick={() => playSound(final)}
                    className="aspect-square flex items-center justify-center bg-stone-50 border border-stone-100 rounded-xl text-xl font-bold text-stone-700 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-100 active:scale-95 transition-all shadow-sm"
                  >
                    {final}
                  </button>
                ))}
              </div>
            </div>

            {/* Quiz Section */}
            <div className="pt-8 border-t border-stone-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="w-2 h-6 bg-amber-500 rounded-full"></span>
                  Tone Recognition Challenge
                </h2>
                {quizStats.total > 0 && (
                  <div className="text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                    Score: <span className="text-emerald-600">{quizStats.correct}</span> / {quizStats.total}
                  </div>
                )}
              </div>

              {!quizSyllable ? (
                <div className="bg-stone-50 border border-stone-100 rounded-3xl p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Volume2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800">Ready to test your ears?</h3>
                  <p className="text-stone-500 max-w-sm mx-auto">We'll play a sound, and you identify which of the 4 tones it is.</p>
                  <button 
                    onClick={startNewQuiz}
                    className="px-8 py-3 bg-red-600 text-white rounded-2xl font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all"
                  >
                    Start Challenge
                  </button>
                </div>
              ) : (
                <div className="bg-stone-50 border border-stone-100 rounded-3xl p-8 space-y-8">
                  <div className="flex flex-col items-center gap-4">
                    <button 
                      onClick={() => playSyllable(quizSyllable.syllable, quizSyllable.tone)}
                      className="w-20 h-20 bg-white border-2 border-red-100 text-red-600 rounded-full flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all group"
                    >
                      <Volume2 size={32} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <p className="text-sm font-bold text-stone-400 uppercase tracking-widest">Listen Carefully</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {TONES.map(tone => (
                      <button
                        key={tone.number}
                        onClick={() => handleQuizGuess(tone.number)}
                        disabled={!!quizFeedback}
                        className={`aspect-square flex flex-col items-center justify-center rounded-2xl border-2 transition-all p-4 ${
                          quizFeedback 
                            ? tone.number === quizSyllable.tone
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm'
                              : tone.number === userGuess
                                ? 'bg-red-50 border-red-500 text-red-700'
                                : 'bg-white border-stone-100 text-stone-300 opacity-50'
                            : 'bg-white border-stone-100 text-stone-700 hover:border-red-200 hover:bg-red-50/30'
                        }`}
                      >
                        <span className="text-3xl font-bold mb-1">{tone.symbol}</span>
                        <span className="text-xs font-bold opacity-60 uppercase">Tone {tone.number}</span>
                      </button>
                    ))}
                  </div>

                  {quizFeedback && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center gap-4 pt-4"
                    >
                      <div className={`text-lg font-bold ${quizFeedback === 'correct' ? 'text-emerald-600' : 'text-red-600'}`}>
                        {quizFeedback === 'correct' ? '✨ Correct! Well done.' : '❌ Not quite right.'}
                      </div>
                      <div className="text-stone-500 text-sm">
                        The sound was <span className="font-bold text-stone-800">{getPinyinWithTone('', quizSyllable.syllable, quizSyllable.tone)}</span>
                      </div>
                      <button 
                        onClick={startNewQuiz}
                        className="px-8 py-3 bg-stone-800 text-white rounded-2xl font-bold hover:bg-stone-900 transition-all mt-2"
                      >
                        Next Challenge
                      </button>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
