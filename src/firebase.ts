/**
 * Backend Configuration Module
 * 
 * Firebase has been deprecated and removed from this application.
 * This file serves as a placeholder for future backend integration.
 * 
 * RECOMMENDED: Implement a proper backend for:
 * - User progress persistence
 * - Cross-device sync
 * - Learning analytics
 * - Vocabulary mastery tracking
 * 
 * @see docs/architecture.md for backend migration plan
 */

// Placeholder for future backend integration
export const db = undefined;
export const auth = undefined;

export const initializeAnonymousAuth = async (): Promise<void> => {
  console.warn('Backend is currently local-only (localStorage).');
  return Promise.resolve();
};
