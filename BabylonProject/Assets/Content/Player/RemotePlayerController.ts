module PROJECT {
    /**
    * Babylon Script Component
    * @class RemotePlayerController
    */
    export class RemotePlayerController extends BABYLON.Toolkit.ScriptComponent {
        public updateStateParams: boolean = true;
        public smoothMotionTime: number = 0;
        public smoothInputVectors: boolean = false;
        private animationState: BABYLON.Toolkit.AnimationState = null;
        private animationStateParams: PROJECT.AnimationStateParams = null;

        protected awake(): void {
            this.updateStateParams = this.getProperty("updateStateParams", this.updateStateParams);
            this.smoothMotionTime = this.getProperty("smoothMotionTime", this.smoothMotionTime);
            this.smoothInputVectors = this.getProperty("smoothInputVectors", this.smoothInputVectors);
            this.animationStateParams = this.getProperty("animationStateParams", this.animationStateParams);
            //console.warn("Remote Player Controller: " + this.transform.name);
            //console.log(this);
        }

        protected update(): void {
            const deltaTime: number = this.getDeltaSeconds();
            // TODO - FIX THIS SHIT
            if (this.animationState == null) {
                this.attachAnimationController();
            }
            // ..
            // Query Network Attributes
            // ..
            if (BABYLON.Toolkit.EntityController.HasNetworkEntity(this.transform)) {
                const direction: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 0);        // Direction
                const magnitude: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 1);        // Magnitude
                const inputX: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 2);           // Horizonal
                const inputZ: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 3);           // Vertical
                const mouseX: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 4);           // MouseX
                const mouseY: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 5);           // Mousey
                const vvelocity: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 6);        // Vertical Velocity
                const movespeed: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 7);        // Movement Speed
                const actionstate: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 8);      // Action State
                const jumpframe: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 9);        // Jump Frame
                const isjumping: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 10);       // Is Jumping
                const isfalling: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 11);       // Is Falling
                const issliding: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 12);       // Is Sliding
                const isgrounded: number = BABYLON.Toolkit.EntityController.QueryBufferedAttribute(this.transform, 13);      // Is Grounded
                // ..
                // Update Animation State Params
                // ..
                if (this.animationState != null && this.updateStateParams === true) {
                    this.validateAnimationStateParams();
                    this.animationState.setInteger(this.animationStateParams.moveDirection, direction);
                    this.animationState.setFloat(this.animationStateParams.heightInput, vvelocity);
                    this.animationState.setBool(this.animationStateParams.jumpFrame, (jumpframe !== 0));
                    this.animationState.setBool(this.animationStateParams.jumpState, (isjumping !== 0));
                    this.animationState.setInteger(this.animationStateParams.actionState, actionstate);
                    this.animationState.setBool(this.animationStateParams.fallingState, (isfalling !== 0));
                    this.animationState.setBool(this.animationStateParams.slidingState, (issliding !== 0));
                    this.animationState.setBool(this.animationStateParams.groundedState, (isgrounded !== 0));
                    if (this.smoothMotionTime > 0) {
                        if (this.smoothInputVectors === true) {
                            this.animationState.setSmoothFloat(this.animationStateParams.horizontalInput, inputX, this.smoothMotionTime, deltaTime);
                            this.animationState.setSmoothFloat(this.animationStateParams.verticalInput, inputZ, this.smoothMotionTime, deltaTime);
                            this.animationState.setSmoothFloat(this.animationStateParams.mouseXInput, mouseX, this.smoothMotionTime, deltaTime);
                            this.animationState.setSmoothFloat(this.animationStateParams.mouseYInput, mouseY, this.smoothMotionTime, deltaTime);
                        } else {
                            this.animationState.setFloat(this.animationStateParams.horizontalInput, inputX);
                            this.animationState.setFloat(this.animationStateParams.verticalInput, inputZ);
                            this.animationState.setFloat(this.animationStateParams.mouseXInput, mouseX);
                            this.animationState.setFloat(this.animationStateParams.mouseYInput, mouseY);
                        }
                        this.animationState.setSmoothFloat(this.animationStateParams.inputMagnitude, magnitude, this.smoothMotionTime, deltaTime);
                        this.animationState.setSmoothFloat(this.animationStateParams.speedInput, movespeed, this.smoothMotionTime, deltaTime);
                    } else {
                        this.animationState.setFloat(this.animationStateParams.horizontalInput, inputX);
                        this.animationState.setFloat(this.animationStateParams.verticalInput, inputZ);
                        this.animationState.setFloat(this.animationStateParams.mouseXInput, mouseX);
                        this.animationState.setFloat(this.animationStateParams.mouseYInput, mouseY);
                        this.animationState.setFloat(this.animationStateParams.inputMagnitude, magnitude);
                        this.animationState.setFloat(this.animationStateParams.speedInput, movespeed);
                    }
                    //if (this.isCharacterNavigating === true) {
                    //    // TODO - Update Speed Input With Navigation Magnitude
                    //    // this.animationState.setFloat(this.animationStateParams.speedInput, magnitude);
                    //}
                }
            }
        }

        protected destroy(): void {
            this.animationState = null;
            this.animationStateParams = null;
        }

        private attachAnimationController(): void {
            if (this.animationState == null) {
                this.animationState = this.getComponent("BABYLON.Toolkit.AnimationState");
                if (this.animationState == null) {
                    const animationNode: BABYLON.TransformNode = this.getChildWithScript("BABYLON.Toolkit.AnimationState");
                    if (animationNode != null) {
                        this.animationState = BABYLON.Toolkit.SceneManager.FindScriptComponent(animationNode, "BABYLON.Toolkit.AnimationState");
                    } else {
                        // DEBUG: BABYLON.Toolkit.SceneManager.LogWarning("Failed to locate animator node for: " + this.transform);
                    }
                }
            }
            if (this.animationState != null) {
                this.animationState.onAnimationUpdateObservable.add(() => {
                    if (this.animationState.ikFrameEnabled() === true) {

                        // FIXME: Update target mesh position When Grounded - Use Raycast - ???

                        //if (this._ikLeftController != null) {
                        //    this._ikLeftController.update();
                        //}
                        //if (this._ikRightController != null) {
                        //    this._ikRightController.update();
                        //}
                    }
                });
            }
        }

        private validateAnimationStateParams(): void {
            if (this.animationStateParams == null) {
                this.animationStateParams = {
                    moveDirection: "Direction",
                    inputMagnitude: "Magnitude",
                    horizontalInput: "Horizontal",
                    verticalInput: "Vertical",
                    mouseXInput: "MouseX",
                    mouseYInput: "MouseY",
                    heightInput: "Height",
                    speedInput: "Speed",
                    jumpFrame: "Jumped",
                    jumpState: "Jump",
                    actionState: "Action",
                    fallingState: "FreeFall",
                    slidingState: "Sliding",
                    groundedState: "Grounded"
                };
            }
        }
    }
}