import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import MemberIntroduction from '../memberIntroduction/MemberIntroduction.jsx';


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: black; /* 배경색을 원하는 색으로 설정 */
        overflow: hidden; /* 필요 없는 스크롤 제거 */
    }

    html, body, #root {
        height: 100%;
    }
`;

// Layout 스타일 컨테이너
const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: white;
`;

// 헤더 (Toolbar) 스타일
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


const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

// 오른쪽 메뉴 스타일
const RightNav = styled.nav`
    display: flex;
    gap: 20px;
`;

// 네비게이션 스타일
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

// 토글 버튼 스타일
const ToggleButton = styled.button`
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 14px;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    &:focus {
        outline: none;
    }
`;


const Content = styled.main`
    flex: 1;
    margin-top: ${({ isHeaderHidden }) => (isHeaderHidden ? '0' : '60px')};
    padding: 20px;
    transition: margin-top 0.3s ease;
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
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userId = params.get('userId') || 0;
    

    const toggleHeaderVisibility = () => {
        setIsHeaderHidden((prevState) => !prevState);
    };

    return (
        <>
            <GlobalStyle />
            <LayoutContainer>
                <ToggleButton onClick={toggleHeaderVisibility}>
                    {isHeaderHidden ? 'ON' : 'OFF'}
                </ToggleButton>
                <Header isHidden={isHeaderHidden}>
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
                <Content isHeaderHidden={isHeaderHidden}>
                    <Outlet />
                </Content>
            </LayoutContainer>
        </>
    );
};
