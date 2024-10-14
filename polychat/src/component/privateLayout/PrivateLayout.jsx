import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  color: white;
`;

const Sidebar = styled.div`
  width: 200px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  padding: 20px;
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
            <Sidebar>
                <p>Sidebar Navigation</p>
                {/* Sidebar Navigation Options */}
            </Sidebar>
            <Content>
                <Outlet /> {/* This will render pages like FriendBoard */}
            </Content>
        </LayoutContainer>
    );
};
