import type {ReactNode} from 'react';
import type {ButtonProps as ButtonPropsRN, ViewStyle} from 'react-native';

import {BUTTON_VARIANTS} from '../../constants';

export type ButtonVariantTypes =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export type ButtonProps = ButtonPropsRN & {
  variant: ButtonVariantTypes;
  icon?: ReactNode;
  iconRight?: ReactNode;
};

export type ButtonStyles = {
  container: ViewStyle;
};
