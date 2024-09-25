import {useRoutes} from "react-router-dom";
import {Login} from "../component/Login/Login.jsx";
import { LoginButton } from '../component/test/LoginButton.jsx';

export const Routers = () => {
    return useRoutes(
        [
            {path:"/",element:<Login/>},
            {path:"/testGoogle",element:<LoginButton/>}
        ]
    )
}