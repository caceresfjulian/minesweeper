const countCoincidences = (matrix, target) =>
  matrix.reduce((acc, row) => acc + row.filter((x) => x === target).length, 0);

export default countCoincidences;
