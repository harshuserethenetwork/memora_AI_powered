/**
 * Settings Store
 *
 * Manages app-wide user preferences and settings.
 */

import { create } from 'zustand';

interface SettingsState {
  /** Whether notifications are enabled */
  notificationsEnabled: boolean;
  /** Whether haptic feedback is enabled */
  hapticFeedbackEnabled: boolean;
  /** App language */
  language: string;
  /** Whether the user has completed onboarding */
  hasCompletedOnboarding: boolean;

  /** Actions */
  setNotificationsEnabled: (enabled: boolean) => void;
  setHapticFeedbackEnabled: (enabled: boolean) => void;
  setLanguage: (language: string) => void;
  setHasCompletedOnboarding: (completed: boolean) => void;
  reset: () => void;
}

const initialState = {
  notificationsEnabled: true,
  hapticFeedbackEnabled: true,
  language: 'en',
  hasCompletedOnboarding: false,
};

export const useSettingsStore = create<SettingsState>((set) => ({
  ...initialState,

  setNotificationsEnabled: (notificationsEnabled) => set({ notificationsEnabled }),
  setHapticFeedbackEnabled: (hapticFeedbackEnabled) => set({ hapticFeedbackEnabled }),
  setLanguage: (language) => set({ language }),
  setHasCompletedOnboarding: (hasCompletedOnboarding) => set({ hasCompletedOnboarding }),
  reset: () => set(initialState),
}));
