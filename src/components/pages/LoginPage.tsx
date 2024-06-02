import { useState } from 'react';
import { api } from '../../api/axios';

import LoginTemplate from '../templates/LoginTemplate';
import { ISignInDTO } from '../../interface/ISignInDTO';

function LoginPage() {
    const [hasError, setHasError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleLogin = async (email: string, password: string) => {
        try {
            const { data: { data: { token }, success }} = await api.post<ISignInDTO>("api/v1/users/signin", { email, password });
            if (success) {
                if (hasError || errorMessage) {
                    setHasError(false);
                    setErrorMessage(null);
                }
                localStorage.setItem("token", token);
            }
        } catch (_) {
            setHasError(true);
            setErrorMessage("Por favor, verifique os dados inseridos.");
        }
    };

    return <LoginTemplate 
                onSubmit={handleLogin}
                hasError={hasError}
                errorMessage={errorMessage} 
            />;
};

export default LoginPage;
