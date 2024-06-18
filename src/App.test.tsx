
import { render, screen } from '@testing-library/react';
import App from './App';

const renderComponent = () => render(<App />);

describe('<App />', () => {

  describe('when <App /> is rendered', () => { 
    

    it('should display title', () => {
      renderComponent();
      const title = screen.getByText(/game of life/i);
      expect(title).toBeInTheDocument();
    });

    it('should display board component', () => {
      renderComponent();
      const board = screen.getByRole('grid');
      expect(board).toBeInTheDocument();
    });

 })

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
