/**
 * Regex constants for validation patterns.
 */

export const REGEX = {
  /** Email validation */
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  /** Phone number (Indian format) */
  PHONE_IN: /^(\+91)?[6-9]\d{9}$/,

  /** Phone number (generic international) */
  PHONE_INTL: /^\+?[1-9]\d{1,14}$/,

  /** OTP (4-6 digits) */
  OTP: /^\d{4,6}$/,

  /** Name (letters, spaces, hyphens) */
  NAME: /^[a-zA-Z\s'-]{2,50}$/,

  /** URL */
  URL: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
} as const;
