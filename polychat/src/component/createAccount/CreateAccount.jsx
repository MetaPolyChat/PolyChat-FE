import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

//CSS
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

const Button = styled.button`
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.4);  // active에 따른 배경색 변경 제거
    color: white;
    font-size: 1em;
    cursor: pointer;

    &:disabled {
        background: gray;
        cursor: not-allowed;
    }
`;


const ErrorMessage = styled.p`
    color: red;
    font-size: 0.9em;
`;

export const CreateAccount = () => {
    const [nickname, setNickname] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // URL에서 userId 가져오기
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId'); // '1'을 가져옵니다.

    const handleNicknameChange = (e) => {
        const value = e.target.value;
        setNickname(value);

        // Check for special characters or numbers
        const hasInvalidChar = /[^a-zA-Z가-힣]/;
        if (hasInvalidChar.test(value)) {
            setError('닉네임에는 숫자나 특수문자를 포함할 수 없습니다.');
        } else {
            setError('');
        }
    };

    const handleSubmit = () => {
        if (nickname === '') {
            setError('닉네임을 입력해주세요.');
            return;
        }
        if (/[^a-zA-Z가-힣]/.test(nickname)) {
            setError('닉네임에는 숫자나 특수문자를 포함할 수 없습니다.');
            return;
        }
        setError('');

        // 콘솔로 값 확인
        console.log("nickname :: " + nickname);
        console.log("userId :: " + userId);

        // JSON 데이터를 POST로 전송
        axios.post('http://localhost:8000/api/auth/google/signup', {
            userId: userId,
            nickname: nickname,
        })
            .then(response => {
                console.log("Response:", response.data);
            })
            .catch(error => {
                console.log("못보냇다 시발");
            });
    };

    return (
        <Container>
            <h1>안녕하세요 폴리챗입니다</h1>
            <p>처음 오셨군요. 닉네임을 입력하여 주십시오.</p>
            <Input
                type="text"
                placeholder="닉네임"
                value={nickname}
                onChange={handleNicknameChange}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button
                type="submit"
                onClick={handleSubmit}
                disabled={nickname === '' || error !== ''}
            >
                다음
            </Button>
        </Container>
    );
};
