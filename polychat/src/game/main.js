import Phaser from 'phaser';
import {MainScene} from './scenes/MainScene.js';
import {PhaserMatterCollisionPlugin} from "phaser-matter-collision-plugin";

const config = {
    type: Phaser.WEBGL,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#bfcc00',
    scene: [
        MainScene,
    ],
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: { y: 0 },
        }
    },
    plugins: {
        scene: [
            {
                plugin: PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision'
            }
        ]
    }

};

const StartGame = (parent) => {
    const game = new Phaser.Game({ ...config, parent });

    window.addEventListener('resize', () => {
        game.scale.resize(window.innerWidth, window.innerHeight);
    });

    return game;
}

export default StartGame;



