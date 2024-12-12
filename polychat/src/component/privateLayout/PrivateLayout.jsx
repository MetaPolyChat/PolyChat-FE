import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: black;
        overflow: hidden;
    }

    html, body, #root {
        height: 100%;
    }
`;

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: white;
`;

const Header = styled.header`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    z-index: 10;
    transform: ${({ isHidden }) => (isHidden ? 'translateY(-100%)' : 'translateY(0)')};
    transition: transform 0.3s ease;
`;

const HoverZone = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px; /* 헤더가 숨겨져 있을 때 이벤트를 감지하는 얇은 영역 */
    z-index: 15;
    background-color: transparent;
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

const NavItem = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const RightNav = styled.nav`
    display: flex;
    gap: 20px;
`;

const Content = styled.main`
    flex: 1;
    margin-top: 60px;
    padding: 20px;
`;

const NicknameStatus = styled.div`
    color: white;
    font-size: 16px;
    margin-right: 20px;
    display: flex;
    align-items: center;

    span {
        font-weight: bold;
        margin-left: 5px;
    }
`;

export const PrivateLayout = () => {
    const [isHeaderHidden, setIsHeaderHidden] = useState(true);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userId = params.get('userId') || 0;

    const handleMouseEnter = () => {
        setIsHeaderHidden(false); // 헤더를 보이도록 설정
    };

    const handleMouseLeave = () => {
        setIsHeaderHidden(true); // 헤더를 숨기도록 설정
    };

    return (
        <>
            <GlobalStyle />
            <LayoutContainer>
                {/* 헤더가 숨겨져 있을 때 이벤트 감지용 HoverZone */}
                <HoverZone onMouseEnter={handleMouseEnter} />
                {/* 실제 헤더 */}
                <Header
                    isHidden={isHeaderHidden}
                    onMouseLeave={handleMouseLeave}
                >
                    <NavContainer>
                        <Nav>
                            <NavItem to={`/introduction?userId=${userId}`}>Introduction</NavItem>
                            <NavItem to={`/memberIntroduction?userId=${userId}`}>MemberIntroduction</NavItem>
                            <NavItem to={`/friend-board?userId=${userId}`}>Friend Board</NavItem>
                            <NavItem to={`/social-main?userId=${userId}`}>Social Board</NavItem>
                            <NavItem to={`/item-shop?userId=${userId}`}>Item Shop</NavItem>
                        </Nav>
                        <RightNav>
                            {userId && (
                                <NicknameStatus>
                                    <span>{`User ${userId}`}</span> isLogin
                                </NicknameStatus>
                            )}
                            <NavItem to={`/`}>Logout</NavItem>
                            <NavItem to={`/unity-build?userId=${userId}`}>World</NavItem>
                        </RightNav>
                    </NavContainer>
                </Header>
                <Content>
                    <Outlet />
                </Content>
            </LayoutContainer>
        </>
    );
};
