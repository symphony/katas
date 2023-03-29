export function duplicateEncode(word: string) {
  const table = {};

  for (const k in word.split('')) {
    table[k] = table[k] ? ')' : '(';
  }

  return word.split('').map((k) => table[k]).join('');
}
