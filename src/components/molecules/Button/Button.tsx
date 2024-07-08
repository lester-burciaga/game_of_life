import React from 'react';
import type ButtonProps from './ButtonProps.type';
import { Button as CustomButton } from 'react-bootstrap';

/**
 * Custom Button component using react-bootstrap Button as a base
 * @param {ButtonProps} props - ButtonProps 
*/
function Button({ label, style, onClick, isDisabled }: ButtonProps){
  return (
    <CustomButton
      name={label}
      variant={style}
      className="mx-2"
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </CustomButton>
  )
}

export default Button;