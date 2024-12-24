import type {ComponentType, FC, ReactElement, ReactNode, SVGProps} from 'react';
import type {ButtonProps as ButtonPropsRN, ViewStyle} from 'react-native';

import {BUTTON_VARIANTS} from '../../constants';
import {SvgProps} from 'react-native-svg';

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
