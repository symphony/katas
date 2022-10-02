/**
 * The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43
 *
 * A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).
 *
 *
 * @param g
 * @param m
 * @param n
 */
const gap = (g, m, n) => {
  const isPrime = (n) => {
    if (n <= 1) return false;
    if (n === 2) return true;

    for (let i = 2; i < n; i++)
      if (n % i === 0) return true;

    return false;
  };


  let start = m;
  for (let i = m; m <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (!isPrime(i)) {
        start = i;
        const end = ++i + g;
        if (end > n) return null;

        for (i; i < end; i++) {
          if (isPrime(i)) break;
          return [start, i + 1];
        };
      };
    };
  };

  return null;
};