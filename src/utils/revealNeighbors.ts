import { Board, Coordinates } from "./Types";

const isValid = ([y, x]: Coordinates, board: Board, visited: Set<string>) => {
  const key = `${y},${x}`;
  return (
    !visited.has(key) &&
    y >= 0 &&
    y < board.length &&
    x >= 0 &&
    x < board.length
  );
};

const traverse = (
  start: Coordinates,
  board: Board,
  callback: (x: Coordinates) => void,
  visited: Set<string>
) => {
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

const revealNeighbors = (
  [y, x]: Coordinates,
  board: Board,
  game: Board,
  visited = new Set<string>([])
) => {
  const updatedGame = [...game];
  const emptyBoxes: Coordinates[] = [];

  traverse(
    [y, x],
    board,
    ([ny, nx]) => {
      if (game[ny][nx]) return;
      updatedGame[ny] = [...updatedGame[ny]];
      updatedGame[ny][nx] = 1;

      if (board[ny][nx] === 0) {
        emptyBoxes.push([ny, nx]);
      }
    },
    visited
  );

  emptyBoxes.forEach((coor) => revealNeighbors(coor, board, game, visited));
  return updatedGame;
};

export default revealNeighbors;
