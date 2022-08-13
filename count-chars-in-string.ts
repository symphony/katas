function count (string) {  
  return string.split('').reduce((total, c) => {
    total[c] = (total[c] ?? 0) + 1;
    return total;
  }, {})
};
