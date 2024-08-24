import React, { useRef, useState } from 'react';
import { PhaserGame } from '../../game/PhaserGame.jsx';
import '/src/component/GameMain/GameMainStyle.css';
import { WebUI } from '../WEBUI/WebUI.jsx';

function GameMain() {
    const [canMoveSprite, setCanMoveSprite] = useState(true);
    const phaserRef = useRef();

    const currentScene = (scene) => {
        setCanMoveSprite(scene.scene.key !== 'MainMenu');
    };

    return (
        <div className="container">
            <div className="game-container">
                <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
            </div>
            <div className="web-ui-container">
                <WebUI />
            </div>
        </div>
    );
}

export default GameMain;



