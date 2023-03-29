export const pigIt = (a: string): string => {
  const words = a.split(' ');
  return words.map((word: string) => /[a-zA-Z]/.test(word) ? `${word.slice(1)}${word[0]}ay` : word).join(' ');
};