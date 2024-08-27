import { Scene } from 'phaser';
import bodyImg from '../../ImgDocument/kakafrends.png';

export class MainScene extends Scene {
    constructor() {
        super('MainScene');
        this.inputField = null; // 입력 필드를 관리하기 위한 변수
        this.textTimeout = null; // 텍스트 표시 시간 제어를 위한 변수
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

        // 화면의 너비와 높이
        const width = this.scale.width;
        const height = this.scale.height;

        // 버튼들을 화면 맨 아래에 배치 (좀 더 위쪽으로 조정)
        const baseX = width / 2; // 중앙 정렬
        const baseY = height - (buttonSize / 2) - padding - 100; // 화면 맨 아래에서 약간 위로

        // 9개의 버튼 위치 정의
        const positions = [
            { x: baseX - (buttonSize + padding), y: baseY - (buttonSize + padding), direction: 'upLeft' },   // 좌상단 대각선
            { x: baseX, y: baseY - (buttonSize + padding), direction: 'up' },                                 // 상
            { x: baseX + (buttonSize + padding), y: baseY - (buttonSize + padding), direction: 'upRight' },  // 우상단 대각선
            { x: baseX - (buttonSize + padding), y: baseY, direction: 'left' },                               // 좌
            { x: baseX, y: baseY, direction: 'center' },                                                      // 가운데 (중앙 버튼, 기능 없음)
            { x: baseX + (buttonSize + padding), y: baseY, direction: 'right' },                              // 우
            { x: baseX - (buttonSize + padding), y: baseY + (buttonSize + padding), direction: 'downLeft' },  // 좌하단 대각선
            { x: baseX, y: baseY + (buttonSize + padding), direction: 'down' },                               // 하
            { x: baseX + (buttonSize + padding), y: baseY + (buttonSize + padding), direction: 'downRight' }  // 우하단 대각선
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
        // 버튼이 DOM에 추가된 후 생성되도록 약간의 딜레이를 줍니다
        setTimeout(() => {
            if (this.inputField) {
                // 입력 필드의 위치를 기준으로 버튼을 배치
                const inputFieldBounds = this.inputField.getBoundingClientRect();
                const inputFieldX = inputFieldBounds.left + window.scrollX;
                const inputFieldY = inputFieldBounds.top + window.scrollY;

                // 버튼 생성
                this.displayTextButton = this.add.rectangle(inputFieldX + this.inputField.offsetWidth + 10 + 25, inputFieldY + 15, 50, 30, 0x00ff00)
                    .setInteractive()
                    .on('pointerdown', () => this.displayText());

                this.add.text(inputFieldX + this.inputField.offsetWidth + 10 + 25, inputFieldY + 15, 'Show', {
                    font: '16px Arial',
                    fill: '#ffffff',
                    align: 'center'
                }).setOrigin(0.5, 0.5);
            }
        }, 100); // 100ms 후에 버튼 생성
    }

    displayText() {
        if (this.inputField && this.inputField.value) {
            this.characterText.setText(this.inputField.value);
            this.inputField.value = ''; // 입력 필드 값 비우기

            // 5초 후 텍스트 제거
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

    // 버튼을 누르면 해당 방향으로 움직이기 시작
    startMove(direction) {
        this.movingDirection = direction;
        this.isMoving = true;
    }

    // 버튼을 놓으면 움직임을 멈춤
    stopMove() {
        this.isMoving = false;
    }

    // 매 프레임마다 호출되는 update 함수에서 이동 처리
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

        // HTML 입력 필드 생성
        this.inputField = document.createElement('input');
        this.inputField.type = 'text';
        this.inputField.style.position = 'absolute';
        this.inputField.style.zIndex = '1'; // Phaser canvas 위에 표시되도록 설정
        this.inputField.style.width = '200px'; // 넓이 설정
        this.inputField.style.height = '30px'; // 높이 설정
        this.inputField.style.borderRadius = '5px'; // 둥근 모서리
        this.inputField.style.border = '2px solid #007bff'; // 테두리 색상
        this.inputField.style.padding = '5px'; // 내부 여백
        this.inputField.style.fontSize = '16px'; // 폰트 크기
        this.inputField.style.color = '#333'; // 폰트 색상
        this.inputField.style.backgroundColor = '#f8f9fa'; // 배경 색상
        this.inputField.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // 그림자 효과
        this.inputField.style.textAlign = 'center'; // 텍스트 중앙 정렬

        // Phaser 게임 화면의 하단 중앙에 입력 필드를 배치
        this.inputField.style.left = `${this.scale.width / 2 - 100}px`;
        this.inputField.style.top = `${this.scale.height - 40}px`; // 화면 하단에서 80px 위

        document.body.appendChild(this.inputField);
    }
}
