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

export const UnityComponent = () => {
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
    
    useEffect(() => {
        if (isLoaded && userName && userInterest) {
            setTimeout(() => {
                sendMessage('Get_UserName', 'RecieveUnity', JSON.stringify(userName));
                sendMessage('Get_UserInterest', 'RecieveUnityByInterest', JSON.stringify(userInterest));
            }, 300);
        }
    }, [isLoaded, userName, userInterest]);






    return (
        <FullScreenContainer>
            <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
        </FullScreenContainer>
    );
};
