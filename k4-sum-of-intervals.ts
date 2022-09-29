const sumIntervals = (intervals) => {
  console.log('pre', intervals);
  const offset = intervals.sort((a, b) => a[0] - b[0])[0][0];
  const zeroAdjusted = intervals.map((val) => [val[0] - offset, val[1] - offset]);

  console.log('adjusted', zeroAdjusted);

  const overlapping = [];

  let sum = zeroAdjusted.reduce((prev, val) => {
    if (val[0] <= prev) return val[1];
    overlapping.push(val);
  }, 0)

  console.log('remaining', overlapping);
  return sum;
};
