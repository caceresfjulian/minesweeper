import { type Board, type Coordinates } from "./Types";
import createMatrix from "./matrix/createMatrix";

function createBoard(boardSize = 5, mines = 8): Board {
  const cachedMines: Coordinates[] = [];
  let board: Board = createMatrix(boardSize);
  insertMines(mines, boardSize);
  board = populateBoard(cachedMines, board);

  return board;

  function generateRandomCoordinate(size: number): Coordinates {
    return [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
  }

  function insertMines(num: number, size: number): void {
    for (let i = 0; i < num; i++) {
      const [y, x] = generateRandomCoordinate(size);
      if (board[y][x] === "x") {
        i--;
        continue;
      }
      board[y][x] = "x";
      cachedMines.push([y, x]);
    }
  }

  function setNeighbors([y, x]: Coordinates, board: Board): Board {
    const updatedBoard = [...board];

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

    directions.forEach(([dy, dx]) => {
      const ny = y + dy;
      const nx = x + dx;

      if (
        ny >= 0 &&
        ny < board.length &&
        nx >= 0 &&
        nx < board.length &&
        updatedBoard[ny][nx] !== "x"
      ) {
        (updatedBoard[ny][nx] as number)++;
      }
    });

    return updatedBoard;
  }

  function populateBoard(mineCoors: Coordinates[], board: Board): Board {
    let updatedBoard = [...board];

    for (const coor of mineCoors) {
      updatedBoard = setNeighbors(coor, updatedBoard);
    }

    return updatedBoard;
  }
}

export default createBoard;
