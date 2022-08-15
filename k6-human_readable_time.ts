const humanReadable = (seconds) => (
  [
    seconds / 3600,
    seconds / 60 % 60,
    seconds % 60,
  ]
    .map((num) => (num < 10 ? '0' : '') + (num | 0))
    .join(':')
);