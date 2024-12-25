import React, {type ReactNode} from 'react';
import {render} from '@testing-library/react-native';

import type {Transaction} from '../../@types';

import {
  TransactionContext,
  TransactionProvider,
} from './TransactionDetails.screens';
import TransactionDetails from './TransactionDetails.screens';
import {NavigationContainer} from '@react-navigation/native';

const mockTransaction: Transaction = {
  id: '12345',
  sender_bank: 'Bank A',
  beneficiary_bank: 'Bank B',
  beneficiary_name: 'John Doe',
  account_number: '1234567890',
  amount: 1000000,
  remark: 'Payment for services',
  unique_code: 50,
  created_at: '2024-01-01T12:00:00Z',
  completed_at: '2024-01-01T12:00:00Z',
  fee: 10000,
  status: 'SUCCESS',
};

const MockTransactionProvider: React.FC<{
  transaction: Transaction | null;
  children: ReactNode;
}> = ({transaction, children}) => {
  return (
    <NavigationContainer>
      <TransactionContext.Provider
        value={{transaction, setTransaction: jest.fn()}}>
        {children}
      </TransactionContext.Provider>
    </NavigationContainer>
  );
};

describe('TransactionDetail Component', () => {
  it('renders correctly with transaction data', () => {
    const {toJSON} = render(
      <MockTransactionProvider transaction={mockTransaction}>
        <TransactionDetails />
      </MockTransactionProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when no transaction is provided', () => {
    const {toJSON} = render(
      <MockTransactionProvider transaction={null}>
        <TransactionDetails />
      </MockTransactionProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
