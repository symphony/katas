function nextGen(cells) {
  const state = ({ alive, friends, }) => (alive && friends === 2 || friends === 3) ? 1 : 0;
  const data = cells.map((a) => a.map((b) => ({ alive: false, friends: 0, })));

  for (let r = 0; r < cells.length; r++) {
    for (let c = 0; c < cells[r].length; c++) {
      for (const y of [-1, 0, 1]) {
        data[r][c].alive = Boolean(cells[r][c]);

        for (const x of [-1, 0, 1]) {
          if (y === 0 && x === 0) continue;
          data[r][c].friends += cells[r + y]?.[c + x] || 0;
        };
      };
    };
  };

  return data.map((cell) => cell.map(state));
};
