const longestComb = (arr, command) => {
  const decreasing = command === '> >';
  const validSequences = arr.map(() => []);
  const counts = Array(arr.length).fill(1);
  if (decreasing) arr.reverse();

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        const newLen = counts[j] + 1;
        if (newLen > counts[i]) {
          counts[i] = newLen;
          validSequences[i].push(arr[j]);
        };
      };
    };

    // add end node value to sequence
    validSequences[i].push(arr[i]);
    if (decreasing) validSequences[i].reverse();
  };
  if (decreasing) validSequences.reverse();

  const highest = Math.max(...validSequences.map((list) => list.length));
  if (highest < 3) return [];

  const results = validSequences.filter((list) => list.length === highest);
  return results.length > 1 ? results : results[0];
};
