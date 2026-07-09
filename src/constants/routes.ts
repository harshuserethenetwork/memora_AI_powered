/**
 * Route constants
 *
 * Centralized route path definitions to avoid hardcoded strings.
 */

export const ROUTES = {
  /** Tab routes */
  TABS: {
    HOME: '/(tabs)',
    EXPLORE: '/(tabs)/explore',
  },

  /** Auth routes */
  AUTH: {
    LOGIN: '/(auth)/login',
    OTP: '/(auth)/otp',
  },

  /** Detail routes */
  CUSTOMER: {
    DETAIL: '/customer/[id]',
  },
  CALL: {
    DETAIL: '/call/[id]',
  },

  /** Settings */
  SETTINGS: {
    INDEX: '/settings',
  },

  /** Modal */
  MODAL: '/modal',
} as const;
