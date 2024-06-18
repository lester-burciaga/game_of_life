import ButtonProps from './ButtonProps';
import {Button as CustomButton} from 'react-bootstrap';

function Button({ label, style, onClick }: ButtonProps) {
  return (
    <CustomButton variant={style} className="mx-2" onClick={onClick}>{label}</CustomButton>
  )
}

export default Button