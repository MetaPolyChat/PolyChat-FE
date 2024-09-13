import React, { useEffect, useState } from 'react';
import './LoginStyle.css';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from "@react-oauth/google";
import midiaBackground from '../../Midia/univerBackground.mp4'; // Background video
import transitionVideoSrc from '../../Midia/InpotalMidia.mp4';
import { jwtDecode } from 'jwt-decode'; // Import the transition video

export const Login = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [user, setUser] = useState(null);
    const [dialogState, setDialogState] = useState('login'); // Manage which dialog is shown
    const navigate = useNavigate();
    const [nickname, setNickname] = useState(''); // Store nickname
    const [selectedInterests, setSelectedInterests] = useState([]); // Store selected interests

    const NicknameDialog = ({ onSubmit }) => {
        const [nicknameInput, setNicknameInput] = useState('');

        const handleSubmit = () => {
            if (nicknameInput) {
                onSubmit(nicknameInput);
            } else {
                alert('닉네임을 입력해주세요.');
            }
        };

        return (
            <div style={{
                backgroundColor: '#1E1E2A',
                borderRadius: '12px',
                padding: '30px',
                maxWidth: '400px',
                margin: 'auto',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
            }}>
                <h2
                    style={{
                        marginBottom: '20px',
                        color: '#ffffff',
                        fontWeight: 'bold'
                    }}>처음 오셨군요!</h2>
                <h2 style={{
                    fontSize: '24px',
                    marginBottom: '20px',
                    color: '#ffffff',
                    fontWeight: 'bold'
                }}>
                    사용할 닉네임을 정하세요
                </h2>
                <input
                    type="text"
                    value={nicknameInput}
                    onChange={(e) => setNicknameInput(e.target.value)}
                    placeholder="닉네임을 입력해주세요."
                    style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '8px',
                        border: '1px solid #444',
                        marginBottom: '20px',
                        backgroundColor: '#2C2D38',
                        color: '#ffffff',
                        fontSize: '16px',
                        outline: 'none',
                        textAlign: 'center'
                    }}
                />
                <button onClick={handleSubmit} style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#4A5CFF',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#3a4bdb'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#4A5CFF'}
                >
                    다음
                </button>
            </div>
        );
    };

    const InterestsDialog = ({ onSubmit, onPrevious }) => {
        const interests = [
            '심리학', '산책', '건강', '음악', '독서', '캘라그래피', '명상',
            '여행', '댄스', '일상탈출', '문화체험', '미술', '요리', '운동',
            '디지털디톡스', '휴식', '사진'
        ];

        const handleInterestChange = (interest) => {
            setSelectedInterests(prev =>
                prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
            );
        };

        const handleSubmit = () => {
            if (selectedInterests.length > 10) {
                alert('최대 10개까지만 선택할 수 있습니다.');
            } else {
                onSubmit(selectedInterests);
            }
        };

        return (
            <div className="NicknameDialog" style={{
                backgroundColor: '#1E1E2A',
                borderRadius: '12px',
                padding: '30px',
                maxWidth: '400px',
                margin: 'auto',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
            }}>
                <h2 style={{ color: '#ffffff', fontWeight: 'bold' }}>관심 주제 선택</h2><br/>
                <p style={{ color: '#ffffff' }}>최대 10개까지 선택 가능합니다.</p><br/>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                    {interests.map(interest => (
                        <button
                            key={interest}
                            onClick={() => handleInterestChange(interest)}
                            style={{
                                backgroundColor: selectedInterests.includes(interest) ? '#4A5CFF' : '#2C2D38',
                                color: '#ffffff',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '8px',
                                cursor: 'pointer'
                            }}
                        >
                            {interest}
                        </button>
                    ))}
                </div>
                <button onClick={onPrevious} style={{ marginRight: '10px',color:'white' }}>이전</button>
                <button onClick={handleSubmit} style={{color:'white' }}>완료</button>
            </div>
        );
    };

    const clientId = '552350134054-cqkg0eudpmaa94eeqv6p2ldodjptjvei.apps.googleusercontent.com';

    useEffect(() => {
        googleLogout(); // Ensure user is logged out when the component is mounted
    }, []);

    const handleGoogleLoginSuccess = (response) => {
        const decodedToken = jwtDecode(response.credential);

        setUser({
            email: decodedToken.email,
            name: decodedToken.name
        });

        // Logic to determine if the user is new, e.g., via backend check
        const isNew = true; // Replace with actual check
        if (isNew) {
            setDialogState('nickname'); // Show nickname dialog for new users
        } else {
            playTransitionAndNavigate();
        }
    };

    const playTransitionAndNavigate = () => {
        setIsAnimating(true); // Start animation

        // Show transition video and play it
        const transitionVideo = document.getElementById('TransitionVideo');
        transitionVideo.style.display = 'block';
        transitionVideo.play();

        // After the video ends, navigate to the next page
        transitionVideo.onended = () => {
            navigate('/dashboard'); // Navigate to main page after video
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
                    {dialogState === 'login' ? (
                        <GoogleOAuthProvider clientId={clientId}>
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onFailure={handleGoogleLoginFailure}
                            />
                        </GoogleOAuthProvider>
                    ) : dialogState === 'nickname' ? (
                        <NicknameDialog onSubmit={(nickname) => {
                            setNickname(nickname);
                            setDialogState('interests'); // Move to interests dialog
                        }} />
                    ) : (
                        <InterestsDialog
                            onSubmit={(interests) => {
                                // Handle interests submission, e.g., send to backend
                                setDialogState('completed');
                                playTransitionAndNavigate(); // Play transition after setting interests
                            }}
                            onPrevious={() => setDialogState('nickname')}
                        />
                    )}
                </div>
            </div>

            {/* Transition Video */}
            <video id="TransitionVideo" className="TransitionVideo" muted style={{ display: 'none' }}>
                <source src={transitionVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};
