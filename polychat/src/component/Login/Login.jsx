import React, { useState } from 'react';
import './LoginStyle.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/gamemain');
        }, 1500);
    };

    return (
        <div className={`LoginBackground ${isAnimating ? 'fade-out' : ''}`}>
            <div className={`Earth ${isAnimating ? 'grow' : ''}`}></div>
            <div className={`LoginContainer ${isAnimating ? 'fade-out' : ''}`}>
                <div className="TitleStyle"></div>
                <div className="FormContainer">
                    <div className="FormField">
                        <label className="LoginText">ID</label>
                        <input className="LoginInput" type="text" placeholder="Your Account" />
                    </div>
                    <div className="FormField">
                        <label className="LoginText">Password</label>
                        <input className="LoginInput" type="password" placeholder="Password" />
                    </div>
                    <div className="ButtonContainer">
                        <button className="ButtonStyle" onClick={handleLoginClick}>
                            <h5 className="ButtonText">Login</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

