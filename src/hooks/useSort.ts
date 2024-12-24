import {useState, useEffect} from 'react';
import {Transactions, Transaction} from '../@types'; // Adjust the import path as necessary

const useSort = (items: Transactions, sortOption: string): Transactions => {
  const [sortedItems, setSortedItems] = useState<Transactions>({});

  useEffect(() => {
    const sortItems = () => {
      if (!items) return {};

      let sortedArray = Object.entries(items); // Convert Transactions object to an array of entries

      switch (sortOption) {
        case 'URUTKAN':
          // Implement your default sorting logic here if needed
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

      // Convert sorted array back to an object
      const sortedObject = Object.fromEntries(sortedArray);
      setSortedItems(sortedObject);
    };

    sortItems();
  }, [items, sortOption]);

  return sortedItems;
};

export default useSort;
