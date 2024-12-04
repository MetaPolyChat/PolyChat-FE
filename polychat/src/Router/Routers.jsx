import { Navigate, useRoutes } from 'react-router-dom';
import FriendBoard from '../component/FriendBoard/FriendBoard.jsx';
import { PrivateLayout } from '../component/privateLayout/PrivateLayout.jsx';
import { PublicLayout } from '../component/publicLayout/PublicLayout.jsx';
import { CreateAccount } from '../component/createAccount/CreateAccount.jsx';
import InterestUp from '../component/interrestUp/InterestUp.jsx';
import { Login } from '../component/Login/Login.jsx';
import { UnityComponent } from '../component/unity/UnityComponent.jsx';
import MakeCharacter from '../component/makeCharacter/MakeCharacter.jsx';
import { SocialLayout } from '../component/social/SocialLayout.jsx';
import { ItemShop } from '../component/itemshop/ItemShop.jsx';
import { Introduction } from '../component/introduction/Introduction.jsx';
import MemberIntroduction from '../component/memberIntroduction/MemberIntroduction.jsx';


const RequireUserId = ({ children }) => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');

    if (!userId) {
        // userId가 없으면 로그인 페이지로 리다이렉트
        return <Navigate to="/" replace />;
    }

    return children;
};

export const Routers = () => {
    return useRoutes(
        [
            { path: "/", element: <Login /> },
            {
                path: "/unity-build",
                element: (
                    <RequireUserId>
                        <UnityComponent />
                    </RequireUserId>
                ),
            },
            {
                element: <PublicLayout />,
                children: [
                    { path: "/create-account", element: <CreateAccount /> },
                    { path: "/make-character", element: <MakeCharacter /> },
                    { path: "/interest-up", element: <InterestUp /> },
                ],
            },
            {
                element: (
                    <RequireUserId>
                        <PrivateLayout />
                    </RequireUserId>
                ),
                children: [
                    { path: "/introduction", element: <Introduction/>},
                    {path: "/memberIntroduction", element: <MemberIntroduction/>},
                    { path: "/friend-board", element: <FriendBoard /> },
                    { path: "/social-main", element: <SocialLayout /> },
                    { path: "/item-shop", element: <ItemShop /> },
                ],
            },
        ]
    );
};
