const Heading3 = (props) => {
    const { children, className } = props;
    return (
        <h3 className={className}>{children}</h3>
    )
}

export default Heading3;