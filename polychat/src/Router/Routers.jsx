import FriendBoard from '../component/FriendBoard/FriendBoard.jsx';
import { PrivateLayout } from '../component/privateLayout/PrivateLayout.jsx';
import { PublicLayout } from '../component/publicLayout/PublicLayout.jsx';
import { useRoutes } from 'react-router-dom';
import { CreateAccount } from '../component/createAccount/CreateAccount.jsx';
import InterestUp from '../component/interrestUp/InterestUp.jsx';
import { Login } from '../component/Login/Login.jsx';
import { UnityComponent } from '../component/unity/UnityComponent.jsx';

export const Routers = () => {
    return useRoutes(
        [
            { path: "/", element: <Login /> },

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
                    { path: "/friendBoard", element: <FriendBoard /> },  // /friendBoard route
                    { path: "/unityBuild", element: <UnityComponent/>}
                ]
            }
        ]
    );
};
