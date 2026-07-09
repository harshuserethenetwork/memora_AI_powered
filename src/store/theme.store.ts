/**
 * Theme Store
 *
 * Manages theme preference (light/dark/system).
 */

import { create } from 'zustand';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  /** Current theme mode */
  mode: ThemeMode;

  /** Actions */
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  mode: 'system',

  setMode: (mode) => set({ mode }),

  toggleMode: () => {
    const current = get().mode;
    const next = current === 'light' ? 'dark' : 'light';
    set({ mode: next });
  },
}));
