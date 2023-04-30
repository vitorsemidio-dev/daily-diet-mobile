/**
 * Converts a date string in the format (dd.mm.yyyy) and a time string in the format (hh:mm)
 * to a JavaScript Date object.
 * @param {string} date - The date string to be converted.
 * @param {string} hour - The time string to be converted.
 * @returns {Date} A JavaScript Date object.
 * @example
 * Returns a Date object representing April 24th, 2023 at 9:05 AM
 * const myDate = dateAdapter('24.04.2023', '09:05');
 */
export function dateAdapter(date: string, hour: string): Date {
  const [day, month, year] = date.split('.');
  const [hours, minutes] = hour.split(':');
  return new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hours),
    parseInt(minutes),
  );
}
