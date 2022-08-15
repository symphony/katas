const p = (n) => (n < 10 ? '0' : '') + (n | 0);
const humanReadable = (s) => `${p(s / 3600)}:${p(s / 60 % 60)}:${p(s % 60)}`;