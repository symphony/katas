const findMaxGreatness = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);



};



function findMaximumGreatness(arr) {
  arr = arr.sort();
  let hash_m = {};
  for (let num of arr) {
    if (hash_m.hasOwnProperty(num)) {
      hash_m[num] ++;
    } else {
      hash_m[num] = 1;
    }
  }
  let greatness = 0
  let hash_m2 = {...hash_m};
  let numbers = Object.keys(hash_m);
  let less_index = 0;
  let more_index = 1;
  while (less_index < numbers.length - 1) {
    while (hash_m[less_index] > 0) {
      if (hash_m2[more_index] == 0) {
        if (more_index == numbers.length - 2){
          return greatness;
        }
        more_index ++;
      }
      if (hash_m2[more_index] > 0) {
        hash_m[less_index] --;
        hash_m2[more_index] --;
        greatness ++;
      }

    }
    less_index ++;
  }
  return greatness;
}

// [1, 3, 5, 2, 1, 3, 1];
// [2, 5, 1, 3, 3, 1, 1];