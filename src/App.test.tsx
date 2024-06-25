
import { render, screen } from '@testing-library/react';
import App from './App';

const renderComponent = () => render(<App />);

describe('<App />', () => {

  beforeEach(() => renderComponent());

  describe('when component is rendered', () => { 

    it('should display title', () => {
      const title = screen.getByText(/game of life/i);
      expect(title).toBeInTheDocument();
    });

    it('should display board component', () => {
      const board = screen.getByRole('grid');
      expect(board).toBeInTheDocument();
    });

 })
})