const nextSmaller = (n) => {
  const sorted = n.toString().split('').sort();

  // fix leading 0s
  if (sorted[0] === '0') {
    const found = sorted.findIndex((n) => n !== '0');
    sorted[0] = sorted[found];
    sorted[found] = '0';
  }

  const min = Number(sorted.join(''));
  if (min >= n) return -1;

  for (let i = n - 9; i >= min; i--) {
    const copy = n.toString().split('').sort().join('');
    const current = i.toString().split('').sort().join('');

    if (copy === current) return i;
  }

  return -1;
}