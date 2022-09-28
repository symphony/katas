const sumIntervals = (intervals) => {
  console.log('checking', intervals);
  let total = 0;

  for (const range of intervals) {
    const highests = [].concat(...intervals.map((current) => range !== current ? current[1] : []))
    console.log('found', highests);
    const highest = highests
      .sort((a, b) => b - a)
      .find((n) => range[1] > n && n >= range[0])
      || range[0];
    console.log('highest', highest);

    total += range[1] - highest;
  };

  return total;
};