import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ModalContainer = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: #d5e4ff;
    border-radius: 20px;
    padding: 20px;
    width: 350px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 24px;
    color: #ffffff;
    cursor: pointer;
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    color: #ffffff;
`;

const InputField = styled.input`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: none;
    border-radius: 10px;
    background-color: #ffffff;
    color: #555;
    font-size: 16px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TextAreaField = styled.textarea`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: none;
    border-radius: 10px;
    background-color: #ffffff;
    color: #555;
    font-size: 16px;
    height: 120px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #0056b3;
    }
`;

const NewBoardInput = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState('');
    const [nickname, setNickname] = useState('');
    const [date, setDate] = useState('');
    const [friendCode, setFriendCode] = useState('');
    const [bodyText, setBodyText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            board_title: title,
            writer: nickname,
            board_content: bodyText,
            planet: friendCode,
        };

        axios.post('http://localhost:8000/api/friendBoard/create', postData)
            .then(response => {
                console.log('Post created:', response.data);
            })
            .catch(error => {
                console.error('Error creating post:', error);
            });
    };




    return (
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
                        placeholder="닉네임"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        required
                    />
                    <InputField
                        type="date"
                        placeholder="날짜"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                    <InputField
                        type="text"
                        placeholder="친구코드"
                        value={friendCode}
                        onChange={(e) => setFriendCode(e.target.value)}
                        required
                    />
                    <TextAreaField
                        placeholder="내용"
                        value={bodyText}
                        onChange={(e) => setBodyText(e.target.value)}
                        required
                    />
                    <SubmitButton type="submit">작성</SubmitButton>
                </form>
            </ModalContent>
        </ModalContainer>
    );
};

export default NewBoardInput;
