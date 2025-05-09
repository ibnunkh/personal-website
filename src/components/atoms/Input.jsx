import React from 'react';
import styles from '../../styles/styles.module.css';

const Input = (props) => {
    const { type, placeholder, name, value, onChange, required } = props;
    return (
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className={styles.input} required={required} />
    )
}

export default Input;