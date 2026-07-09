/**
 * Phone formatting and normalization utilities
 */

export const normalizePhoneNumber = (phone: string): string => {
  // Strip all non-numeric characters except +
  let cleaned = phone.replace(/[^\d+]/g, '');

  // Handle Indian number cases without country code prefix
  if (cleaned.length === 10 && !cleaned.startsWith('+')) {
    cleaned = `+91${cleaned}`;
  }

  return cleaned;
};

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = normalizePhoneNumber(phone);

  if (cleaned.startsWith('+91') && cleaned.length === 13) {
    return `+91 ${cleaned.slice(3, 8)}-${cleaned.slice(8)}`;
  }

  return cleaned;
};
