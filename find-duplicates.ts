function findDuplicateIndexes(arr) {
  const map = {};
  arr.forEach((item, i) => { map[item] = i });

  return [... new Set(arr.flatMap((item, i) => (
    i !== map[item] ? [i, map[item]] : [])
  ))];
};

const arr1 = ['banana', 'apple', 'blueberry', 'apple', 'orange'];
const arr2 = ['banana', 'apple', 'blueberry', 'apple', 'apple'];

console.log(findDuplicateIndexes(arr1));
// returns [1, 3]

console.log(findDuplicateIndexes(arr2));
// returns [1, 3, 4]
