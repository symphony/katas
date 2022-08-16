const firstNonRepeatingLetter = (s) => {
  const str = s.toLowerCase();
  const chars = {};

  for (let i = 0; i < s.length; i++) {
    if (chars[str[i]] === undefined) {
      chars[str[i]] = { index: i, valid: true, };
      continue;
    }

    chars[str[i]].valid = false;
  }

  const valid = Object.values(chars).filter((c) => c.valid);
  const first = valid.sort((a, b) => a.index - b.index)[0];
  return first && s[first.index] || '';
};