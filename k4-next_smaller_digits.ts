const nextSmaller = (n) => {
  const split = n.toString().split('').map((c) => Number(c)).sort();

  // fix leading 0s
  if (split[0] === 0) {
    const found = split.findIndex((n) => n > 0);
    split[0] = split[found];
    split[found] = 0;
  }

  const min = Number(split.join(''));
  if (min >= n) return -1;

  for (let i = n - 9; i >= min; i--) {
    const copy = n.toString().split('').sort().join();
    const current = i.toString().split('').sort().join();

    if (copy === current) return i;
  }

  return -1;
};