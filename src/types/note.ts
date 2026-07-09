/**
 * Note domain types
 */

export interface Note {
  id: string;
  contactId?: string;
  callLogId?: string;
  title: string;
  content: string;
  tags: string[];
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNoteRequest {
  contactId?: string;
  callLogId?: string;
  title: string;
  content: string;
  tags?: string[];
}

export interface UpdateNoteRequest extends Partial<CreateNoteRequest> {
  id: string;
}
