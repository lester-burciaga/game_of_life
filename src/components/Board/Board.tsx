
import { useState } from 'react';
import { MATRIX, OPERATIONS, generateEmptyGrid } from '../../constants/types'
import Button from '../Button/Button'
const Board = () => {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

/**
 * Updates the grid state by toggling the value of a cell at the given coordinates.
 *
 * @param {number} x - The row index of the cell to toggle.
 * @param {number} y - The column index of the cell to toggle.
 * @return {void} This function does not return anything.
*/
  const handleCellClick = (x: number, y: number) => {
    setGrid(prev => {
      const newGrid = prev.map((row, i) =>
        i === x ? row.map((col: number, j: number) => j === y ? 1 - col : col) : row
      );
      return newGrid;
    })
  };

  /**
   * Generates a random grid of cells.
   * @const {Matrix} rows - The defined number of rows of the grid.
   */
  function randomGrid() {
    const rows: any = [];
    MATRIX.forEach((row) => {
      rows.push(
        Array.from(Array(MATRIX.length), () => (Math.random() > 0.6 ? 1 : 0))
      );
    });
    setGrid(rows);
  };
  
  return (
    <>
     <div>
       <Button label='Start' style='success' onClick={() => {}}/>
       <Button label='Random' style='primary' onClick={() => {randomGrid()}}/>
       <Button label='Clear' style='secondary' onClick={() => {setGrid(generateEmptyGrid())}}/>
     </div>
      <div 
          role='grid' 
          className='justify-content-center mt-4'
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${MATRIX.length}, 20px`,
          }}
        >
        {grid.map((rows, i) =>
          rows.map((col: number, k: number) => (
            <div
              key={`${col}/${k}`}
              onClick={() => handleCellClick(i, k)}
              role='gridcell'
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? '#333' : '#fff',
                border: 'solid 1px grey',
              }}
            />
          ))
        )}
      </div>
    </>
  )
}

export default Board