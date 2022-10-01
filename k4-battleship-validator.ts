function validateBattlefield(field) {
  field.forEach(a => console.log(a.join(', ')))
  console.log();
  // {length: count}
  const ships = {
    4: 4,
    3: 2,
    2: 3,
    1: 4,
  };

  // build map to keep track of visited coordinates
  const marked = field.map((row) => row.map((col) => false));

  /** checks forward neighbouring coords for ships - returns false if invalid ship found   */
  const checkForShips = (y, x, dir) => {
    if (marked[y][x]) return 0; // skip
    console.log(`${y}${x} ${field[y][x]}` );
    marked[y][x] = true;

    if (!field[y][x]) return 0;
    if (field[y - 1]?.[x + 1] || field[y + 1]?.[x + 1]) return false;

    const right = !(dir === 'vv') ? checkForShips(y, x + 1, '>>') : 0;
    if (right === false) return false;

    const down = !(dir === '>>') ? checkForShips(y + 1, x, 'vv') : 0;
    if (down === false) return false;
    if (right && down) return false;

    return 1 + right + down;
  };

  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field[y].length; x++) {
      const found = checkForShips(y, x);
      if (found === 0) continue;
      if (found === false || found > 4) return false;
      console.log(found, ':', ships[found] - 1);
      if (--ships[found] < 0) return false;
    };
  };

  console.log(ships);
  return true;
};