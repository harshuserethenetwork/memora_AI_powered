/**
 * Date formatting utilities for Memora
 */

export const formatDate = (
  date: Date | string | number,
  formatStr: 'short' | 'medium' | 'long' = 'medium'
): string => {
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';

  switch (formatStr) {
    case 'short':
      return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    case 'long':
      return d.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    case 'medium':
    default:
      return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }
};

export const formatRelativeTime = (date: Date | string | number): string => {
  const d = new Date(date);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();

  if (diffMs < 0) return 'just now'; // Future date fallback

  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffSec < 60) return 'just now';
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay === 1) return 'yesterday';
  if (diffDay < 7) return `${diffDay}d ago`;

  return formatDate(d, 'short');
};
