/**
 * ButtonProps
 * 
 * @param {string} label - Text displayed on the button.
 * @param {string} style - Variant style of the button.
 * @param {function} onClick - Function to be called when the button is clicked.
 * @param {boolean} isDisabled - Whether the button is disabled or not.
 */
interface ButtonProps {
    label: string
    style?: 'primary' | 'secondary' | 'success' | 'danger'
    isDisabled?: boolean
    onClick: () => void
}

export default ButtonProps