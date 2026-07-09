/**
 * Environment Configuration
 *
 * Centralizes environment-specific values.
 * In production, use expo-constants or .env files.
 */

export const ENV = {
  /** Current environment */
  NODE_ENV: process.env.NODE_ENV ?? 'development',

  /** Whether the app is running in development mode */
  isDev: __DEV__,

  /** Whether the app is running in production mode */
  isProd: !__DEV__,
} as const;
