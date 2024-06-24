import { fireEvent, render, screen } from '@testing-library/react';

import Board from './Board';

const renderBoard = () => render(<Board />);

// Helper functions
function getStartButton() {
  return screen.getByRole('button', { name: /start/i });
}

function getStopButton() {
  return screen.getByRole('button', { name: /stop/i });
}

function getRandomButton() {
  return screen.getByRole('button', { name: /random/i });
}

function getClearButton() {
  return screen.getByRole('button', { name: /clear/i });
}

// Mock functions
const mockHandleRun = jest.fn();
const mockHandleRandom = jest.fn();
const mockHandleClear = jest.fn();

describe('<Board />', () => { 

  beforeEach(() => {
    renderBoard();
  });

    it('should display board', () => {
        const board = screen.getByRole('grid');
        expect(board).toBeInTheDocument();
    })

    describe('with start button', () => { 
      

      it('should display button', () => {
        const startButton = getStartButton();
        expect(startButton).toBeInTheDocument();
      })

      it('should have success variant', () => {
        const startButton = getStartButton();
        expect(startButton).toHaveClass('btn-success');
      })

      describe('when start button is clicked', () => { 
          it('should call handleRun function', () => {
            const startButton = getStartButton();
            startButton.onclick = mockHandleRun;
            
            fireEvent.click(startButton);
            expect(mockHandleRun).toHaveBeenCalledTimes(1);
          });
          it('should toggle button title to stop,', () => {
            const startButton = getStartButton();
            fireEvent.click(startButton);
            expect(startButton).toHaveTextContent(/stop/i);
          });
      })
    })

    describe('with stop button', () => { 

      beforeEach(() => {
        fireEvent.click(getStartButton());
      })

      it('should display button', () => {
        const stopButton = getStopButton();
        expect(stopButton).toHaveTextContent(/stop/i);
      })

      it('should have warning variant', () => {
        const stopButton = getStopButton();
        expect(stopButton).toHaveClass('btn-danger');
      })

      describe('when stop button is clicked', () => { 
          it('should call handleRun function', () => {
             
            const stopButton = getStopButton();
            stopButton.onclick = mockHandleRun;

            fireEvent.click(stopButton);
            expect(mockHandleRun).toHaveBeenCalledTimes(1);
          });

          it('should toggle button title to start', () => {
            const stopButton = getStopButton();
            fireEvent.click(stopButton);
            expect(stopButton).toHaveTextContent(/start/i);
          });
      })
    })

    describe('with random button', () => { 

      it('should display button', () => {  
        const randomButton = getRandomButton();
        expect(randomButton).toHaveTextContent(/random/i);
      })

      it('should have primary variant', () => {
        const randomButton = getRandomButton();
        expect(randomButton).toHaveClass('btn-primary');
      })

      describe('when random button is clicked', () => { 
          it('should call randomGrid function', () => {
            const randomButton = getRandomButton();
            randomButton.onclick = mockHandleRandom;

            fireEvent.click(randomButton);
            expect(mockHandleRandom).toHaveBeenCalledTimes(1);
          });
      })
    })
     
    describe('with clear button', () => { 

      it('should display button', () => {
        const clearButton = getClearButton();
        expect(clearButton).toHaveTextContent(/clear/i);
      })

      it('should have secondary variant', () => {
        const clearButton = getClearButton();
        expect(clearButton).toHaveClass('btn-secondary');
      })

      describe('when clear button is clicked', () => { 
          it('should call clearGrid function', () => {
            const clearButton = getClearButton();
            clearButton.onclick = mockHandleClear;

            fireEvent.click(clearButton);
            expect(mockHandleClear).toHaveBeenCalledTimes(1);
          });
      })
    })

})