import React, {FC} from 'react';
import {StyleSheet, Text, type TextStyle, type StyleProp} from 'react-native';

import type {GeneralTextProps, GeneralTextVariantsTypes} from '../../@types';

import styles from './GeneralText.styles';

/**
 * Retrieves the text style based on the provided variant.
 *
 * @param {GeneralTextVariantsTypes} variant - The variant type for the text style.
 * @returns {TextStyle} The corresponding text style.
 */
const _getTextStyle = (variant: GeneralTextVariantsTypes): TextStyle => {
  return styles[variant];
};

/**
 * A general text component that applies styles based on the variant.
 *
 * @param {GeneralTextProps} props - The properties for the GeneralText component.
 * @param {GeneralTextVariantsTypes} props.variant - The variant type for styling.
 * @param {React.ReactNode} props.children - The content to be displayed within the text.
 * @param {StyleProp<TextStyle>} [props.style] - Additional styles to apply to the text.
 * @returns {JSX.Element} The rendered text component.
 */
const GeneralText: FC<GeneralTextProps> = ({
  variant,
  children,
  style,
  ...props
}: GeneralTextProps): JSX.Element => {
  const combinedStyle = StyleSheet.flatten([_getTextStyle(variant), style]);

  return (
    <Text style={combinedStyle} {...props}>
      {children}
    </Text>
  );
};

export default GeneralText;
