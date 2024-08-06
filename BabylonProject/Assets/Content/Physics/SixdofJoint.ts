module PROJECT {
    /**
    * Babylon Script Component
    * @class SixdofJoint
    */
    export class SixdofJoint extends BABYLON.Toolkit.ScriptComponent {
        public bodyA: BABYLON.TransformNode = null;
        public bodyB: BABYLON.TransformNode = null;
        public pivotA: BABYLON.Vector3 = new BABYLON.Vector3(0, -0.5, 0);
        public pivotB: BABYLON.Vector3 = new BABYLON.Vector3(0, 0.5, 0);
        public perpAxisA: BABYLON.Vector3 = new BABYLON.Vector3(1, 0, 0);
        public perpAxisB: BABYLON.Vector3 = new BABYLON.Vector3(1, 0, 0);
        public axisLimits: BABYLON.Physics6DoFLimit[] = null;
        public constraint: BABYLON.Physics6DoFConstraint = null;
        public collisionsEnabled: boolean = false;

        protected awake(): void {
            const bodyAInfo: BABYLON.Toolkit.IUnityTransform = this.getProperty("bodyA");
            const bodyBInfo: BABYLON.Toolkit.IUnityTransform = this.getProperty("bodyB");
            if (bodyAInfo != null && bodyBInfo != null) {
                this.bodyA = (this.transform.name === bodyAInfo.name) ? this.transform : this.getChildNode(bodyAInfo.name);
                this.bodyB = this.getChildNode(bodyBInfo.name);
                if (this.bodyA != null && this.bodyB != null) {
                    if (this.bodyA.physicsBody != null && this.bodyB.physicsBody != null) {
                        this.constraint = new BABYLON.Physics6DoFConstraint(
                            {
                                pivotA: this.pivotA,
                                pivotB: this.pivotB,
                                perpAxisA: this.perpAxisA,
                                perpAxisB: this.perpAxisB
                            },
                            this.axisLimits,
                            this.scene
                        );
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