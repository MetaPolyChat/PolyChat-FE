// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './LoginStyle.css'; // 스타일 파일 임포트
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from "@react-oauth/google";
import midiaBackground from '../../Midia/univerBackground.mp4'; // 배경 비디오
import transitionVideoSrc from '../../Midia/InpotalMidia.mp4'; // 전환 비디오
import { jwtDecode } from 'jwt-decode';
import styled from 'styled-components';

const LoginButton = styled.button`
    padding: 12px 24px;
    font-size: 16px;
    background-color: #4A5CFF;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #3b4fbd;
    }

    &:disabled {
        background-color: grey;
        cursor: not-allowed;
    }
`;

export const Login = () => {
    // 상태 변수 정의
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();
    
    const moveBackEndSpringGoogleLogin = () => {
        // Redirect to backend for Google login
        window.location.href = 'https://polychat.fun:18000/api/auth/google/redirect';
    };

    return (
        <div className="LoginWrapper">
            <video className="BackgroundVideo" autoPlay muted loop>
                <source src={midiaBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={`LoginBackground ${isAnimating ? 'fade-out' : ''}`}>
                <div className={`Earth ${isAnimating ? 'grow' : ''}`}></div>
                <div className="LoginContainer">
                    <div className="TitleStyle"></div>
                    <LoginButton onClick={moveBackEndSpringGoogleLogin}>로그인</LoginButton>
                </div>
            </div>

            <video id="TransitionVideo" className="TransitionVideo" muted style={{ display: 'none' }}>
                <source src={transitionVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};