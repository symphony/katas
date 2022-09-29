const sumIntervals = (intervals) => {
  const offset = intervals.sort((a, b) => a[0] - b[0])[0][0];
  const zeroAdjust = intervals.map((val) => [val[0] - offset, val[1] - offset]);

  const squashed = zeroAdjust.reduce((prev, val) => {
    if (val[0] <= prev) return val[1];

  }, 0)
};
