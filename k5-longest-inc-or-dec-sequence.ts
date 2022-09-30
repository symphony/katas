const compare = (a, b, greaterThan) => greaterThan ? a > b : a < b;
const filterLongest = (arr) => {
  const longest = Math.max(...arr.map((list) => list.length));
  return arr.filter((list) => list.length === longest);
};
const deepSort = (left, right) => {
  const i = left.findIndex((x, i) => left[i] !== right[i])
  return left[i] - right[i];
};


const longestComb = (arr, command) => {
  const decreasing = command === '> >' || command === '>>';
  const validSequences = [[arr[0]]];

  for (let i = 1; i < arr.length; i++) {
    const candidates = [];
    for (const sequence of validSequences) {
      if (compare(sequence[sequence.length - 1], arr[i], decreasing)) candidates.push([...sequence, arr[i]])
    };

    validSequences.push(...filterLongest(candidates[0] ? candidates : [[arr[i]]]));
  };

  const results = filterLongest(validSequences);
  if (results[0].length < 3) return [];
  return results.length > 1 ? results.sort(deepSort) : results[0];
};
