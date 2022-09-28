const consolidate = (list) => {
  const accumulator = [list.shift()];

  for (const next of list) {
    let overlap = false;
    for (const prev of [...accumulator]) {
      // check if fully above or below previous range
      if (next[1] < prev[0] || next[0] > prev[1]) continue;

      overlap = true;
      // check for overlap and stretch previous start or end range
      if (next[0] < prev[0] && next[1] >= prev[0]) prev[0] = next[0];
      if (next[1] > prev[1] && prev[0] <= prev[1]) prev[1] = next[1];
    };
    if (!overlap) accumulator.push(next);
  };

  // if lists are the same length it means no more consolidating can be done
  return accumulator.length < list.length ? consolidate(accumulator) : accumulator;
};

const sumIntervals = (intervals) => {
  return consolidate(intervals).reduce((prev, next) => prev += next[1] - next[0], 0);
};