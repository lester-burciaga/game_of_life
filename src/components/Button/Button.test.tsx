import { render, screen } from '@testing-library/react';
import Button from './Button';

// Mock function for onClick
const handleClick = jest.fn();

describe('<Button />', () => { 
    const defaultButton = () => render(<Button label='test' onClick={() => {}} />);

    it ('should render', () => {
        defaultButton();
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })

    describe('with default props', () => { 
        beforeEach(() => defaultButton());

        it ('should render', () => {
            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
        })

        it('should have primary variant', () => {
            const button = screen.getByRole('button');
            expect(button).toHaveClass('btn-primary');
        })

     })

     describe('with custom props', () => { 
        const customButton = () => render(<Button label='Click me' style='success' onClick={handleClick} />);
        beforeEach(() => customButton());

        it ('should display text', () => {
            const button = screen.getByRole('button');
            expect(button).toHaveTextContent(/click me/i);
        })

        it('should call handleClick', () => {
            const button = screen.getByRole('button');
            button.click();
            expect(handleClick).toHaveBeenCalledTimes(1);
        })
    })
})