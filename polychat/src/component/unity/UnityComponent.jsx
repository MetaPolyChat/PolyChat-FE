import { Unity, useUnityContext } from 'react-unity-webgl';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { String } from 'three/addons/transpiler/AST.js';

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
    const [userInterest, setUserInterest] = useState(null);
    const { unityProvider, isLoaded, sendMessage } = useUnityContext({
        loaderUrl: "/Build/webgl.loader.js",
        dataUrl: "/Build/webgl.data",
        frameworkUrl: "/Build/webgl.framework.js",
        codeUrl: "/Build/webgl.wasm",
    });

    useEffect(() => {
        axios.get(`https://polychat.fun:18000/api/info?userId=${userId}`)
            .then(res => {
                setUserData(res.data);
                setUserName(res.data.userName);
            })
            .catch(error => {
                console.log('Error 떳다', error);
            });
    }, [isLoaded]);
    
    useEffect(()=>{
        axios.get(`https://polychat.fun:18000/api/interest/user?userId=${userId}`)
            .then(res => {
                setUserInterest(res.data);
            })
            .catch(error=>{
                console.log('Interest Error',error);
            });
    },[isLoaded]);

    // Unity가 로드되고 userName이 설정되면 메시지 보내기
    useEffect(() => {
        if (isLoaded) {
            console.log("userInterest :: " + userInterest);
            setTimeout(() => {
                sendMessage('Get_UserName', 'RecieveUnity', userName);
                sendMessage('Get_UserInterest', 'RecieveUnityByInterest', userInterest);
            }, 100);
        }
    }, [isLoaded, sendMessage, userName, userInterest]);
    
    
    

    return (
        <FullScreenContainer>
            <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
        </FullScreenContainer>
    );
};
