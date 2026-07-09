import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

export interface AvatarProps {
  name: string;
  source?: string;
  size?: number;
}

export function Avatar({ name, source, size = 48 }: AvatarProps) {
  const backgroundColor = useThemeColor({}, 'icon');
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}>
      {source ? (
        <Image source={{ uri: source }} style={styles.image} />
      ) : (
        <View style={[styles.fallback, { backgroundColor, borderRadius: size / 2 }]}>
          <ThemedText style={[styles.fallbackText, { fontSize: size * 0.4, lineHeight: size }]}>
            {initials}
          </ThemedText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  fallback: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
