/**
 * Storage key constants for MMKV.
 * All keys should be defined here to avoid typos and collisions.
 */

export const STORAGE_KEYS = {
  /** Auth token */
  AUTH_TOKEN: 'auth_token',
  /** Refresh token */
  REFRESH_TOKEN: 'refresh_token',
  /** User profile data */
  USER_PROFILE: 'user_profile',
  /** Theme preference */
  THEME_MODE: 'theme_mode',
  /** Onboarding completed flag */
  ONBOARDING_COMPLETED: 'onboarding_completed',
  /** Language preference */
  LANGUAGE: 'language',
  /** Last sync timestamp */
  LAST_SYNC: 'last_sync',
  /** Notification preferences */
  NOTIFICATION_PREFS: 'notification_prefs',
} as const;
