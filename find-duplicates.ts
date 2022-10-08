function findDuplicateIndexes(arr) {
  const duplicates = arr.flatMap((item, index, source) => {
    const firstIndex = source.indexOf(item);
    return index !== firstIndex ? [firstIndex, index] : [];
  });

  return duplicates;
};

const arr = ['banana', 'apple', 'blueberry', 'apple', 'orange'];
console.log(findDuplicateIndexes(arr));

// Eg: [“banana”, “apple”, “blueberry”, “apple”, “orange”] should return [1, 3]