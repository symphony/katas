// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.

const array1 = [
  ["a", "b", "c", "d"],
  ["e", "f"],
  ["g", "h", "i"],
];
const array2 = [[9, 3, 4], [11], [42, 100]];

const print2d = (arr: (string | number)[][]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  };
};


print2d(array1);
// prints
//  a
//  b
//  c
//  d
//  e
//  f
//  g
//  h
//  i


print2d(array2);
// prints
//  9
//  3
//  4
//  11
//  42
//  100