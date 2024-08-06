module PROJECT {
    /**
    * Babylon Script Component
    * @class DistanceJoint
    */
    export class DistanceJoint extends BABYLON.Toolkit.ScriptComponent {
        public bodyA: BABYLON.TransformNode = null;
        public bodyB: BABYLON.TransformNode = null;
        public maxDistance: number = 0;
        public constraint: BABYLON.DistanceConstraint = null;
        public collisionsEnabled: boolean = false;

        protected awake(): void {
            const bodyAInfo: BABYLON.Toolkit.IUnityTransform = this.getProperty("bodyA");
            const bodyBInfo: BABYLON.Toolkit.IUnityTransform = this.getProperty("bodyB");
            if (bodyAInfo != null && bodyBInfo != null) {
                this.bodyA = (this.transform.name === bodyAInfo.name) ? this.transform : this.getChildNode(bodyAInfo.name);
                this.bodyB = this.getChildNode(bodyBInfo.name);
                if (this.bodyA != null && this.bodyB != null) {
                    if (this.bodyA.physicsBody != null && this.bodyB.physicsBody != null) {
                        this.constraint = new BABYLON.DistanceConstraint(this.maxDistance, this.scene);
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