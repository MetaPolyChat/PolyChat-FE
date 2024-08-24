import { useRef, useState } from 'react';
import Phaser from 'phaser';
import {PhaserGame} from "../../game/PhaserGame.jsx";
import '/src/component/GameMain/GameMainStyle.css'
import {WebUI} from "../WEBUI/WebUI.jsx";

function GameMain ()
{
    // The sprite can only be moved in the MainMenu Scene
    const [canMoveSprite, setCanMoveSprite] = useState(true);

    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef();

    

    // Event emitted from the PhaserGame component
    const currentScene = (scene) => {
        setCanMoveSprite(scene.scene.key !== 'MainMenu');
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ flex: 1 }}>
                <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
            </div>
                <WebUI/>
        </div>
    )


}

export default GameMain