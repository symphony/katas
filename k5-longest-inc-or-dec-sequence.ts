const longestComb = (arr, command) => {
  const compare = (a, b) => command === '> >' || command === '>>' ? a > b : a < b;
  const validSequences = [];

  for (const end of arr) {
    const candidates = [];
    for (const sequence of validSequences) {
      if (compare(sequence[sequence.length - 1], end)) candidates.push([...sequence, end])
      candidates.push(sequence);
    };

    validSequences.splice(0, validSequences.length, ...candidates, [end]);
  };

  const longest = Math.max(...validSequences.map((list) => list.length));
  const results = validSequences.filter((list) => list.length === longest);
  if (results[0].length < 3) return [];

  return results.length > 1 ? results : results[0];
};