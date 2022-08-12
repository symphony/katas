
// @ts-nocheck
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

  nums.forEach((v, i) => {
    if (table[v] === undefined) table[v] = i;
  });

  for (const [i, v] of nums.entries()) {
    const x = target - v;

    if (![undefined, i].includes(table[x])) {
      return [table[x], i];
    }
  };

  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));