import React, {useEffect, useState} from 'react';
import './LoginStyle.css';
import { useNavigate } from 'react-router-dom';
import {GoogleLogin, googleLogout, GoogleOAuthProvider} from "@react-oauth/google";

export const Login = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();
    const [inputID,setInputID] = useState();
    const [inputPW, setInputPW] = useState();
    
    const clientId = '552350134054-cqkg0eudpmaa94eeqv6p2ldodjptjvei.apps.googleusercontent.com';

    useEffect(() => {
        googleLogout();
    }, []);


    const handleGoogleLoginSuccess = (response) => {
        console.log("Google Login Success:", response);

        // 애니메이션 시작
        setIsAnimating(true);

        // 1.5초 후 페이지 이동
        setTimeout(() => {
            navigate('/gamemain');
        }, 1500);
    };

    const handleGoogleLoginFailure = (error) => {
        console.error('Google Login Failed:', error);
        alert('Google 로그인에 실패했습니다.');
    };

    return (
        <div className={`LoginBackground ${isAnimating ? 'fade-out' : ''}`}>
            <div className={`Earth ${isAnimating ? 'grow' : ''}`}></div>
            <div className={`LoginContainer ${isAnimating ? 'fade-out' : ''}`}>
                <div className="TitleStyle"></div>
                <GoogleOAuthProvider clientId={clientId}>
                    <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onFailure={handleGoogleLoginFailure}
                    />
                </GoogleOAuthProvider>
            </div>
        </div>
    );
};

