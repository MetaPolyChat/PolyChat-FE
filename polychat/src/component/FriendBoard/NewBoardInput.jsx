import React, { useState } from 'react';
import styled from 'styled-components';

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
    background: white;
    border-radius: 10px;
    padding: 20px;
    width: 400px;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
`;

const TitleInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const FriendCodeInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const FontStyleSelect = styled.select`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const FontSizeSelect = styled.select`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const BodyTextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 100px;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;

const NewBoardInput = ({ isOpen, onClose, addNewPost }) => {
    const [title, setTitle] = useState('');
    const [friendCode, setFriendCode] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [fontStyle, setFontStyle] = useState('Arial');
    const [fontSize, setFontSize] = useState('16px');

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewPost({ title, friendCode, content: bodyText, fontStyle, fontSize });
        // Clear inputs after submission
        setTitle('');
        setFriendCode('');
        setBodyText('');
        onClose(); // Close the modal after submitting
    };

    return (
        <ModalContainer isOpen={isOpen}>
            <ModalContent>
                <CloseButton onClick={onClose}>×</CloseButton>
                <h2>새 게시물 작성</h2>
                <form onSubmit={handleSubmit}>
                    <TitleInput
                        type="text"
                        placeholder="제목"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <FriendCodeInput
                        type="text"
                        placeholder="친구 코드"
                        value={friendCode}
                        onChange={(e) => setFriendCode(e.target.value)}
                        required
                    />
                    <FontStyleSelect value={fontStyle} onChange={(e) => setFontStyle(e.target.value)}>
                        <option value="Arial">Arial</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </FontStyleSelect>
                    <FontSizeSelect value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
                        <option value="16px">16px</option>
                        <option value="20px">20px</option>
                        <option value="24px">24px</option>
                        <option value="28px">28px</option>
                    </FontSizeSelect>
                    <BodyTextArea
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
