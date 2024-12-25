import React from 'react';
import {render} from '@testing-library/react-native';

import {CARD_VARIANTS} from '../../constants';
import type {CardProps} from '../../@types';

import Card from './Card.components';

describe('Card Component', () => {
  const defaultProps: CardProps = {
    amount: 1000000,
    beneficiaryBank: 'BCA',
    beneficiaryName: 'John Doe',
    completedAt: '2023-12-25T00:00:00Z',
    senderBank: 'Mandiri',
    status: CARD_VARIANTS.SUCCESS,
    onPress: jest.fn(),
  };

  it('renders correctly with success status', () => {
    const {toJSON} = render(<Card {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with pending status', () => {
    const {toJSON} = render(
      <Card {...defaultProps} status={CARD_VARIANTS.PENDING} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
