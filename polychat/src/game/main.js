import Phaser from 'phaser';
import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth * 0.5,  // 화면의 50%
    height: window.innerHeight,  // 전체 높이
    backgroundColor: '#028af8',
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver
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



