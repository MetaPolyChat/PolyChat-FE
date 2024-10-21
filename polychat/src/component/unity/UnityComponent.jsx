import { Unity, useUnityContext } from 'react-unity-webgl';
import styled from 'styled-components';

const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;  // 배경색 설정 (필요시)
`;

export const UnityComponent = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "Build/Web.loader.js",
        dataUrl: "Build/Web.data",
        frameworkUrl: "Build/Web.framework.js",
        codeUrl: "Build/Web.wasm",
    });


    return (
        <FullScreenContainer>
            <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
        </FullScreenContainer>
    );
};
