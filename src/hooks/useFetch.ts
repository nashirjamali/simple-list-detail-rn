import {useState, useEffect} from 'react';

import {UseFetchReturns} from '../@types';

/**
 * Custom hook for fetching data from a given URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {UseFetchReturns} - An object containing the data, loading state, and any error encountered.
 */
const useFetch = <T>(url: string): UseFetchReturns<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, loading, error};
};

export default useFetch;
