import type {ViewProps, ViewStyle} from 'react-native';

export type DynamicModalProps = ViewProps & {
  visible: boolean;
  title: string;
  onClose: () => void;
};

export type DynamicModalStyles = {
  overlay: ViewStyle;
  modalContainer: ViewStyle;
};
