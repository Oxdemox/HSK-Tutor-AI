import React from 'react';
import { Activity, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  userId: string;
};

type Stats = {
  totalPracticeSeconds: number;
  totalFluencyPoints: number;
  sessionCount: number;
};

// Firebase disabled - stats are disabled
export default function StatsWidget({ userId }: Props) {
  const stats: Stats | null = null;
  const loading = false;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const hrs = Math.floor(mins / 60);
    if (hrs > 0) return `${hrs}h ${mins % 60}m`;
    return `${mins}m`;
  };

  const avgFluency = stats && stats.sessionCount > 0 
    ? (stats.totalFluencyPoints / stats.sessionCount).toFixed(1) 
    : '0.0';

  const fluencyPercentage = (parseFloat(avgFluency) / 10) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-4xl p-6 shadow-sm border border-stone-100 flex flex-col justify-between group hover:shadow-md transition-all h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="bg-stone-50 p-2 rounded-xl text-stone-400 group-hover:text-red-500 transition-colors">
          <Activity size={20} />
        </div>
        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest flex items-center gap-1">
          <TrendingUp size={10} /> Live Stats
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-1">Practice Time</p>
            <h3 className="text-2xl font-black text-stone-800 tracking-tight">
              {stats ? formatTime(stats.totalPracticeSeconds) : '0m'}
            </h3>
          </div>
          <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-[10px] font-bold">
            Total
          </div>
        </div>

        <div className="h-px bg-stone-50 w-full" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-stone-50"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  initial={{ strokeDasharray: "0, 100" }}
                  animate={{ strokeDasharray: `${fluencyPercentage}, 100` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-red-500"
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-stone-700">
                {avgFluency}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Avg Fluency</p>
              <p className="text-xs font-bold text-stone-600">Level {Math.ceil(parseFloat(avgFluency)/2)} Mastery</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-black text-stone-800">{stats?.sessionCount || 0}</p>
            <p className="text-[8px] text-stone-400 font-bold uppercase tracking-widest">Sessions</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}