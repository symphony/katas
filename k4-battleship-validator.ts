function validateBattlefield(field) {
  const lengths = {
    4: 'battleship',
    3: 'cruiser',
    2: 'destroyer',
    1: 'submarine',
  };

  const ships = {
    battleship: 4,
    cruiser: 2,
    destroyer: 2,
    submarine: 4,
  };

  // build map to keep track of visited coordinates
  const marked = field.map((row) => row.map((col) => false));

  /** checks forward neighbouring coords for ships - returns false if invalid ship found   */
  const checkForShips = (y, x) => {
    if (marked[y][x]) return 0; // skip
    marked[y][x] = true;

    if (!field[y][x]) return 0;
    if (field[y - 1][x + 1] || field[y + 1][x + 1]) return false;
    return 1 + checkForShips(y, x + 1) + checkForShips(y + 1, x);
  };

  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field[y].length; x++) {

      const found = checkForShips(y, x);
      // false = invalid
      if (found === false || found > 4) return false;
      if (found > 0) ships[lengths[found]]--;

      // ensure all ship counts are 0
      return !Object.values(ships).every(Boolean);
    };
  };
};