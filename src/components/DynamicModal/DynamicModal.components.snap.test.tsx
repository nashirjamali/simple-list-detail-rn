import React from 'react';
import {render} from '@testing-library/react-native';

import GeneralText from '../GeneralText/GeneralText.components';

import DynamicModal from './DynamicModal.components';

describe('DynamicModal Component', () => {
  it('renders correctly when visible', () => {
    const {toJSON} = render(
      <DynamicModal visible={true} title="Test Modal" onClose={jest.fn()}>
        <GeneralText variant="normal">
          This is a test modal content.
        </GeneralText>
      </DynamicModal>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when not visible', () => {
    const {toJSON} = render(
      <DynamicModal visible={false} title="Test Modal" onClose={jest.fn()}>
        <GeneralText variant="normal">
          This is a test modal content.
        </GeneralText>
      </DynamicModal>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
