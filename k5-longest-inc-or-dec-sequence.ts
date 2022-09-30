// = helpers =
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
  // convert all numbers to objects - necessary to distinguish duplicate values later
  arr = arr.map((a) => [a]);
  const compare = (a, b) => command === '> >' || command === '>>' ? a > b : a < b;
  const validSequences = [[arr[0]]];

  for (let i = 1; i < arr.length; i++) {
    const candidates = [];
    for (const nums of validSequences) {
      const [a, b] = [...nums[nums.length - 1], ...arr[i]];
      if (compare(a, b)) candidates.push([...nums, arr[i]])
    };

    validSequences.push(...filterLongest(candidates[0] ? candidates : [[arr[i]]]));
  };

  const results = filterLongest(validSequences);
  if (results[0].length < 3) return [];
  // convert sets back to integers
  const parsed = results.sort((a, b) => lookupSort(a, b, arr)).map((list) => list.map((num) => num[0]));
  return results.length === 1 ? parsed[0] : parsed;
};
