/**
 * ButtonProps
 * 
 * @param {string} label - Text displayed on the button.
 * @param {string} style - Variant style of the button.
 * @param {function} onClick - The function to be called when the button is clicked.
 */
interface ButtonProps {
    label: string
    style?: 'primary' | 'secondary' | 'success' | 'danger'
    isDisabled?: boolean
    onClick: () => void
}

export default ButtonProps