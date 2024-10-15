import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: white;
`;

const Toolbar = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
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

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PrivateLayout = () => {
    return (
        <LayoutContainer>
            {/* Toolbar Navigation */}
            <Toolbar>
                <ToolbarItem to="/friendBoard">친구 찾기 게시판</ToolbarItem>
                <ToolbarItem to="/unityBuild">내 방으로</ToolbarItem>
            </Toolbar>

            {/* Content area for Outlet */}
            <Content>
                <Outlet /> {/* This will render pages like FriendBoard or UnityComponent */}
            </Content>
        </LayoutContainer>
    );
};
