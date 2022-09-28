const sumIntervals = (intervals) => {
  let total = 0;

  for (const range of intervals) {
    console.log(range);
    total += range[1] - range[0];
  };

  return total;
};