const sumIntervals = (intervals) => {
  intervals.sort((a, b) => a[1] - b[1]);
  console.log('adding', intervals);

  let total = 0;
  for (let i = 0; i < intervals.length; i++) {
    const prev = i !== 0 ? intervals[i - 1][1] : -Infinity;
    total += Math.max(prev, intervals[i][1]) - Math.max(prev, intervals[i][0]);
  };

  return total;
};