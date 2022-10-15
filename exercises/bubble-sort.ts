const bubbleSort = (list) => {
  let lastEle = list.length - 1;
  let finished = false;

  while (!finished) {
    finished = true;

    for (let i = 0; i < lastEle; i++) {
      const [a, b] = [list[i], list[i + 1]];
      if (b < a) {
        list.splice(i, 2, b, a);
        finished = false;
      };
    };

    lastEle--;
  };

  return list;
};


const array1 = [4, 6, 1, 4, -1, 7, 3,];
const array2 = [5, 5, 5, 3, 2, 1, 20, 320, -5];
const array3 = ['potato', 'pickle', 'apple', 'potato'];

console.log(bubbleSort(array1));
// -1, 1, 3, 4, 4, 6, 7

console.log(bubbleSort(array2));
// -5, 1, 2, 3, 5, 5, 5, 20, 320

console.log(bubbleSort(array3));
// apple, pickle, potato, potato