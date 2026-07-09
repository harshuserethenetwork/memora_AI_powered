/**
 * Permission string constants.
 */

export const PERMISSIONS = {
  CONTACTS: 'contacts',
  CALL_LOG: 'call_log',
  NOTIFICATIONS: 'notifications',
  MICROPHONE: 'microphone',
  CAMERA: 'camera',
  STORAGE: 'storage',
} as const;

export type PermissionType = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
