import React from 'react';
import LoginForm from '../molecules/LoginForm';
import styles from './LoginOrganism.module.css';

interface LoginOrganismProps {
    onSubmit: (email: string, password: string) => void;
    hasError: boolean;
    errorMessage: string | null;
}

const LoginOrganism: React.FC<LoginOrganismProps> = ({ onSubmit, hasError, errorMessage }) => {
    return (
        <div className={styles.organism}>
            <h1 className={styles.title}>Login</h1>
            <LoginForm onSubmit={onSubmit} hasError={hasError} errorMessage={errorMessage} />
        </div>
    );
};

export default LoginOrganism;
