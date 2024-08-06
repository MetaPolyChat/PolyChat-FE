module PROJECT {
    /**
    * Babylon Script Component
    * @class MyRotator
    */
    export class MyRotator extends BABYLON.Toolkit.ScriptComponent {
        public rotateSpeed : number = 0.25;
        protected update(): void {
            /* Update render loop function */
            const delta:number = this.getDeltaSeconds();
            const roate:number = this.rotateSpeed * delta;
            this.transform.addRotation(0,roate,0);
        }

    }
}