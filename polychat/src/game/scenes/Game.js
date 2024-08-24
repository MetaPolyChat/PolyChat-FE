import { Scene } from 'phaser';

export class Game extends Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        // 자산 로드 없음
    }

    create() {
        // 배경을 기본 색으로 설정
        this.cameras.main.setBackgroundColor('#87CEEB');

        // 플랫폼 도형 생성
        const graphics = this.add.graphics();
        graphics.fillStyle(0x654321); // 갈색 색상
        graphics.fillRect(200, 568, 800, 50); // 플랫폼

        // 플레이어 도형 생성
        graphics.fillStyle(0x0000FF); // 파란색
        graphics.fillRect(100, 450, 32, 48); // 플레이어

        // 플랫폼과 플레이어에 물리 속성 추가
        const platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setDisplaySize(800, 50).setOrigin(0.5, 1);
        this.physics.add.collider(platforms, this.physics.add.staticGroup().create(400, 568, 'ground'));

        const player = this.physics.add.sprite(100, 450, 'dude');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, platforms);

        // 입력 처리
        const cursors = this.input.keyboard.createCursorKeys();
        this.input.keyboard.on('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                player.setVelocityX(-160);
            } else if (event.key === 'ArrowRight') {
                player.setVelocityX(160);
            } else if (event.key === 'ArrowUp' && player.body.touching.down) {
                player.setVelocityY(-330);
            }
        });

        this.input.keyboard.on('keyup', (event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                player.setVelocityX(0);
            }
        });
    }

    update() {
        // 플레이어의 상태 업데이트가 필요한 경우 여기에 추가
    }
}

