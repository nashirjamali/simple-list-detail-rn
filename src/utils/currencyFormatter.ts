/**
 * Formats a number to Indonesian Rupiah (IDR) currency format.
 *
 * @param {number} amount - The amount to be formatted.
 * @returns {string} The formatted amount as a string in IDR currency format.
 */
export const formatToIDR = (amount: number): string => {
  const formattedAmount = amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    .replace(',', '.');

  return `Rp${formattedAmount}`;
};
