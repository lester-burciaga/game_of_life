
import { useCallback, useRef, useState } from 'react';
import { MATRIX, generateEmptyGrid } from '../../constants/types'
import Button from '../Button/Button'
function Board() {
  const [grid, setGrid] = useState<number[][]>(() => {
    return generateEmptyGrid();
  });
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

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
  function handleRandomGrid() {
    const rows: any = [];
    MATRIX.forEach((row) => {
      rows.push(
        Array.from(Array(MATRIX.length), () => (Math.random() > 0.6 ? 1 : 0))
      );
    });
    setGrid(rows);
  };

  /**
   * Generates an empty grid of cells.
   */
  function handleClearGrid() {
    setGrid(generateEmptyGrid());
  }

  /**
   * It loops through the grid and determines the next state of each cell 
   * based on its current state and the number of its neighbors.
   * @param {Matrix} grid - The current state of the grid.
   * @returns {Matrix} newGrid - The next state of the grid.
   */
  const calculateNeighbors = (grid: any[][]) => {
    const newGrid = grid.map((row, i) => {
      const newRow = row.map((cell, j) => {
        let neighbors = 0;
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (x === 0 && y === 0) continue;
            const newI = (i + x + MATRIX.length) % MATRIX.length;
            const newJ = (j + y + MATRIX.length) % MATRIX.length;
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

/**
 * It runs the simulation of the game.
*/
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid(prev => {
      const newGrid = calculateNeighbors(prev);
      return newGrid;
    });

    setTimeout(runSimulation, 150);
  }, []);

  /**
   * Toggles the running state of the game.
   */
  function handleRunGame() {
    setRunning(prev => !prev);

    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  }

  
  return (
    <>
     <div className='m-4'>
       <Button
        label={running ? 'Stop' : 'Start'}
        style={running ? 'danger' : 'success'}
        onClick={() => {handleRunGame()}}
        />
       <Button 
       label='Random' 
       style='primary'
       onClick={() => {handleRandomGrid()}}
       isDisabled={running}
       />
       <Button
       label='Clear'
       style='secondary'
       onClick={() => {handleClearGrid()}}
       isDisabled={running}
       />
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