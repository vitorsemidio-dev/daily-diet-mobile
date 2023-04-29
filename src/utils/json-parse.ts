export function jsonParse<T>(dataStrifigy: string) {
  return JSON.parse(dataStrifigy) as T;
}
