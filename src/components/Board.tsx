
import { MATRIX } from '../constants/types'
import Button from './Button/Button'
const Board = () => {
  return (
    <>
     <div>
       <Button label='Start' onClick={() => {}}/>
       <Button label='Random' onClick={() => {}}/>
       <Button label='Clear' onClick={() => {}}/>
     </div>
      <div role='grid' className='justify-center mt-2' style={{
          // display: 'grid',
          gridTemplateColumns: `repeat(${MATRIX.length}, 20px`,
        }}>

      </div>
    </>
  )
}

export default Board