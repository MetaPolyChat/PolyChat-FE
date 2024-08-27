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

        // 방향 버튼 생성 및 위치 설정
        this.createDirectionButtons();
    }

    createDirectionButtons() {
        const buttonSize = 50;
        const padding = 10;
        const baseX = buttonSize + padding;  // 버튼들이 위치할 x축 기준점
        const baseY = this.scale.height - buttonSize - padding;  // 버튼들이 위치할 y축 기준점 (화면 하단)

        // Up 버튼
        this.add.rectangle(baseX, baseY - (buttonSize + padding), buttonSize, buttonSize, 0x0000ff)
            .setInteractive()
            .on('pointerdown', () => this.moveUp());

        // Down 버튼
        this.add.rectangle(baseX, baseY, buttonSize, buttonSize, 0x0000ff)
            .setInteractive()
            .on('pointerdown', () => this.moveDown());

        // Left 버튼
        this.add.rectangle(baseX - (buttonSize + padding), baseY, buttonSize, buttonSize, 0x0000ff)
            .setInteractive()
            .on('pointerdown', () => this.moveLeft());

        // Right 버튼
        this.add.rectangle(baseX + (buttonSize + padding), baseY, buttonSize, buttonSize, 0x0000ff)
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
