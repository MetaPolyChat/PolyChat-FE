import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import saturnVideo from '../../Midia/saturn.mp4'; // Background video

const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;
    color: white;
    position: relative;
    z-index: 2;
`;

const Sidebar = styled.div`
    width: 200px;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
    z-index: 3;
`;

const NavButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: ${(props) => (props.active ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.4)')};
    color: white;
    font-size: 1em;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    width: 100%;
    text-align: center;

    &:hover {
        background: ${(props) => (props.disabled || props.active ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.6)')};
    }
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    padding: 20px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const BackgroundVideo = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

export const PublicLayout = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get current location
    const [lockedSteps, setLockedSteps] = useState({
        createAccount: false,
        interestUp: false,
    });

    const handleNextStep = () => {
        // Lock the current step based on the location
        if (location.pathname === '/createAccount') {
            setLockedSteps((prev) => ({ ...prev, createAccount: true }));
            navigate('/interestUp'); // Navigate to next step
        } else if (location.pathname === '/interestUp') {
            setLockedSteps((prev) => ({ ...prev, interestUp: true }));
            // Navigate to the next page if applicable
        }
    };

    // Determine which button should be active based on the current route
    const isCreateAccountActive = location.pathname === '/createAccount';
    const isInterestUpActive = location.pathname === '/interestUp';

    return (
        <>
            <LayoutContainer>
                {/* Sidebar for navigation */}
                <Sidebar>
                    <NavButton
                        onClick={() => navigate('/createAccount')}
                        active={isCreateAccountActive}
                        disabled={lockedSteps.createAccount}
                    >
                        Create Account
                    </NavButton>
                    <NavButton
                        onClick={() => navigate('/interestUp')}
                        active={isInterestUpActive}
                        disabled={lockedSteps.interestUp}
                    >
                        Select Interests
                    </NavButton>
                </Sidebar>
                <ContentContainer>
                    <ContentWrapper>
                        <Outlet />
                    </ContentWrapper>
                </ContentContainer>
            </LayoutContainer>

            <BackgroundVideo autoPlay loop muted>
                <source src={saturnVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </BackgroundVideo>
        </>
    );
};
