const sumIntervals = (intervals) => {
  intervals.sort((a, b) => a[1] - b[1]);
  console.log(intervals);

  let total = intervals[0][1] - intervals[0][0];
  // let total = 0;
  console.log(0, 0, 'adding', [intervals[0][1], intervals[0][0]], 'total:', total);
  for (let i = 1; i < intervals.length; i++) {
    let [a, b] = intervals[i];

    // for (let j = 0; j < i; j++) {
    const [prevLow, prevHigh] = intervals[i - i];
    if (a < prevLow) {
      [a, b] = [Math.min(prevLow, a), Math.min(prevLow, b)]
      total += b - a;
      console.log(i, 0, 'low adding', [a, b], 'total:', total);
      continue;
    };
    [a, b] = [Math.max(prevHigh, a), Math.max(prevHigh, b)];
    // };
    total += b - a;
    console.log(i, 0, 'hih adding', [a, b], 'total:', total);
  };

  return total;
};