import React from "react";
import styled from "styled-components";
import mediaBackground from '../../Midia/univerBackground.mp4';

// Container for the cards
const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 40px auto;
    max-width: 80%;
    height: 80vh; /* Ensure the container has a fixed height */
    overflow-y: auto; /* Enable vertical scrolling */
    padding: 10px;
    border: 2px solid #ccc; /* Optional border for clarity */
    background-color: rgba(255, 255, 255, 0.9); /* Light background for better readability */
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
    color: #000; /* Ensure the text color is visible */
`;
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

const MemberIntroduction = () => {
    const members = [
        {
            image: "https://via.placeholder.com/100",
            name: "Dohyun Kim",
            part: "Interest API, WebRTC, Chat FE, Domain Management",
            introduction: "Not Introduction",
        },
        {
            image: "https://via.placeholder.com/100",
            name: "Lee Dong-ryeol",
            part: "Chat FrontEnd Unity 6, AI voice chat, domain management, planning",
            introduction: "Not Introduction",
        },
        {
            image: "https://via.placeholder.com/100",
            name: "Oh Dokhung",
            part: "Unity6, Friend API, membership registration FrontEnd, Google login, UI/UX",
            introduction: "Not Introduction",
        },
        {
            image: "https://via.placeholder.com/100",
            name: "Jin Seok Jeon",
            part: "User API, Nginx, log settings, Google login",
            introduction: "Not Introduction",
        },
        {
            image: "https://via.placeholder.com/100",
            name: "Hong Gwan-seop",
            part: "Administrator API, Firebase, Administrator FrontEnd, CORS settings",
            introduction: "Not Introduction",
        },
        {
            image: "https://via.placeholder.com/100",
            name: "Jaeho Yang",
            part: "Planning, QA, UI/UX/ Unity assets",
            introduction: "Not Introduction",
        },
    ];

    return (
        <>
            <BackgroundVideo autoPlay loop muted>
                <source src={mediaBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </BackgroundVideo>
        <CardsContainer>
            {members.map((member, index) => (
                <Card key={index}>
                    <CardImage src={member.image} alt={member.name} />
                    <CardDetails>
                        <CardText bold>Name: {member.name}</CardText>
                        <CardText>Part: {member.part}</CardText>
                        <CardText>Introduction: {member.introduction}</CardText>
                    </CardDetails>
                </Card>
            ))}
        </CardsContainer>
        </>
    );
};

export default MemberIntroduction;
