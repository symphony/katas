const assert = require('assert');

/**
 * Dynamic programming approach to find longest increasing subsequence.
 * Complexity: O(n * n)
 *
 * @param {number[]} arr
 * @return {number}
 */
const longestSequence = (sequence) => {
  const lengths = Array(sequence.length).fill(1);

  for (let i = 1; i < sequence.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sequence[j] < sequence[i]) {
        lengths[i] = Math.max(lengths[i], lengths[j] + 1);
      };
    };
  };

  return Math.max(...lengths);
};


/**
 * Dynamic programming approach to find longest increasing subsequence.
 * Complexity: O(n * n)
 *
 * @param {number[]} arr
 * @return {number}
 */
function solveLIS(arr) {
  // Create an array for longest increasing substrings lengths and
  // fill it with 1s. This means that each element of the arr
  // is itself a minimum increasing subsequence.
  const lengthsArr = Array(arr.length).fill(1);

  let j = 0;
  let i = 1;

  while (i < arr.length) {
    if (arr[j] < arr[i]) {
      // If current element is bigger then the previous one. then
      // it is a part of increasing subsequence where length is
      // by 1 bigger then the length of increasing subsequence
      // for the previous element.
      const newLen = lengthsArr[j] + 1;
      if (newLen > lengthsArr[i]) {
        // Increase only if previous element would give us a
        // bigger subsequence length then we already have for
        // current element.
        lengthsArr[i] = newLen;
      }
    }

    // Move previous element index right.
    j += 1;

    // If previous element index equals to current element index then
    // shift current element right and reset previous element index to zero.
    if (j === i) {
      i += 1;
      j = 0;
    }
  }

  // Find the largest element in lengthsArr, as it
  // will be the biggest length of increasing subsequence.
  let longestIncreasingLength = 0;

  for (let i = 0; i < lengthsArr.length; i += 1) {
    if (lengthsArr[i] > longestIncreasingLength) {
      longestIncreasingLength = lengthsArr[i];
    }
  }

  return longestIncreasingLength;
};


try {
  assert.equal(longestSequence([1, 5, 2, 7, 3]), 3);
  console.log('PASSED');
} catch {
  console.error('-- FAILED --');
} finally {
  console.log('[1,5,2,7,3] should return 3\n');
};

try {
  assert.equal(longestSequence([13, 1, 3, 4, 8, 4]), 4);
  console.log('PASSED');
} catch {
  console.error('-- FAILED --');
} finally {
  console.log('[13,1,3,4,8,4] should return 4\n');
};
try {
  assert.equal(longestSequence([13, 1, 3, 4, 8, 19, 17, 8, 0, 20, 14]), 6);
  console.log('PASSED');
} catch {
  console.error('-- FAILED --');
} finally {
  console.log('[13,1,3,4,8,19,17,8,0,20,14] should return 6\n');
};
