// = helpers =
const compare = (a, b, greaterThan) => greaterThan ? a > b : a < b;
const filterLongest = (arr) => {
  const longest = Math.max(...arr.map((list) => list.length));
  return arr.filter((list) => list.length === longest);
};
const lookupSort = (left, right, external) => {
  // find first pair with unique values
  const i = left.findIndex((x, i) => external[external.indexOf(left[i])] !== external[external.indexOf(right[i])]);
  const [a, b] = [external.indexOf(left[i]), external.indexOf(right[i])];
  return a - b;
};

// = main function =
const longestComb = (arr, command) => {
  arr = arr.map((a) => new Set([a])); // necessary to distinguish duplicate values
  const decreasing = command === '> >' || command === '>>';
  const validSequences = [[arr[0]]];

  for (let i = 1; i < arr.length; i++) {
    const candidates = [];
    for (const sequence of validSequences) {
      const [a, b] = [...sequence[sequence.length - 1], ...arr[i]];
      if (compare(a, b, decreasing)) candidates.push([...sequence, arr[i]])
    };

    validSequences.push(...filterLongest(candidates[0] ? candidates : [[arr[i]]]));
  };

  const results = filterLongest(validSequences);
  if (results[0].length < 3) return [];

  // convert sets back to integers
  const parsed = results.sort((a, b) => lookupSort(a, b, arr)).map((list) => list.map((set) => [...set][0]))
  if (results.length === 1) return parsed[0];
  return parsed;
};
