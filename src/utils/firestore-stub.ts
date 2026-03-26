// Firestore stub implementations - Firebase is disabled
// These no-op stubs prevent errors when Firebase is not in use

export const collection = () => undefined;
export const doc = () => undefined;
export const query = () => undefined;
export const where = () => undefined;
export const orderBy = () => undefined;

// Read operations - return empty results
export const getDoc = async () => ({ exists: () => false, data: () => undefined });
export const getDocs = async () => ({ empty: true, docs: [], forEach: () => {} });

// Listen operations - no-op with immediate callback
export const onSnapshot = (_query: any, callback: any) => {
  // Call callback with empty result to prevent loading states from hanging
  callback({ empty: true, docs: [], forEach: () => {} });
  return () => {}; // unsubscribe no-op
};

// Write operations - no-op
export const setDoc = async () => Promise.resolve();
export const updateDoc = async () => Promise.resolve();
export const deleteDoc = async () => Promise.resolve();
export const addDoc = async () => Promise.resolve({ id: 'stub-id' });

// Server timestamp stub
export const serverTimestamp = () => undefined;

// Increment stub
export const increment = () => 0;

// Timestamp class stub
export const Timestamp = {
  now: () => ({ toDate: () => new Date(), toMillis: () => Date.now() }),
  fromDate: (date: Date) => ({ toDate: () => date, toMillis: () => date.getTime() }),
};