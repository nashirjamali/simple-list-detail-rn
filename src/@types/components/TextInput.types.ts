import type {TextInputProps as TextInputPropsRN, ViewStyle} from 'react-native';

import {ButtonProps} from './Button.types';

export type TextInputProps = TextInputPropsRN & {
  buttonComponentProps?: ButtonProps;
};

export type TextInputStyles = {
  container: ViewStyle;
  input: ViewStyle;
};
