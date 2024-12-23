export const formatToIDR = (amount: number): string => {
  const formattedAmount = amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    .replace(',', '.');

  return `Rp${formattedAmount}`;
};
