import React from 'react';
import type {TextProps, ViewProps} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

import {TransactionContext} from '../TransactionDetails/TransactionDetails.screens';

import TransactionList from './TransactionList.screens';

import {CardProps, DynamicModalProps, TextInputProps} from '../../@types';

jest.mock('../../hooks', () => ({
  __esModule: true,
  useFetch: jest.fn(),
  useSearchTransactions: jest.fn(),
  useSort: jest.fn(),
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('../../components', () => {
  const React = require('react');
  const {TouchableOpacity, Text, View, TextInput} = require('react-native');

  return {
    __esModule: true,
    ArrowDownIcon: (props: TextProps) => <Text {...props}>ArrowDownIcon</Text>,
    Card: ({onPress, beneficiaryName}: CardProps) => (
      <Text>{beneficiaryName}</Text>
    ),
    DynamicModal: ({visible, title, onClose, children}: DynamicModalProps) =>
      visible ? (
        <TouchableOpacity onPress={onClose}>
          <Text>{title}</Text>
          {children}
        </TouchableOpacity>
      ) : null,
    GeneralText: ({children}: TextProps) => <Text>{children}</Text>,
    Layout: ({children}: ViewProps) => <View>{children}</View>,
    TextInput: ({
      placeholder,
      value,
      onChangeText,
      buttonComponentProps,
    }: TextInputProps) => (
      <View>
        <TextInput placeholder={placeholder} />
        <TouchableOpacity onPress={buttonComponentProps?.onPress}>
          <Text>{buttonComponentProps?.title}</Text>
        </TouchableOpacity>
      </View>
    ),
  };
});

const mockSetTransaction = jest.fn();
const MockTransactionProvider = ({children}: ViewProps) => {
  return (
    <TransactionContext.Provider
      value={{transaction: null, setTransaction: mockSetTransaction}}>
      {children}
    </TransactionContext.Provider>
  );
};

describe('TransactionList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with transaction data', async () => {
    const {useFetch, useSort} = require('../../hooks');
    useFetch.mockReturnValue({
      data: {
        1: {
          id: '1',
          sender_bank: 'Bank A',
          beneficiary_bank: 'Bank B',
          beneficiary_name: 'John Doe',
          account_number: '1234567890',
          amount: 1000000,
          completed_at: '2024-01-01T12:00:00Z',
          status: 'completed',
        },
        2: {
          id: '2',
          sender_bank: 'Bank C',
          beneficiary_bank: 'Bank D',
          beneficiary_name: 'Jane Smith',
          account_number: '0987654321',
          amount: 2000000,
          completed_at: '2024-01-02T12:00:00Z',
          status: 'completed',
        },
      },
      loading: null,
      error: null,
    });

    useSort.mockReturnValue({
      1: {
        id: '1',
        sender_bank: 'Bank A',
        beneficiary_bank: 'Bank B',
        beneficiary_name: 'John Doe',
        account_number: '1234567890',
        amount: 1000000,
        completed_at: '2024-01-01T12:00:00Z',
        status: 'completed',
      },
      2: {
        id: '2',
        sender_bank: 'Bank C',
        beneficiary_bank: 'Bank D',
        beneficiary_name: 'Jane Smith',
        account_number: '0987654321',
        amount: 2000000,
        completed_at: '2024-01-02T12:00:00Z',
        status: 'completed',
      },
    });

    const {getByPlaceholderText, getByText} = render(
      <NavigationContainer>
        <MockTransactionProvider>
          <TransactionList />
        </MockTransactionProvider>
      </NavigationContainer>,
    );

    expect(getByPlaceholderText('Cari nama, bank, atau nominal')).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Jane Smith')).toBeTruthy();
  });

  it('displays loading state', () => {
    const {useFetch} = require('../../hooks');
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const {getByText} = render(
      <NavigationContainer>
        <MockTransactionProvider>
          <TransactionList />
        </MockTransactionProvider>
      </NavigationContainer>,
    );

    expect(getByText('Loading...')).toBeTruthy();
  });

  it('displays error message', () => {
    const {useFetch} = require('../../hooks');
    useFetch.mockReturnValue({
      data: null,
      loading: false,
      error: 'Failed to fetch transactions',
    });

    const {getByText} = render(
      <NavigationContainer>
        <MockTransactionProvider>
          <TransactionList />
        </MockTransactionProvider>
      </NavigationContainer>,
    );

    expect(getByText('Error: Failed to fetch transactions')).toBeTruthy();
  });

  it('handles transaction selection', async () => {
    const {useFetch} = require('../../hooks');
    useFetch.mockReturnValue({
      data: {
        1: {
          id: '1',
          sender_bank: 'Bank A',
          beneficiary_bank: 'Bank B',
          beneficiary_name: 'John Doe',
          account_number: '1234567890',
          amount: 1000000,
          completed_at: '2024-01-01T12:00:00Z',
          status: 'completed',
        },
      },
      loading: false,
      error: null,
    });

    const {getByText} = render(
      <NavigationContainer>
        <MockTransactionProvider>
          <TransactionList />
        </MockTransactionProvider>
      </NavigationContainer>,
    );

    fireEvent.press(getByText('John Doe'));

    expect(mockSetTransaction).toHaveBeenCalledWith({
      id: '1',
      sender_bank: 'Bank A',
      beneficiary_bank: 'Bank B',
      beneficiary_name: 'John Doe',
      account_number: '1234567890',
      amount: 1000000,
      completed_at: '2024-01-01T12:00:00Z',
      status: 'completed',
    });
  });

  it('opens sorting modal and selects an option', async () => {
    const {useFetch} = require('../../hooks');
    useFetch.mockReturnValue({
      data: {
        1: {
          id: '1',
          sender_bank: 'Bank A',
          beneficiary_bank: 'Bank B',
          beneficiary_name: 'John Doe',
          account_number: '1234567890',
          amount: 1000000,
          completed_at: '2024-01-01T12:00:00Z',
          status: 'completed',
        },
      },
      loading: false,
      error: null,
    });

    const {getByText} = render(
      <NavigationContainer>
        <MockTransactionProvider>
          <TransactionList />
        </MockTransactionProvider>
      </NavigationContainer>,
    );

    fireEvent.press(getByText('URUTKAN'));

    fireEvent.press(getByText('Nama A-Z'));

    expect(getByText('A-Z')).toBeTruthy();
  });
});
