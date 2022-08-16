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

  for (let digits = n - 9; digits >= min; digits--) {
    const current = digits.toString().split('');
    const original = n.toString().split('');

    for (let j = original.length; j--;) {
      const foundIndex = original.indexOf(current[j]);
      if (foundIndex === -1) break;
      if (j === 0) return digits;
      original.splice(foundIndex, 1);
    }
  }

  return -1;
};