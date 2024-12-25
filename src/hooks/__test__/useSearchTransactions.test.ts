import {renderHook, act} from '@testing-library/react-hooks';

import type {Transactions} from '../../@types';

import useSearchTransactions from '../useSearchTransactions';

describe('useSearchTransactions', () => {
  const mockTransactions: Transactions = {
    1: {
      beneficiary_name: 'Alice',
      sender_bank: 'Bank A',
      beneficiary_bank: 'Bank B',
      amount: 1000,
      remark: 'sample remark',
      created_at: '2024-12-25 03:28:06',
      completed_at: '2024-12-25 03:30:06',
      fee: 0,
      id: '1',
      unique_code: 859,
      status: 'SUCCESS',
      account_number: '2220998515',
    },
    2: {
      beneficiary_name: 'Bob',
      sender_bank: 'Bank C',
      beneficiary_bank: 'Bank D',
      amount: 2000,
      remark: 'sample remark',
      created_at: '2024-12-25 03:28:06',
      completed_at: '2024-12-25 03:30:06',
      fee: 0,
      id: '2',
      unique_code: 859,
      status: 'SUCCESS',
      account_number: '2220998515',
    },
    3: {
      beneficiary_name: 'Charlie',
      sender_bank: 'Bank E',
      beneficiary_bank: 'Bank F',
      amount: 3000,
      remark: 'sample remark',
      created_at: '2024-12-25 03:28:06',
      completed_at: '2024-12-25 03:30:06',
      fee: 0,
      id: '3',
      unique_code: 859,
      status: 'SUCCESS',
      account_number: '2220998515',
    },
  };

  it('returns null when transactions are null', () => {
    const {result} = renderHook(() => useSearchTransactions(null, 'Alice'));
    expect(result.current).toBeNull();
  });

  it('returns all transactions when search term is empty', () => {
    const {result} = renderHook(() =>
      useSearchTransactions(mockTransactions, ''),
    );
    expect(result.current).toEqual(mockTransactions);
  });

  it('filters transactions by beneficiary name', () => {
    const {result} = renderHook(() =>
      useSearchTransactions(mockTransactions, 'Alice'),
    );
    expect(result.current).toEqual({1: mockTransactions[1]});
  });

  it('filters transactions by sender bank', () => {
    const {result} = renderHook(() =>
      useSearchTransactions(mockTransactions, 'Bank C'),
    );
    expect(result.current).toEqual({2: mockTransactions[2]});
  });

  it('filters transactions by beneficiary bank', () => {
    const {result} = renderHook(() =>
      useSearchTransactions(mockTransactions, 'Bank F'),
    );
    expect(result.current).toEqual({3: mockTransactions[3]});
  });

  it('filters transactions by amount', () => {
    const {result} = renderHook(() =>
      useSearchTransactions(mockTransactions, '2000'),
    );
    expect(result.current).toEqual({2: mockTransactions[2]});
  });

  it('returns an empty object when no transactions match the search term', () => {
    const {result} = renderHook(() =>
      useSearchTransactions(mockTransactions, 'Nonexistent'),
    );
    expect(result.current).toEqual({});
  });

  it('returns null when transactions are empty', () => {
    const {result} = renderHook(() => useSearchTransactions({}, 'Alice'));
    expect(result.current).toBeNull();
  });
});
