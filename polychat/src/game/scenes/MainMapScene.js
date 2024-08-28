import { Scene } from 'phaser';
import mapImg from '../../ImgDocument/pMap.png';
import bodyImg from '../../ImgDocument/kakafrends.png';

export class MainMapScene extends Scene {
    constructor() {
        super({
            key: 'MainMapScene',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },  // 중력을 0으로 설정하여 캐릭터가 떨어지지 않도록 함
                    debug: false  // 물리 엔진 디버그 모드 비활성화
                }
            }
        });

        this.player = null;
        this.moveSpeed = 200;
        this.isMoving = false;
        this.movingDirection = '';
    }

    preload() {
        // 리소스를 로드
        this.load.image('map', mapImg);
        this.load.image('body', bodyImg);
    }

    create() {
        // 맵 이미지 설정
        this.add.image(0, 0, 'map').setOrigin(0).setDisplaySize(this.scale.width, this.scale.height);

        // 플레이어 캐릭터 설정
        this.player = this.physics.add.image(this.scale.width / 2, this.scale.height / 2, 'body');
        this.player.setOrigin(0.5, 0.5);
        this.player.setDisplaySize(50, 50);
        this.player.setCollideWorldBounds(true);

        // 캐릭터 위에 표시할 텍스트 초기화
        this.characterText = this.add.text(this.player.x, this.player.y - 40, '', {
            font: '16px Arial',
            fill: '#ffffff',
            align: 'center'
        });
        this.characterText.setOrigin(0.5, 0.5);

        // 방향 버튼 생성
        this.createDirectionButtons();

        // HTML 입력 필드 생성
        this.createInputField();

        // 카메라가 플레이어를 따라다니도록 설정
        this.cameras.main.startFollow(this.player);
    }

    createDirectionButtons() {
        const buttonSize = 50;
        const padding = 10;
        const baseX = this.scale.width - (buttonSize * 2 + padding * 2);
        const baseY = this.scale.height - (buttonSize * 2 + padding * 2);

        // 버튼 생성 및 위치 설정
        const positions = [
            { x: baseX, y: baseY, direction: 'up' },
            { x: baseX - buttonSize - padding, y: baseY + buttonSize + padding, direction: 'left' },
            { x: baseX + buttonSize + padding, y: baseY + buttonSize + padding, direction: 'right' },
            { x: baseX, y: baseY + (buttonSize + padding) * 2, direction: 'down' },
        ];

        positions.forEach(pos => {
            const button = this.add.rectangle(pos.x, pos.y, buttonSize, buttonSize, 0x0000ff)
                .setInteractive()
                .on('pointerdown', () => this.startMove(pos.direction))
                .on('pointerup', () => this.stopMove());

            this.add.text(pos.x, pos.y, this.getArrowSymbol(pos.direction), {
                font: '24px Arial',
                fill: '#ffffff',
                align: 'center'
            }).setOrigin(0.5, 0.5);
        });
    }

    getArrowSymbol(direction) {
        switch (direction) {
            case 'up': return '↑';
            case 'down': return '↓';
            case 'left': return '←';
            case 'right': return '→';
            default: return '';
        }
    }

    startMove(direction) {
        this.movingDirection = direction;
        this.isMoving = true;
    }

    stopMove() {
        this.isMoving = false;
    }

    update() {
        if (this.isMoving) {
            switch (this.movingDirection) {
                case 'up':
                    this.player.y -= this.moveSpeed / 60;
                    break;
                case 'down':
                    this.player.y += this.moveSpeed / 60;
                    break;
                case 'left':
                    this.player.x -= this.moveSpeed / 60;
                    break;
                case 'right':
                    this.player.x += this.moveSpeed / 60;
                    break;
            }
            this.updateTextPosition();
        }
    }

    updateTextPosition() {
        this.characterText.setPosition(this.player.x, this.player.y - 40);
    }

    createInputField() {
        if (this.inputField) {
            return;
        }
        this.inputField = document.createElement('input');
        this.inputField.type = 'text';
        this.inputField.style.position = 'absolute';
        this.inputField.style.zIndex = '1';
        this.inputField.style.width = '200px';
        this.inputField.style.height = '30px';
        this.inputField.style.borderRadius = '5px';
        this.inputField.style.border = '2px solid #007bff';
        this.inputField.style.padding = '5px';
        this.inputField.style.fontSize = '16px';
        this.inputField.style.color = '#333';
        this.inputField.style.backgroundColor = '#f8f9fa';
        this.inputField.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        this.inputField.style.textAlign = 'center';
        this.inputField.style.left = `${this.scale.width / 2 - 100}px`;
        this.inputField.style.top = `${this.scale.height - 40}px`;

        document.body.appendChild(this.inputField);

        // Show 버튼 생성 및 이벤트 등록
        this.displayTextButton = this.add.rectangle(this.scale.width / 2 + 120, this.scale.height - 25, 50, 30, 0x00ff00)
            .setInteractive()
            .on('pointerdown', () => this.displayText());

        this.add.text(this.scale.width / 2 + 120, this.scale.height - 25, 'Show', {
            font: '16px Arial',
            fill: '#ffffff',
            align: 'center'
        }).setOrigin(0.5, 0.5);
    }

    displayText() {
        if (this.inputField && this.inputField.value) {
            this.characterText.setText(this.inputField.value);
            this.inputField.value = ''; // 입력 필드 값 비우기

            if (this.textTimeout) {
                clearTimeout(this.textTimeout);
            }
            this.textTimeout = setTimeout(() => {
                this.characterText.setText('');
            }, 5000);
        }
    }
}

