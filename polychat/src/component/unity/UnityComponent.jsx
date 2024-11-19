import { Unity, useUnityContext } from 'react-unity-webgl';
import styled from 'styled-components';
import { useEffect } from 'react';

const FullScreenContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

export const UnityComponent = ({ parameter }) => {
    const { unityProvider, isLoaded, loadingProgression, requestPointerLock, sendMessage } = useUnityContext({
        loaderUrl: "/Build/webgl.loader.js",
        dataUrl: "/Build/webgl.data",
        frameworkUrl: "/Build/webgl.framework.js",
        codeUrl: "/Build/webgl.wasm",
    });

    // Send parameter to Unity once Unity is fully loaded
    useEffect(() => {
        if (isLoaded && parameter) {
            console.log("Sending parameter to Unity:", parameter);
            sendMessage("ParameterReceiverObject", "MethodName", parameter);
        }
    }, [isLoaded, parameter]);

    // Handle pointer lock for Unity
    useEffect(() => {
        const handleClick = () => {
            requestPointerLock();
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [requestPointerLock]);

    return (
        <FullScreenContainer>
            {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
            <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
        </FullScreenContainer>
    );
};
