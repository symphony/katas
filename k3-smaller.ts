function smaller(arr) {
  const counts = arr.map((n) => ({ public: 0, personal: 0 }));
  const outliers = [];
  outliers[arr.length - 1] = arr[arr.length - 1];

  const compare = (l, r) => {
    if (arr[l] > arr[r]) {
      counts[l].personal = counts[r].public + 1;
      counts[l].public = counts[r].public + 1;
    } else if (arr[l] === arr[r]) {
      counts[l].personal = counts[r].personal;
      counts[l].public = counts[r].public + 1;
      counts[r].public = 0;
    };
  };

  for (let l = arr.length - 2, r = l + 1; l >= 0; l--, r--) {
    compare(l, r);
    if (arr[l] < arr[r]) {
      const found = outliers.findIndex((n) => (arr[l] >= n));
      if (found !== -1) compare(l, found);
      else outliers[l] = arr[l];
    };
  };

  console.log(counts);
  return counts.map((count) => count.personal);
};




// assert.deepEqual(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
// assert.deepEqual(smaller([1, 2, 3]), [0, 0, 0]);
// assert.deepEqual(smaller([1, 2, 0]), [1, 1, 0]);
// assert.deepEqual(smaller([1, 2, 1]), [0, 1, 0]);
// assert.deepEqual(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
// assert.deepEqual(smaller([1, 3, -1, 2, -3]), [2, 3, 1, 1, 0]);
// assert.deepEqual(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);