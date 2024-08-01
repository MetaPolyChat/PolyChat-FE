import { Node } from "@babylonjs/core/node";
/**
 * 이 스크립트는 에디터의 노드에 연결됩니다.
 * 사용할 수 있는 노드는 다음과 같습니다:
 *      - 메쉬 (Meshes)
 *      - 라이트 (Lights)
 *      - 카메라 (Cameras)
 *      - 변환 노드 (Transform nodes)
 *
 * 노드 타입에 따라 원하는 클래스를 확장할 수 있습니다.
 * 예제:
 *      export default class MyMesh extends Mesh {
 *          public onUpdate(): void {
 *              this.rotation.y += 0.04;
 *          }
 *      }
 * "onInitialize" 함수는 생성자가 호출된 직후에 호출됩니다.
 * "onStart"와 "onUpdate" 함수는 자동으로 호출됩니다.
 */
export default class MyScript extends Node {
    /**
     * 생성자를 재정의합니다.
     * @경고 채우지 마세요.
     */
    protected constructor();
    /**
     * 노드가 초기화될 때 호출됩니다.
     * 이 함수는 생성자가 호출된 직후에 호출됩니다.
     */
    onInitialize(): void;
    /**
     * 노드가 완전히 초기화되고 준비가 되었을 때 호출됩니다.
     */
    onInitialized(): void;
    /**
     * 씬이 시작될 때 호출됩니다.
     */
    onStart(): void;
    /**
     * 매 프레임마다 호출됩니다.
     */
    onUpdate(): void;
    /**
     * 객체가 제거될 때 호출됩니다.
     * 객체는 수동으로 제거되거나 에디터가 씬 실행을 중지할 때 제거될 수 있습니다.
     */
    onStop(): void;
    /**
     * 그래프에서 메시지를 수신했을 때 호출됩니다.
     * @param name 그래프에서 보낸 메시지의 이름을 정의합니다.
     * @param data 메시지에 포함된 데이터를 정의합니다.
     * @param sender 메시지를 보낸 그래프 클래스의 참조를 정의합니다.
     */
    onMessage(name: string, data: any, sender: any): void;
}
