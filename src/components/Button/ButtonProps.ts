interface ButtonProps {
    label: string
    style?: 'primary' | 'secondary' | 'success' | 'danger'
    onClick: () => void
}

export default ButtonProps