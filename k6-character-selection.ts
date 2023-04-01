type Move = 'down' | 'up' | 'right' | 'left';

export function streetFighterSelection(fighters: string[][], position: number[], moves: Move[]) {
  let y = position[0];
  let x = position[1];

  return moves.map((move) => {
    if (move === 'up') y = Math.max(0, y - 1);
    if (move === 'down') y = Math.min(1, y + 1);
    if (move === 'left') x = (x - 1 + fighters[y].length) % fighters[y].length;
    if (move === 'right') x = (x + 1 + fighters[y].length) % fighters[y].length;

    return fighters[y][x];
  });
};