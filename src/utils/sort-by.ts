export function sortBy<T, K extends keyof T>(field: K, order: 'asc' | 'desc') {
  return function (a: T, b: T) {
    if (a[field] > b[field]) {
      return order === 'asc' ? 1 : -1;
    }
    if (a[field] < b[field]) {
      return order === 'asc' ? -1 : 1;
    }
    return 0;
  };
}
