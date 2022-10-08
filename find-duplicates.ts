function findDuplicateIndexes(arr) {
  const map = {}
  arr.forEach((item, i) => { map[item] = i });

  const duplicateIndexes = new Set();
  arr.forEach((item, i) => {
    if (i !== map[item]) duplicateIndexes.add(map[item]).add(i);
  });

  return [...duplicateIndexes];
};

const arr1 = ['banana', 'apple', 'blueberry', 'apple', 'orange'];
const arr2 = ['banana', 'apple', 'blueberry', 'apple', 'apple'];

console.log(findDuplicateIndexes(arr1));
// return [1, 3]

console.log(findDuplicateIndexes(arr2));
// returns [1, 3, 4]
