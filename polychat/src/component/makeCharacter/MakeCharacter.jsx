import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AhriImage from '../../ImgDocument/Ahri.png';
import BoyImage from '../../ImgDocument/Boy.png';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
`;

const Header = styled.h2`
    font-size: 2rem;
    color: #333;
    font-weight: 700;
    margin-bottom: 2.5rem;
    text-align: center;
`;

const GenderSelection = styled.div`
    display: flex;
    gap: 3rem;
`;

const GenderOption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const Circle = styled.div`
    width: 150px;
    height: 150px;
    background-image: url(${({ gender }) => (gender === '남자' ? BoyImage : AhriImage)});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
`;

const Label = styled.div`
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #555;
    background: #e8e8e8;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Modal = styled.div`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
    color: #000;
`;

const ModalButton = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #4caf50;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
        background-color: #45a049;
    }
`;

const MakeCharacter = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleGenderSelect = (gender) => {
        setShowModal(true);
    };

    const handleNext = () => {
        setShowModal(false);
        navigate('/interest-up');
    };

    return (
        <PageContainer>
            <Header>성별을 선택하세요</Header>
            <GenderSelection>
                <GenderOption onClick={() => handleGenderSelect('남자')}>
                    <Circle gender="남자"></Circle>
                    <Label>남자</Label>
                </GenderOption>
                <GenderOption onClick={() => handleGenderSelect('여자')}>
                    <Circle gender="여자"></Circle>
                    <Label>여자</Label>
                </GenderOption>
            </GenderSelection>

            <Modal show={showModal}>
                <ModalContent>
                    <p>성별이 선택되었습니다.</p>
                    <ModalButton onClick={handleNext}>다음</ModalButton>
                </ModalContent>
            </Modal>
        </PageContainer>
    );
};

export default MakeCharacter;
