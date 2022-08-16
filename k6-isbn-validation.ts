const validISBN10 = (isbn) => (
  /^[0-9]{9}[0-9X]$/
    .test(isbn)
    ? isbn
      .split('')
      .reduce((val, n, i) => val + (
        n === 'X'
          ? 100
          : Number(n) * (i + 1)
      ), 0)
    % 11 === 0
    : false
);