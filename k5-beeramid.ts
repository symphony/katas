export function beeramid(bonus: number, price: number): number {
  const canAfford = Math.floor(bonus / price);
  const sqr = Math.floor(Math.sqrt(canAfford));
  return sqr;
}