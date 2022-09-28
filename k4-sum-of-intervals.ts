const sumIntervals = (intervals) => {
  intervals.sort((a, b) => a[1] - b[1]);
  console.log(intervals);

  let total = 0;
  for (let i = 0; i < intervals.length; i++) {
    let [a, b] = intervals[i];

    for (let j = 0; j < i; j++) {
      const [prevLow, prevHigh] = intervals[j];
      if (a >= prevLow && a < prevHigh) {
        a = prevHigh;
        b = Math.max(prevHigh, b);
      };
    };

    total += b - a;
    console.log('adding', [a, b], 'total:', total);
    console.log('total', total);
  };

  return total;
};