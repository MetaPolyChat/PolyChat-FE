// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './LoginStyle.css'; // 스타일 파일 임포트
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from "@react-oauth/google";
import midiaBackground from '../../Midia/univerBackground.mp4'; // 배경 비디오
import transitionVideoSrc from '../../Midia/InpotalMidia.mp4'; // 전환 비디오
import { jwtDecode } from 'jwt-decode';
import styled from 'styled-components';
import googleimg from '../../ImgDocument/GoogleLoginImage.png'
const LoginButton = styled.button`
    width: 240px; /* Set the width for the button */
    height: 50px; /* Set the height for the button */
    //background-color: transparent; /* Make the background transparent since we use an image */
    border: none; /* Remove the default button border */
    border-radius: 8px; /* Add rounded corners */
    padding: 0; /* Remove padding to ensure the image fits */
    cursor: pointer; /* Change cursor to pointer for interactivity */
    display: flex; /* Use flexbox to center the image */
    align-items: center; /* Vertically align the image */
    justify-content: center; /* Horizontally align the image */
    z-index: 999999999;

    &:hover {
        opacity: 0.9; /* Add a hover effect */
    }

    &:disabled {
        opacity: 0.5; /* Dim the button when disabled */
        cursor: not-allowed; /* Change the cursor to indicate it's disabled */
    }

    img {
        width: 100%; /* Ensure the image fits the button width */
        height: 100%; /* Ensure the image fits the button height */
        object-fit: cover; /* Maintain the aspect ratio of the image */
        border-radius: 8px; /* Match the button's rounded corners */
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
                    <LoginButton onClick={moveBackEndSpringGoogleLogin}>
                        <img src={googleimg} alt="Google Login" />
                    </LoginButton>
                </div>
            </div>

            <video id="TransitionVideo" className="TransitionVideo" muted style={{ display: 'none' }}>
                <source src={transitionVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};