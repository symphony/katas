const isPangram = (string) => {
  const phrase = string.toLowerCase().split('');
  return !(
    'abcdefghijklmnopqrstuvwxyz'.split('').some((a) => !phrase.includes(a))
  );
};

const string1 = "The quick brown fox jumps over the lazy dog."
const string2 = "This is not a pangram."

console.log(
  isPangram(string1),
  isPangram(string2),
);
