import {useState, useEffect} from 'react';

import type {Transactions} from '../@types';

/**
 * Custom hook for sorting transactions based on a specified sort option.
 *
 * @param {Transactions} items - The transactions to be sorted.
 * @param {string} sortOption - The option to determine the sorting order.
 * @returns {Transactions} The sorted transactions.
 */
const useSort = (items: Transactions, sortOption: string): Transactions => {
  const [sortedItems, setSortedItems] = useState<Transactions>({});

  useEffect(() => {
    const sortItems = () => {
      if (!items) return {};

      let sortedArray = Object.entries(items);

      switch (sortOption) {
        case 'URUTKAN':
          break;
        case 'A-Z':
          sortedArray.sort(([, a], [, b]) =>
            a.beneficiary_name.localeCompare(b.beneficiary_name),
          );
          break;
        case 'Z-A':
          sortedArray.sort(([, a], [, b]) =>
            b.beneficiary_name.localeCompare(a.beneficiary_name),
          );
          break;
        case 'Tanggal Terbaru':
          sortedArray.sort(
            ([, a], [, b]) =>
              new Date(b.completed_at).getTime() -
              new Date(a.completed_at).getTime(),
          );
          break;
        case 'Tanggal Terlama':
          sortedArray.sort(
            ([, a], [, b]) =>
              new Date(a.completed_at).getTime() -
              new Date(b.completed_at).getTime(),
          );
          break;
        default:
          break;
      }

      const sortedObject = Object.fromEntries(sortedArray);
      setSortedItems(sortedObject);
    };

    sortItems();
  }, [items, sortOption]);

  return sortedItems;
};

export default useSort;
