/**
 * Memora light theme configuration.
 */

import { Colors } from './colors';

export const LightTheme = {
  dark: false,
  colors: {
    ...Colors.light,
    primary: '#0a7ea4',
    secondary: '#6c757d',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',
    info: '#17a2b8',
    card: '#ffffff',
    border: '#e1e4e8',
    notification: '#ff3b30',
    placeholder: '#9BA1A6',
    disabled: '#c8c8c8',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
};
