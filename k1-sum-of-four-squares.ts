const fourSquares = (n) => {
  let [a, b, c, d] = [0n, 0n, 0n, 0n];


  return [a, b, c, d,];
};































// test runner
(() => {
  const tests = [0n, 1n, 17n, 33n, 215n, 333n, 2n ** 12n - 3n, 1234567890n, 106369249365575352836589875696130383747n];

  for (const n of tests) {
    let [a, b, c, d] = fourSquares(n);
    console.log(`Expected ${(a * a + b * b + c * c + d * d)} to equal ${n}`);
  };
})();
