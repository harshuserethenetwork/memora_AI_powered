import React, { type PropsWithChildren } from 'react';
import { StyleSheet, type ViewProps } from 'react-native';
import { ThemedView } from './ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

export interface CardProps extends ViewProps, PropsWithChildren {
  variant?: 'default' | 'outline';
}

export function Card({ children, variant = 'default', style, ...props }: CardProps) {
  const borderColor = useThemeColor({}, 'icon');

  return (
    <ThemedView
      style={[
        styles.card,
        variant === 'default' && styles.shadow,
        variant === 'outline' && { borderWidth: 1, borderColor },
        style,
      ]}
      {...props}
    >
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});
