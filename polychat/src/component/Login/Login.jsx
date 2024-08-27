import React, { useEffect, useState } from 'react';
import './LoginStyle.css';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from "@react-oauth/google";
import midiaBackground from '../../Midia/univerBackground.mp4'; // Import the video

export const Login = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

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
        <div className={`LoginWrapper ${isAnimating ? 'fade-out' : ''}`}>
            <video className="BackgroundVideo" autoPlay muted loop>
                <source src={midiaBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={`LoginBackground ${isAnimating ? 'fade-out' : ''}`}>
                <div className={`Earth ${isAnimating ? 'grow' : ''}`}></div>
                <div className="LoginContainer">
                    <div className="TitleStyle"></div>
                    <GoogleOAuthProvider clientId={clientId}>
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onFailure={handleGoogleLoginFailure}
                        />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </div>
    );
};
