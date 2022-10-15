const bubbleSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    const [a, b] = [list[i], list[i + 1]];
    if (b < a){ list.splice(i, 2, b, a)};

  };

  return list;
};


const array1 = [4, 6, 1, 4, -1, 7, 3,];
const array2 = [5, 5, 5, 3, 2, 1, 20, 320, -5];

console.log(bubbleSort(array1));
// -1, 1, 3, 4, 4, 6, 7

console.log(bubbleSort(array2));
// -5, 1, 2, 3, 5, 5, 5, 20, 320
