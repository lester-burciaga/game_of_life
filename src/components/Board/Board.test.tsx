import { fireEvent, render, screen } from '@testing-library/react';

import Board from './Board';

const renderBoard = () => render(<Board />);

// Helper functions to retrieve elements
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

function clickStartButton() {
  const startButton = getStartButton();
  startButton.onclick = mockHandleRunGame;
  
  fireEvent.click(startButton);
}

function clickStopButton() {
  const stopButton = getStopButton();
  stopButton.onclick = mockHandleRunGame;
  
  fireEvent.click(stopButton);
}

// Mock functions
const mockHandleRunGame = jest.fn();
const mockHandleRandomGrid = jest.fn();
const mockHandleClearGrid = jest.fn();

describe('<Board />', () => { 

  beforeEach(() => {
    renderBoard();
  });

    it('should display board', () => {
        const board = screen.getByRole('grid');
        expect(board).toBeInTheDocument();
    })

    describe('with "start" button', () => { 
      
      it('should display button', () => {
        const startButton = getStartButton();
        expect(startButton).toBeInTheDocument();
      })

      it('should have success variant', () => {
        const startButton = getStartButton();
        expect(startButton).toHaveClass('btn-success');
      })

      describe('when "start" button is clicked', () => { 

          it('should call "handleRun" function', () => {
            clickStartButton();
            expect(mockHandleRunGame).toHaveBeenCalledTimes(1);
          });

          it('should toggle button text to stop,', () => {
            const startButton = getStartButton();

            clickStartButton();
            expect(startButton).toHaveTextContent(/stop/i);
          });

          it('should "Random" button be disabled', () => {
            clickStartButton();

            const randomButton = getRandomButton();
            expect(randomButton).toBeDisabled();
          });

          it('should "Clear" button be disabled', () => {
            clickStartButton();

            const clearButton = getClearButton();
            expect(clearButton).toBeDisabled();
          });
      })
    })

    describe('with "stop" button', () => { 

      beforeEach(() => {
        fireEvent.click(getStartButton());
      })

      it('should display button', () => {
        const stopButton = getStopButton();
        expect(stopButton).toHaveTextContent(/stop/i);
      })

      it('should have danger variant', () => {
        const stopButton = getStopButton();
        expect(stopButton).toHaveClass('btn-danger');
      })

      describe('when "stop" button is clicked', () => { 
          it('should call "handleRun" function', () => { 
            clickStopButton();

            expect(mockHandleRunGame).toHaveBeenCalledTimes(1);
          });

          it('should toggle button text to start', () => {
            const stopButton = getStopButton();

            clickStopButton();
            expect(stopButton).toHaveTextContent(/start/i);
          });

          it('should "Random" button be enabled', () => {
            clickStopButton();

            const randomButton = getRandomButton();
            expect(randomButton).toBeEnabled();
          });

          it('should "Clear" button be enabled', () => {
            clickStopButton();

            const clearButton = getClearButton();
            expect(clearButton).toBeEnabled();
          });
      })
    })

    describe('with "random" button', () => { 

      it('should display button', () => {  
        const randomButton = getRandomButton();
        expect(randomButton).toHaveTextContent(/random/i);
      })

      it('should have primary variant', () => {
        const randomButton = getRandomButton();

        expect(randomButton).toHaveClass('btn-primary');
      })

      describe('when "random" button is clicked', () => { 
          it('should call "handleRandomGrid" function', () => {
            const randomButton = getRandomButton();
            randomButton.onclick = mockHandleRandomGrid;

            fireEvent.click(randomButton);
            expect(mockHandleRandomGrid).toHaveBeenCalledTimes(1);
          });
      })
    })
     
    describe('with "clear" button', () => { 

      it('should display button', () => {
        const clearButton = getClearButton();

        expect(clearButton).toHaveTextContent(/clear/i);
      })

      it('should have secondary variant', () => {
        const clearButton = getClearButton();

        expect(clearButton).toHaveClass('btn-secondary');
      })

      describe('when "clear" button is clicked', () => { 
          it('should call "handleClearGrid" function', () => {
            const clearButton = getClearButton();
            clearButton.onclick = mockHandleClearGrid;

            fireEvent.click(clearButton);
            expect(mockHandleClearGrid).toHaveBeenCalledTimes(1);
          });
      })
    })

})