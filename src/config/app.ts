/**
 * App Configuration
 *
 * Application-level metadata and feature flags.
 */

export const APP_CONFIG = {
  /** Application name */
  name: 'Memora',

  /** Application version (should match app.json) */
  version: '1.0.0',

  /** Bundle identifier */
  bundleId: 'com.memora.app',

  /** Support email */
  supportEmail: 'support@memora.app',

  /** Feature flags */
  features: {
    aiSummaries: true,
    callRecording: false,
    exportData: false,
  },
} as const;
