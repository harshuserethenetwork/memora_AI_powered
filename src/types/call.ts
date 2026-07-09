/**
 * Call domain types
 */

export type CallType = 'incoming' | 'outgoing' | 'missed';
export type CallStatus = 'completed' | 'missed' | 'rejected' | 'ongoing';

export interface CallLog {
  id: string;
  contactId?: string;
  contactName?: string;
  phone: string;
  type: CallType;
  status: CallStatus;
  duration: number; // in seconds
  startedAt: string;
  endedAt?: string;
  aiSummary?: string;
  notes?: string;
  tags: string[];
  createdAt: string;
}

export interface CallLogsListResponse {
  callLogs: CallLog[];
  total: number;
  page: number;
  limit: number;
}
