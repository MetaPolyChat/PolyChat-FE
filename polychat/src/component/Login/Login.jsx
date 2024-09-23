import React, { useEffect, useState } from 'react';
import './LoginStyle.css'; // 스타일 파일 임포트
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from "@react-oauth/google";
import midiaBackground from '../../Midia/univerBackground.mp4'; // 배경 비디오
import transitionVideoSrc from '../../Midia/InpotalMidia.mp4'; // 전환 비디오
import { jwtDecode } from 'jwt-decode'; // JWT 디코딩
import axios from 'axios'; // Axios 임포트

export const Login = () => {
    // 상태 변수 정의
    const [isAnimating, setIsAnimating] = useState(false);
    const [user, setUser] = useState(null);
    const [dialogState, setDialogState] = useState('login'); // 다이얼로그 상태
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [selectedInterests, setSelectedInterests] = useState([]);

    // 닉네임 입력 다이얼로그
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
            <div className="DialogBox">
                <h2 className="DialogTitle">처음 오셨군요!</h2>
                <h2 className="DialogSubtitle">사용할 닉네임을 정하세요</h2>
                <input
                    type="text"
                    value={nicknameInput}
                    onChange={(e) => setNicknameInput(e.target.value)}
                    placeholder="닉네임을 입력해주세요."
                    className="NicknameInput"
                />
                <button onClick={handleSubmit} className="NextButton">다음</button>
            </div>
        );
    };

    // 닉네임 확인 다이얼로그
    const ConfirmNicknameDialog = ({ nickname, onConfirm, onPrevious }) => {
        return (
            <div className="DialogBox">
                <h2 className="DialogTitle">닉네임 확인</h2>
                <p className="DialogText">정말로 "{nickname}" 닉네임으로 하시겠습니까?</p>
                <button onClick={onPrevious} className="PrevButton">이전</button>
                <button onClick={onConfirm} className="ConfirmButton">확인</button>
            </div>
        );
    };

    // 관심사 선택 다이얼로그
    const InterestsDialog = ({ onSubmit, onPrevious }) => {
        const interests = [
            '심리학', '산책', '수공예', '음악', '독서', '캘리그래피', '명상',
            '건강', '여행', '댄스', '일상탈출', '문화체험', '미술', '요리', '운동',
            '디지털디톡스', '휴식', '사진'
        ];

        const [selectedInterests, setSelectedInterests] = useState([]);
        const [showErrorDialog, setShowErrorDialog] = useState(false);

        const handleInterestChange = (interest) => {
            setSelectedInterests(prev =>
                prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
            );
        };

        const handleSubmit = () => {
            // if (selectedInterests.length > 10) {
            //     alert('최대 10개까지만 선택할 수 있습니다.');
            // } else if (selectedInterests.length < 5) {
            //     setShowErrorDialog(true); // 관심사 선택이 부족할 경우
            // } else {
            //     axios.post('http://localhost:8000/admin/interest/regist', {
            //         nickname: nickname,  // 닉네임 전송
            //         interests: selectedInterests // 선택한 관심사 전송
            //     })
            //         .then(response => {
            //             console.log("Interests registered:", response.data);
            //             onSubmit(selectedInterests); // 성공 시 다음 단계 진행
            //         })
            //         .catch(error => {
            //             console.error("Error registering interests:", error);
            //             alert("관심사 등록에 실패했습니다. 다시 시도해주세요.");
            //         });
            //
            // }
            
            onSubmit(selectedInterests);
        };

        const handleCloseErrorDialog = () => {
            setShowErrorDialog(false);
        };

        return (
            <div style={{
                backgroundColor: '#1E1E2A',
                borderRadius: '12px',
                padding: '30px',
                maxWidth: '500px',
                margin: 'auto',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                position: 'relative'
            }}>
                <h2 style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '22px', marginBottom: '20px' }}>
                    관심 주제 선택
                </h2>
                <p style={{ color: '#ffffff', position: 'absolute', top: '10px', right: '10px', fontSize: '12px' }}>
                    10개 이하로 선택 가능합니다.
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '10px',
                    marginBottom: '20px'
                }}>
                    {interests.map(interest => (
                        <button
                            key={interest}
                            onClick={() => handleInterestChange(interest)}
                            style={{
                                backgroundColor: selectedInterests.includes(interest) ? '#4A5CFF' : '#D1D5DB',
                                color: selectedInterests.includes(interest) ? '#fff' : '#000',
                                border: 'none',
                                padding: '10px',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                fontWeight: '500'
                            }}
                        >
                            {interest}
                        </button>
                    ))}
                </div>
                <button onClick={handleSubmit} style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: '#4A5CFF',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                }}
                >
                    설정
                </button>

                {/* 오류 다이얼로그 */}
                {showErrorDialog && (
                    <div style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#00B386',
                        borderRadius: '12px',
                        padding: '20px',
                        textAlign: 'center',
                        width: '300px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
                    }}>
                        <button onClick={handleCloseErrorDialog} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            fontSize: '16px',
                            cursor: 'pointer'
                        }}>X</button>
                        <p style={{ color: '#ffffff', fontSize: '16px', marginBottom: '20px' }}>
                            관심사를 선택하지 않았습니다.
                        </p>
                        <button onClick={handleCloseErrorDialog} style={{
                            padding: '10px 20px',
                            borderRadius: '12px',
                            border: 'none',
                            backgroundColor: '#4A5CFF',
                            color: '#ffffff',
                            fontSize: '14px',
                            cursor: 'pointer'
                        }}>
                            확인
                        </button>
                    </div>
                )}
            </div>
        );
    };

    const clientId = '552350134054-cqkg0eudpmaa94eeqv6p2ldodjptjvei.apps.googleusercontent.com';

    useEffect(() => {
        googleLogout(); // 컴포넌트가 마운트될 때 사용자 로그아웃
    }, []);

    const handleGoogleLoginSuccess = (response) => {
        const decodedToken = jwtDecode(response.credential);
        console.log(decodedToken)
        setUser({
            email: decodedToken.email,
            name: decodedToken.name
        });

        const isNew = true; // 실제 체크로 대체해야 함
        if (isNew) {
            setDialogState('nickname');
        } else {
            playTransitionAndNavigate();
        }
    };

    const playTransitionAndNavigate = () => {
        setIsAnimating(true); // 애니메이션 시작

        const transitionVideo = document.getElementById('TransitionVideo');
        transitionVideo.style.display = 'block';
        transitionVideo.play();

        transitionVideo.onended = () => {
            // navigate('/public/Unity_WebGL.html'); // 비디오 재생 후 대시보드로 이동
            location.href='public/Unity_WebGL.html';
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
                            setDialogState('confirmNickname');
                        }} />
                    ) : dialogState === 'confirmNickname' ? (
                        <ConfirmNicknameDialog
                            nickname={nickname}
                            onConfirm={() => setDialogState('interests')}
                            onPrevious={() => setDialogState('nickname')}
                        />
                    ) : (
                        <InterestsDialog
                            onSubmit={(interests) => {
                                setDialogState('completed');
                                playTransitionAndNavigate();
                            }}
                            onPrevious={() => setDialogState('confirmNickname')}
                        />
                    )}
                </div>
            </div>

            <video id="TransitionVideo" className="TransitionVideo" muted style={{ display: 'none' }}>
                <source src={transitionVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};
