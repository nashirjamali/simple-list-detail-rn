import React from 'react';
import {render} from '@testing-library/react-native';

import {GENERAL_TEXT_VARIANTS} from '../../constants';

import GeneralText from './GeneralText.components';

describe('GeneralText Component', () => {
  it('renders correctly with header variant', () => {
    const {toJSON} = render(
      <GeneralText variant={GENERAL_TEXT_VARIANTS.HEADER}>
        This is a header text
      </GeneralText>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with normal variant', () => {
    const {toJSON} = render(
      <GeneralText variant={GENERAL_TEXT_VARIANTS.NORMAL}>
        This is normal text
      </GeneralText>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom style', () => {
    const {toJSON} = render(
      <GeneralText
        variant={GENERAL_TEXT_VARIANTS.NORMAL}
        style={{color: 'red'}}>
        This is normal text with custom style
      </GeneralText>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
