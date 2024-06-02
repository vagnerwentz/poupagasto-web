import React from 'react';
import styles from './Input.module.css';

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className }) => {
    return <input className={`${styles.input} ${className}`} type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
