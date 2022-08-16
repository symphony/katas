const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const start = alphabet.indexOf(array[0]);

  return alphabet[array.findIndex((c, i) => c !== alphabet[i + start]) + start];
};