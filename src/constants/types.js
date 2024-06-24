export const MATRIX = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

export const generateEmptyGrid = () => {
  const rows = [];
  MATRIX.forEach((row) => {
    rows.push(Array.from(Array(MATRIX.length), () => 0));
  });

  return rows;
};
