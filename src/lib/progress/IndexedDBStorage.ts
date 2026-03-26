/**
 * IndexedDB Storage Layer
 * 
 * Provides offline-first storage for user progress data.
 * Falls back gracefully if IndexedDB is not available.
 */

import { UserProgressData } from './types';

const DB_NAME = 'hskTutorDB';
const DB_VERSION = 1;
const PROGRESS_STORE = 'progress';
const SYNC_QUEUE_STORE = 'syncQueue';

/**
 * Check if IndexedDB is available
 */
function isIndexedDBAvailable(): boolean {
  try {
    return typeof indexedDB !== 'undefined' && indexedDB !== null;
  } catch {
    return false;
  }
}

/**
 * Open or create the IndexedDB database
 */
export async function openDatabase(): Promise<IDBDatabase | null> {
  if (!isIndexedDBAvailable()) {
    console.warn('IndexedDB is not available in this environment');
    return null;
  }

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      console.error('Failed to open IndexedDB:', request.error);
      resolve(null);
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // Create progress store
      if (!db.objectStoreNames.contains(PROGRESS_STORE)) {
        const progressStore = db.createObjectStore(PROGRESS_STORE, { keyPath: 'userId' });
        progressStore.createIndex('updatedAt', 'updatedAt', { unique: false });
      }

      // Create sync queue store
      if (!db.objectStoreNames.contains(SYNC_QUEUE_STORE)) {
        const syncStore = db.createObjectStore(SYNC_QUEUE_STORE, {
          keyPath: 'id',
          autoIncrement: true,
        });
        syncStore.createIndex('timestamp', 'timestamp', { unique: false });
        syncStore.createIndex('operation', 'operation', { unique: false });
      }
    };
  });
}

/**
 * IndexedDB Storage Class
 * Provides async storage operations with fallback to localStorage
 */
export class IndexedDBStorage {
  private db: IDBDatabase | null = null;
  private initialized = false;

  /**
   * Initialize the storage (open database)
   */
  async init(): Promise<boolean> {
    if (this.initialized) {
      return this.db !== null;
    }

    this.db = await openDatabase();
    this.initialized = true;
    return this.db !== null;
  }

  /**
   * Save progress data to IndexedDB
   */
  async saveProgress(data: UserProgressData): Promise<boolean> {
    if (!this.db) {
      const initialized = await this.init();
      if (!initialized) {
        // Fallback to localStorage
        return this.saveToLocalStorage(data);
      }
    }

    return new Promise((resolve) => {
      if (!this.db) {
        resolve(false);
        return;
      }

      try {
        const transaction = this.db.transaction([PROGRESS_STORE], 'readwrite');
        const store = transaction.objectStore(PROGRESS_STORE);
        const request = store.put(data);

        request.onsuccess = () => {
          resolve(true);
        };

        request.onerror = () => {
          console.error('Failed to save progress to IndexedDB:', request.error);
          // Fallback to localStorage
          resolve(this.saveToLocalStorage(data));
        };
      } catch (error) {
        console.error('IndexedDB transaction error:', error);
        resolve(this.saveToLocalStorage(data));
      }
    });
  }

  /**
   * Load progress data from IndexedDB
   */
  async loadProgress(userId: string): Promise<UserProgressData | null> {
    if (!this.db) {
      const initialized = await this.init();
      if (!initialized) {
        // Fallback to localStorage
        return this.loadFromLocalStorage(userId);
      }
    }

    return new Promise((resolve) => {
      if (!this.db) {
        resolve(null);
        return;
      }

      try {
        const transaction = this.db.transaction([PROGRESS_STORE], 'readonly');
        const store = transaction.objectStore(PROGRESS_STORE);
        const request = store.get(userId);

        request.onsuccess = () => {
          if (request.result) {
            resolve(request.result as UserProgressData);
          } else {
            // Try localStorage fallback
            resolve(this.loadFromLocalStorage(userId));
          }
        };

        request.onerror = () => {
          console.error('Failed to load progress from IndexedDB:', request.error);
          resolve(this.loadFromLocalStorage(userId));
        };
      } catch (error) {
        console.error('IndexedDB transaction error:', error);
        resolve(this.loadFromLocalStorage(userId));
      }
    });
  }

  /**
   * Delete progress data from IndexedDB
   */
  async deleteProgress(userId: string): Promise<boolean> {
    if (!this.db) {
      const initialized = await this.init();
      if (!initialized) {
        return this.deleteFromLocalStorage(userId);
      }
    }

    return new Promise((resolve) => {
      if (!this.db) {
        resolve(false);
        return;
      }

      try {
        const transaction = this.db.transaction([PROGRESS_STORE], 'readwrite');
        const store = transaction.objectStore(PROGRESS_STORE);
        const request = store.delete(userId);

        request.onsuccess = () => {
          resolve(true);
        };

        request.onerror = () => {
          console.error('Failed to delete progress from IndexedDB:', request.error);
          resolve(this.deleteFromLocalStorage(userId));
        };
      } catch (error) {
        console.error('IndexedDB transaction error:', error);
        resolve(this.deleteFromLocalStorage(userId));
      }
    });
  }

  /**
   * Add item to sync queue
   */
  async addToSyncQueue(operation: string, data: unknown): Promise<boolean> {
    if (!this.db) {
      await this.init();
    }

    if (!this.db) {
      return false;
    }

    return new Promise((resolve) => {
      try {
        const transaction = this.db!.transaction([SYNC_QUEUE_STORE], 'readwrite');
        const store = transaction.objectStore(SYNC_QUEUE_STORE);
        const request = store.add({
          operation,
          data,
          timestamp: new Date().toISOString(),
          synced: false,
        });

        request.onsuccess = () => {
          resolve(true);
        };

        request.onerror = () => {
          console.error('Failed to add to sync queue:', request.error);
          resolve(false);
        };
      } catch (error) {
        console.error('IndexedDB transaction error:', error);
        resolve(false);
      }
    });
  }

  /**
   * Get pending sync items
   */
  async getPendingSyncItems(limit: number = 50): Promise<Array<{
    id: number;
    operation: string;
    data: unknown;
    timestamp: string;
  }>> {
    if (!this.db) {
      await this.init();
    }

    if (!this.db) {
      return [];
    }

    return new Promise((resolve) => {
      try {
        const transaction = this.db!.transaction([SYNC_QUEUE_STORE], 'readonly');
        const store = transaction.objectStore(SYNC_QUEUE_STORE);
        const index = store.index('synced');
        const request = index.openCursor(IDBKeyRange.only(false));

        const items: Array<{
          id: number;
          operation: string;
          data: unknown;
          timestamp: string;
        }> = [];

        request.onsuccess = (event) => {
          const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
          if (cursor && items.length < limit) {
            items.push({
              id: cursor.value.id,
              operation: cursor.value.operation,
              data: cursor.value.data,
              timestamp: cursor.value.timestamp,
            });
            cursor.continue();
          } else {
            resolve(items);
          }
        };

        request.onerror = () => {
          console.error('Failed to get pending sync items:', request.error);
          resolve([]);
        };
      } catch (error) {
        console.error('IndexedDB transaction error:', error);
        resolve([]);
      }
    });
  }

  /**
   * Mark sync item as synced
   */
  async markSynced(id: number): Promise<boolean> {
    if (!this.db) {
      await this.init();
    }

    if (!this.db) {
      return false;
    }

    return new Promise((resolve) => {
      try {
        const transaction = this.db!.transaction([SYNC_QUEUE_STORE], 'readwrite');
        const store = transaction.objectStore(SYNC_QUEUE_STORE);
        const getRequest = store.get(id);

        getRequest.onsuccess = () => {
          const item = getRequest.result;
          if (item) {
            item.synced = true;
            item.syncedAt = new Date().toISOString();
            const putRequest = store.put(item);

            putRequest.onsuccess = () => {
              resolve(true);
            };

            putRequest.onerror = () => {
              resolve(false);
            };
          } else {
            resolve(false);
          }
        };

        getRequest.onerror = () => {
          resolve(false);
        };
      } catch (error) {
        console.error('IndexedDB transaction error:', error);
        resolve(false);
      }
    });
  }

  /**
   * Clear all data (for testing/reset)
   */
  async clearAll(): Promise<boolean> {
    if (!this.db) {
      await this.init();
    }

    if (!this.db) {
      return false;
    }

    return new Promise((resolve) => {
      try {
        const transaction = this.db!.transaction(
          [PROGRESS_STORE, SYNC_QUEUE_STORE],
          'readwrite'
        );

        const progressStore = transaction.objectStore(PROGRESS_STORE);
        const syncStore = transaction.objectStore(SYNC_QUEUE_STORE);

        progressStore.clear();
        syncStore.clear();

        transaction.oncomplete = () => {
          resolve(true);
        };

        transaction.onerror = () => {
          console.error('Failed to clear IndexedDB:', transaction.error);
          resolve(false);
        };
      } catch (error) {
        console.error('IndexedDB transaction error:', error);
        resolve(false);
      }
    });
  }

  // localStorage fallback methods

  private saveToLocalStorage(data: UserProgressData): boolean {
    try {
      const key = `hskTutor_progress_${data.userId}`;
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
      return false;
    }
  }

  private loadFromLocalStorage(userId: string): UserProgressData | null {
    try {
      const key = `hskTutor_progress_${userId}`;
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      return null;
    }
  }

  private deleteFromLocalStorage(userId: string): boolean {
    try {
      const key = `hskTutor_progress_${userId}`;
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Failed to delete from localStorage:', error);
      return false;
    }
  }
}

// Singleton instance
let storageInstance: IndexedDBStorage | null = null;

/**
 * Get the IndexedDB storage instance
 */
export function getStorage(): IndexedDBStorage {
  if (!storageInstance) {
    storageInstance = new IndexedDBStorage();
  }
  return storageInstance;
}