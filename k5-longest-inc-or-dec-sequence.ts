const longestComb = (arr, command) => {
  if (command === '< <') arr.reverse();
  const lengths = Array(arr.length).fill(1);
  // initialize all valid sequences to include each end position
  const validSequences = arr.map((num) => [num]);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        const newLen = lengths[j] + 1;
        if (newLen > lengths[i]) {
          lengths[i] = newLen;
        };
      };
    };
  };

  return Math.max(...lengths);
};