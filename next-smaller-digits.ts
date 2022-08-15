const nextSmaller = (n) => {
  const split = n.toString().split('');
  const variations = split.map((a, i) => (split.slice(i + 1)
    .map((b) => a + b)
  )).sort((a, b) => a - b);

  return variations[variations.findIndex((v) => v === n) - 1] || -1;
};