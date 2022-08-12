/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const arr = [...nums];
  arr.sort((a, b) => a - b);

  let inA = 0;
  let inB = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    const valA = arr[inA];
    const valB = arr[inB];
    const current = valA + valB;


    if (current === target) {
      const reversed = [...nums];
      const foundA = nums.findIndex((v) => v === valA)
      const foundB = nums.length - reversed.reverse().findIndex((v) => v === valB) - 1;

      return [foundA, foundB];
    }

    if (current < target) {
      inA++;
    } else {
      inB--;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));