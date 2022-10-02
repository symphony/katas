function nextGen(cells) {
  const state = ({ alive, friends }) => (alive && friends === 2 || friends === 3) ? 1 : 0;
  const data = cells.map((a) => a.map((b) => ({ alive: false, friends: 0 })));

  for (let y = 0; y < cells.length; y++) {
    for (let x = 0; x < cells[y].length; x++) {
      for (const a of [-1, 0, 1]) {
        data[y][x].alive = Boolean(cells[y][x]);

        for (const b of [-1, 0, 1]) {
          if (a === 0 && b === 0) continue;
          data[y][x].friends += cells[y + a]?.[x + b] || 0;
        };
      };
    };
  };

  return data.map((cell) => cell.map(state));
};
