import React from 'react';
import {render} from '@testing-library/react-native';
import Button from './Button.components';
import {BUTTON_VARIANTS} from '../../constants';

describe('Button Component', () => {
  it('renders correctly with title', () => {
    const {toJSON} = render(
      <Button title="Click Me" variant={BUTTON_VARIANTS.NORMAL} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with left icon', () => {
    const {toJSON} = render(
      <Button title="Click Me" variant={BUTTON_VARIANTS.NORMAL} icon={<></>} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with right icon', () => {
    const {toJSON} = render(
      <Button
        title="Click Me"
        variant={BUTTON_VARIANTS.NORMAL}
        iconRight={<></>}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly as an icon button', () => {
    const {toJSON} = render(
      <Button
        variant={BUTTON_VARIANTS.ICON}
        icon={<></>}
        title="Icon Button"
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
