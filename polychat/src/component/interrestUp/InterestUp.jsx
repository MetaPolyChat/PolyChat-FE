import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const interestsList = ['심리학', '산책', '수공예', '음악', '독서', '캘리그래피', '명상', '건강', '여행', '댄스', '일상탈출', '문화체험', '미술', '요리', '운동', '디지털디톡스', '휴식', '사진'];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: white;
    text-align: center;
    backdrop-filter: blur(5px);
    z-index: 1;
`;

const CheckboxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
    margin-top: 20px;
    width: 80%;
    max-width: 600px;
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
    transition: background 0.3s ease-in-out;

    &.selected {
        background: rgba(255, 255, 255, 0.6);
    }

    &:hover {
        background: rgba(255, 255, 255, 0.4);
    }

    input {
        display: none;
    }
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

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
`;

const ModalButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: #007BFF;
    color: white;
    cursor: pointer;
`;

const InterestUp = () => {
    const location = useLocation();
    const nickname = location.state?.nickname || '';
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        if (selectedInterests.length < 5 || selectedInterests.length > 10) {
            setError('관심사를 최소 5개에서 최대 10개까지 선택해주세요.');
            setIsModalOpen(true);
            return;
        }
        setError('');

        axios.post('https://your-api-url.com/api/createAccount', {
            nickname,
            interests: selectedInterests
        })
            .then((response) => {
                console.log('Data sent successfully', response.data);
            })
            .catch((error) => {
                console.error('Error sending data', error);
            });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Container>
            <h2>관심사를 선택하세요 (최소 5개, 최대 10개)</h2>
            <p>선택된 관심사: {selectedInterests.length} / 10</p> {/* 선택된 관심사 숫자 표시 */}
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
            <Button
                type="submit"
                onClick={handleSubmit}
                disabled={selectedInterests.length < 5}
            >
                완료
            </Button>

            {isModalOpen && (
                <ModalBackground>
                    <ModalContent>
                        <p>{error}</p>
                        <ModalButton onClick={closeModal}>확인</ModalButton>
                    </ModalContent>
                </ModalBackground>
            )}
        </Container>
    );
};

export default InterestUp;
