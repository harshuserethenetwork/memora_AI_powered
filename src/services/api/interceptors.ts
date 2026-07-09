/**
 * API Interceptors
 *
 * Attach auth tokens, handle token refresh, and normalize error responses.
 */

import { apiClient } from './client';
import { storage } from '@/services/storage';
import { STORAGE_KEYS } from '@/constants/storage';

/**
 * Request interceptor: attach auth token to every request.
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = storage.getString(STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor: handle common error patterns.
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized — clear token & redirect to login
      storage.remove(STORAGE_KEYS.AUTH_TOKEN);
      // TODO: Navigate to auth screen
    }

    return Promise.reject(error);
  }
);

export { apiClient };
