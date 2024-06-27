
import { useCallback, useRef, useState } from 'react';
import { MATRIX } from '../../constants/data'

import { calculateCellNeighbors, generateEmptyGrid } from '../../utils/operations';
import CustomButton from '../Button/Button';

function Board() {
  // State to keep track of the grid
  const [grid, setGrid] = useState<number[][]>(() => {
    return generateEmptyGrid(MATRIX);
  });
  // State to keep track of whether the game is running
  const [running, setRunning] = useState(false);

  // Reference to the running state
  const runningRef = useRef(running);
  runningRef.current = running;

/**
 * Updates the grid state by toggling the value of a cell at the given coordinates.
 *
 * @param {number} x - The row index of the cell to toggle.
 * @param {number} y - The column index of the cell to toggle.
 *
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
    const rows: number[][] = [];
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
    setGrid(generateEmptyGrid(MATRIX));
  }

/**
 * It runs the simulation of the game.
*/
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid(prev => {
      const newGrid = calculateCellNeighbors(prev, MATRIX);
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
      {/*** Action buttons ***/}
      <div className='m-4'>
        <CustomButton
          label={running ? '■ Stop' : '▶ Start'}
          style={running ? 'danger' : 'success'}
          onClick={() => {handleRunGame()}}
        />
        <CustomButton 
        label='⤮&nbsp; Random' 
        style='primary'
        onClick={() => {handleRandomGrid()}}
        isDisabled={running}
        />
        <CustomButton
        label='🧹&nbsp; Clear'
        style='secondary'
        onClick={() => {handleClearGrid()}}
        isDisabled={running}
        />
      </div>
      {/*** Game grid ***/}
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