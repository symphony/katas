export function superStreetFighterSelection(fighters: string[][], position: [number, number], moves: string[]): string[] {
  let y = position[0];
  let x = position[1];

  const moveLeft = () => {
    x = (x - 1 + fighters[y].length) % fighters[y].length;
    if (!fighters[y][x]) moveLeft();
  };

  const moveRight = () => {
    x = (x + 1 + fighters[y].length) % fighters[y].length;
    if (!fighters[y][x]) moveRight();
  };

  return moves.map((move) => {
    switch (move) {
      case 'up':
        y = Math.max(0, y - 1);
        if (!fighters[y][x]) y++;
        break;
      case 'down':
        y = Math.min(fighters.length - 1, y + 1);
        if (!fighters[y][x]) y--;
        break;
      case 'left':
        moveLeft();
        break;
      case 'right':
        moveRight();
        break;
    }

    return fighters[y][x];
  });
};