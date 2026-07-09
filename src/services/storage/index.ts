/**
 * Storage Service
 *
 * MMKV-based key-value storage for fast synchronous access.
 * Used for auth tokens, user preferences, cached data, etc.
 */

import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV({
  id: 'memora-storage',
});

/**
 * Type-safe storage helpers
 */
export const StorageService = {
  /** Get a string value */
  getString: (key: string): string | undefined => {
    return storage.getString(key);
  },

  /** Set a string value */
  setString: (key: string, value: string): void => {
    storage.set(key, value);
  },

  /** Get a boolean value */
  getBoolean: (key: string): boolean | undefined => {
    return storage.getBoolean(key);
  },

  /** Set a boolean value */
  setBoolean: (key: string, value: boolean): void => {
    storage.set(key, value);
  },

  /** Get a number value */
  getNumber: (key: string): number | undefined => {
    return storage.getNumber(key);
  },

  /** Set a number value */
  setNumber: (key: string, value: number): void => {
    storage.set(key, value);
  },

  /** Get a JSON object */
  getObject: <T>(key: string): T | undefined => {
    const value = storage.getString(key);
    if (value) {
      try {
        return JSON.parse(value) as T;
      } catch {
        return undefined;
      }
    }
    return undefined;
  },

  /** Set a JSON object */
  setObject: <T>(key: string, value: T): void => {
    storage.set(key, JSON.stringify(value));
  },

  /** Delete a key */
  delete: (key: string): void => {
    storage.remove(key);
  },

  /** Check if a key exists */
  contains: (key: string): boolean => {
    return storage.contains(key);
  },

  /** Clear all storage */
  clearAll: (): void => {
    storage.clearAll();
  },
};

export default StorageService;
