
// Solution 1: sort and compare opposite ends
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = (nums, target) => {
//   const arr = [...nums];
//   arr.sort((a, b) => a - b);

//   let inA = 0;
//   let inB = nums.length - 1;

//   for (let i = 0; i < nums.length; i++) {
//     const valA = arr[inA];
//     const valB = arr[inB];
//     const current = valA + valB;

//     if (current === target) {
//       const foundA = nums.findIndex((v) => v === valA);
//       const foundB = nums.findIndex((v, i) => v === valB && i !== foundA);

//       return [foundA, foundB];
//     }

//     if (current < target) {
//       inA++;
//     } else {
//       inB--;
//     }
//   }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const table = {};
  const dupes = {};

  nums.forEach((v, i) => {
    if (table[v] === undefined) {
      table[v] = i;
      return
    } else {
      dupes[v] = i;
    }
    console.log(!table[v] ? 'table' : 'dupes');
    console.log(!table[v] ? table : dupes);
  });

  for (const [i, v] of nums.entries()) {
    const opposite = target - v;
    if (table[opposite] && i !== table[v]) return [table[v], i];
  };

  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));