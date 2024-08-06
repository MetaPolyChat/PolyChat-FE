module PROJECT {
    /**
    * Babylon Script Component
    * @class SliderJoint
    */
    export class SliderJoint extends BABYLON.Toolkit.ScriptComponent {
        public bodyA: BABYLON.TransformNode = null;
        public bodyB: BABYLON.TransformNode = null;
        public pivotA: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, -0.2);
        public pivotB: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0.25);
        public axisA: BABYLON.Vector3 = new BABYLON.Vector3(0, 1, 0);
        public axisB: BABYLON.Vector3 = new BABYLON.Vector3(0, 1, 0);
        public constraint: BABYLON.SliderConstraint = null;
        public collisionsEnabled: boolean = false;

        protected awake(): void {
            const bodyAInfo: BABYLON.Toolkit.IUnityTransform = this.getProperty("bodyA");
            const bodyBInfo: BABYLON.Toolkit.IUnityTransform = this.getProperty("bodyB");
            if (bodyAInfo != null && bodyBInfo != null) {
                this.bodyA = (this.transform.name === bodyAInfo.name) ? this.transform : this.getChildNode(bodyAInfo.name);
                this.bodyB = this.getChildNode(bodyBInfo.name);
                if (this.bodyA != null && this.bodyB != null) {
                    if (this.bodyA.physicsBody != null && this.bodyB.physicsBody != null) {
                        this.constraint = new BABYLON.SliderConstraint(this.pivotA, this.pivotB, this.axisA, this.axisB, this.scene);
                        this.bodyA.physicsBody.addConstraint(this.bodyB.physicsBody, this.constraint);
                        this.constraint.isCollisionsEnabled = this.collisionsEnabled;
                    }
                }
            }
        }

        protected destroy(): void {
            this.bodyA = null;
            this.bodyB = null;
            if (this.constraint != null) {
                this.constraint.dispose();
                this.constraint = null;
            }
        }
    }
}