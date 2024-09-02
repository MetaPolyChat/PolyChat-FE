import {useRoutes} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout.jsx";
import {Login} from "../component/Login/Login.jsx";
import GameMain from "../component/GameMain/GameMain.jsx";
import Kalidoface from "../Kalidoface.jsx";

export const Routers = () => {
    return useRoutes(
        [
            {path:"/",element:<Login/>},
            {path:"/gameMain",element:<GameMain/>},
            {path:"/kalidoface",element:<Kalidoface/>}
        ]
    )
}