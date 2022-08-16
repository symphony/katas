const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);

  return alphabet.slice(start).find((c, i) => c !== array[i]);
};