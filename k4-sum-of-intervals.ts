const sumIntervals = (intervals) => {
  console.log('pre', intervals);
  const sorted = intervals.sort((a, b) => a[0] - b[1]);
  console.log('sorted', sorted);

  return sorted.reduce((sum, val) => {
    return val[1] - val[0] - (val[0] - sum);
  }, 0)
};
