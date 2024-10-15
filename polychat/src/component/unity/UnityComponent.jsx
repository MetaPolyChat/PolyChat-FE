import { Unity, useUnityContext } from 'react-unity-webgl';
import styled from 'styled-components';

const FullScreenContainer = styled.div`
  width: 100vw;   // 화면의 가로를 100%로 설정
  height: 100vh;  // 화면의 세로를 100%로 설정
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;  // 배경색 설정 (필요시)
`;

export const UnityComponent = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "Build/Documents.loader.js",
        dataUrl: "Build/Documents.data",
        frameworkUrl: "Build/Documents.framework.js",
        codeUrl: "Build/Documents.wasm",
    });

    return (
        <FullScreenContainer>
            <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
        </FullScreenContainer>
    );
};
