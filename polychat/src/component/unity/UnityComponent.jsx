import { Unity, useUnityContext } from 'react-unity-webgl';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FullScreenContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

export const UnityComponent = () => {
    const searchParams = new URLSearchParams(location.search);
    let userId = searchParams.get('userId');
    if (userId && !isNaN(userId)) {
        userId = Number(userId); // Convert to number
    } else {
        userId = null;
    }
    const { unityProvider, isLoaded, sendMessage } = useUnityContext({
        loaderUrl: "/Build/webgl.loader.js",
        dataUrl: "/Build/webgl.data",
        frameworkUrl: "/Build/webgl.framework.js",
        codeUrl: "/Build/webgl.wasm",
    });

    // Send data to Unity once when all data is ready
    useEffect(() => {
        if (isLoaded) {
            setTimeout(()=>{
                sendMessage('Canvas@[UIManager]', 'AddId', JSON.stringify(userId));
            },100)
        }
    }, [isLoaded]); // 이 의존성은 필요

    return (
        <FullScreenContainer>
            <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
        </FullScreenContainer>
    );
};
