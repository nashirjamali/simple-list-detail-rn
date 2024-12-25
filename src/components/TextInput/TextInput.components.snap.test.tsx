import React from 'react';
import {render} from '@testing-library/react-native';

import {ButtonProps} from '../../@types';
import {BUTTON_VARIANTS} from '../../constants';

import TextInput from './TextInput.component';

describe('TextInput Component', () => {
  it('renders correctly with placeholder and value', () => {
    const {toJSON} = render(
      <TextInput
        placeholder="Enter text"
        value="Sample text"
        onChangeText={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with button', () => {
    const buttonProps: ButtonProps = {
      title: 'Submit',
      variant: BUTTON_VARIANTS.NORMAL,
      onPress: jest.fn(),
    };

    const {toJSON} = render(
      <TextInput
        placeholder="Enter text"
        value="Sample text"
        onChangeText={() => {}}
        buttonComponentProps={buttonProps}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
