import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

export function Loader() {
  const tint = useThemeColor({}, 'tint');

  return (
    <ThemedView style={styles.container}>
      <ActivityIndicator size="large" color={tint} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
