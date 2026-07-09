import React, { type PropsWithChildren } from 'react';
import {
  Modal as RNModal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  type ModalProps as RNModalProps,
} from 'react-native';
import { ThemedView } from './ThemedView';

export interface ModalProps extends RNModalProps, PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose, ...props }: ModalProps) {
  return (
    <RNModal visible={isOpen} transparent animationType="fade" onRequestClose={onClose} {...props}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <ThemedView style={styles.content}>{children}</ThemedView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 5,
  },
});
