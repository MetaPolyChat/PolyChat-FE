import React, { useState } from 'react';
import styled from 'styled-components';
import './LoginStyle.css'; // 스타일 파일 임포트
import midiaBackground from '../../Midia/univerBackground.mp4';
import transitionVideoSrc from '../../Midia/InpotalMidia.mp4';
import googleimg from '../../ImgDocument/GoogleLoginImage.png';
import { useNavigate } from 'react-router-dom';

const LoginButton = styled.button`
    width: 240px;
    height: 50px;
    border: none;
    border-radius: 8px;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999999;

    &:hover {
        opacity: 0.9;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`;

const DevButton = styled.button`
    width: 240px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background-color: #4caf50; /* 녹색 */
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #45a049;
    }

    &:active {
        background-color: #3e8e41;
    }
`;

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    text-align: center; /* 텍스트와 버튼을 가운데 정렬 */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

    h2 {
        margin-bottom: 20px;
    }

    button {
        background: #4caf50;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin: 10px auto;
        display: block;
        width: 80%;

        &:hover {
            background: #45a049;
        }

        &:active {
            background: #3e8e41;
        }
    }
`;


const LoginInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
`;



const LoginModalContent = styled(ModalContent)`
    h2 {
        margin-bottom: 20px;
    }
`;

export const Login = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const moveBackEndSpringGoogleLogin = () => {
        window.location.href = 'https://polychat.fun:18000/api/auth/google/redirect';
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogin = () => {
        if (userId === '11' && password === 'user11') {
            navigate(`/social-main?userId=${userId}`);
        } else {
            alert('No');
        }
        closeModal();
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
                    <DevButton onClick={openModal}>On Dev</DevButton>
                </div>
            </div>

            <video id="TransitionVideo" className="TransitionVideo" muted style={{ display: 'none' }}>
                <source src={transitionVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {isModalOpen && (
                <ModalWrapper>
                    <LoginModalContent>
                        <h2>Login</h2>
                        <LoginInput
                            type="text"
                            placeholder="UserID"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                        <LoginInput
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <LoginButton onClick={handleLogin}>Login</LoginButton>
                        <button onClick={closeModal} style={{ marginTop: '10px', backgroundColor: '#ccc' }}>
                            Exit
                        </button>
                    </LoginModalContent>
                </ModalWrapper>
            )}
        </div>
    );
};
