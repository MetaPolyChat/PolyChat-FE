import React from 'react';
import styled from 'styled-components';
import saturnVideo from '../../Midia/saturn.mp4';

// 배경 영상 스타일
const BackgroundVideo = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1; // 배경이 UI 요소 뒤에 있도록 설정
`;

// UI 컨테이너 스타일
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; // 화면 전체 높이
    color: white; // 텍스트 색상
    text-align: center;
    backdrop-filter: blur(5px); // 배경에 흐림 효과 추가
`;

// 입력 필드 스타일
const Input = styled.input`
    margin: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    width: 80%; // 입력 필드 너비
    max-width: 400px; // 최대 너비
    background: rgba(255, 255, 255, 0.2); // 투명한 배경
    color: white; // 텍스트 색상
`;

// 버튼 스타일
const Button = styled.button`
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.4);
    color: white;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: rgba(255, 255, 255, 0.6); // 호버 시 배경 밝기
    }
`;

export const CreateAccount = () => {
    return (
        <>
            <BackgroundVideo autoPlay loop muted>
                <source src={saturnVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </BackgroundVideo>
            <Container>
                <h1>안녕하세요 폴리챗입니다</h1>
                <p>처음 오셨군요. 닉네임을 입력하여 주십시오.</p>
                <br/>
                <Input type="text" placeholder="닉네임" />
                <Button type="submit">다음</Button>
            </Container>
        </>
    );
};
