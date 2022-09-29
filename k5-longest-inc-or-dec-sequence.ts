const longestComb = (arr, command) => {
  const decreasing = command === '> >' || command === '>>';
  const validSequences = arr.map(() => []);
  const counts = Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[decreasing ? i : j] < arr[decreasing ? j : i]) {
        const newLen = counts[j] + 1;
        if (newLen > counts[i]) {
          counts[i] = newLen;
          validSequences[i].push(arr[j]);
        };
      };
    };

    // add end node value to sequence
    validSequences[i].push(arr[i]);
  };
  console.log(counts);
  console.log(validSequences);

  const highest = Math.max(...validSequences.map((list) => list.length));
  if (highest < 3) return [];

  const results = validSequences.filter((list) => list.length === highest);
  return results.length > 1 ? results : results[0];
};
