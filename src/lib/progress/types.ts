/**
 * User Progress Data Types
 * 
 * Core types for tracking HSK learning progress across the application.
 * Designed for both localStorage and future backend sync.
 */

export type HSKLevel = 'HSK 1' | 'HSK 2' | 'HSK 3' | 'HSK 4' | 'HSK 5' | 'HSK 6';

export interface VocabularyWord {
  id: string;
  chinese: string;
  pinyin: string;
  english: string;
  hskLevel: HSKLevel;
  partOfSpeech?: string;
  examples?: string[];
}

export interface VocabularyProgress {
  wordId: string;
  status: 'new' | 'learning' | 'reviewing' | 'mastered';
  correctCount: number;
  incorrectCount: number;
  lastReviewedAt: string | null;
  nextReviewAt: string | null;
  easeFactor: number; // SM-2 algorithm factor (default 2.5)
  interval: number; // Days until next review
}

export interface SessionMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  wordsLearned?: string[];
  correctionsMade?: string[];
}

export interface LearningSession {
  id: string;
  userId: string;
  hskLevel: HSKLevel;
  startedAt: string;
  endedAt: string | null;
  messages: SessionMessage[];
  wordsReviewed: string[];
  accuracy: number;
  fluencyScore: number | null;
  scenario?: string;
}

export interface DailyProgress {
  date: string; // ISO date string YYYY-MM-DD
  wordsLearned: number;
  wordsReviewed: number;
  sessionsCompleted: number;
  totalMinutes: number;
  accuracy: number;
  streakDay: boolean;
}

export interface UserProgressData {
  userId: string;
  currentLevel: HSKLevel;
  vocabularyProgress: Record<string, VocabularyProgress>; // wordId -> progress
  starredWords: string[]; // wordIds
  dailyProgress: Record<string, DailyProgress>; // date -> progress
  totalSessions: number;
  totalWordsLearned: number;
  totalPracticeMinutes: number;
  currentStreak: number;
  longestStreak: number;
  lastActiveAt: string | null;
  preferences: UserPreferences;
  createdAt: string;
  updatedAt: string;
}

export interface UserPreferences {
  speakingRate: number;
  voiceId: string;
  autoPlay: boolean;
  dailyGoalMinutes: number;
  notificationsEnabled: boolean;
  preferredPracticeTime: string | null;
  smartHskEnabled: boolean;
}

// Default values
export const DEFAULT_PREFERENCES: UserPreferences = {
  speakingRate: 1.0,
  voiceId: 'zh-CN-Standard-A',
  autoPlay: true,
  dailyGoalMinutes: 15,
  notificationsEnabled: true,
  preferredPracticeTime: null,
  smartHskEnabled: false,
};

export const DEFAULT_EASE_FACTOR = 2.5;
export const MIN_INTERVAL = 1; // Minimum 1 day between reviews