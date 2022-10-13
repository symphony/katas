function duplicateCount(text) {
  const count = {};
  [...text.toLowerCase()].forEach((char, i) => { count[char] ? count[char].push(i) : count[char] = [] });
  return Object.values(count).filter((char) => char.length).length
};