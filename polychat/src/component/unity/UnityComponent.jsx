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

export const UnityComponent = ({ parameter }) => {
    const { unityProvider, isLoaded, sendMessage } = useUnityContext({
        loaderUrl: "/Build/webgl.loader.js",
        dataUrl: "/Build/webgl.data",
        frameworkUrl: "/Build/webgl.framework.js",
        codeUrl: "/Build/webgl.wasm",
    });

    const [userData, setUserData] = useState(null);
    useEffect(()=>{
        axios.get('https://polychat.fun:18000/info?userId=11')
            .then(res=>{
                setUserData(res.data);
                console.log("res.data :: " + res.data);
            })
            .catch(error=>{
                console.log('Error떳다',error);
            });
    },[]);

    // Unity가 로드되면 자동으로 메시지 보내기
    useEffect(() => {
        if (isLoaded) {
            setTimeout(() => {
                sendMessage('LoginTestScript', 'RecieveUnity', 'TestToken');
            }, 100);
        }
    }, [isLoaded, sendMessage]);
    

    return (
        <FullScreenContainer>
            <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
        </FullScreenContainer>
    );
};
