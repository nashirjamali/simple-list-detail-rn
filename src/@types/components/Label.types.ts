import type {ViewStyle} from 'react-native';

import {LABEL_VARIANTS} from '../../constants';

export type LabelVariantsType =
  (typeof LABEL_VARIANTS)[keyof typeof LABEL_VARIANTS];

export type LabelProps = {
  variant: LabelVariantsType;
  text: string;
};

export type LabelStyles = {
  containerOnCheck: ViewStyle;
  containerSuccess: ViewStyle;
};
