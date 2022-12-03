export function getSum(a: number, b: number): number {
  [a, b] = a < b ? [a, b] : [b, a];
  let total = a;
  for (let i = a + 1; i <= b; i++) {
    total += i;
  }

  return total;
}