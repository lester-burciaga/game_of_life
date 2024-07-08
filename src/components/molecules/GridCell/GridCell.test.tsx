import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GridCell from './GridCell';

// Mock function for onClick
const handleCellClickMock = jest.fn(); 
// Render the component
const getGridComponent = () => {
    const { getByRole } = render( 
        <GridCell i={0} k={0} isCellAlive={true} handleCellClick={handleCellClickMock} />
    );

    return getByRole('gridcell');
}

describe('<GridCell />', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when component is rendered', () => {
      describe('with default props', () => {
        it('should render the correct background color based on isCellAlive prop', () => {
            const cellElement = getGridComponent();

            expect(cellElement).toHaveStyle('background-color: #333');
          });
      })
  })

  describe('when cell is clicked', () => {
    it('should call handleCellClick', () => {
        const cellElement = getGridComponent();
        
        fireEvent.click(cellElement);
        expect(handleCellClickMock).toHaveBeenCalledWith(0, 0);
    });
  });

});