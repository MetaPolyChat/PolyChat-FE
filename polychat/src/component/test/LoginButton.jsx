import React from 'react';

export const LoginButton = () => {
    const handleLogin = () => {
         window.location.href = 'http://localhost:8000/api/auth/google/redirect';

    };

    return (
        <button onClick={handleLogin}>
            구글로 로그인
        </button>
    );
};