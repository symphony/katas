const consolidate = (prev, next) => {
  const consolidated = [];
  if (next[0] < prev[0]) {
    total += Math.min(prev[0], next[1]) - next[0];
    next[0] = Math.min(prev[1], next[1]);
  };
  if (next[0] < prev[1]) {
    total += Math.max(prev[1], next[1]) - prev[1];
  };
};

const sumIntervals = (intervals) => {
  intervals.sort((a, b) => a[1] - b[1]);
  console.log(intervals);

  // let total = intervals[0][1] - intervals[0][0];
  let total = 0;
  for (let i = 0; i < intervals.length; i++) {
    let [a, b] = intervals[i];

    for (let j = 0; j <= i; j++) {
      const [prevLow = Infinity, prevHigh = Infinity] = intervals[i - i];
      if (a < prevLow) {
        total += Math.min(prevLow, b) - a;
        a = Math.min(prevHigh, b);
        continue;
      };
      if (a < prevHigh) {
        total += Math.max(prevHigh, b) - prevHigh;
        continue;
      };
      total += b - a;
      console.log(i, 0, 'adding', [a, b], 'total:', total);
    };

  };

  return total;
};