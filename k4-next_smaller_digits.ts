// = helpers =
const findCombinations = (arr) => {
  const result = [];

  // recursively build every combination
  const permute = (list, m = []) => {
    if (list.length === 0) {
      result.push(m);
      return;
    }

    for (let i = 0; i < list.length; i++) {
      const curr = list.slice();
      const next = curr.splice(i, 1);
      permute(curr.slice(), m.concat(next))
    }
  };

  permute(arr)
  return result;
};

// = main function =
const nextSmaller = (n) => {
  const split = n.toString().split('');
  const variations = findCombinations(split)
    .map((v) => Number(v.join('')))
    .filter((v) => v.toString().length === split.length) // filter leading 0s
    .sort((a, b) => a - b);

  return variations[variations.findIndex((v) => v === n) - 1] || -1;
};