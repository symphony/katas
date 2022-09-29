const sumIntervals = (intervals) => {
  console.log('pre', intervals);
  const sorted = intervals.sort((a, b) => a[0] - b[1]);
  console.log('sorted', sorted);

  let sum = 0;
  let prevHigh = sorted[0][0];

  for (const [nextLow, nextHigh] of sorted) {
    const low = Math.max(prevHigh, nextLow);
    const high = Math.max(prevHigh, nextHigh);

    console.log('prev', prevHigh, 'low', low, 'high', high);
    sum += high - low;
    prevHigh = high;
    console.log('sum', sum);
  };

  return sum;
};