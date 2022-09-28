const consolidate = (list) => {
  const accumulator = [[0, 0]];
  for (const next of list) {
    for (const prev of accumulator) {
      // check if overlap previous range
      if (next[0] < prev[0] && next[1] >= prev[0]) prev[0] = next[0];
      if (next[1] > prev[1] && next[0] <= prev[1]) prev[1] = next[1];

      // check if fully above or below previous range
      if (next[1] - 1 < prev[0]) accumulator.unshift(next);
      if (next[0] - 1 > prev[1]) accumulator.push(next);
    };
  };

  return accumulator;
};

const sumIntervals = (intervals) => {
  intervals.sort((a, b) => a[1] - b[1]);
  console.log('before', intervals);

  const consolidated = consolidate(intervals);
  console.log('after', consolidated);
  return consolidated.reduce((prev, next) => prev += next[1] - next[0], 0);
};