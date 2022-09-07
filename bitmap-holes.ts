function SearchingChallenge(strArr) {
  let total = 0;

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      const current = strArr[i][j];

      const up = strArr[i - 1]?.[j];
      const upRight = strArr[i - 1]?.[j + 1];
      const left = strArr[i][j - 1];
      const right = strArr[i][j + 1];

      if (current === '0' && up !== '0' && left !== '0') {
        if (right === '0' && upRight === '0') continue;
        total++;
      }
    }
  }

  return total;
};

// keep this function call here
console.log(SearchingChallenge(['10100', '01000', '01110', '11001']));
console.log(SearchingChallenge(['01111', '01101', '00011', '11110']));
console.log(SearchingChallenge(['1011', ' 0010']));

/**
 * Result: 4
 * [
 * '10100',
 * '01000',
 * '01110',
 * '11001']
 *
 * Result: 3
 * 01111
 * 01101
 * 00011
 * 11110
 *
 * Result: 2
 * 1011
 * 0010
 */