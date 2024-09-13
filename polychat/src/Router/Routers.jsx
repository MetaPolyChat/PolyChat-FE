import {useRoutes} from "react-router-dom";
import {Login} from "../component/Login/Login.jsx";

export const Routers = () => {
    return useRoutes(
        [
            {path:"/",element:<Login/>},
        ]
    )
}