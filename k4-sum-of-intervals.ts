const sumIntervals = (intervals) => {
  console.log('adding', intervals);
  let total = 0;

  for (const range of intervals) {
    console.log('current', range);
    total += range[1] - range[0];
  };

  return total;
};