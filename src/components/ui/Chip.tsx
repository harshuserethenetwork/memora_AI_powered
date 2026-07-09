import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

export interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}

export function Chip({ label, selected = false, onPress }: ChipProps) {
  const primaryColor = useThemeColor({}, 'tint');

  return (
    <TouchableOpacity
      style={[
        styles.chip,
        selected && { backgroundColor: primaryColor },
        !selected && styles.unselected,
        onPress ? null : styles.nonClickable,
      ]}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.7}
    >
      <ThemedText style={[styles.text, selected ? styles.textSelected : { color: primaryColor }]}>
        {label}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginVertical: 4,
    alignSelf: 'flex-start',
  },
  unselected: {
    borderWidth: 1,
    borderColor: '#e1e4e8',
    backgroundColor: 'transparent',
  },
  nonClickable: {
    opacity: 0.8,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
  textSelected: {
    color: '#fff',
  },
});
