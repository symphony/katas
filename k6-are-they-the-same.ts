export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (!a1 || !a2) return false;
  console.log(a1);
  console.log(a2);
  return a2.every((a) => a1.some((b) => b === Math.sqrt(a)));
}