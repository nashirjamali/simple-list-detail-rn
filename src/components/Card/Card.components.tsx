import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';

import type {CardProps, CardVariantsType} from '../../@types';
import {
  CARD_VARIANTS,
  GENERAL_TEXT_VARIANTS,
  LABEL_VARIANTS,
} from '../../constants';
import {formatDateToIndonesian, formatToIDR} from '../../utils';

import Label from '../Label/Label.components';
import GeneralText from '../GeneralText/GeneralText.components';

import styles from './Card.styles';
import ArrowRightIcon from '../Icons/ArrowRightIcon.icons';
import DotIcon from '../Icons/DotIcon.icons';

/**
 * Renders a colored strip on the card based on the status.
 *
 * @param {CardVariantsType} status - The status of the card.
 * @returns {JSX.Element} The rendered strip element.
 */
const _renderCardStrip = (status: CardVariantsType): JSX.Element => (
  <View style={styles[status]} />
);

/**
 * Renders a label based on the card status.
 *
 * @param {CardVariantsType} status - The status of the card.
 * @returns {JSX.Element} The rendered label element.
 */
const _renderLabel = (status: CardVariantsType): JSX.Element => {
  switch (status) {
    case CARD_VARIANTS.PENDING:
      return <Label text="Pengecekan" variant={LABEL_VARIANTS.PENDING} />;

    case CARD_VARIANTS.SUCCESS:
      return <Label text="Berhasil" variant={LABEL_VARIANTS.SUCCESS} />;

    default:
      return <Label text="Pengecekan" variant={LABEL_VARIANTS.PENDING} />;
  }
};

/**
 * Renders the bank transfer information.
 *
 * @param {string} senderBank - The bank of the sender.
 * @param {string} beneficiaryBank - The bank of the beneficiary.
 * @returns {JSX.Element} The rendered bank transfer information.
 */
const _renderBankTransfer = (
  senderBank: string,
  beneficiaryBank: string,
): JSX.Element => (
  <View style={styles.bankTransfer}>
    <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
      {senderBank.toUpperCase()}
    </GeneralText>
    <ArrowRightIcon />
    <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
      {beneficiaryBank.toUpperCase()}
    </GeneralText>
  </View>
);

/**
 * Renders the main content of the card.
 *
 * @param {CardProps} props - The properties of the card.
 * @returns {JSX.Element} The rendered content of the card.
 */
const _renderContent = ({
  amount,
  beneficiaryBank,
  beneficiaryName,
  completedAt,
  senderBank,
  status,
}: CardProps): JSX.Element => (
  <View style={styles.contentContainer}>
    <View>
      {_renderBankTransfer(senderBank, beneficiaryBank)}
      <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>
        {beneficiaryName.toUpperCase()}
      </GeneralText>
      <View style={styles.amountAndDate}>
        <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>
          {formatToIDR(amount)}
        </GeneralText>
        <DotIcon />
        <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>
          {formatDateToIndonesian(completedAt)}
        </GeneralText>
      </View>
    </View>
    {_renderLabel(status)}
  </View>
);

/**
 * Card component displays transaction information.
 *
 * @param {CardProps} props - The properties of the card.
 * @returns {JSX.Element} The rendered card component.
 */
const Card: FC<CardProps> = (props: CardProps): JSX.Element => (
  <TouchableOpacity style={styles.container}>
    {_renderCardStrip(props.status)}
    {_renderContent(props)}
  </TouchableOpacity>
);

export default Card;
