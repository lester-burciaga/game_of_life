import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

// Mock function for onClick
const handleClick = jest.fn();

const defaultButton = () => render(<Button label='Click me' onClick={handleClick} />);

const customButton = () => render(<Button label='Click me' style='success' onClick={handleClick} isDisabled={true}/>);

describe('<Button />', () => { 

    it ('should render', () => {
        defaultButton();
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })

    describe('with default props', () => { 
        beforeEach(() => defaultButton());

        it ('should render text', () => {
            const button = screen.getByRole('button');
            expect(button).toHaveTextContent(/click me/i);
        })

        it('should have primary variant', () => {
            const button = screen.getByRole('button');
            expect(button).toHaveClass('btn-primary');
        })

        it('should be enabled', () => {
            const button = screen.getByRole('button');
            expect(button).not.toBeDisabled();
        });

        describe('when button is clicked', () => { 
            it('should call handleClick', () => {
                const button = screen.getByRole('button');
                button.click();
                expect(handleClick).toHaveBeenCalledTimes(1);
            })
        })
     })

     describe('with props passed', () => { 
        beforeEach(() => customButton());

        it('should have success variant', () => {
            const button = screen.getByRole('button');
            expect(button).toHaveClass('btn-success');
        })

        it('should be disabled', () => {
            const button = screen.getByRole('button');
            expect(button).toBeDisabled();
        });
     })
})