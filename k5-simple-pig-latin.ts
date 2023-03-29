export const pigIt = (a: string): string => {
  const words = a.split(' ');
  return words.map((word: string) => `${word.slice(1)}${word[0]}ay`).join(' ');
};