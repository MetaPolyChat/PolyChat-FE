import FriendBoard from '../component/FriendBoard/FriendBoard.jsx';
import { PrivateLayout } from '../component/privateLayout/PrivateLayout.jsx';
import { PublicLayout } from '../component/publicLayout/PublicLayout.jsx';
import { useRoutes } from 'react-router-dom';
import { CreateAccount } from '../component/createAccount/CreateAccount.jsx';
import InterestUp from '../component/interrestUp/InterestUp.jsx';
import { Login } from '../component/Login/Login.jsx';
import { UnityComponent } from '../component/unity/UnityComponent.jsx';
import MakeCharacter from '../component/makeCharacter/MakeCharacter.jsx';
import { SocialLayout } from '../component/social/SocialLayout.jsx';

export const Routers = () => {
    return useRoutes(
        [
            { path: "/", element: <Login /> },

            // PublicLayout for sign-up-related routes
            {
                element: <PublicLayout />,
                children: [
                    { path: "/create-account", element: <CreateAccount /> },
                    {path: "/make-character", element: <MakeCharacter/>},
                    { path: "/interest-up", element: <InterestUp /> }
                ]
            },
            
            {
                element: <PrivateLayout />,
                children: [
                    { path: "/friend-board", element: <FriendBoard /> }, 
                    { path: "/unity-build", element: <UnityComponent/>}
                ]
            },
            {
                element: <SocialLayout/>,
                children: []
            }
        ]
    );
};
