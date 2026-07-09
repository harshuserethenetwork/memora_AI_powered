/**
 * Auth Store
 *
 * Manages authentication state: user session, tokens, and auth status.
 */

import { create } from 'zustand';
import type { AuthUser } from '@/types/auth';

interface AuthState {
  /** Current authenticated user */
  user: AuthUser | null;
  /** Whether the user is authenticated */
  isAuthenticated: boolean;
  /** Whether auth state is being loaded */
  isLoading: boolean;
  /** Auth error message */
  error: string | null;

  /** Actions */
  setUser: (user: AuthUser | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  logout: () => void;
  reset: () => void;
}

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

export const useAuthStore = create<AuthState>((set) => ({
  ...initialState,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
      isLoading: false,
      error: null,
    }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error, isLoading: false }),

  logout: () => set({ ...initialState, isLoading: false }),

  reset: () => set(initialState),
}));
