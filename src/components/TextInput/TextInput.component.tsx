import React, {FC} from 'react';
import {TextInput as TextInputRN, View} from 'react-native';

import {TextInputProps} from '../../@types';
import {BUTTON_VARIANTS} from '../../constants';

import Button from '../Button/Button.components';

import styles from './TextInput.styles';

/**
 * A customizable text input component that includes a button for additional actions.
 *
 * @component
 * @param {TextInputProps} props - The properties for the TextInput component.
 * @param {string} props.placeholder - The placeholder text to display when the input is empty.
 * @param {string} props.value - The current value of the text input.
 * @param {function} props.onChangeText - Callback function that is called when the text input value changes.
 * @returns {JSX.Element} The rendered TextInput component with an associated button.
 */
const TextInput: FC<TextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  ...props
}: TextInputProps): JSX.Element => (
  <View style={styles.container}>
    <TextInputRN
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      {...props}
    />
    <Button title="URUTKAN" variant={BUTTON_VARIANTS.NORMAL} />
  </View>
);

export default TextInput;
