const findMissingLetter = (array) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const offset = alphabet.indexOf(array[0].toLowerCase());
  if (array[0] !== alphabet[offset]) alphabet = alphabet.toUpperCase();

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== alphabet[i + offset]) return alphabet[i + offset];
  }
};