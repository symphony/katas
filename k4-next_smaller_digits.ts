const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
      }
    }
  }
  permute(inputArr)

  return result;
}

const nextSmaller = (n) => {
  const split = n.toString().split('');
  const variations = permutator(split)
    .map((v) => Number(v.join('')))
    .filter((v) => v.toString().length === split.length)
    .sort((a, b) => a - b);

  console.log(variations);

  return variations[variations.findIndex((v) => Number(v) === n) - 1] || -1;
};