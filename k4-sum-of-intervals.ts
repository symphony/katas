const sumIntervals = (intervals) => {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);

  let sum = 0;
  let prevHigh = sorted[0][0];

  for (const [nextLow, nextHigh] of sorted) {
    const low = Math.max(prevHigh, nextLow);
    const high = Math.max(prevHigh, nextHigh);

    sum += high - low;
    prevHigh = high;
  };

  return sum;
};