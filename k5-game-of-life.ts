const state = (alive, friends) => (alive && friends === 2 || friends === 3) ? 1 : 0;
const nextGen = (cells) => (
  cells.map((row, i) => (
    row.map((cell, j) => (
      state(cell, [-1, 0, 1]
        .reduce((friends, x) => friends + [-1, 0, 1]
          .reduce((sum, y) => (
            x || y ? (cells[i + y]?.[j + x] || 0) + sum : sum), 0), 0)
      )))))
);
