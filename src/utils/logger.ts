/**
 * Custom logger utility
 */

const canLog = __DEV__;

export const Logger = {
  debug: (...args: any[]) => {
    if (canLog) {
      console.log('[DEBUG]', ...args);
    }
  },
  info: (...args: any[]) => {
    if (canLog) {
      console.info('[INFO]', ...args);
    }
  },
  warn: (...args: any[]) => {
    if (canLog) {
      console.warn('[WARN]', ...args);
    }
  },
  error: (...args: any[]) => {
    console.error('[ERROR]', ...args);
  },
};
