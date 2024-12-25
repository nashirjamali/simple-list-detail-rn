import React, {FC, ReactElement} from 'react';
import {View} from 'react-native';

import type {LabelProps} from '../../@types';
import GeneralText from '../GeneralText/GeneralText.components';
import {COLORS, GENERAL_TEXT_VARIANTS, LABEL_VARIANTS} from '../../constants';
import styles from './Label.styles';

/**
 * Renders a label with a pending style.
 *
 * @param {string} text - The text to be displayed in the label.
 * @returns {ReactElement} The rendered label component for the pending state.
 */
const _renderPending = (text: string): ReactElement => (
  <View style={styles.containerPending}>
    <GeneralText
      variant={GENERAL_TEXT_VARIANTS.NORMAL}
      style={{textAlign: 'center', fontWeight: 'bold'}}>
      {text}
    </GeneralText>
  </View>
);

/**
 * Renders a label with a success style.
 *
 * @param {string} text - The text to be displayed in the label.
 * @returns {ReactElement} The rendered label component for the success state.
 */
const _renderSuccess = (text: string): ReactElement => (
  <View style={styles.containerSuccess}>
    <GeneralText
      variant={GENERAL_TEXT_VARIANTS.NORMAL}
      style={{textAlign: 'center', fontWeight: 'bold', color: COLORS.WHITE}}>
      {text}
    </GeneralText>
  </View>
);

/**
 * Maps the variant to the corresponding label rendering function.
 *
 * @param {LabelProps} props - The properties for the label component.
 * @param {string} props.text - The text to be displayed in the label.
 * @param {LABEL_VARIANTS} props.variant - The variant type for styling the label.
 * @returns {ReactElement} The rendered label component based on the variant.
 */
const _mappingVariant = ({text, variant}: LabelProps): ReactElement => {
  switch (variant) {
    case LABEL_VARIANTS.PENDING:
      return _renderPending(text);

    case LABEL_VARIANTS.SUCCESS:
      return _renderSuccess(text);

    default:
      return <></>; // Return an empty fragment for unsupported variants
  }
};

/**
 * A label component that displays text with different styles based on the variant.
 *
 * @param {LabelProps} props - The properties for the Label component.
 * @param {string} props.text - The text to be displayed in the label.
 * @param {LABEL_VARIANTS} props.variant - The variant type for styling the label.
 * @returns {JSX.Element} The rendered label component.
 */
const Label: FC<LabelProps> = (props: LabelProps): JSX.Element => (
  <View>{_mappingVariant(props)}</View>
);

export default Label;
