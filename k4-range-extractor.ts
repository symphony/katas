function solution(list) {
  return list.reduce((acc, val, i, arr) => {
    if (val === arr[i + 2] - 2) {
      for (let j = i + 3; j < arr.length; j++) {
        if (arr[j] !== val + j) {
          arr.splice(i + 1, j, `${val}-${val + j - i}`);
          return acc;
        };
      };

    };
    acc.push(val);
    return acc;
  }, []).join();
};