const longestComb = (arr, command) => {
  const decreasing = command === '> >' || command === '>>';
  const validSequences = arr.map(() => []);
  const counts = Array(arr.length).fill(1);

  const pushOrUnshift = (array, element, unshift) => {
    if (unshift) array.unshift(element);
    else array.push(element);
  };

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        const newLen = counts[j] + 1;
        if (newLen > counts[i]) {
          counts[i] = newLen;
          pushOrUnshift(validSequences[i], arr[j], decreasing)
        };
      };
    };

    // add end node value to sequence
    pushOrUnshift(validSequences[i], arr[i], decreasing)
  };

  const highest = Math.max(...validSequences.map((list) => list.length));
  if (highest < 3) return [];

  const results = validSequences.filter((list) => list.length === highest);
  console.log('results', results);

  // reverse lists if looking for decreasing
  return results.length > 1 ? results : results[0];
};
