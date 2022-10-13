function smaller(nums) {
  return nums.map((a, i) => nums.slice(i).filter((b) => a > b).length);
};