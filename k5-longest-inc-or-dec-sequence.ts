// = helpers =
const compare = (a, b, greaterThan) => greaterThan ? a > b : a < b;
const filterLongest = (arr) => {
  const longest = Math.max(...arr.map((list) => list.length));
  return arr.filter((list) => list.length === longest);
};
const deepSort = (left, right, external) => {
  const i = left.findIndex((x, i) => external[external.indexOf(left[i])] !== external[external.indexOf(right[i])]);
  const [a, b] = [external.indexOf(left[i]), external.indexOf(right[i])];
  return a - b;
};

// = main function =
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
  if (results.length === 1) return results[0];

  return results.sort((a, b) => deepSort(a, b, arr));
};
