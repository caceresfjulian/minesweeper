export function createMatrix(size) {
  const board = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => 0)
  );
  return board;
}

export default createMatrix;
