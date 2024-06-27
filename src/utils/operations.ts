/**
 * It generates an empty grid of cells.
 * 
 */ 
export function generateEmptyGrid(matrix: number[]) {
    const grid: number[][] = [];
    matrix.forEach((row) => {
      grid.push(Array.from(Array(matrix.length), () => 0));
    });
  
    return grid;
  };

  /**
   * It loops through the grid and determines the next state of each cell 
   * based on its current state and the number of its neighbors.
   * @param {number[][]} grid - The current state of the grid.
   * @param {number[]} matrix - Array used to determine the size of the grid.
   * @returns {number[][]} newGrid - The next state of the grid.
   */
  export function calculateCellNeighbors(grid: number[][], matrix: number[]) {
    const newGrid = grid.map((row, i) => {
      const newRow = row.map((cell, j) => {
        let neighbors = 0;
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (x === 0 && y === 0) continue;
            const newI = (i + x + matrix.length) % matrix.length;
            const newJ = (j + y + matrix.length) % matrix.length;
            neighbors += grid[newI][newJ];
          }
        }

        return neighbors < 2 || neighbors > 3
          ? 0
          : cell === 0 && neighbors === 3
          ? 1
          : cell;
      });
      return newRow;
    });

    return newGrid;
  };
