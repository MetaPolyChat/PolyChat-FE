import {useRoutes} from "react-router-dom";
import {Login} from "../component/Login/Login.jsx";
import { LoginButton } from '../component/test/LoginButton.jsx';

import PostDetails from '../component/FriendBoard/PostDetails.jsx';
import PostForm from '../component/FriendBoard/PostForm.jsx';
import PostEditForm from '../component/FriendBoard/PostEditForm.jsx';
import PostView from '../component/FriendBoard/PostView.jsx';
import FriendBoard from '../component/FriendBoard/FriendBoard.jsx';

export const Routers = () => {
    return useRoutes(
        [
            {path:"/",element:<Login/>},
            {path:"/testGoogle",element:<LoginButton/>},
            {path:"/friendboard",element:<FriendBoard/>},
            // {path:"/post/:id", element:<PostDetails/>},
            // {path:"/edit/:id",element:<PostEditForm/>},
            // {path:"/post", element:<PostDetails/>},
            // {path:"/edit",element:<PostEditForm/>},
            // // {path:"/view/:id",element:<PostView/>},
            // {path:"/view",element:<PostView/>},
            // {path:"/new",element:<PostForm/>},
        ]
    )
}