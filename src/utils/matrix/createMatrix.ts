export function createMatrix (size: number): number[][] {
  const board = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => 0)
  )
  return board
}

export default createMatrix
