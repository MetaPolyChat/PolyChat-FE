import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: white;
    overflow: hidden;
    position: relative;
`;

const Toolbar = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    transition: transform 0.3s ease;
    transform: ${({ isHidden }) => (isHidden ? 'translateY(-100%)' : 'translateY(0)')};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`;

const ToolbarItem = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 10px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
    }
`;

const ToggleButton = styled.button`
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${({ isToolbarHidden }) => (isToolbarHidden ? '0' : '60px')};
    transition: margin-top 0.3s ease;
`;

export const PrivateLayout = () => {
    const [isToolbarHidden, setIsToolbarHidden] = useState(true);

    const toggleToolbar = () => {
        setIsToolbarHidden(!isToolbarHidden);
    };

    return (
        <LayoutContainer>
            <ToggleButton onClick={toggleToolbar}>
                {isToolbarHidden ? '+' : '-'}
            </ToggleButton>
            <Toolbar isHidden={isToolbarHidden}>
                <ToolbarItem to="/friendBoard">친구 찾기 게시판</ToolbarItem>
                <ToolbarItem to="/unityBuild">내 방으로</ToolbarItem>
            </Toolbar>
            <Content isToolbarHidden={isToolbarHidden}>
                <Outlet />
            </Content>
        </LayoutContainer>
    );
};
