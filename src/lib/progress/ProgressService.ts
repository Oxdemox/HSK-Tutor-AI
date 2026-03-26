/**
 * Progress Sync Service
 * 
 * Manages user progress data with localStorage persistence
 * and prepares for future backend synchronization.
 */

import {
  UserProgressData,
  UserPreferences,
  VocabularyProgress,
  DailyProgress,
  HSKLevel,
  DEFAULT_PREFERENCES,
  DEFAULT_EASE_FACTOR,
  MIN_INTERVAL,
} from './types';

const STORAGE_KEY_PREFIX = 'hskTutor_progress_';
const SYNC_QUEUE_KEY = 'hskTutor_syncQueue';

/**
 * SM-2 Spaced Repetition Algorithm
 * Calculates next review interval based on performance
 */
export function calculateNextReview(
  progress: VocabularyProgress,
  quality: number // 0-5, where 5 = perfect, 0 = complete failure
): { nextReviewAt: string; interval: number; easeFactor: number } {
  let { easeFactor, interval } = progress;
  
  // Update ease factor based on quality
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );
  
  // Calculate new interval
  if (quality < 3) {
    // Failed - reset interval
    interval = MIN_INTERVAL;
  } else if (interval === 0) {
    // First successful review
    interval = 1;
  } else if (interval === 1) {
    // Second successful review
    interval = 6;
  } else {
    // Subsequent reviews
    interval = Math.round(interval * easeFactor);
  }
  
  const nextReviewAt = new Date();
  nextReviewAt.setDate(nextReviewAt.getDate() + interval);
  
  return {
    nextReviewAt: nextReviewAt.toISOString(),
    interval,
    easeFactor,
  };
}

/**
 * Get today's date as ISO string (YYYY-MM-DD)
 */
function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Create default progress data for a new user
 */
export function createDefaultProgress(userId: string): UserProgressData {
  const now = new Date().toISOString();
  const today = getTodayString();
  
  return {
    userId,
    currentLevel: 'HSK 1',
    vocabularyProgress: {},
    starredWords: [],
    dailyProgress: {
      [today]: {
        date: today,
        wordsLearned: 0,
        wordsReviewed: 0,
        sessionsCompleted: 0,
        totalMinutes: 0,
        accuracy: 0,
        streakDay: false,
      },
    },
    totalSessions: 0,
    totalWordsLearned: 0,
    totalPracticeMinutes: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastActiveAt: now,
    preferences: DEFAULT_PREFERENCES,
    createdAt: now,
    updatedAt: now,
  };
}

/**
 * Progress Service Class
 * Provides a unified interface for progress management
 */
export class ProgressService {
  private userId: string;
  private storageKey: string;
  private cache: UserProgressData | null = null;
  private syncTimeout: NodeJS.Timeout | null = null;
  
  constructor(userId: string) {
    this.userId = userId;
    this.storageKey = `${STORAGE_KEY_PREFIX}${userId}`;
  }
  
  /**
   * Load progress data from storage
   */
  async load(): Promise<UserProgressData> {
    if (this.cache) {
      return this.cache;
    }
    
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this.cache = JSON.parse(stored) as UserProgressData;
        // Ensure all fields exist (migration safety)
        this.cache = this.migrateData(this.cache);
      } else {
        this.cache = createDefaultProgress(this.userId);
        await this.save();
      }
      return this.cache;
    } catch (error) {
      console.error('Error loading progress:', error);
      this.cache = createDefaultProgress(this.userId);
      return this.cache;
    }
  }
  
  /**
   * Migrate older data formats to current schema
   */
  private migrateData(data: UserProgressData): UserProgressData {
    const today = getTodayString();
    
    return {
      ...createDefaultProgress(this.userId),
      ...data,
      // Ensure nested objects exist
      preferences: {
        ...DEFAULT_PREFERENCES,
        ...(data.preferences || {}),
      },
      dailyProgress: {
        [today]: {
          date: today,
          wordsLearned: 0,
          wordsReviewed: 0,
          sessionsCompleted: 0,
          totalMinutes: 0,
          accuracy: 0,
          streakDay: false,
        },
        ...(data.dailyProgress || {}),
      },
      vocabularyProgress: data.vocabularyProgress || {},
      starredWords: data.starredWords || [],
    };
  }
  
  /**
   * Save progress data to storage (debounced)
   */
  async save(): Promise<void> {
    if (!this.cache) return;
    
    this.cache.updatedAt = new Date().toISOString();
    
    // Debounce saves
    if (this.syncTimeout) {
      clearTimeout(this.syncTimeout);
    }
    
    this.syncTimeout = setTimeout(() => {
      this.performSave();
    }, 500);
  }
  
  /**
   * Perform actual save operation
   */
  private performSave(): void {
    if (!this.cache) return;
    
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cache));
      // Add to sync queue for future backend sync
      this.addToSyncQueue('update', this.cache);
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }
  
  /**
   * Add operation to sync queue
   */
  private addToSyncQueue(operation: string, data: unknown): void {
    try {
      const queueStr = localStorage.getItem(SYNC_QUEUE_KEY);
      const queue = queueStr ? JSON.parse(queueStr) : [];
      queue.push({
        operation,
        data,
        timestamp: new Date().toISOString(),
      });
      // Keep only last 100 operations
      if (queue.length > 100) {
        queue.splice(0, queue.length - 100);
      }
      localStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(queue));
    } catch (error) {
      console.error('Error adding to sync queue:', error);
    }
  }
  
  /**
   * Get current progress data (sync)
   */
  getData(): UserProgressData | null {
    return this.cache;
  }
  
  /**
   * Update user preferences
   */
  async updatePreferences(prefs: Partial<UserPreferences>): Promise<void> {
    const data = await this.load();
    data.preferences = { ...data.preferences, ...prefs };
    await this.save();
  }
  
  /**
   * Record a vocabulary review
   */
  async recordVocabularyReview(
    wordId: string,
    correct: boolean
  ): Promise<VocabularyProgress> {
    const data = await this.load();
    const today = getTodayString();
    
    // Initialize or get existing progress
    let progress = data.vocabularyProgress[wordId];
    if (!progress) {
      progress = {
        wordId,
        status: 'new',
        correctCount: 0,
        incorrectCount: 0,
        lastReviewedAt: null,
        nextReviewAt: null,
        easeFactor: DEFAULT_EASE_FACTOR,
        interval: 0,
      };
    }
    
    // Update counts
    if (correct) {
      progress.correctCount++;
    } else {
      progress.incorrectCount++;
    }
    
    // Calculate next review using SM-2
    const quality = correct ? 5 : 2;
    const nextReview = calculateNextReview(progress, quality);
    progress.easeFactor = nextReview.easeFactor;
    progress.interval = nextReview.interval;
    progress.nextReviewAt = nextReview.nextReviewAt;
    progress.lastReviewedAt = new Date().toISOString();
    
    // Update status
    if (progress.correctCount >= 5 && progress.easeFactor >= 2.5) {
      progress.status = 'mastered';
    } else if (progress.correctCount > 0) {
      progress.status = progress.status === 'new' ? 'learning' : 'reviewing';
    }
    
    // Save progress
    data.vocabularyProgress[wordId] = progress;
    
    // Update daily progress
    if (!data.dailyProgress[today]) {
      data.dailyProgress[today] = {
        date: today,
        wordsLearned: 0,
        wordsReviewed: 0,
        sessionsCompleted: 0,
        totalMinutes: 0,
        accuracy: 0,
        streakDay: false,
      };
    }
    data.dailyProgress[today].wordsReviewed++;
    
    // Update totals
    if (progress.status === 'mastered' && !data.starredWords.includes(wordId)) {
      data.totalWordsLearned++;
    }
    
    await this.save();
    return progress;
  }
  
  /**
   * Star/unstar a word
   */
  async toggleStarWord(wordId: string): Promise<boolean> {
    const data = await this.load();
    const index = data.starredWords.indexOf(wordId);
    
    if (index >= 0) {
      data.starredWords.splice(index, 1);
    } else {
      data.starredWords.push(wordId);
    }
    
    await this.save();
    return index < 0; // Returns true if word was starred
  }
  
  /**
   * Record a completed session
   */
  async recordSession(
    durationMinutes: number,
    wordsReviewed: string[],
    accuracy: number,
    fluencyScore?: number
  ): Promise<void> {
    const data = await this.load();
    const today = getTodayString();
    
    // Update daily progress
    if (!data.dailyProgress[today]) {
      data.dailyProgress[today] = {
        date: today,
        wordsLearned: 0,
        wordsReviewed: 0,
        sessionsCompleted: 0,
        totalMinutes: 0,
        accuracy: 0,
        streakDay: false,
      };
    }
    
    const daily = data.dailyProgress[today];
    daily.sessionsCompleted++;
    daily.totalMinutes += durationMinutes;
    daily.wordsReviewed += wordsReviewed.length;
    
    // Update running accuracy
    const totalAnswers = data.totalSessions + daily.sessionsCompleted;
    daily.accuracy = ((daily.accuracy * (totalAnswers - 1)) + accuracy) / totalAnswers;
    
    // Mark streak day
    daily.streakDay = true;
    
    // Update totals
    data.totalSessions++;
    data.totalPracticeMinutes += durationMinutes;
    data.lastActiveAt = new Date().toISOString();
    
    // Update streak
    await this.updateStreak(data);
    
    await this.save();
  }
  
  /**
   * Update streak count
   */
  private async updateStreak(data: UserProgressData): Promise<void> {
    const today = getTodayString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    const todayProgress = data.dailyProgress[today];
    const yesterdayProgress = data.dailyProgress[yesterdayStr];
    
    if (todayProgress?.streakDay) {
      if (yesterdayProgress?.streakDay || data.currentStreak === 0) {
        data.currentStreak++;
      }
      // Reset streak if there was a gap (unless it's the first day)
      // This is a simplified check - in production you'd check all dates
    }
    
    data.longestStreak = Math.max(data.longestStreak, data.currentStreak);
  }
  
  /**
   * Get words due for review
   */
  async getWordsForReview(limit: number = 20): Promise<string[]> {
    const data = await this.load();
    const now = new Date();
    
    const dueWords: string[] = [];
    for (const [wordId, progress] of Object.entries(data.vocabularyProgress)) {
      if (!progress.nextReviewAt || new Date(progress.nextReviewAt) <= now) {
        dueWords.push(wordId);
        if (dueWords.length >= limit) break;
      }
    }
    
    return dueWords;
  }
  
  /**
   * Get learning statistics
   */
  async getStats(): Promise<{
    totalWords: number;
    masteredWords: number;
    learningWords: number;
    newWords: number;
    currentStreak: number;
    totalSessions: number;
    totalMinutes: number;
    averageAccuracy: number;
  }> {
    const data = await this.load();
    
    let mastered = 0;
    let learning = 0;
    let newWords = 0;
    
    for (const progress of Object.values(data.vocabularyProgress)) {
      switch (progress.status) {
        case 'mastered': mastered++; break;
        case 'learning':
        case 'reviewing': learning++; break;
        case 'new': newWords++; break;
      }
    }
    
    // Calculate average accuracy from recent days
    const recentDays = Object.values(data.dailyProgress)
      .filter(d => d.accuracy > 0)
      .slice(-7);
    const avgAccuracy = recentDays.length > 0
      ? recentDays.reduce((sum, d) => sum + d.accuracy, 0) / recentDays.length
      : 0;
    
    return {
      totalWords: Object.keys(data.vocabularyProgress).length,
      masteredWords: mastered,
      learningWords: learning,
      newWords: newWords,
      currentStreak: data.currentStreak,
      totalSessions: data.totalSessions,
      totalMinutes: data.totalPracticeMinutes,
      averageAccuracy: Math.round(avgAccuracy),
    };
  }
  
  /**
   * Change HSK level
   */
  async setLevel(level: HSKLevel): Promise<void> {
    const data = await this.load();
    data.currentLevel = level;
    await this.save();
  }
  
  /**
   * Clear all progress (reset)
   */
  async reset(): Promise<void> {
    this.cache = createDefaultProgress(this.userId);
    await this.save();
  }
}

// Singleton cache for progress services
const progressServices = new Map<string, ProgressService>();

/**
 * Get or create a progress service for a user
 */
export function getProgressService(userId: string): ProgressService {
  let service = progressServices.get(userId);
  if (!service) {
    service = new ProgressService(userId);
    progressServices.set(userId, service);
  }
  return service;
}