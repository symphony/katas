const sumIntervals = (intervals) => {
  intervals.sort((a, b) => a[1] - b[1]);
  console.log(intervals);

  // let total = intervals[0][1] - intervals[0][0];
  let total = 0;
  for (let i = 0; i < intervals.length; i++) {
    let [a, b] = intervals[i];

    for (let j = 0; j < i; j++) {
      const [prevLow, prevHigh] = intervals[j];
      a = a < prevLow ? Math.min(prevLow, a) : Math.max(prevHigh, a);
      b = a < prevLow ? Math.min(prevLow, b) : Math.max(prevHigh, b);
      total += b - a;
    };
    console.log(i, 'adding', [a, b], 'total:', total);
  };

  return total;
};