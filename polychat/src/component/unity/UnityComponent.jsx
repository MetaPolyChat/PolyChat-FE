import { Unity, useUnityContext } from 'react-unity-webgl';
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';

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

    useEffect(() => {
        if (isLoaded) {
            // Unity 초기화 시 데이터 전달
            sendMessage("Canvas@[UIManager]", "AddId", JSON.stringify(userId));
        }
    }, [isLoaded, userId]);

    

    return (
        <FullScreenContainer>
            <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
        </FullScreenContainer>
    );
};
