import React from "react";
import styled from "styled-components";
import mediaBackground from "../../Midia/univerBackground.mp4";
import TitleImage from "../../ImgDocument/PolyChat.png"; // Replace with your image path

// Main container for the entire component
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
`;

// Background video styling
const BackgroundVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.6;
`;

// Title image container
const ImageWrapper = styled.div`
    width: 60%;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Title image styling
const StyledImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`;

// Main content container
const ContentContainer = styled.div`
    width: 80%;
    max-height: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    border: 5px solid #000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    overflow-y: auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #000;
    z-index: 1;
`;

// Text block styling
const Text = styled.div`
    margin-bottom: 20px;
    text-align: center;
`;

// Styled list
const StyledList = styled.ol`
    list-style-position: inside;
    margin: 0 auto;
    padding: 0;
    text-align: center;
`;

// Individual list item styling
const StyledListItem = styled.li`
    text-align: center;
`;

// Container for the cards
const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px; /* Additional spacing between sections */
`;

// Individual card styling
const Card = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 2px solid #000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 10px;
`;

// Image inside the card
const CardImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
    border: 2px solid #000;
`;

// Card details container
const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// Individual text inside card details
const CardText = styled.div`
  font-size: 1rem;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

export const Introduction = () => {
    return (
        <Container>
            {/* Background Video */}
            <BackgroundVideo autoPlay loop muted>
                <source src={mediaBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </BackgroundVideo>
            {/* Title Image */}
            <ImageWrapper>
                <StyledImage src={TitleImage} alt="Title" />
            </ImageWrapper>
            {/* Text Content */}
            <ContentContainer>
                {/* PolyChat Introduction */}
                <Text>
                    <strong>폴리챗 프로젝트 배경</strong>
                    <StyledList>
                        <StyledListItem>
                            가상의 캐릭터로 자신을 드러내지 않고 사람들과 소통하고 싶습니다.
                        </StyledListItem>
                        <StyledListItem>
                            그러면서도 채팅이나 음성통화 보다는 더 형식감 있는 대화가 되었으면
                            좋겠습니다.
                        </StyledListItem>
                        <StyledListItem>
                            혼자 있고 싶을 때에는 잔잔한 음악을 들으며 힐링 하고 싶습니다.
                        </StyledListItem>
                    </StyledList>
                </Text>
                <Text>
                    <strong>PolyChat Project Background</strong>
                    <StyledList>
                        <StyledListItem>
                            I want to communicate with others without revealing myself through a
                            virtual character.
                        </StyledListItem>
                        <StyledListItem>
                            I hope it offers more structured conversations than simple chatting or
                            voice calls.
                        </StyledListItem>
                        <StyledListItem>
                            When I'm alone, I want to relax while listening to calm music.
                        </StyledListItem>
                    </StyledList>
                </Text>
                <Text>
                    <strong>ポリチャットプロジェクトの背景</strong>
                    <StyledList>
                        <StyledListItem>
                            仮想のキャラクターで自分を表さず、人々と交流したいです。
                        </StyledListItem>
                        <StyledListItem>
                            チャットや音声通話よりも形式のある会話があれば良いと思います。
                        </StyledListItem>
                        <StyledListItem>
                            一人で静かにしたいときは、静かな音楽を聞きながら癒されたいです。
                        </StyledListItem>
                    </StyledList>
                </Text>
            </ContentContainer>
        </Container>
    );
};
