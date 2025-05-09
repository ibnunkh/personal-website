import React from 'react';
const Heading1 = (props) => {
    const { children, className, id } = props;
    return (
        <h1 className={className} id={id}>{children}</h1>
    )
}

export default Heading1;