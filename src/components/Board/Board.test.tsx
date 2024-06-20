import { render, screen } from '@testing-library/react';

import Board from './Board';

const renderBoard = () => render(<Board />);

describe('<Board />', () => { 
    it('should display board', () => {
        renderBoard();
        const board = screen.getByRole('grid');
        expect(board).toBeInTheDocument();
    })

    describe('with action buttons', () => { 
        describe('when start button is clicked', () => { 
            it.todo('should start game');
            it.todo('should toggle button title to stop');
          })
        
          describe('when stop button is clicked', () => {
            it.todo('should stop game');
            it.todo('should toggle button title to start');
          })
        
          describe('when random button is clicked', () => {
            it.todo('should generate random board');
          })
        
          describe('when clear button is clicked', () => {
            it.todo('should clear board');
          })
        })

})