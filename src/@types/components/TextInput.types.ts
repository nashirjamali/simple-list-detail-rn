import type {TextInputProps as TextInputPropsRN, ViewStyle} from 'react-native';

import type {ButtonProps} from './Button.types';

export type TextInputProps = TextInputPropsRN & {
  buttonComponentProps?: ButtonProps;
};

export type TextInputStyles = {
  container: ViewStyle;
  input: ViewStyle;
};
