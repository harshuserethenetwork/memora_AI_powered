import { REGEX } from '@/constants/regex';

export const validateEmail = (email: string): boolean => {
  return REGEX.EMAIL.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return REGEX.PHONE_INTL.test(phone) || REGEX.PHONE_IN.test(phone);
};

export const validateOtp = (otp: string): boolean => {
  return REGEX.OTP.test(otp);
};
