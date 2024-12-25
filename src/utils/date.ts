/**
 * Formats a date string to Indonesian date format (DD Month YYYY).
 *
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} The formatted date in Indonesian format.
 */
export const formatDateToIndonesian = (dateString: string): string => {
  const date = new Date(dateString);

  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
