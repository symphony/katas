const validISBN10 = (isbn) => (
  /^\d{9}[\dX]$/.test(isbn)
    ? !([...isbn].reduce((sum, n, i) => sum + (
      n === 'X' ? 100 : n * (i + 1)
    ), 0) % 11)
    : false
);