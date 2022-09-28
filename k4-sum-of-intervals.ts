const sumIntervals = (intervals) => {
  const mySet = new Set();

  for (const range of intervals) {
    for (let i = range[0]; i < range[1]; i++) {
      mySet.add(i)
    };
  }


  return [...mySet].length;
};