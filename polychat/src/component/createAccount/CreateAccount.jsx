import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

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
    background: rgba(255, 255, 255, 0.4);
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

const ModalButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.4);
    color: white;
    font-size: 1em;
    cursor: pointer;
`;

export const CreateAccount = () => {
    const [nickname, setNickname] = useState('');
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // URL에서 userId 가져오기
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');

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

        axios.post('http://localhost:8000/api/auth/google/signup', {
            userId: userId,
            nickname: nickname,
        })
            .then(response => {
                console.log("Response:", response.data);
                setIsModalOpen(true); // 모달창 열기
                setIsButtonDisabled(true); // 버튼 비활성화
            })
            .catch(error => {
                console.error("Error:", error);
                setError("서버와의 통신에 실패했습니다.");
            });
    };

    const handleInterestUp = () => {
        setIsModalOpen(false); // 모달창 닫기
        navigate('/interestUp'); // 다음 페이지로 이동
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
                disabled={isButtonDisabled}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button
                type="submit"
                onClick={handleSubmit}
                disabled={nickname === '' || error !== '' || isButtonDisabled}
            >
                다음
            </Button>

            {/* 모달창 구현 */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Success Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                    content: {
                        color: 'white',
                        textAlign: 'center',
                        background: 'rgba(0, 0, 0, 0.8)',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '20px',
                        maxWidth: '500px',
                        margin: 'auto',
                    },
                }}
            >
                <h2>정상적으로 처리되었습니다!</h2>
                <ModalButton onClick={handleInterestUp}>다음 단계로 이동</ModalButton>
            </Modal>
        </Container>
    );
};
