const consolidate = (list) => {
  list.sort((a, b) => a[1] - b[1]);
  console.log('before', list);

  const accumulator = [list.shift()];
  for (const next of list) {
    for (const prev of [...accumulator]) {
      // check if fully above or below previous range
      if (next[1] < prev[0]) accumulator.unshift(next);
      if (next[0] > prev[1]) accumulator.push(next);

      // check for overlap and stretch previous start or end range
      if (next[0] < prev[0] && next[1] >= prev[0]) prev[0] = next[0];
      if (next[1] > prev[1] && next[0] <= prev[1]) prev[1] = next[1];
    };
  };

  console.log('after', accumulator);
  // if lists are the same length it means no more consolidating can be done
  return accumulator.length >= list.length ? accumulator : consolidate(accumulator);
};

const sumIntervals = (intervals) => {
  return consolidate(intervals).reduce((prev, next) => prev += next[1] - next[0], 0);
};