import React, { useState } from 'react';
import Input from '../atoms/inputs/Input';
import Button from '../atoms/buttons/Button';
import styles from './LoginForm.module.css';

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
    hasError: boolean;
    errorMessage: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, hasError, errorMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email, password);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={hasError ? styles.errorInput : ''} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={hasError ? styles.errorInput : ''}/>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <Button text="Login" onClick={() => handleSubmit(new Event('submit') as unknown as React.FormEvent)} />
        </form>
    );
};

export default LoginForm;
