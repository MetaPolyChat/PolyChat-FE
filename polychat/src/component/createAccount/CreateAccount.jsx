import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    background: rgba(255, 255, 255, 0.4);
    color: white;
    font-size: 1em;
    cursor: pointer;

    &:disabled {
        background: gray;
        cursor: not-allowed;
    }
`;

export const CreateAccount = () => {
    const [nickname, setNickname] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleSubmit = () => {
        if (nickname === '') {
            setError('닉네임을 입력해주세요.');
            return;
        }
        setError('');

        axios.post('https://your-api-url.com/api/validateNickname', { nickname })
            .then(() => {
                navigate('/interests', { state: { nickname } });
            })
            .catch((error) => {
                console.error('Error validating nickname', error);
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
            <Button
                type="submit"
                onClick={handleSubmit}
                disabled={nickname === ''}
            >
                다음
            </Button>
        </Container>
    );
};
