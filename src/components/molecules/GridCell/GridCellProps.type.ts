/**
 * GridCellProps
 * 
 * @param {boolean} isCellAlive - The current state of the cell.
 * @param {number} i - The row index of the cell.
 * @param {number} k - The column index of the cell.
 * @param {function} handleCellClick - Function to be called when the cell is clicked.
 */
interface GridCellProps {
    i: number,
    k: number,
    isCellAlive: boolean
    handleCellClick: (i: number, k: number) => void
}

export default GridCellProps