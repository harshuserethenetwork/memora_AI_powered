/**
 * Contact domain types
 */

export interface Contact {
  id: string;
  name: string;
  phone: string;
  email?: string;
  company?: string;
  designation?: string;
  avatar?: string;
  tags: string[];
  notes?: string;
  isFavorite: boolean;
  lastContactedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateContactRequest {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  designation?: string;
  tags?: string[];
  notes?: string;
}

export interface UpdateContactRequest extends Partial<CreateContactRequest> {
  id: string;
}

export interface ContactsListResponse {
  contacts: Contact[];
  total: number;
  page: number;
  limit: number;
}
