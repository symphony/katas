const sumIntervals = (intervals) => {
  intervals.sort((a, b) => a[1] - b[1]);
  console.log(intervals);

  // let total = intervals[0][1] - intervals[0][0];
  let total = 0;
  for (let i = 0; i < intervals.length; i++) {
    let [a, b] = intervals[i];

    for (let j = 0; j < i; j++) {
      const [prevLow = Infinity, prevHigh = Infinity] = intervals[i - i];
      if (a < prevLow) {
        total += Math.min(prevLow, b) - Math.min(prevLow, a);
        a = Math.min(prevHigh, b);
        continue;
      };
      [a, b] = [Math.max(prevHigh, a), Math.max(prevHigh, b)];
    };
    total += b - a;
    console.log(i, 0, 'adding', [a, b], 'total:', total);
  };

  return total;
};