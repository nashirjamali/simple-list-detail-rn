import React, {FC} from 'react';
import {Modal, View, Pressable} from 'react-native';

import type {DynamicModalProps} from '../../@types';
import {GENERAL_TEXT_VARIANTS} from '../../constants';

import GeneralText from '../GeneralText/GeneralText.components';

import styles from './DynamicModal.styles';

/**
 * A customizable modal component that displays content over the app.
 *
 * @param {DynamicModalProps} props - The properties for the DynamicModal component.
 * @param {boolean} props.visible - Determines if the modal is visible.
 * @param {string} props.title - The title to display at the top of the modal.
 * @param {() => void} props.onClose - Function to call when the modal is closed.
 * @param {React.ReactNode} props.children - The content to display inside the modal.
 * @returns {JSX.Element} The rendered modal component.
 */
const DynamicModal: FC<DynamicModalProps> = ({
  visible,
  title,
  onClose,
  children,
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
            {title}
          </GeneralText>
          {children}
        </View>
      </Pressable>
    </Modal>
  );
};

export default DynamicModal;
