import {Transaction, Transactions} from './model';

export type UseFetchReturns<TData> = {
  data: TData | null;
  loading: boolean;
  error: string | null;
};

export type TransactionContextType = {
  transaction: Transaction | null;
  setTransaction: (transaction: Transaction | null) => void;
};
