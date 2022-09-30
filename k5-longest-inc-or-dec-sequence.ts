const longestComb = (arr, command) => {
  const compare = (a, b) => command === '> >' || command === '>>' ? a > b : a < b;
  const filterLongest = (array) => {
    const longest = Math.max(...array.map((list) => list.length));
    return array.filter((list) => list.length === longest);
  };

  const validSequences = [];
  for (const end of arr) {
    const candidates = [];
    for (const sequence of validSequences) {
      if (compare(sequence[sequence.length - 1], end)) candidates.push([...sequence, end])
    };

    validSequences.push(filterLongest(candidates));
  };

  const results = filterLongest(validSequences)

  if (results[0].length < 3) return [];
  return results.length === 1 ? results[0] : results;
};
