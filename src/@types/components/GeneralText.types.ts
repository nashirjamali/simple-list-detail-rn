import type {TextProps, TextStyle} from 'react-native';

import {GENERAL_TEXT_VARIANTS} from '../../constants';

export type GeneralTextVariantsTypes =
  (typeof GENERAL_TEXT_VARIANTS)[keyof typeof GENERAL_TEXT_VARIANTS];

export type GeneralTextProps = TextProps & {
  variant: GeneralTextVariantsTypes;
};

export type GeneralTextStyles = {
  input: TextStyle;
  button: TextStyle;
  label: TextStyle;
  header: TextStyle;
  normal: TextStyle;
};
