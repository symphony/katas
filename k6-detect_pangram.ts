const isPangram = (string) => (
  new Set(string.toLowerCase().replace(/[^a-z]+/g, '').split('')
  ).size === 26
);

const string1 = "The quick brown fox jumps over the lazy dog."
const string2 = "This is not a pangram."

console.log(
  isPangram(string1),
  isPangram(string2),
);
