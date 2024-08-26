import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class MainScene extends Scene {
    constructor() {
        super('MainScene');
    }
    
    preload() {
        // 모든 이미지를 로드함
        console.log("preload");
    }

    create() {
        this.player = new Phaser.Physics.Matter.Sprite(this.matter.world);

    }
}


