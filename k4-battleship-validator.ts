function validateBattlefield(field) {
  // {[ship length]: ship count}
  const ships = {
    '4': 1, // battleship
    '3': 2, // cruiser
    '2': 3, // destroyer
    '1': 4, // submarine
  };
  // build map to keep track of visited coordinates
  const marked = field.map((row) => row.map((col) => false));

  /** checks forward neighbouring coords for ships - returns false if invalid ship found   */
  const checkForShips = (y, x, dir) => {
    if (marked[y][x]) return 0; // skip
    marked[y][x] = true;

    if (!field[y][x]) return 0;
    if (field[y - 1]?.[x + 1] || field[y + 1]?.[x + 1]) return false;

    const right = !(dir === 'down') ? checkForShips(y, x + 1, 'right') : 0;
    if (right === false) return false;

    const down = !(dir === 'right') ? checkForShips(y + 1, x, 'down') : 0;
    if (down === false) return false;
    if (right && down) return false;

    return 1 + right + down;
  };

  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field[y].length; x++) {
      const found = checkForShips(y, x);
      if (found === 0) continue;
      if (found === false || found > 4) return false;
      ships[found]--;
    };
  };

  return !Object.values(ships).some(Boolean);
};

