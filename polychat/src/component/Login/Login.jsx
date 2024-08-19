import React from 'react';
import './LoginStyle.css';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className="LoginBackground">
            <div className="Earth"></div>
            <div className="LoginContainer">
                <div className="TitleStyle"></div>
                <div>
                    <h5 className="LoginText">Account</h5>
                    <input className="LoginInput" type="text" placeholder="Username" />
                    <h5 className="LoginText">PassWord</h5>
                    <input className="LoginInput" type="password" placeholder="Password" />
                    <div className="ButtonContainer">
                        <Link to={"/gamemain"}>
                            <button className="ButtonStyle">
                                <h5 className="LoginText">Login</h5>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
