import {useRoutes} from "react-router-dom";
import {Login} from "../component/Login/Login.jsx";
import { LoginButton } from '../component/test/LoginButton.jsx';
import FriendBoard from '../component/FriendBoard/FriendBoard.jsx';

export const Routers = () => {
    return useRoutes(
        [
            {path:"/",element:<Login/>},
            {path:"/testGoogle",element:<LoginButton/>},
            {path:"/friendboard",element:<FriendBoard/>},
        ]
    )
}