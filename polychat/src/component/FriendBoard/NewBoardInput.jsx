import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ModalContainer = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top left, #020024, #090979, #00d4ff);
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: hidden;
    backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
    background: rgba(12, 12, 52, 0.8);
    border-radius: 20px;
    padding: 20px;
    width: 350px;
    box-shadow: 0 4px 20px rgba(0, 255, 255, 0.3), 0 0 10px rgba(255, 255, 255, 0.2);
    position: relative;
    color: #ffffff;
    backdrop-filter: blur(10px);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 24px;
    color: #00d4ff;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    color: #00d4ff;
    text-shadow: 0 0 8px #00d4ff;
`;

const InputField = styled.input`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: none;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    font-size: 16px;
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.3);
    transition: background-color 0.3s ease-in-out;

    &:focus {
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 10px rgba(0, 212, 255, 0.6);
    }
`;

const TextAreaField = styled.textarea`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: none;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    font-size: 16px;
    height: 120px;
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.3);
    transition: background-color 0.3s ease-in-out;

    &:focus {
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 10px rgba(0, 212, 255, 0.6);
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    background: linear-gradient(45deg, #007bff, #00d4ff);
    color: #ffffff;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.6), inset 0 0 5px rgba(0, 212, 255, 0.8);
    transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        background: linear-gradient(45deg, #0056b3, #00b4ff);
        transform: translateY(-3px);
    }

    &:disabled {
        background: #555;
        cursor: not-allowed;
        box-shadow: none;
    }
`;

const MessageModal = styled.div`
    background-color: ${({ success }) => (success ? '#28a745' : '#dc3545')};
    color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 255, 255, 0.3), 0 0 10px rgba(255, 255, 255, 0.2);
`;

const ErrorMessage = styled.p`
    color: #f8d7da;
    background-color: #f5c6cb;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
`;

const NewBoardInput = ({ isOpen, onClose, onAddPost }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);
    const [errorDetails, setErrorDetails] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    // Extract userId from the URL
    const searchParams = new URLSearchParams(window.location.search);
    const userId = searchParams.get('userId');

    useEffect(() => {
        const currentDate = new Date().toLocaleString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }); // Get current date with YYYY-MM-DD HH:MM:SS format
        setDate(currentDate);
    }, []);

    useEffect(() => {
        if (title && date && bodyText) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [title, date, bodyText]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            title: title,
            bodyText: bodyText,
            date: date,
            userId: userId  // Include userId in the post data
        };

        axios.post('https://polychat.fun:18000/api/api/friendBoard/create', postData)
            .then(response => {
                setIsSuccess(true);
                setMessage('정상 처리되었습니다.');
                setErrorDetails('');
                onAddPost(); // Trigger post refresh in the parent component
            })
            .catch(error => {
                setIsSuccess(false);
                setMessage('작성이 실패하였습니다.');
                setErrorDetails(error.response?.data?.message || '알 수 없는 오류가 발생했습니다.');
            });
    };

    const closeMessageModal = () => {
        setIsSuccess(null);
        onClose();
    };

    return (
        <>
            <ModalContainer isOpen={isOpen}>
                <ModalContent>
                    <CloseButton onClick={onClose}>×</CloseButton>
                    <Title>새 게시물 작성</Title>
                    <form onSubmit={handleSubmit}>
                        <InputField
                            type="text"
                            placeholder="제목"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <InputField
                            type="text"
                            value={date}
                            readOnly
                            required
                        />
                        <TextAreaField
                            placeholder="내용"
                            value={bodyText}
                            onChange={(e) => setBodyText(e.target.value)}
                            required
                        />
                        <SubmitButton type="submit" disabled={!isFormValid}>
                            작성
                        </SubmitButton>
                    </form>
                </ModalContent>
            </ModalContainer>

            {isSuccess !== null && (
                <ModalContainer isOpen={true}>
                    <MessageModal success={isSuccess}>
                        <p>{message}</p>
                        {!isSuccess && <ErrorMessage>{errorDetails}</ErrorMessage>}
                        <SubmitButton onClick={closeMessageModal}>확인</SubmitButton>
                    </MessageModal>
                </ModalContainer>
            )}
        </>
    );
};

export default NewBoardInput;
