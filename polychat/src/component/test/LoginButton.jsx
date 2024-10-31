import React from 'react';

export const LoginButton = () => {
    const handleLogin = () => {
         window.location.href = 'https://polychat.fun:18000/api/api/auth/google/redirect';

    };

    return (
        <button onClick={handleLogin}>
            구글로 로그인
        </button>
    );
};