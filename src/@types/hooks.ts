export type UseFetchReturns<TData> = {
  data: TData | null;
  loading: boolean;
  error: string | null;
};
