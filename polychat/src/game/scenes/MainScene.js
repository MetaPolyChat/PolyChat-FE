import { Scene } from 'phaser';
import bodyImg from '../../ImgDocument/body.png';

export class MainScene extends Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        // body.png 이미지 로드
        this.load.image('body', bodyImg);
    }

    create() {
        // 이미지 초기 위치 설정
        this.bodyImage = this.add.image(200, 200, 'body');
        this.bodyImage.setOrigin(0.5, 0.5);  // 중심점 설정

        // 이동량 설정
        this.moveDistance = 16;

        // 방향 버튼 생성
        this.createDirectionButtons();
    }

    createDirectionButtons() {
        const buttonSize = 50;
        const padding = 10;
        const centerX = 100;
        const centerY = 400;

        // Up 버튼
        this.add.rectangle(centerX, centerY - buttonSize - padding, buttonSize, buttonSize, 0x0000ff)
            .setInteractive()
            .on('pointerdown', () => this.moveUp());

        // Down 버튼
        this.add.rectangle(centerX, centerY + buttonSize + padding, buttonSize, buttonSize, 0x0000ff)
            .setInteractive()
            .on('pointerdown', () => this.moveDown());

        // Left 버튼
        this.add.rectangle(centerX - buttonSize - padding, centerY, buttonSize, buttonSize, 0x0000ff)
            .setInteractive()
            .on('pointerdown', () => this.moveLeft());

        // Right 버튼
        this.add.rectangle(centerX + buttonSize + padding, centerY, buttonSize, buttonSize, 0x0000ff)
            .setInteractive()
            .on('pointerdown', () => this.moveRight());
    }

    moveUp() {
        // 위로 이동
        this.bodyImage.y -= this.moveDistance;
    }

    moveDown() {
        // 아래로 이동
        this.bodyImage.y += this.moveDistance;
    }

    moveLeft() {
        // 왼쪽으로 이동
        this.bodyImage.x -= this.moveDistance;
    }

    moveRight() {
        // 오른쪽으로 이동
        this.bodyImage.x += this.moveDistance;
    }
}
