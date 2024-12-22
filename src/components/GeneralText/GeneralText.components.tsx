import React, {FC} from 'react';
import {Text, type TextStyle} from 'react-native';

import type {GeneralTextProps, GeneralTextVariantsTypes} from '../../@types';

import styles from './GeneralText.styles';

/**
 * Retrieves the text style based on the provided variant.
 *
 * @param {GeneralTextVariantsTypes} variant - The variant type for the text style.
 * @returns {TextStyle} The corresponding text style.
 */
const getTextStyle = (variant: GeneralTextVariantsTypes): TextStyle => {
  return styles[variant];
};

/**
 * A general text component that applies styles based on the variant.
 *
 * @param {GeneralTextProps} props - The properties for the GeneralText component.
 * @param {GeneralTextVariantsTypes} props.variant - The variant type for styling.
 * @param {React.ReactNode} props.children - The content to be displayed within the text.
 * @returns {JSX.Element} The rendered text component.
 */
const GeneralText: FC<GeneralTextProps> = ({
  variant,
  children,
  ...props
}: GeneralTextProps): JSX.Element => (
  <Text {...getTextStyle(variant)} {...props}>
    {children}
  </Text>
);

export default GeneralText;
