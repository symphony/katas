export function getMiddle(s: string) {
  const i = Math.floor(s.length / 2);
  const isEven = s.length % 2 === 0;
  return isEven ? s.slice(i - 1, i + 2) : s.slice(i, i + 1);
}