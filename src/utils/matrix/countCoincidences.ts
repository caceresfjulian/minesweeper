import { type Board } from "../Types";

const countCoincidences = (matrix: Board, target: number | string): number =>
  matrix.reduce((acc, row) => acc + row.filter((x) => x === target).length, 0);

export default countCoincidences;
