export function duplicateEncode(word: string) {
  const table: { [key: string]: string; } = {};

  for (const k of word.toLowerCase().split('')) {
    table[k] = table[k] ? ')' : '(';
  }

  return word.toLowerCase().split('').map((k: string) => table[k]).join('');
}
