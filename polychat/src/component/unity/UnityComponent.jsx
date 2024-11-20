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
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');
    const [userName, setUserName] = useState(null);
    const [userData, setUserData] = useState(null);
    const { unityProvider, isLoaded, sendMessage } = useUnityContext({
        loaderUrl: "/Build/webgl.loader.js",
        dataUrl: "/Build/webgl.data",
        frameworkUrl: "/Build/webgl.framework.js",
        codeUrl: "/Build/webgl.wasm",
    });

    useEffect(() => {
        axios.get(`https://polychat.fun:18000/api/info?userId=${userId}`)
            .then(res => {
                console.log("res.data :: ", JSON.stringify(res.data, null, 2));
                console.log("res.data.userName :: " + res.data.userName);
                setUserData(res.data);
                setUserName(res.data.userName);
            })
            .catch(error => {
                console.log('Error 떳다', error);
            });
    }, [userId]);

    // Unity가 로드되고 userName이 설정되면 메시지 보내기
    useEffect(() => {
        if (isLoaded && userName) {
            setTimeout(() => {
                sendMessage('LoginTestScript', 'RecieveUnity', userName);
            }, 100);
        }
    }, [isLoaded, sendMessage, userName]);
    
    
    

    return (
        <FullScreenContainer>
            <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
        </FullScreenContainer>
    );
};
