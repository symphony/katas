export function number(array: string[]): string[] {
  return array.map((a, i) => `${i + 1}: ${a}`);
};