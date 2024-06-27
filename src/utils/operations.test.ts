import { generateEmptyGrid, calculateCellNeighbors } from '../utils/operations';

const mockMatrix = [0, 0, 0, 0];

describe('function: "generateEmptyGrid" ', () => {
  it('should generate a grid with the correct dimensions', () => {
    const grid = generateEmptyGrid(mockMatrix);
    expect(grid.length).toBe(mockMatrix.length);
    grid.forEach(row => {
      expect(row.length).toBe(mockMatrix.length);
    });
  });

  it('should initialize all cells in the grid to 0', () => {
    const grid = generateEmptyGrid(mockMatrix);
    grid.forEach(row => {
      row.forEach(cell => {
        expect(cell).toBe(0);
      });
    });
  });
});


describe('function: "calculateCellNeighbors" ', () => {
    it('should correctly calculate the next state of a cell based on neighbors', () => {
        const grid = [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        const expectedGrid = [
            [1, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
      
      expect(calculateCellNeighbors(grid, mockMatrix)).toEqual(expectedGrid);
    });
  
    it('should correctly handle edge cases for cell survival', () => {
        const grid = [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        const expectedGrid = [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
        ];

      expect(calculateCellNeighbors(grid, mockMatrix)).toEqual(expectedGrid);
    });
  
  
    it('should correctly handle edge cases for cell death', () => {
        const grid = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
          ];
        const expectedGrid = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ];

      expect(calculateCellNeighbors(grid, mockMatrix)).toEqual(expectedGrid);
    });
  });