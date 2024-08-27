import React, { useEffect, useState } from 'react';
import './LoginStyle.css';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from "@react-oauth/google";
import midiaBackground from '../../Midia/univerBackground.mp4'; // Background video
import transitionVideoSrc from '../../Midia/InpotalMidia.mp4'; // Import the transition video

export const Login = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const clientId = '552350134054-cqkg0eudpmaa94eeqv6p2ldodjptjvei.apps.googleusercontent.com';

    useEffect(() => {
        googleLogout();
    }, []);

    const handleGoogleLoginSuccess = (response) => {
        console.log("Google Login Success:", response);

        // Start animation
        setIsAnimating(true);

        // Show transition video immediately
        const transitionVideo = document.getElementById('TransitionVideo');
        transitionVideo.style.display = 'block';
        transitionVideo.play();

        // Navigate after the transition video ends
        transitionVideo.onended = () => {
            navigate('/gamemain');
        };
    };

    const handleGoogleLoginFailure = (error) => {
        console.error('Google Login Failed:', error);
        alert('Google 로그인에 실패했습니다.');
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
                    <GoogleOAuthProvider clientId={clientId}>
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onFailure={handleGoogleLoginFailure}
                        />
                    </GoogleOAuthProvider>
                </div>
            </div>

            {/* Transition Video */}
            <video id="TransitionVideo" className="TransitionVideo" muted>
                <source src={transitionVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};
