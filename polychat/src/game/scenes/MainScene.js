import { Scene } from 'phaser';
import bodyImg from '../../ImgDocument/kakafrends.png';

// MainMapScene 클래스가 이미 정의되어 있어야 합니다.
import { MainMapScene } from './MainMapScene';  // MainMapScene이 정의된 파일의 경로에 맞게 수정하세요.

export class MainScene extends Scene {
    constructor() {
        super('MainScene');
        this.inputField = null;
        this.textTimeout = null;
    }

    preload() {
        // body.png 이미지 로드
        this.load.image('body', bodyImg);
    }

    create() {
        // 이미지 초기 위치 설정
        this.bodyImage = this.add.image(200, 200, 'body');
        this.bodyImage.setOrigin(0.5, 0.5);
        this.bodyImage.setDisplaySize(50, 50);

        // 캐릭터 위에 표시할 텍스트 초기화
        this.characterText = this.add.text(this.bodyImage.x, this.bodyImage.y - 40, '', {
            font: '16px Arial',
            fill: '#ffffff',
            align: 'center'
        });
        this.characterText.setOrigin(0.5, 0.5);

        // 이동량 설정
        this.moveDistance = 16;

        // 방향 버튼 생성 및 위치 설정
        this.createDirectionButtons();

        // HTML 입력 필드 생성
        this.createInputField();
    }

    createDirectionButtons() {
        const buttonSize = 50;
        const padding = 10;

        const width = this.scale.width;
        const height = this.scale.height;

        const baseX = width / 2;
        const baseY = height - (buttonSize / 2) - padding - 100; // 화면 맨 아래에서 약간 위로

        // 9개의 버튼 위치 정의
        const positions = [
            { x: baseX - (buttonSize + padding), y: baseY - (buttonSize + padding), direction: 'upLeft' },
            { x: baseX, y: baseY - (buttonSize + padding), direction: 'up' },
            { x: baseX + (buttonSize + padding), y: baseY - (buttonSize + padding), direction: 'upRight' },
            { x: baseX - (buttonSize + padding), y: baseY, direction: 'left' },
            { x: baseX, y: baseY, direction: 'center' },
            { x: baseX + (buttonSize + padding), y: baseY, direction: 'right' },
            { x: baseX - (buttonSize + padding), y: baseY + (buttonSize + padding), direction: 'downLeft' },
            { x: baseX, y: baseY + (buttonSize + padding), direction: 'down' },
            { x: baseX + (buttonSize + padding), y: baseY + (buttonSize + padding), direction: 'downRight' }
        ];

        // 버튼 생성 및 이벤트 설정
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

        // HTML 버튼 생성 및 위치 설정
        this.createTextDisplayButton();
    }

    createTextDisplayButton() {
        setTimeout(() => {
            if (this.inputField) {
                const inputFieldBounds = this.inputField.getBoundingClientRect();
                const inputFieldX = inputFieldBounds.left + window.scrollX;
                const inputFieldY = inputFieldBounds.top + window.scrollY;

                this.displayTextButton = this.add.rectangle(inputFieldX + this.inputField.offsetWidth + 10 + 25, inputFieldY + 15, 50, 30, 0x00ff00)
                    .setInteractive()
                    .on('pointerdown', () => this.displayText());

                this.add.text(inputFieldX + this.inputField.offsetWidth + 10 + 25, inputFieldY + 15, 'Show', {
                    font: '16px Arial',
                    fill: '#ffffff',
                    align: 'center'
                }).setOrigin(0.5, 0.5);

                // 씬 이동 버튼 추가
                this.createSceneSwitchButton(inputFieldX, inputFieldY);
            }
        }, 100); // 100ms 후에 버튼 생성
    }

    createSceneSwitchButton(inputFieldX, inputFieldY) {
        // 씬 이동 버튼 위치
        const buttonX = inputFieldX + this.inputField.offsetWidth + 10 + 25 + 60; // 기존 버튼 오른쪽에 배치
        const buttonY = inputFieldY + 15;

        // 씬 이동 버튼 생성
        this.sceneSwitchButton = this.add.rectangle(buttonX, buttonY, 80, 30, 0xff0000)
            .setInteractive()
            .on('pointerdown', () => this.switchScene());

        this.add.text(buttonX, buttonY, 'Go Map', {
            font: '16px Arial',
            fill: '#ffffff',
            align: 'center'
        }).setOrigin(0.5, 0.5);
    }

    switchScene() {
        this.scene.start('MainMapScene'); // MainMapScene으로 씬 이동
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

    // 화살표 방향 기호 추가
    getArrowSymbol(direction) {
        switch (direction) {
            case 'up': return '↑';
            case 'down': return '↓';
            case 'left': return '←';
            case 'right': return '→';
            case 'upLeft': return '↖';
            case 'upRight': return '↗';
            case 'downLeft': return '↙';
            case 'downRight': return '↘';
            default: return '';
        }
    }

    startMove(direction) {
        this.movingDirection = direction;
        this.isMoving = true;
    }

    // 버튼을 놓으면 움직임을 멈춤
    stopMove() {
        this.isMoving = false;
    }

    update() {
        if (this.isMoving) {
            switch (this.movingDirection) {
                case 'up':
                    this.bodyImage.y -= this.moveDistance / 4;
                    break;
                case 'down':
                    this.bodyImage.y += this.moveDistance / 4;
                    break;
                case 'left':
                    this.bodyImage.x -= this.moveDistance / 4;
                    break;
                case 'right':
                    this.bodyImage.x += this.moveDistance / 4;
                    break;
                case 'upLeft':
                    this.bodyImage.x -= this.moveDistance / 4;
                    this.bodyImage.y -= this.moveDistance / 4;
                    break;
                case 'upRight':
                    this.bodyImage.x += this.moveDistance / 4;
                    this.bodyImage.y -= this.moveDistance / 4;
                    break;
                case 'downLeft':
                    this.bodyImage.x -= this.moveDistance / 4;
                    this.bodyImage.y += this.moveDistance / 4;
                    break;
                case 'downRight':
                    this.bodyImage.x += this.moveDistance / 4;
                    this.bodyImage.y += this.moveDistance / 4;
                    break;
            }
            this.updateTextPosition();
        }
    }

    updateTextPosition() {
        this.characterText.setPosition(this.bodyImage.x, this.bodyImage.y - 40);
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
    }
}

