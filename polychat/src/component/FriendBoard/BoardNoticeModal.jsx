import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContent = styled.div`
    background-color: #0085FF;
    margin: 5% auto;
    padding: 0;
    width: 90%;
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const CloseButton = styled.span`
    color: #fff;
    font-weight: bold;
    transition: color 0.3s;
    cursor: pointer;
    padding: 0 10px;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0056b3;
    padding: 12px 16px;
    border-radius: 10px 10px 0 0;
    color: #fff;
`;

const Title = styled.h2`
    margin: 0;
    font-size: 24px;
    text-align: center;
    color: #fff;
    flex-grow: 1;
`;

const Date = styled.span`
    color: #fff;
    font-size: 16px;
`;

const ModalBody = styled.div`
    padding: 40px;
    color: rgba(255, 255, 255, 0.9);
    max-height: 500px;
    overflow-y: auto;
    background-color: rgba(115, 138, 224, 0.9);
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
`;

const ActionButton = styled.button`
    color: white;
    background-color: #e74c3c;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        background-color: #c0392b;
    }
`;

const EditButton = styled.button`
    color: white;
    background-color: #3498db;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #2980b9;
    }
`;

const BoardNoticeModal = ({ isOpen, onClose, post, onDelete }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose(); // Close modal when clicking outside
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!post) return null;

    const handleDelete = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            onDelete(post.id);
            onClose();
        }
    };

    return (
        <Modal isOpen={isOpen}>
            <ModalContent ref={modalRef}>
                <TitleContainer>
                    <Date>{post.date}</Date>
                    <Title>{post.title}</Title>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                </TitleContainer>
                <ModalBody>
                    <p>{post.bodyText || post.content}</p> {/* Display bodyText or content */}
                    <ButtonContainer>
                        <ActionButton onClick={handleDelete}>삭제</ActionButton>
                        <EditButton>수정</EditButton>
                    </ButtonContainer>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default BoardNoticeModal;
