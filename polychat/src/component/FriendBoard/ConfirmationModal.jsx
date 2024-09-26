import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
`;

const Button = styled.button`
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    
    &:hover {
        background-color: #0056b3;
    }
`;

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                <h2>정말 삭제하시겠습니까?</h2>
                <Button onClick={onClose}>아니요</Button>
                <Button onClick={onConfirm}>예</Button>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ConfirmationModal;
