const isValid = ([y, x], board, visited) => {
  const key = `${y},${x}`;
  return (
    !visited.has(key) &&
    y >= 0 &&
    y < board.length &&
    x >= 0 &&
    x < board.length
  );
};

const traverse = (start, board, callback, visited = new Set()) => {
  const [y, x] = start;

  if (!isValid(start, board, visited)) {
    return;
  }

  visited.add(`${y},${x}`);
  callback(start);

  if (board[y][x] === 0) {
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];

    directions.forEach(([deltaY, deltaX]) => {
      const ny = y + deltaY;
      const nx = x + deltaX;
      traverse([ny, nx], board, callback, visited);
    });
  }
};

const revealNeighbors = ([y, x], board, game, setGame) => {
  const updatedGame = [...game];
  const emptyBoxes = [];

  traverse([y, x], board, ([ny, nx]) => {
    if (game[ny][nx]) return;
    updatedGame[ny][nx] = 1;

    if (board[ny][nx] === 0) {
      emptyBoxes.push([ny, nx]);
    }
  });

  setGame(updatedGame);

  emptyBoxes.forEach((coor) => revealNeighbors(coor, board, game, setGame));
};

export default revealNeighbors;
