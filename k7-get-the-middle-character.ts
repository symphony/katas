export function getMiddle(s: string) {
  const i = Math.floor(s.length / 2) + 1;
  const isEven = s.length % 2 === 0;
  return isEven ? s.slice(i - 2, i) : s.slice(i - 1, i);
}