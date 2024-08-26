import Phaser from 'phaser';
import {MainScene} from './scenes/MainScene.js';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth * 0.5,
    height: window.innerHeight,
    backgroundColor: '#028af8',
    scene: [
        MainScene,
    ],
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const StartGame = (parent) => {
    const game = new Phaser.Game({ ...config, parent });

    window.addEventListener('resize', () => {
        game.scale.resize(window.innerWidth * 0.5, window.innerHeight);
    });

    return game;
}

export default StartGame;



