import React, { useState } from 'react';
import styled from 'styled-components';
import saturnVideo from '../../Midia/saturn.mp4';
import axios from 'axios';

// 배경 영상 스타일
const BackgroundVideo = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

// UI 컨테이너 스타일
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: white;
    text-align: center;
    backdrop-filter: blur(5px);
`;

// 입력 필드 스타일
const Input = styled.input`
    margin: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    width: 80%;
    max-width: 400px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
`;

// 버튼 스타일
const Button = styled.button`
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.4);
    color: white;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: rgba(255, 255, 255, 0.6);
    }

    &:disabled {
        background: gray;
        cursor: not-allowed;
    }
`;

// interests 배열
const interestsList = [
    '심리학', '산책', '수공예', '음악', '독서', '캘리그래피', '명상',
    '건강', '여행', '댄스', '일상탈출', '문화체험', '미술', '요리', '운동',
    '디지털디톡스', '휴식', '사진'
];

// 체크박스 스타일
// 체크박스 스타일
const CheckboxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;  // 버튼들 사이에 간격 추가
    margin-top: 20px;
    width: 80%; // 컨테이너의 너비를 설정하여 중앙 정렬 효과
    max-width: 600px; // 최대 너비 설정
`;

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    cursor: pointer;
    user-select: none;
    text-align: center;
    transition: background 0.3s ease-in-out;

    input {
        display: none;  // 체크박스 기본 스타일 숨기기
    }

    &.selected {
        background: rgba(255, 255, 255, 0.6);
    }

    &:hover {
        background: rgba(255, 255, 255, 0.4);  // 호버 시 효과 추가
    }
`;


export const CreateAccount = () => {
    const [nickname, setNickname] = useState('');
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [error, setError] = useState('');

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleInterestChange = (interest) => {
        setSelectedInterests((prevSelected) => {
            if (prevSelected.includes(interest)) {
                return prevSelected.filter((i) => i !== interest);
            } else if (prevSelected.length < 10) {
                return [...prevSelected, interest];
            }
            return prevSelected;
        });
    };

    const handleSubmit = () => {
        if (nickname === '') {
            setError('닉네임을 입력해주세요.');
            return;
        }
        if (selectedInterests.length < 5 || selectedInterests.length > 10) {
            setError('관심사를 최소 5개에서 최대 10개까지 선택해주세요.');
            return;
        }
        setError('');

        // Axios를 이용해 백엔드로 데이터 전송
        axios.post('https://your-api-url.com/api/createAccount', {
            nickname,
            interests: selectedInterests
        })
            .then((response) => {
                console.log('Data sent successfully', response.data);
                // 성공 후의 로직 추가
            })
            .catch((error) => {
                console.error('Error sending data', error);
                // 에러 처리 로직 추가
            });
    };

    return (
        <>
            <BackgroundVideo autoPlay loop muted>
                <source src={saturnVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </BackgroundVideo>
            <Container>
                <h1>안녕하세요 폴리챗입니다</h1>
                <p>처음 오셨군요. 닉네임을 입력하여 주십시오.</p>
                <Input
                    type="text"
                    placeholder="닉네임"
                    value={nickname}
                    onChange={handleNicknameChange}
                />
                <h2>관심사를 선택하세요 (최소 5개, 최대 10개)</h2>
                <CheckboxContainer>
                    {interestsList.map((interest) => (
                        <CheckboxLabel
                            key={interest}
                            className={selectedInterests.includes(interest) ? 'selected' : ''}
                        >
                            <input
                                type="checkbox"
                                checked={selectedInterests.includes(interest)}
                                onChange={() => handleInterestChange(interest)}
                            />
                            {interest}
                        </CheckboxLabel>
                    ))}
                </CheckboxContainer>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={selectedInterests.length < 5 || nickname === ''}
                >
                    완료
                </Button>
            </Container>
        </>
    );
};
