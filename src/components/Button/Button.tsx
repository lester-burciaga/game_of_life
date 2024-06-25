import { isDisabled } from '@testing-library/user-event/dist/utils';
import ButtonProps from './ButtonProps';
import {Button as CustomButton} from 'react-bootstrap';

/**
 * Custom Button component
 * @param {ButtonProps} props - ButtonProps 
*/
function Button({ label, style, onClick, isDisabled }: ButtonProps) {
  return (
    <CustomButton
    name={label}
    variant={style}
    className="mx-2"
    onClick={onClick}
    disabled={isDisabled}
    >{label}</CustomButton>
  )
}

export default Button