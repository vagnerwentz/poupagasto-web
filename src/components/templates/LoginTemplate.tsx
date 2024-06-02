import React from 'react';
import LoginOrganism from '../organisms/LoginOrganism';
import styles from './LoginTemplate.module.css';

interface LoginTemplateProps {
    hasError: boolean;
    errorMessage: string | null;
    onSubmit: (email: string, password: string) => void;
}

function LoginTemplate({ 
    hasError,
    onSubmit,
    errorMessage
 }: LoginTemplateProps) {
    return (
        <div className={styles.template}>
            <LoginOrganism onSubmit={onSubmit} hasError={hasError} errorMessage={errorMessage} />
        </div>
    );
};

export default LoginTemplate;
