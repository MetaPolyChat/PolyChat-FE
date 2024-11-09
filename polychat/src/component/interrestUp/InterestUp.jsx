import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
    const [searchParams] = useSearchParams();
    const userId = searchParams.get('userId');
    const navigate = useNavigate();
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [interestsList, setInterestsList] = useState([]);
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch interests on component mount
    useEffect(() => {
        axios.get('https://polychat.fun:18000/api/interest/find-all')
            .then((response) => {
                setInterestsList(response.data); // Assuming response.data is an array of interests
            })
            .catch((error) => {
                console.error('Error fetching interests', error);
            });
    }, []);

    const handleInterestChange = (interestId) => {
        setSelectedInterests((prevSelected) => {
            if (prevSelected.includes(interestId)) {
                return prevSelected.filter((i) => i !== interestId);
            } else if (prevSelected.length < 10) {
                return [...prevSelected, interestId];
            }
            return prevSelected;
        });
    };

    const handleSubmit = () => {
        if (selectedInterests.length < 1 || selectedInterests.length > 5) {
            setError('관심사를 최소 1개에서 최대 5개까지 선택해주세요.');
            setIsModalOpen(true);
            return;
        }
        setError('');

        // POST 요청을 API 요구 형식에 맞춰 전송
        axios.post('https://polychat.fun:18000/api/interest/regist', {
            user_id: userId, // userId를 user_id로 전송
            interest_list: selectedInterests // 선택된 관심사 ID 배열 전송
        })
            .then((response) => {
                console.log('Data sent successfully', response.data);
                // Form 제출 후 friend-board로 이동
                navigate(`/unity-build`);
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
            <h2>관심사를 선택하세요 (최소 1개, 최대 5개)</h2>
            <p>선택된 관심사: {selectedInterests.length} / 5</p>
            <CheckboxContainer>
                {interestsList.map((interest) => (
                    <CheckboxLabel
                        key={interest.interestId}
                        className={selectedInterests.includes(interest.interestId) ? 'selected' : ''}
                    >
                        <input
                            type="checkbox"
                            checked={selectedInterests.includes(interest.interestId)}
                            onChange={() => handleInterestChange(interest.interestId)}
                        />
                        {interest.interestName}
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
