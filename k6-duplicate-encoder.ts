export function duplicateEncode(word: string) {
  const table: { [key: string]: string; } = {};

  for (const k of word.split('')) {
    table[k] = table[k] ? ')' : '(';
  }

  return word.split('').map((k: string) => table[k]).join('');
}
