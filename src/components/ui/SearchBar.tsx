import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { IconSymbol } from './IconSymbol';
import { useThemeColor } from '@/hooks/useThemeColor';

export interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChangeText, placeholder = 'Search...' }: SearchBarProps) {
  const textColor = useThemeColor({}, 'text');
  const iconColor = useThemeColor({}, 'icon');

  return (
    <View style={styles.container}>
      <IconSymbol name="chevron.right" size={20} color={iconColor} style={styles.icon} />
      <TextInput
        style={[styles.input, { color: textColor }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9BA1A6"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e1e4e8',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
    height: 40,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
});
