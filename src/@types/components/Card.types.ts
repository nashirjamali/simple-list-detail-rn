import type {ViewStyle} from 'react-native';

import {CARD_VARIANTS} from '../../constants';

export type CardVariantsType =
  (typeof CARD_VARIANTS)[keyof typeof CARD_VARIANTS];

export type CardProps = {
  status: CardVariantsType;
  senderBank: string;
  beneficiaryBank: string;
  beneficiaryName: string;
  completedAt: string;
  amount: number;
};

export type CardStyles = {
  container: ViewStyle;
  pending: ViewStyle;
  success: ViewStyle;
  contentContainer: ViewStyle;
  bankTransfer: ViewStyle;
  amountAndDate: ViewStyle;
};
