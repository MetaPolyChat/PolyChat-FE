import React from 'react';
import './LoginStyle.css';
import background from '../../ImgDocument/BackGround.jpg';
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <div
            className="LoginBackground"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div className="LoginContainer">
                <h1 className="TitleStyle">PolyChat</h1>
                <div>
                    <h5 className={"LoginText"}>Account</h5>
                    <input className="LoginInput" type="text" placeholder="Username" />
                    <h5 className={"LoginText"}>PassWord</h5>
                    <input className="LoginInput" type="password" placeholder="Password" />
                    <div className={"ButtonContainer"}>
                            <Link to={"/gamemain"}>
                                <button className={"ButtonStyle"}>
                                <h5 className={"LoginText"}>Login</h5>
                                </button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};



