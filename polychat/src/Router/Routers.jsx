import { useRoutes } from "react-router-dom";
import { Login } from "../component/Login/Login.jsx";
import { LoginButton } from '../component/test/LoginButton.jsx';
import FriendBoard from '../component/FriendBoard/FriendBoard.jsx';
import { InterestUp } from '../component/interrestUp/InterestUp.jsx';
import { CreateAccount } from '../component/createAccount/CreateAccount.jsx';
import { PublicLayout } from '../component/publicLayout/PublicLayout.jsx';
import { PrivateLayout } from '../component/privateLayout/PrivateLayout.jsx';


export const Routers = () => {
    return useRoutes(
        [
            { path: "/", element: <Login /> },
            { path: "/testGoogle", element: <LoginButton /> },

            // PublicLayout for sign-up-related routes
            {
                element: <PublicLayout />,
                children: [
                    { path: "/createAccount", element: <CreateAccount /> },
                    { path: "/interestUp", element: <InterestUp /> }
                ]
            },

            // PrivateLayout for post-sign-up-related routes
            {
                element: <PrivateLayout />,
                children: [
                    { path: "/friendBoard", element: <FriendBoard /> }
                ]
            }
        ]
    );
};
