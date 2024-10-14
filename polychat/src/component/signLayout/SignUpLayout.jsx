import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import saturnVideo from '../../Midia/saturn.mp4'; // Import the video

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  color: white;
  position: relative; /* Ensure relative positioning for the background */
`;

const Sidebar = styled.div`
    width: 200px;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
    z-index: 2; /* Sidebar stays on top of the background */
`;

const NavButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.4);
    color: white;
    font-size: 1em;
    cursor: pointer;
    width: 100%;
    text-align: center;

    &:hover {
        background: rgba(255, 255, 255, 0.6);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);
    }
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2; /* Content stays on top of the background */
`;

const BackgroundVideo = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1; /* Background video stays behind everything */
`;

export const SignUpLayout = () => {
    const navigate = useNavigate();

    return (
        <>
            <LayoutContainer>
                <Sidebar>
                    <NavButton onClick={() => navigate('/createAccount')}>Create Account</NavButton>
                    <NavButton onClick={() => navigate('/interestUp')}>Select Interests</NavButton>
                </Sidebar>
                <Content>
                    <Outlet />
                </Content>
            </LayoutContainer>
            <BackgroundVideo autoPlay loop muted>
                <source src={saturnVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </BackgroundVideo>
        </>
    );
};
