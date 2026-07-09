/**
 * API Configuration
 *
 * Base URLs, timeouts, and API versioning.
 */

import { ENV } from './env';

export const API_CONFIG = {
  /** Base URL for the Memora backend API */
  baseURL: ENV.isDev ? 'http://localhost:3000/api' : 'https://api.memora.app/api',

  /** Request timeout in milliseconds */
  timeout: 30000,

  /** API version prefix */
  version: 'v1',
} as const;
