import {TRANSACTION_STATUS} from '../constants';

export type TransactionStatus =
  (typeof TRANSACTION_STATUS)[keyof typeof TRANSACTION_STATUS];

export type Transaction = {
  id: string;
  amount: number;
  unique_code: number;
  status: TransactionStatus;
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
};

export type Transactions = {
  [key: string]: Transaction;
};
