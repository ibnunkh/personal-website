

const Button = (props) => {
    const {className, type, children} = props

    return (
        <button type={type} className={className}>{children}</button>
    )
}

export default Button;