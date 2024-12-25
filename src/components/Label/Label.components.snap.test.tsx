import React from 'react';
import {render} from '@testing-library/react-native';

import {LABEL_VARIANTS} from '../../constants';

import Label from './Label.components';

describe('Label Component', () => {
  it('renders correctly with pending variant', () => {
    const {toJSON} = render(
      <Label text="Pending..." variant={LABEL_VARIANTS.PENDING} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with success variant', () => {
    const {toJSON} = render(
      <Label text="Success!" variant={LABEL_VARIANTS.SUCCESS} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
