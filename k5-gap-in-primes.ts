function gap(g, m, n) {
  const isPrime = (n) => {
    if (n <= 1) return false;
    if (n === 2) return true;
    for (let i = 2; i * i <= n; i++)
      if (n % i === 0) return true;
    return false;
  };

  let start = null;
  for (let i = m; i <= n; i++) {
    if (n < m + g) return null;

    if (!isPrime(i)) {
      if (i - start === g) return [start, i];
      start = i;
    };
  };

  return null;
};