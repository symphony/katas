const longestComb = (arr, command) => {
  console.log(arr);
  const decreasing = command === '> >' || command === '>>';
  const validSequences = arr.map((num) => [num]);
  const counts = Array(arr.length).fill(Array(arr.length).fill(1));

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[decreasing ? i : j] < arr[decreasing ? j : i]) {
        const newLen = counts[j][j] + 1;
        if (newLen > counts[j][i]) {
          counts[j][i] = newLen;
          validSequences[i].splice(-1, 0, arr[j]);
        };
      };
    };
  };
  decreasing && console.log(counts);
  decreasing && console.log('results', validSequences);

  const highest = Math.max(...validSequences.map((list) => list.length));
  if (highest < 3) return [];

  const results = validSequences.filter((list) => list.length === highest);
  return results.length > 1 ? results : results[0];
};
