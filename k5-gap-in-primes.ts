function gap(g, m, n) {
  const isComposite = (n) => {
    if (n <= 2) return false;
    for (let i = 2; i * i <= n; i++)
      if (n % i === 0) return false;
    return true;
  };

  for (let i = m; i <= n; i++) {
    if (n < m + g) return null;

    if (isComposite(i)) {
      const start = i;
      const end = i++ + g;
      if (end > n) return null;
      if (!isComposite(end)) continue;

      const range = Array.from([...Array(g - 1).keys()], (k) => k += i);
      const found = range.find(isComposite);
      if (!found) return [start, end];
      i = found - 1;
    };
  };

  return null;
};