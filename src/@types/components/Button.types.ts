import type {ReactElement} from 'react';
import type {ButtonProps as ButtonPropsRN, ViewStyle} from 'react-native';

import {BUTTON_VARIANTS} from '../../constants';

export type ButtonVariantTypes =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export type ButtonProps = ButtonPropsRN & {
  variant: ButtonVariantTypes;
  icon?: ReactElement;
  iconRight?: ReactElement;
};

export type ButtonStyles = {
  container: ViewStyle;
};
