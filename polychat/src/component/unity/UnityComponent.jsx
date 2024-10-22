import { Unity, useUnityContext } from 'react-unity-webgl';
import styled from 'styled-components';
import { useEffect } from 'react';

const FullScreenContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;  // 배경색 설정 (필요시)
`;

export const UnityComponent = () => {
    const { unityProvider, isLoaded, loadingProgression, requestPointerLock } = useUnityContext({
        loaderUrl: "/Build/Web.loader.js",  // 절대 경로로 수정
        dataUrl: "/Build/Web.data",         // 절대 경로로 수정
        frameworkUrl: "/Build/Web.framework.js", // 절대 경로로 수정
        codeUrl: "/Build/Web.wasm",         // 절대 경로로 수정
    });

    // 마우스 잠금 활성화하기 위해 클릭 이벤트 처리
    useEffect(() => {
        const handleClick = () => {
            requestPointerLock();  // Unity 화면을 클릭하면 마우스를 잠금
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
