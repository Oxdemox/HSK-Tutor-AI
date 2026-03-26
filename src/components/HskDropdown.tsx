import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronRight } from 'lucide-react';

export type HSKLevel = 'HSK 1' | 'HSK 2' | 'HSK 3' | 'HSK 4' | 'HSK 5' | 'HSK 6';

interface HskDropdownProps {
  value: string;
  onChange: (val: HSKLevel) => void;
  disabled?: boolean;
  className?: string;
}

export const HskDropdown = ({ 
  value, 
  onChange, 
  disabled = false,
  className = "" 
}: HskDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const levels: HSKLevel[] = ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'];

  return (
    <div className={`relative ${className}`}>
      <motion.button
        whileHover={!disabled ? { scale: 1.02, backgroundColor: '#f9fafb' } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`bg-white border border-stone-200 text-stone-800 text-xs sm:text-sm rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 outline-none font-bold cursor-pointer shadow-sm flex items-center gap-1.5 sm:gap-2 hover:border-red-200 hover:shadow-md transition-all group disabled:opacity-50 disabled:cursor-not-allowed ${isOpen ? 'border-red-300 ring-2 ring-red-50' : ''}`}
      >
        <BookOpen size={16} className={`${disabled ? 'text-stone-400' : 'text-red-500'} group-hover:scale-110 transition-transform hidden min-[400px]:block`} />
        <span>{value}</span>
        <ChevronRight 
          size={14} 
          className={`text-stone-400 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && !disabled && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full right-0 mt-2 w-36 bg-white rounded-2xl shadow-2xl border border-stone-100 p-2 z-50 overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                {levels.map((level) => (
                  <motion.button
                    key={level}
                    whileHover={{ x: 4, backgroundColor: '#fef2f2' }}
                    onClick={() => {
                      onChange(level);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-bold transition-colors flex items-center justify-between ${
                      value === level ? 'text-red-600 bg-red-50' : 'text-stone-600 hover:text-red-600'
                    }`}
                  >
                    <span>{level}</span>
                    {value === level && (
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HskDropdown;
