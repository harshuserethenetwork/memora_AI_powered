/**
 * Memora API Client
 *
 * Centralized Axios instance with interceptors for authentication,
 * error handling, and request/response transformation.
 */

import axios from 'axios';
import { API_CONFIG } from '@/config/api';

export const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default apiClient;
