/**
 * Auth domain types
 */

export interface AuthUser {
  id: string;
  email: string;
  phone: string;
  name: string;
  avatar?: string;
  role: 'owner' | 'manager' | 'staff';
  businessId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  phone: string;
}

export interface OtpVerifyRequest {
  phone: string;
  otp: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface AuthResponse {
  user: AuthUser;
  tokens: AuthTokens;
}
