const nextSmaller = (n) => {
  const split = n.toString().split('');
  const variations = split.map((a, i) => (split.slice(i + 1)
    .map((b) => a + b)
  ).reduce((acc, val) => acc.concat(val), [])
  ).sort((a, b) => a - b);

  console.log(variations);

  return variations[variations.findIndex((v) => Number(v) === n) - 1] || -1;
};