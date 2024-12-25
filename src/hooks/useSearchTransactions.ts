import {useState, useEffect} from 'react';

import type {Transactions} from '../@types';

/**
 * Custom hook for searching transactions based on name, bank, or amount.
 *
 * @param {Transactions | null} transactions - The transactions data to search through.
 * @param {string} searchTerm - The term to search for.
 * @returns {Transactions | null} The filtered transactions or null if no transactions are found.
 */
const useSearchTransactions = (
  transactions: Transactions | null,
  searchTerm: string,
): Transactions | null => {
  const [filteredTransactions, setFilteredTransactions] =
    useState<Transactions | null>(transactions);

  useEffect(() => {
    if (!transactions || Object.keys(transactions).length === 0) {
      setFilteredTransactions(null);
      return;
    }

    if (!searchTerm) {
      setFilteredTransactions(transactions);
      return;
    }

    const lowercasedFilter = searchTerm.toLowerCase();
    const filteredData = Object.entries(transactions).filter(
      ([key, transaction]) => {
        const {beneficiary_name, sender_bank, beneficiary_bank, amount} =
          transaction;
        return (
          beneficiary_name.toLowerCase().includes(lowercasedFilter) ||
          sender_bank.toLowerCase().includes(lowercasedFilter) ||
          beneficiary_bank.toLowerCase().includes(lowercasedFilter) ||
          amount.toString().includes(lowercasedFilter)
        );
      },
    );

    setFilteredTransactions(Object.fromEntries(filteredData));
  }, [transactions, searchTerm]);

  return filteredTransactions;
};

export default useSearchTransactions;
