function nextGen(cells) {
  const state = (n, alive) => (alive && n === 2 || n === 3) ? 1 : 0;
  const count = cells.map((a) => a.map((b) => 0));

  for (let r = 0; r < cells.length; r++) {
    for (let c = 0; c < cells[r].length; c++) {
      for (const y of [-1, 1]) {
        for (const x of [-1, 0, 1]) {
          count[r][c] += cells[r + y]?.[c + x] || 0;
        };
      };
    };
  };

  return count.map((cell) => cell.map(state));
};
