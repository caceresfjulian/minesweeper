import { Board, Coordinates } from "./Types";
import createMatrix from "./matrix/createMatrix";

function createBoard(board_size = 10, mines = 20): [Board, number] {
  const cached_mines: Coordinates[] = [];
  let board: Board = createMatrix(board_size);
  insertMines(mines, board_size);
  board = populateBoard(cached_mines, board);

  return [board, cached_mines.length];

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
      cached_mines.push([y, x]);
    }
  }

  function setNeighbors([y, x]: Coordinates, board: Board) {
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

  function populateBoard(mine_coors: Coordinates[], board: Board) {
    let updated_board = [...board];

    for (let coor of mine_coors) {
      updated_board = setNeighbors(coor, updated_board);
    }

    return updated_board;
  }
}

export default createBoard;
