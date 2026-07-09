import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';

export interface BadgeProps {
  label: string | number;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
}

export function Badge({ label, variant = 'primary' }: BadgeProps) {
  return (
    <View style={[styles.badge, styles[variant]]}>
      <ThemedText style={styles.text}>{label}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9999,
    alignSelf: 'flex-start',
  },
  primary: {
    backgroundColor: '#0a7ea4',
  },
  success: {
    backgroundColor: '#28a745',
  },
  warning: {
    backgroundColor: '#ffc107',
  },
  danger: {
    backgroundColor: '#dc3545',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
