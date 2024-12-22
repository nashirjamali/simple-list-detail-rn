import React, {FC} from 'react';
import {CardProps, CardVariantsType} from '../../@types';
import {Text, View} from 'react-native';
import styles from './Card.styles';

const _renderCardStrip = (status: CardVariantsType) => (
  <View style={styles[status]} />
);

const _renderContentContainer = () => {
    
}

const Card: FC<CardProps> = ({
  amount,
  beneficiaryBank,
  beneficiaryName,
  completedAt,
  senderBank,
  status,
}) => (
  <View style={styles.container}>
    {_renderCardStrip(status)}
  </View>
);

export default Card;
