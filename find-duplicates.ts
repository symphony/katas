function findDuplicateIndexes(arr) {
  const map = {};
  arr.forEach((item, i) => { map[item] ? map[item].push(i) : map[item] = [i] });
  return Object.values(map).filter((list) => list.length > 1).flat();
};

const arr1 = ['banana', 'apple', 'blueberry', 'apple', 'orange'];
const arr2 = ['banana', 'apple', 'blueberry', 'apple', 'apple', 'blueberry', 'apple',];

console.log(findDuplicateIndexes(arr1));
// returns [1, 3]

console.log(findDuplicateIndexes(arr2));
// returns [1, 2, 3, 4, 5, 6]
