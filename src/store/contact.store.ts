/**
 * Contact Store
 *
 * Manages contact-related UI state (selected contact, search query, etc.)
 */

import { create } from 'zustand';
import type { Contact } from '@/types/contact';

interface ContactState {
  /** Currently selected contact */
  selectedContact: Contact | null;
  /** Search query for filtering contacts */
  searchQuery: string;
  /** Whether contacts are being synced */
  isSyncing: boolean;

  /** Actions */
  setSelectedContact: (contact: Contact | null) => void;
  setSearchQuery: (query: string) => void;
  setIsSyncing: (syncing: boolean) => void;
  reset: () => void;
}

const initialState = {
  selectedContact: null,
  searchQuery: '',
  isSyncing: false,
};

export const useContactStore = create<ContactState>((set) => ({
  ...initialState,

  setSelectedContact: (selectedContact) => set({ selectedContact }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setIsSyncing: (isSyncing) => set({ isSyncing }),
  reset: () => set(initialState),
}));
