module PROJECT {
    /**
     * Babylon toolkit third person player controller class
     * @class ThirdPersonPlayerController - All rights reserved (c) 2020 Mackey Kinard
    */
    export class ThirdPersonPlayerController extends BABYLON.Toolkit.ScriptComponent {
        public static MIN_VERTICAL_VELOCITY: number = 0.01;
        public static MIN_GROUND_DISTANCE: number = 0.15;
        public static MIN_MOVE_EPSILON: number = 0.001;
        public static MIN_TIMER_OFFSET: number = 0;
        public static MIN_SLOPE_LIMIT: number = 0;
        public static PLAYER_HEIGHT: string = "playerHeight";

        public enableInput: boolean = false;
        public attachCamera: boolean = false;
        public rotateCamera: boolean = true;
        public mouseWheel: boolean = true;
        public freeCamera: BABYLON.FreeCamera = null;
        public freeLooking: boolean = false;
        public requireSprintButton: boolean = false;
        public gravitationalForce: number = 3.0;
        public minFallVelocity: number = 1.0;
        public verticalStepSpeed: number = 1.0;
        public minStepUpHeight: number = 0.15;
        public rigidBodyMass: number = 85.0;
        public airbornTimeout: number = 0.5;
        public maxAngle: number = 45;
        public speedFactor: number = 1.0;
        public rootMotion: boolean = false;
        public moveSpeed: number = 5.335;
        public walkSpeed: number = 2.0;
        public lookSpeed: number = 2.0;
        public jumpSpeed: number = 10.0;
        public jumpDelay: number = 0.25;
        public eyesHeight: number = 1.55;
        public pivotHeight: number = 1.35;
        public maxDistance: number = 5.0;
        public scrollSpeed: number = 25;
        public topLookLimit: number = 60.0;
        public downLookLimit: number = 30.0;
        public lowTurnSpeed: number = 15.0;
        public highTurnSpeed: number = 25.0;
        public smoothInputTime: number = 0;
        public smoothInputVectors: boolean = false;
        public smoothAcceleration: boolean = false;
        public accelerationSpeed: number = 0.1;
        public decelerationSpeed: number = 0.1;
        public climbVolumeTag: string = "Climb";
        public vaultVolumeTag: string = "Vault";
        public maxHeightRanges: any = null;
        public useClimbSystem: boolean = false;
        public distanceFactor: number = 0.85;
        public cameraSmoothing: number = 8;
        public cameraCollisions: boolean = true;
        public inputMagnitude: number = 0;
        public landingEpsilon: number = 0.1;
        public minimumDistance: number = 0.5;
        public movementAllowed: boolean = true;
        public playerInputX: number = 0;
        public playerInputZ: number = 0;
        public playerMouseX: number = 0;
        public playerMouseY: number = 0;
        public runKeyRequired: boolean = true;
        public buttonRun: number = BABYLON.Xbox360Button.LeftStick;
        public keyboardRun: number = BABYLON.Toolkit.UserInputKey.Shift;
        public buttonJump: number = BABYLON.Xbox360Button.A;
        public keyboardJump: number = BABYLON.Toolkit.UserInputKey.SpaceBar;
        public buttonCamera: number = BABYLON.Xbox360Button.Y;
        public keyboardCamera: number = BABYLON.Toolkit.UserInputKey.P;
        public postNetworkAttributes: boolean = false;
        public playerNumber: BABYLON.Toolkit.PlayerNumber = BABYLON.Toolkit.PlayerNumber.One;
        public boomPosition: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, -5);
        public airbornVelocity: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        public movementVelocity: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        public targetCameraOffset: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        public defaultFreeCamera: BABYLON.FreeCamera = null;
        public defaultCameraNode: BABYLON.TransformNode = null;
        public isAnimationEnabled(): boolean { return this.updateStateParams; }
        public isRunButtonPressed(): boolean { return this.isRunPressed; }
        public isJumpButtonPressed(): boolean { return this.isJumpPressed; }
        public getPlayerJumped(): boolean { return this.isCharacterJumpFrame; }
        public getPlayerJumping(): boolean { return this.isCharacterJumping; }
        public getPlayerFalling(): boolean { return this.isCharacterFalling; }
        public getPlayerSliding(): boolean { return this.isCharacterSliding; }
        public getPlayerGrounded(): boolean { return this.isCharacterGrounded; }
        public getFallTriggered(): boolean { return this.isCharacterFallTriggered; }
        public getMovementSpeed(): number { return this.movementSpeed; }
        public getAnimationSpeed(): number { return this.animationSpeed; }
        public getCameraBoomNode(): BABYLON.TransformNode { return this.cameraNode; }
        public getCameraTransform(): BABYLON.TransformNode { return this.cameraPivot; }
        public getAnimationState(): BABYLON.Toolkit.AnimationState { return this.animationState; }
        public getVerticalVelocity(): number { return this.getCheckedVerticalVelocity(); }
        public getCharacterController(): BABYLON.Toolkit.CharacterController { return this.characterController; }
        public getPlayerLookRotation(): BABYLON.Vector3 { return this.playerLookRotation; }
        public getPlayerMoveDirection(): PROJECT.PlayerMoveDirection { return this.playerMoveDirection; }
        public getInputMovementVector(): BABYLON.Vector3 { return this.inputMovementVector; }
        public getInputMagnitudeValue(): number { return this.inputMagnitude; }
        public getCameraPivotPosition(): BABYLON.Vector3 { return (this.cameraPivot != null) ? this.cameraPivot.position : null; }
        public getCameraPivotRotation(): BABYLON.Quaternion { return (this.cameraPivot != null) ? this.cameraPivot.rotationQuaternion : null; }

        public rayClimbOffset: number = 0.35;
        public rayClimbLength: number = 0.85;
        public getClimbContact(): boolean { return this.climbContact; }
        public getClimbContactNode(): BABYLON.TransformNode { return this.climbContactNode; }
        public getClimbContactPoint(): BABYLON.Vector3 { return this.climbContactPoint; }
        public getClimbContactAngle(): number { return this.climbContactAngle; }
        public getClimbContactNormal(): BABYLON.Vector3 { return this.climbContactNormal; }
        public getClimbContactDistance(): number { return this.climbContactDistance; };
        public canClimbObstaclePredicate: (action: number) => boolean = null;

        public rayHeightOffset: number = 5.0;
        public rayHeightLength: number = 6.0;
        public getHeightContact(): boolean { return this.heightContact; }
        public getHeightContactNode(): BABYLON.TransformNode { return this.heightContactNode; }
        public getHeightContactPoint(): BABYLON.Vector3 { return this.heightContactPoint; }
        public getHeightContactAngle(): number { return this.heightContactAngle; }
        public getHeightContactNormal(): BABYLON.Vector3 { return this.heightContactNormal; }
        public getHeightContactDistance(): number { return this.heightContactDistance; };

        private abstractMesh: BABYLON.AbstractMesh = null;
        private cameraDistance: number = 0;
        private forwardCamera: boolean = true; // Note Always Camera Forward
        private avatarRadius: number = 0.5;
        private groundingObject: any = null;
        private groundingCallback: any = null;
        private dollyDirection: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private cameraEulers: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private rotationEulers: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private cameraPivotOffset: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private cameraForwardVector: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private cameraRightVector: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private desiredForwardVector: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private desiredRightVector: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private lastRotationQuaternion: BABYLON.Quaternion = new BABYLON.Quaternion(0, 0, 0, 1);
        private scaledCamDirection: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private scaledMaxDirection: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private parentNodePosition: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private maximumCameraPos: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private tempWorldPosition: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);

        private cameraRaycastResult: BABYLON.PhysicsRaycastResult = null;
        private cameraRaycastShape: BABYLON.PhysicsShapeSphere = null;
        //private defaultRaycastGroup:number = BABYLON.Toolkit.CollisionFilters.DefaultFilter;
        //private defaultRaycastMask:number = BABYLON.Toolkit.CollisionFilters.StaticFilter;
        //private cameraRaycastMask:number = (BABYLON.Toolkit.CollisionFilters.DefaultFilter | BABYLON.Toolkit.CollisionFilters.StaticFilter | BABYLON.Toolkit.CollisionFilters.KinematicFilter); // Note: Exclude The Player Character Controller From Camera Collision

        private avatarSkins: BABYLON.AbstractMesh[] = null;
        private cameraNode: BABYLON.TransformNode = null;
        private cameraPivot: BABYLON.Mesh = null;
        private navigationAgent: BABYLON.Toolkit.NavigationAgent = null;
        private characterController: BABYLON.Toolkit.CharacterController = null;
        private verticalVelocity: number = 0;
        private smoothMotionSpeed: boolean = false;
        private smoothChangeRate: number = 25;
        private animationSpeed: number = 0;
        private movementSpeed: number = 0;
        private isRunPressed: boolean = false;
        private isJumpPressed: boolean = false;
        private isCharacterSliding: boolean = false;
        private isCharacterFalling: boolean = false;
        private isCharacterGrounded: boolean = false;
        private isCharacterFallTriggered: boolean = false;
        private isCharacterJumpFrame: boolean = false;
        private isCharacterJumping: boolean = false;
        private isCharacterRising: boolean = false;
        private isCharacterLanding: boolean = false;
        private isCharacterNavigating: boolean = false;
        private navigationAngularSpeed: number = 0;
        private updateStateParams: boolean = true;
        private animationStateParams: PROJECT.AnimationStateParams = null;
        private sphereCollisionShape: any = null;
        private hasGroundedContact: boolean = false;
        private showDebugColliders: boolean = false;
        private colliderVisibility: number = 0;
        private colliderRenderGroup: number = 0;
        private showDebugRaycasts: boolean = false;

        private deltaTime: number = 0;
        private minJumpTimer: number = 0;
        private delayJumpTimer: number = 0;
        private canPlayerJump: boolean = true;
        private animationState: BABYLON.Toolkit.AnimationState = null;
        // DEPRECIATED: private rotationVelocityX:BABYLON.Vector2 = new BABYLON.Vector2(0,0);
        // DEPRECIATED: private rotationVelocityY:BABYLON.Vector2 = new BABYLON.Vector2(0,0);
        private lastJumpVelocity: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private inputMovementVector: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private playerLookRotation: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private playerRotationVector: BABYLON.Vector2 = BABYLON.Vector2.Zero();
        private playerMovementVelocity: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private playerRotationQuaternion: BABYLON.Quaternion = BABYLON.Quaternion.Zero();
        private playerMoveDirection: PROJECT.PlayerMoveDirection = PROJECT.PlayerMoveDirection.Stationary;
        private forwardDirection: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 1);
        private downDirection: BABYLON.Vector3 = new BABYLON.Vector3(0, -1, 0);

        private climbContact: boolean = false;
        private climbContactNode: BABYLON.TransformNode = null;
        private climbContactAngle: number = 0;
        private climbContactPoint: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private climbContactNormal: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private climbContactDistance: number = 0;
        private climbSensorLine: BABYLON.Toolkit.LinesMeshRenderer = null;
        private offsetClimbRaycastPosition: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private startClimbRaycastPosition: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private endClimbRaycastPosition: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);

        private heightContact: boolean = false;
        private heightContactNode: BABYLON.TransformNode = null;
        private heightContactAngle: number = 0;
        private heightContactPoint: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private heightContactNormal: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private heightContactDistance: number = 0;
        private heightSensorLine: BABYLON.Toolkit.LinesMeshRenderer = null;
        private offsetHeightRaycastPosition: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private startHeightRaycastPosition: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private endHeightRaycastPosition: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);

        protected m_velocityOffset: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        protected m_actualVelocity: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        protected m_linearVelocity: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        protected m_lastPosition: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        protected m_positionCenter: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        protected m_scaledVelocity: number = 0;
        protected playerDrawVelocity: number = 0;
        constructor(transform: BABYLON.TransformNode, scene: BABYLON.Scene, properties?: any) {
            super(transform, scene, properties);
        }

        protected awake(): void { this.awakePlayerController(); }
        protected start(): void { this.startPlayerController(); }
        protected after(): void { this.afterPlayerController(); }
        protected update(): void { this.updatePlayerController(); }
        protected destroy(): void { this.destroyPlayerController(); }

        /** Register handler that is triggered before the controller has been updated */
        public onPreUpdateObservable = new BABYLON.Observable<BABYLON.TransformNode>();
        /** Register handler that is triggered before the controller movement has been applied */
        public onBeforeMoveObservable = new BABYLON.Observable<BABYLON.TransformNode>();
        /** Register handler that is triggered after the controller has been updated */
        public onPostUpdateObservable = new BABYLON.Observable<BABYLON.TransformNode>();
        /** Register handler that is triggered after player input has been updated */
        public onPlayerInputObservable = new BABYLON.Observable<BABYLON.TransformNode>();
        /** Register handler that is triggered when player position should be updated */
        public onPlayerPositionObservable = new BABYLON.Observable<BABYLON.TransformNode>();
        /** Register handler that is triggered after performing action has been updated */
        public onUpdateActionObservable = new BABYLON.Observable<BABYLON.TransformNode>();
        /** Register handler that is triggered after animation state has been updated */
        public onAnimationStateObservable = new BABYLON.Observable<BABYLON.TransformNode>();

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Root Motion Animation System
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        private _deltaMotionPosition: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        public getDeltaMotionPosition(): BABYLON.Vector3 {
            this._deltaMotionPosition.set(0, 0, 0);
            if (this.animationState != null) {
                const rootMotionPosition: BABYLON.Vector3 = this.animationState.getDeltaRootMotionPosition();
                if (rootMotionPosition != null) {
                    // FIXME: Calculate Delta Root Motion Position
                    this._deltaMotionPosition.copyFrom(rootMotionPosition);
                }
            }
            return this._deltaMotionPosition;
        }

        private _deltaMotionRotation: BABYLON.Quaternion = new BABYLON.Quaternion(0, 0, 0, 0);
        public getDeltaMotionRotation(): BABYLON.Quaternion {
            this._deltaMotionRotation.set(0, 0, 0, 0);
            if (this.animationState != null) {
                const rootMotionRotation: BABYLON.Quaternion = this.animationState.getDeltaRootMotionRotation();
                if (rootMotionRotation != null) {
                    // FIXME: Calculate Delta Root Motion Rotation
                    this._deltaMotionRotation.copyFrom(rootMotionRotation);
                }
            }
            return this._deltaMotionRotation;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Blocking Action Animation System
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        private isPerformingAction: boolean = false;
        private isRootMotionAction: boolean = false;
        private isActionInterruptable: boolean = false;
        private afterActionHandler: Function = null;
        private performActionTimer: number = 0;
        private performActionNumber: number = 0;
        private playerRotationSpeed: number = 10;
        private rotatePlayerTowards: boolean = false;
        private matchStartTime: number = 0;
        private matchTargetTime: number = 0;
        private matchTargetOffset: number = 0;
        private matchTargetHeight: boolean = false;
        private lockTargetHeight: boolean = false;
        private lastStartHeight: BABYLON.Nullable<number> = null;
        private lastTargetHeight: BABYLON.Nullable<number> = null;
        private lastTargetNormal: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private lastTargetRotation: BABYLON.Quaternion = new BABYLON.Quaternion(0, 0, 0, 1);
        private lastDeltaPosition: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private lastDeltaRotation: BABYLON.Quaternion = new BABYLON.Quaternion(0, 0, 0, 1);
        public getIsPerformingAction(): boolean { return this.isPerformingAction; }
        public getIsRootMotionAction(): boolean { return this.isRootMotionAction; }
        public getIsActionInterruptable(): boolean { return this.isActionInterruptable; }
        public playActionAnimation(action: number, interruptableAction: boolean = true, enableRootMotion: boolean = false, afterActionComplete: () => void = null): void {
            if (this.isPerformingAction === false && this.animationState != null && action >= 0) {
                this.isPerformingAction = true;
                this.performActionTimer = 0;
                this.performActionNumber = action;
                this.afterActionHandler = afterActionComplete;
                this.isActionInterruptable = interruptableAction;
                this.isRootMotionAction = enableRootMotion;
                this.playerRotationSpeed = 10;
                this.rotatePlayerTowards = false;
                this.matchStartTime = 0;
                this.matchTargetTime = 0;
                this.matchTargetOffset = 0;
                this.matchTargetHeight = false;
                this.lockTargetHeight = false;
                this.lastStartHeight = null;
                this.lastTargetHeight = null;
                this.lastTargetNormal.set(0, 0, 0);
                this.lastTargetRotation.set(0, 0, 0, 1);
                if (this.isRootMotionAction === true) {
                    this.enableCharacterController(false); // Note: Disable Character Controller
                }
                if (this.animationState != null) {
                    this.animationState.resetSmoothProperty(PROJECT.ThirdPersonPlayerController.PLAYER_HEIGHT);
                }
            }
        }
        public resetActionAnimationState(): void {
            if (this.afterActionHandler != null) {
                try { this.afterActionHandler(); } catch { }
            }
            if (this.isRootMotionAction === true) {
                this.enableCharacterController(true); // Note: Enable Character Controller
            }
            if (this.animationState != null) {
                this.animationState.resetSmoothProperty(PROJECT.ThirdPersonPlayerController.PLAYER_HEIGHT);
            }
            this.performActionTimer = 0;
            this.performActionNumber = 0;
            this.isPerformingAction = false;
            this.isRootMotionAction = false;
            this.isActionInterruptable = false;
            this.afterActionHandler = null;
            this.playerRotationSpeed = 10;
            this.rotatePlayerTowards = false;
            this.matchStartTime = 0;
            this.matchTargetTime = 0;
            this.matchTargetOffset = 0;
            this.matchTargetHeight = false;
            this.lockTargetHeight = false;
            this.lastStartHeight = null;
            this.lastTargetHeight = null;
            this.lastTargetNormal.set(0, 0, 0);
            this.lastTargetRotation.set(0, 0, 0, 1);
        }

        private updateAnimationActionState(): void {
            const deltaTime: number = this.getDeltaSeconds();
            const dampTime: number = (this.matchTargetTime - this.matchStartTime);
            if (this.animationState != null && this.isRootMotionAction === true) {
                const playerGlobalHeight: number = this.transform.absolutePosition.y;
                this.lastDeltaPosition.copyFrom(this.getDeltaMotionPosition());
                BABYLON.Vector3.TransformNormalToRef(this.lastDeltaPosition, this.transform.getWorldMatrix(), this.lastDeltaPosition);
                if (this.matchTargetHeight === true) {
                    if (this.lastStartHeight == null && this.performActionTimer >= this.matchStartTime) {
                        this.lastStartHeight = playerGlobalHeight;
                        this.animationState.resetSmoothProperty(PROJECT.ThirdPersonPlayerController.PLAYER_HEIGHT);
                        // console.warn(">>> Start Global Height: " + this.lastStartHeight + " --> Perform Action Timer: " + this.performActionTimer);
                    }
                    if (this.lastStartHeight != null && this.lastTargetHeight != null) {
                        this.lastDeltaPosition.y = 0;
                        const fixedTargetHeight: number = (this.lastTargetHeight + this.matchTargetOffset);
                        if (this.performActionTimer < this.matchTargetTime) {
                            this.animationState.setSmoothFloat(PROJECT.ThirdPersonPlayerController.PLAYER_HEIGHT, fixedTargetHeight, dampTime, deltaTime);
                            const smoothPlayerHeight: number = this.animationState.getFloat(PROJECT.ThirdPersonPlayerController.PLAYER_HEIGHT);
                            this.lastDeltaPosition.y = (smoothPlayerHeight - playerGlobalHeight);
                            // console.warn(">>> Lerp Target Delta: " + this.lastDeltaPosition.y + " --> Perform Action Timer: " + this.performActionTimer);

                        } else if (this.lockTargetHeight === false && this.performActionTimer >= this.matchTargetTime) {
                            this.lastDeltaPosition.y = (fixedTargetHeight - playerGlobalHeight);
                            this.lockTargetHeight = true;
                            // console.warn(">>> Last Global Delta: " + this.lastDeltaPosition.y + " --> Perform Action Timer: " + this.performActionTimer + " ---> Match Target Time: " + this.matchTargetTime);
                        }
                    }
                }
                // ..
                // Apply Root Motion To Position
                // ..
                // this.lastDeltaPosition.x = 0; // FIXME: Apply Rotation Y Difference Factor From Unity
                // this.lastDeltaPosition.y = 0; // FIXME: Apply Rotation Y Difference Factor From Unity
                this.transform.position.addInPlace(this.lastDeltaPosition);
                // console.log("Player Action Height: " + playerGlobalHeight + " --> Perform Action Timer: " + this.performActionTimer);
                // console.log("Current Delta Height: " + this.lastDeltaPosition.y + " --> Perform Action Timer: " + this.performActionTimer);
                // ..
                // Apply Root Motion To Rotation
                // ..
                if (this.rotatePlayerTowards === true) {
                    if (this.climbContact === true) {
                        this.lastTargetNormal.set(-this.climbContactNormal.x, -this.climbContactNormal.y, -this.climbContactNormal.z);
                        BABYLON.Toolkit.Utilities.LookRotationToRef(this.lastTargetNormal, this.lastTargetRotation);
                        const lerpAmount: number = BABYLON.Scalar.Clamp(this.playerRotationSpeed * deltaTime);
                        BABYLON.Quaternion.SlerpToRef(this.transform.rotationQuaternion, this.lastTargetRotation, lerpAmount, this.transform.rotationQuaternion);
                        //console.log("Climb Target Rotation: " + this.lastTargetRotation);
                    }
                } else {
                    this.lastDeltaRotation.copyFrom(this.getDeltaMotionRotation());
                    this.transform.rotationQuaternion.multiplyInPlace(this.lastDeltaRotation);
                }
            }
            this.performActionTimer += deltaTime;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Controller Attachment Functions
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /** Set the player world position */
        public setWorldPosition(x: number, y: number, z: number): void {
            if (this.characterController != null) {
                this.characterController.set(x, y, z);
            }
        }

        /** TODO */
        public attachPlayerCamera(player: BABYLON.Toolkit.PlayerNumber): void {
            if (this.cameraNode == null) {
                const playerCamera: number = (player <= 0 || player > 4) ? 1 : player;
                const playerCameraNode = this.defaultCameraNode || PROJECT.DefaultCameraSystem.GetCameraTransform(this.scene, playerCamera);
                const playerFreeCamera = this.defaultFreeCamera || PROJECT.DefaultCameraSystem.GetMainCamera(this.scene, false);
                if (playerCameraNode != null && playerFreeCamera != null) {
                    this.cameraNode = playerCameraNode;
                    this.freeCamera = playerFreeCamera;
                    this.freeCamera.detachControl(); // NOTE: ALWAYS DETACH CONTROL
                    // ..
                    this.cameraNode.parent = this.cameraPivot;
                    this.cameraNode.position.copyFrom(this.boomPosition);
                    this.cameraNode.rotationQuaternion = new BABYLON.Quaternion(0, 0, 0, 1);
                    // ..
                    // TODO - Move somewhere better - ???
                    // TODO - Handle Long Intitial Camera Pan - ???
                    // ..
                    this.cameraDistance = this.cameraNode.position.length();
                    this.dollyDirection.copyFrom(this.cameraNode.position);
                    this.dollyDirection.normalize();
                } else {
                    // DEBUG: BABYLON.Toolkit.SceneManager.LogWarning("Failed to locate player camera for: " + this.transform.name);
                }
            }
        }

        private _ikLeftController: BABYLON.BoneIKController = null;
        private _ikLeftFootTarget: BABYLON.TransformNode = null;
        private _ikLeftPoleTarget: BABYLON.TransformNode = null;
        private _ikRightController: BABYLON.BoneIKController = null;
        private _ikRightFootTarget: BABYLON.TransformNode = null;
        private _ikRightPoleTarget: BABYLON.TransformNode = null;

        private abstractSkinMesh: BABYLON.AbstractMesh = null;
        private rootBoneTransform: BABYLON.TransformNode = null;
        private leftFootTransform: BABYLON.TransformNode = null;
        //private leftFootPosition:BABYLON.Vector3 = new BABYLON.Vector3(0,0,0);
        private leftFootPolePos: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private leftFootBendAxis: BABYLON.Vector3 = new BABYLON.Vector3(1, 0, 0);
        private leftFootPoleAngle: number = 0;
        private leftFootMaxAngle: number = 180;
        private rightFootTransform: BABYLON.TransformNode = null;
        //private rightFootPosition:BABYLON.Vector3 = new BABYLON.Vector3(0,0,0);
        private rightFootPolePos: BABYLON.Vector3 = new BABYLON.Vector3(0, 0, 0);
        private rightFootBendAxis: BABYLON.Vector3 = new BABYLON.Vector3(1, 0, 0);
        private rightFootPoleAngle: number = 0;
        private rightFootMaxAngle: number = 180;

        public getLeftFootTarget(): BABYLON.TransformNode { return this._ikLeftFootTarget; }
        public getRightFootTarget(): BABYLON.TransformNode { return this._ikRightFootTarget; }
        public getLeftFootController(): BABYLON.BoneIKController { return this._ikLeftController; }
        public getRightFootController(): BABYLON.BoneIKController { return this._ikRightController; }
        public attachBoneControllers(): void {
            const displayHandles: boolean = this.getProperty("displayHandles");
            const abstractSkinMeshData: BABYLON.Toolkit.IUnityTransform = this.getProperty("abstractSkinMesh");
            if (abstractSkinMeshData != null) this.abstractSkinMesh = this.getChildNode(abstractSkinMeshData.name, BABYLON.Toolkit.SearchType.ExactMatch, false) as BABYLON.AbstractMesh;
            const rootBoneTransformData: BABYLON.Toolkit.IUnityTransform = this.getProperty("rootBoneTransform");
            if (rootBoneTransformData != null) this.rootBoneTransform = this.getChildNode(rootBoneTransformData.name, BABYLON.Toolkit.SearchType.ExactMatch, false);
            // ..
            const leftFootTransformData: BABYLON.Toolkit.IUnityTransform = this.getProperty("leftFootTransform");
            if (leftFootTransformData != null) this.leftFootTransform = this.getChildNode(leftFootTransformData.name, BABYLON.Toolkit.SearchType.ExactMatch, false);

            //const leftFootPositionData:BABYLON.Toolkit.IUnityVector3 = this.getProperty("leftFootPosition");
            //if (leftFootPositionData != null) this.leftFootPosition.copyFrom(BABYLON.Toolkit.Utilities.ParseVector3(leftFootPositionData));

            const leftPoleHandleData: BABYLON.Toolkit.IUnityVector3 = this.getProperty("leftFootPolePos");
            if (leftPoleHandleData != null) this.leftFootPolePos.copyFrom(BABYLON.Toolkit.Utilities.ParseVector3(leftPoleHandleData));
            const leftBendAxisData: BABYLON.Toolkit.IUnityVector3 = this.getProperty("leftFootBendAxis");
            if (leftBendAxisData != null) this.leftFootBendAxis.copyFrom(BABYLON.Toolkit.Utilities.ParseVector3(leftBendAxisData));
            this.leftFootPoleAngle = this.getProperty("leftFootPoleAngle", this.leftFootPoleAngle);
            this.leftFootMaxAngle = this.getProperty("leftFootMaxAngle", this.leftFootMaxAngle);
            // ..
            const rightFootTransformData: BABYLON.Toolkit.IUnityTransform = this.getProperty("rightFootTransform");
            if (rightFootTransformData != null) this.rightFootTransform = this.getChildNode(rightFootTransformData.name, BABYLON.Toolkit.SearchType.ExactMatch, false);

            //const rightFootPositionData:BABYLON.Toolkit.IUnityVector3 = this.getProperty("rightFootPosition");
            //if (rightFootPositionData != null) this.rightFootPosition.copyFrom(BABYLON.Toolkit.Utilities.ParseVector3(rightFootPositionData));

            const rightPoleHandleData: BABYLON.Toolkit.IUnityVector3 = this.getProperty("rightFootPolePos");
            if (rightPoleHandleData != null) this.rightFootPolePos.copyFrom(BABYLON.Toolkit.Utilities.ParseVector3(rightPoleHandleData));
            const rightBendAxisData: BABYLON.Toolkit.IUnityVector3 = this.getProperty("rightFootBendAxis");
            if (rightBendAxisData != null) this.rightFootBendAxis.copyFrom(BABYLON.Toolkit.Utilities.ParseVector3(rightBendAxisData));
            this.rightFootPoleAngle = this.getProperty("rightFootPoleAngle", this.rightFootPoleAngle);
            this.rightFootMaxAngle = this.getProperty("rightFootMaxAngle", this.rightFootMaxAngle);
            // ..
            if (this.abstractSkinMesh != null) {
                let materialName: string = "M_TARGET_MESH";
                let targetMaterial: BABYLON.Material = this.scene.getMaterialByName(materialName);
                if (targetMaterial == null) {
                    targetMaterial = new BABYLON.StandardMaterial("M_TARGET_MESH", this.scene);
                    (<BABYLON.StandardMaterial>targetMaterial).diffuseColor = new BABYLON.Color3(1.0, 0.5, 0.25);
                }
                // ..
                // Setup Left Foot Controller
                // ..
                if (this.leftFootTransform != null && (<any>this.leftFootTransform)._linkedBone != null) {
                    this._ikLeftFootTarget = BABYLON.MeshBuilder.CreateBox(this.transform.name + ".LeftFootTarget", { width: 0.1, height: 0.1, depth: 0.1 }, this.scene);
                    this._ikLeftFootTarget.parent = this.abstractSkinMesh;
                    //this._ikLeftFootTarget.position.copyFrom(this.leftFootPosition);
                    if (this._ikLeftFootTarget instanceof BABYLON.AbstractMesh) {
                        this._ikLeftFootTarget.material = targetMaterial;
                        this._ikLeftFootTarget.isVisible = displayHandles;
                    }
                    // ..
                    this._ikLeftPoleTarget = BABYLON.MeshBuilder.CreateSphere(this.transform.name + ".LeftFootPole", { diameter: 0.15 }, this.scene);
                    this._ikLeftPoleTarget.parent = this.abstractSkinMesh;
                    this._ikLeftPoleTarget.position.copyFrom(this.leftFootPolePos);
                    if (this._ikLeftPoleTarget instanceof BABYLON.AbstractMesh) {
                        this._ikLeftPoleTarget.isVisible = displayHandles;
                    }
                    // ..
                    // this._ikLeftController = new BABYLON.BoneIKController(this.abstractSkinMesh, (<any>this.leftFootTransform)._linkedBone, {targetMesh:this._ikLeftFootTarget, poleTargetMesh:this._ikLeftPoleTarget, poleAngle:BABYLON.Tools.ToRadians(this.leftFootPoleAngle), bendAxis:this.leftFootBendAxis});
                    // this._ikLeftController.maxAngle = BABYLON.Tools.ToRadians(this.leftFootMaxAngle);
                }
                // ..
                // Setup Right Foot Controller
                // ..
                if (this.rightFootTransform != null && (<any>this.rightFootTransform)._linkedBone != null) {
                    this._ikRightFootTarget = BABYLON.MeshBuilder.CreateBox(this.transform.name + ".RightFootTarget", { width: 0.1, height: 0.1, depth: 0.1 }, this.scene);
                    this._ikRightFootTarget.parent = this.abstractSkinMesh;
                    //this._ikRightFootTarget.position.copyFrom(this.rightFootPosition);
                    if (this._ikRightFootTarget instanceof BABYLON.AbstractMesh) {
                        this._ikRightFootTarget.material = targetMaterial;
                        this._ikRightFootTarget.isVisible = displayHandles;
                    }
                    // ..
                    this._ikRightPoleTarget = BABYLON.MeshBuilder.CreateSphere(this.transform.name + ".RightFootPole", { diameter: 0.15 }, this.scene);
                    this._ikRightPoleTarget.parent = this.abstractSkinMesh;
                    this._ikRightPoleTarget.position.copyFrom(this.rightFootPolePos);
                    if (this._ikRightPoleTarget instanceof BABYLON.AbstractMesh) {
                        this._ikRightPoleTarget.isVisible = displayHandles;
                    }
                    // ..
                    // this._ikRightController = new BABYLON.BoneIKController(this.abstractSkinMesh, (<any>this.rightFootTransform)._linkedBone, {targetMesh:this._ikRightFootTarget, poleTargetMesh:this._ikRightPoleTarget, poleAngle:BABYLON.Tools.ToRadians(this.rightFootPoleAngle), bendAxis:this.rightFootBendAxis});
                    // this._ikRightController.maxAngle = BABYLON.Tools.ToRadians(this.rightFootMaxAngle);
                }
            }
        }
        private attachAnimationController(): void {
            if (this.animationState == null) {
                this.animationState = this.getComponent("BABYLON.Toolkit.AnimationState", true);
            }
            if (this.animationState != null) {
                this.animationState.onAnimationEndObservable.add(() => {
                    if (this.isPerformingAction === true) {
                        //console.log("Animation End: " + this.transform.name);
                        this.resetActionAnimationState();
                    }
                });
                this.animationState.onAnimationUpdateObservable.add(() => {
                    if (this.animationState.ikFrameEnabled() === true) {

                        // FIXME: Update target mesh position When Grounded - Use Raycast - ???

                        if (this._ikLeftController != null) {
                            this._ikLeftController.update();
                        }
                        if (this._ikRightController != null) {
                            this._ikRightController.update();
                        }
                    }
                });
            }
        }

        /** TODO */
        public enableCharacterController(state: boolean): void {
            if (state === true) {
                this.movementAllowed = true;
                this.resetPlayerJumpingState();
                if (this.characterController != null) {
                    this.characterController.setGravityFactor(this.gravitationalForce);
                    this.characterController.setCollisionState(true);
                    //this.characterController.updatePosition = true;
                }
            } else {
                this.movementAllowed = false;
                this.resetPlayerJumpingState();
                if (this.characterController != null) {
                    this.characterController.setGravityFactor(0);
                    this.characterController.setCollisionState(false);
                    //this.characterController.updatePosition = false;
                }
            }
        }

        /** TODO */
        public resetPlayerRotation(): void {
            this.transform.rotationQuaternion.toEulerAnglesToRef(this.rotationEulers);
            this.playerRotationVector.x = this.rotationEulers.x;
            this.playerRotationVector.y = this.rotationEulers.y;
        }

        /** TODO */
        public resetPlayerJumpingState(): void {
            this.minJumpTimer = 0;
            this.isCharacterJumping = false;
            this.isCharacterLanding = false;
            this.isCharacterRising = false;
            this.isCharacterJumpFrame = false;
            if (this.characterController != null) {
                this.characterController.jump(0); // Note: Zero Jump Speed
            }
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Controller Worker Functions
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        private awakePlayerController(): void {
            this.gravitationalForce = this.getProperty("gravityMultiplier", this.gravitationalForce);
            this.verticalStepSpeed = this.getProperty("stepUpVelocity", this.verticalStepSpeed);
            this.minStepUpHeight = this.getProperty("minStepHeight", this.minStepUpHeight);
            this.rigidBodyMass = this.getProperty("rigidBodyMass", this.rigidBodyMass);
            this.rotateCamera = this.getProperty("rotateCamera", this.rotateCamera);
            this.mouseWheel = this.getProperty("mouseWheel", this.mouseWheel);
            this.rayClimbLength = this.getProperty("rayClimbLength", this.rayClimbLength);
            this.rayClimbOffset = this.getProperty("rayClimbOffset", this.rayClimbOffset);
            this.rayHeightLength = this.getProperty("rayHeightLength", this.rayHeightLength);
            this.rayHeightOffset = this.getProperty("rayHeightOffset", this.rayHeightOffset);
            this.maxAngle = this.getProperty("maxAngle", this.maxAngle);
            this.landingEpsilon = this.getProperty("landingEpsilon", this.landingEpsilon);
            this.minFallVelocity = this.getProperty("minFallVelocity", this.minFallVelocity);
            this.airbornTimeout = this.getProperty("airbornTimeout", this.airbornTimeout);
            this.rootMotion = this.getProperty("rootMotion", this.rootMotion);
            this.moveSpeed = this.getProperty("moveSpeed", this.moveSpeed);
            this.walkSpeed = this.getProperty("walkSpeed", this.walkSpeed);
            this.lookSpeed = this.getProperty("lookSpeed", this.lookSpeed);
            this.jumpSpeed = this.getProperty("jumpSpeed", this.jumpSpeed);
            this.jumpDelay = this.getProperty("jumpDelay", this.jumpDelay);
            this.eyesHeight = this.getProperty("eyesHeight", this.eyesHeight);
            this.pivotHeight = this.getProperty("pivotHeight", this.pivotHeight);
            this.maxDistance = this.getProperty("maxDistance", this.maxDistance);
            this.scrollSpeed = this.getProperty("scrollSpeed", this.scrollSpeed);
            this.topLookLimit = this.getProperty("topLookLimit", this.topLookLimit);
            this.downLookLimit = this.getProperty("downLookLimit", this.downLookLimit);
            this.lowTurnSpeed = this.getProperty("lowTurnSpeed", this.lowTurnSpeed);
            this.highTurnSpeed = this.getProperty("highTurnSpeed", this.highTurnSpeed);
            this.enableInput = this.getProperty("enableInput", this.enableInput);
            this.playerNumber = this.getProperty("playerNumber", this.playerNumber)
            this.attachCamera = this.getProperty("attachCamera", this.attachCamera);
            this.freeLooking = this.getProperty("freeLooking", this.freeLooking);
            this.runKeyRequired = this.getProperty("runKeyRequired", this.runKeyRequired);
            this.cameraCollisions = this.getProperty("cameraCollisions", this.cameraCollisions)
            this.cameraSmoothing = this.getProperty("cameraSmoothing", this.cameraSmoothing)
            this.distanceFactor = this.getProperty("distanceFactor", this.distanceFactor)
            this.minimumDistance = this.getProperty("minimumDistance", this.minimumDistance);
            this.smoothInputTime = this.getProperty("smoothInputTime", this.smoothInputTime);
            this.smoothInputVectors = this.getProperty("smoothInputVectors", this.smoothInputVectors);
            this.smoothAcceleration = this.getProperty("smoothAcceleration", this.smoothAcceleration);
            this.accelerationSpeed = this.getProperty("accelerationSpeed", this.accelerationSpeed);
            this.decelerationSpeed = this.getProperty("decelerationSpeed", this.decelerationSpeed);
            this.climbVolumeTag = this.getProperty("climbVolumeTag", this.climbVolumeTag);
            this.vaultVolumeTag = this.getProperty("vaultVolumeTag", this.vaultVolumeTag);
            this.useClimbSystem = this.getProperty("useClimbSystem", this.useClimbSystem);
            this.maxHeightRanges = this.getProperty("maxHeightRanges", this.maxHeightRanges);
            this.smoothMotionSpeed = this.getProperty("smoothMotionSpeed", this.smoothMotionSpeed);
            this.smoothChangeRate = this.getProperty("smoothChangeRate", this.smoothChangeRate);
            this.updateStateParams = this.getProperty("updateStateParams", this.updateStateParams);
            this.animationStateParams = this.getProperty("animationStateParams", this.animationStateParams);
            this.postNetworkAttributes = this.getProperty("postNetworkAttribs", this.postNetworkAttributes);
            this.showDebugRaycasts = this.getProperty("showDebugRaycasts", this.showDebugRaycasts);
            // ..
            const arrowKeyRotation: boolean = this.getProperty("arrowKeyRotation");
            if (arrowKeyRotation === true) BABYLON.Toolkit.UserInputOptions.UseArrowKeyRotation = true;
            // ..
            const boomPositionData: any = this.getProperty("boomPosition");
            if (boomPositionData != null) this.boomPosition = BABYLON.Toolkit.Utilities.ParseVector3(boomPositionData);
            // ..
            const sphereRadius: number = this.getProperty("sphereRadius", 0.65)
            this.cameraRaycastShape = new BABYLON.PhysicsShapeSphere(new BABYLON.Vector3(0, 0, 0), sphereRadius, this.scene);
            // ..
            this.abstractMesh = this.getAbstractMesh();
            this.showDebugColliders = BABYLON.Toolkit.Utilities.ShowDebugColliders();
            this.colliderVisibility = BABYLON.Toolkit.Utilities.ColliderVisibility();
            this.colliderRenderGroup = BABYLON.Toolkit.Utilities.ColliderRenderGroup();
            this.resetPlayerRotation();
            // ..
            this.cameraPivot = new BABYLON.Mesh(this.transform.name + ".CameraPivot", this.scene);
            this.cameraPivot.parent = null;
            this.cameraPivot.position = this.transform.position.clone();
            this.cameraPivot.rotationQuaternion = this.transform.rotationQuaternion.clone();
            this.cameraPivot.checkCollisions = false;
            this.cameraPivot.isPickable = false;
            // ..
            if (this.showDebugColliders === true) {
                const testPivot: BABYLON.Mesh = BABYLON.MeshBuilder.CreateBox("TestPivot", { width: 0.25, height: 0.25, depth: 0.75 }, this.scene);
                testPivot.parent = this.cameraPivot;
                testPivot.position.set(0, 0, 0);
                testPivot.rotationQuaternion = new BABYLON.Quaternion(0, 0, 0, 1);
                testPivot.visibility = 1.0;
                testPivot.renderingGroupId = this.colliderRenderGroup;
                testPivot.checkCollisions = false;
                testPivot.isPickable = false;
            }
            // ..
            const configController: BABYLON.Toolkit.CharacterController = this.getComponent("BABYLON.Toolkit.CharacterController");
            // ..
            // Setup IK Bone Controllers
            // ..
            this.attachBoneControllers();
        }
        private startPlayerController(): void {
            // TODO - Support Dynamic PlayerNumber Change - ???
            if (this.attachCamera === true) {
                this.attachPlayerCamera(this.playerNumber);
            }
            this.navigationAgent = this.getComponent("BABYLON.Toolkit.NavigationAgent");
            this.characterController = this.getComponent("BABYLON.Toolkit.CharacterController");
            if (this.characterController != null) {
                this.avatarRadius = this.characterController.getAvatarRadius();
                this.characterController.showRaycasts = this.showDebugRaycasts;
                this.characterController.setRigidBodyMass(this.rigidBodyMass);
                this.characterController.setGravityFactor(this.gravitationalForce);
                this.characterController.setVerticalStepSpeed(this.verticalStepSpeed);
                this.characterController.setMinimumStepHeight(this.minStepUpHeight);
                this.characterController.onUpdatePositionObservable.add(() => {
                    this.updatePlayerPosition();
                    this.updateCameraController();
                });
                BABYLON.Toolkit.SceneManager.LogWarning("Starting player controller in physic engine mode for: " + this.transform.name);
            } else {
                BABYLON.Toolkit.SceneManager.LogWarning("No character controller found for: " + this.transform.name);
            }
            // Set player window state variable
            // SM.SetWindowState("player", this);
        }

        private updatePlayerPosition(): void {
            if (this.onPlayerPositionObservable && this.onPlayerPositionObservable.hasObservers()) {
                this.onPlayerPositionObservable.notifyObservers(this.transform);
            }
        }

        private updatePlayerController(): void {
            this.deltaTime = this.getDeltaSeconds();
            // ..
            this.m_actualVelocity = this.transform.absolutePosition.subtract(this.m_lastPosition);
            this.m_linearVelocity.copyFrom(this.m_actualVelocity);
            this.m_scaledVelocity = (this.m_linearVelocity.length() / this.deltaTime);
            this.m_linearVelocity.normalize();
            this.m_linearVelocity.scaleInPlace(this.m_scaledVelocity);
            if (this.playerDrawVelocity > 0) {
                this.m_velocityOffset.copyFrom(this.m_linearVelocity);
                this.m_velocityOffset.scaleInPlace(this.playerDrawVelocity);
            } else {
                this.m_velocityOffset.set(0, 0, 0);
            }
            this.m_lastPosition.copyFrom(this.transform.absolutePosition);

            // TODO - FIX THIS SHIT
            if (this.updateStateParams === true && this.animationState == null) {
                this.attachAnimationController();
            }
            // ..
            if (this.minJumpTimer > 0) {
                this.minJumpTimer -= this.deltaTime;
                if (this.minJumpTimer < 0) this.minJumpTimer = 0;
            }
            if (this.isCharacterGrounded === true && this.delayJumpTimer > 0) {
                this.delayJumpTimer -= this.deltaTime;
                if (this.delayJumpTimer < 0) this.delayJumpTimer = 0;
            }
            // ..
            this.canPlayerJump = true;
            if (this.isPerformingAction === true) {
                this.updateAnimationActionState();
                if (this.onUpdateActionObservable && this.onUpdateActionObservable.hasObservers()) {
                    this.onUpdateActionObservable.notifyObservers(this.transform);
                }
            }
            // ..
            if (this.enableInput === false) {
                return;
            }
            // ..
            if (this.freeCamera == null) {
                console.warn("No player free camera, Movement disabled");
                return;
            }
            // ..
            const userInputX: number = BABYLON.Toolkit.InputController.GetUserInput(BABYLON.Toolkit.UserInputAxis.Horizontal, this.playerNumber);
            const userInputZ: number = BABYLON.Toolkit.InputController.GetUserInput(BABYLON.Toolkit.UserInputAxis.Vertical, this.playerNumber);
            const userMouseX: number = BABYLON.Toolkit.InputController.GetUserInput(BABYLON.Toolkit.UserInputAxis.MouseX, this.playerNumber);
            const userMouseY: number = BABYLON.Toolkit.InputController.GetUserInput(BABYLON.Toolkit.UserInputAxis.MouseY, this.playerNumber);
            if (this.smoothAcceleration === true) {
                // SMOOTH USER INPUT X
                if (userInputX > 0) {
                    this.playerInputX += (this.accelerationSpeed * this.deltaTime);
                    if (this.playerInputX > 1) this.playerInputX = 1;
                } else if (userInputX < 0) {
                    this.playerInputX -= (this.accelerationSpeed * this.deltaTime);
                    if (this.playerInputX < -1) this.playerInputX = -1;
                } else {
                    if (this.playerInputX < 0) {
                        this.playerInputX += (this.decelerationSpeed * this.deltaTime);
                        if (this.playerInputX > 0) this.playerInputX = 0;
                    } else if (this.playerInputX > 0) {
                        this.playerInputX -= (this.decelerationSpeed * this.deltaTime);
                        if (this.playerInputX < 0) this.playerInputX = 0;
                    }
                }
                // SMOOTH USER INPUT Z
                if (userInputZ > 0) {
                    this.playerInputZ += (this.accelerationSpeed * this.deltaTime);
                    if (this.playerInputZ > 1) this.playerInputZ = 1;
                } else if (userInputZ < 0) {
                    this.playerInputZ -= (this.accelerationSpeed * this.deltaTime);
                    if (this.playerInputZ < -1) this.playerInputZ = -1;
                } else {
                    if (this.playerInputZ < 0) {
                        this.playerInputZ += (this.decelerationSpeed * this.deltaTime);
                        if (this.playerInputZ > 0) this.playerInputZ = 0;
                    } else if (this.playerInputZ > 0) {
                        this.playerInputZ -= (this.decelerationSpeed * this.deltaTime);
                        if (this.playerInputZ < 0) this.playerInputZ = 0;
                    }
                }
            } else {
                // RAW USER INPUT XZ
                this.playerInputX = userInputX;
                this.playerInputZ = userInputZ;
            }
            // ..
            this.playerMouseX = userMouseX;
            this.playerMouseY = userMouseY;
            // ..
            // Validate Animation Action
            // ..
            if (this.isPerformingAction === true && this.isActionInterruptable === true) {
                if (this.playerInputX !== 0 || this.playerInputZ !== 0) {
                    //console.log("Animation Interrupt: " + this.transform.name);
                    this.resetActionAnimationState();
                }
            }
            if (this.isPerformingAction === true) {
                this.canPlayerJump = false;
                this.playerInputX = 0;
                this.playerInputZ = 0;
            }
            // ..
            // Update Player Input
            // ..
            if (this.onPlayerInputObservable && this.onPlayerInputObservable.hasObservers()) {
                this.onPlayerInputObservable.notifyObservers(this.transform);
            }
            //..
            // Update Input Magnitude
            // ..
            this.inputMovementVector.set(this.playerInputX, 0, this.playerInputZ);
            if (this.inputMovementVector.length() > 1.0) this.inputMovementVector.normalize(); // Note: Normalize In Place
            this.inputMagnitude = this.inputMovementVector.length();
            // ..
            // Update Move Direction
            // ..
            const moveForward: boolean = (this.playerInputZ > 0);
            const moveBackward: boolean = (this.playerInputZ < 0);
            const moveRight: boolean = (this.playerInputX > 0);
            const moveLeft: boolean = (this.playerInputX < 0);
            if (moveForward === true) {
                if (moveLeft === true) {
                    this.playerMoveDirection = PROJECT.PlayerMoveDirection.ForwardLeft;
                } else if (moveRight === true) {
                    this.playerMoveDirection = PROJECT.PlayerMoveDirection.ForwardRight;
                } else {
                    this.playerMoveDirection = PROJECT.PlayerMoveDirection.Forward;
                }
            } else if (moveBackward === true) {
                if (moveLeft === true) {
                    this.playerMoveDirection = PROJECT.PlayerMoveDirection.BackwardLeft;
                } else if (moveRight === true) {
                    this.playerMoveDirection = PROJECT.PlayerMoveDirection.BackwardRight;
                } else {
                    this.playerMoveDirection = PROJECT.PlayerMoveDirection.Backward;
                }
            } else if (moveLeft === true) {
                this.playerMoveDirection = PROJECT.PlayerMoveDirection.StrafingLeft;
            } else if (moveRight === true) {
                this.playerMoveDirection = PROJECT.PlayerMoveDirection.StrafingRight;
            } else {
                this.playerMoveDirection = PROJECT.PlayerMoveDirection.Stationary;
            }
            // ..
            // Update Pre Notifications
            // ..
            if (this.onPreUpdateObservable && this.onPreUpdateObservable.hasObservers()) {
                this.onPreUpdateObservable.notifyObservers(this.transform);
            }
            // ..
            // Update Forward Camera Vector
            // ..
            // this.cameraForwardVector.copyFrom(this.cameraPivot.forward);
            // this.cameraForwardVector = this.scene.activeCamera.getForwardRay().direction;
            this.cameraForwardVector = this.freeCamera.getForwardRay().direction;
            this.cameraForwardVector.y = 0;
            this.cameraForwardVector.normalize();
            this.cameraForwardVector.scaleToRef(this.playerInputZ, this.desiredForwardVector);
            // ..
            // Update Right Camera Vector
            // ..
            // this.cameraRightVector.copyFrom(this.cameraPivot.right);
            this.cameraRightVector = BABYLON.Vector3.Cross(this.cameraForwardVector, BABYLON.Vector3.Up());
            this.cameraRightVector.y = 0;
            this.cameraRightVector.normalize();
            this.cameraRightVector.scaleToRef(-this.playerInputX, this.desiredRightVector);
            // ..
            // Update Player Rotation Vector
            // ..
            this.playerRotationVector.y += (this.playerMouseX * this.lookSpeed * this.deltaTime);
            this.playerRotationVector.x += (-this.playerMouseY * this.lookSpeed * this.deltaTime);
            this.playerRotationVector.x = BABYLON.Scalar.Clamp(this.playerRotationVector.x, -BABYLON.Tools.ToRadians(this.downLookLimit), BABYLON.Tools.ToRadians(this.topLookLimit));
            if (this.movementAllowed === false) {
                this.canPlayerJump = false;
                this.playerInputX = 0;
                this.playerInputZ = 0;
            }
            // ..
            // Update Player Button Presses
            // ..
            this.isRunPressed = (BABYLON.Toolkit.InputController.GetKeyboardInput(this.keyboardRun) || BABYLON.Toolkit.InputController.GetGamepadButtonInput(this.buttonRun));
            this.isJumpPressed = (BABYLON.Toolkit.InputController.GetKeyboardInput(this.keyboardJump) || BABYLON.Toolkit.InputController.GetGamepadButtonInput(this.buttonJump));
            // ..
            // Update Player Movement Velocity
            // ..
            this.movementSpeed = (this.inputMagnitude * this.moveSpeed * this.speedFactor);
            if (this.runKeyRequired === true && this.isRunPressed === false) {
                this.movementSpeed = BABYLON.Scalar.Clamp(this.movementSpeed, 0, this.walkSpeed);
            }
            // ..
            // Smooth Blended Animation Movements
            // ..
            if (this.smoothMotionSpeed === true) {
                this.animationSpeed = BABYLON.Scalar.Lerp(this.animationSpeed, this.movementSpeed, (this.deltaTime * this.smoothChangeRate));
                if (this.animationSpeed < 0.01) this.animationSpeed = 0;
            } else {
                this.animationSpeed = this.movementSpeed;
            }
            // ..
            // Forward Third Person View - Player Look Rotation
            // ..
            this.desiredForwardVector.addToRef(this.desiredRightVector, this.playerMovementVelocity);
            this.playerLookRotation.copyFrom(this.playerMovementVelocity);
            this.playerMovementVelocity.scaleInPlace(this.movementSpeed);
            // ..
            // Always Free Looking - Lerp Player Rotation (Turn And Burn)
            // ..
            this.transform.rotationQuaternion.copyFrom(this.lastRotationQuaternion);
            if (this.movementAllowed == true) {
                if (this.inputMagnitude > 0) {
                    // Calculate target position based on the player's current position and the camera's forward direction
                    // let targetPosition = this.transform.position.add(this.playerLookRotation);
                    // Rotate player to face the target position
                    // this.transform.lookAt(targetPosition, 0, 0, 0);
                    // ..
                    // SNAP TO: BABYLON.Toolkit.Utilities.LookRotationToRef(this.playerLookRotation, this.transform.rotationQuaternion);
                    // ..
                    BABYLON.Toolkit.Utilities.LookRotationToRef(this.playerLookRotation, this.playerRotationQuaternion);
                    const forwardTurnRatio: number = (this.playerLookRotation.length() / this.moveSpeed);
                    const forwardTurnSpeed: number = BABYLON.Scalar.Lerp(this.highTurnSpeed, this.lowTurnSpeed, forwardTurnRatio);
                    BABYLON.Quaternion.SlerpToRef(this.transform.rotationQuaternion, this.playerRotationQuaternion, (forwardTurnSpeed * this.deltaTime), this.transform.rotationQuaternion);
                    this.lastRotationQuaternion.copyFrom(this.transform.rotationQuaternion);
                }
            }
            this.verticalVelocity = this.getVerticalVelocity();
            this.movementVelocity.copyFrom(this.playerMovementVelocity);
            // ..
            // Update Character Controller
            // ..
            this.hasGroundedContact = (this.characterController != null) ? this.characterController.isGrounded() : false;
            this.isCharacterGrounded = false;
            this.isCharacterSliding = false;
            this.isCharacterFalling = false;
            this.isCharacterJumpFrame = false;
            this.isCharacterNavigating = (this.navigationAgent != null && this.navigationAgent.isNavigating());
            this.navigationAngularSpeed = (this.navigationAgent != null) ? this.navigationAgent.angularSpeed : 0;
            this.updateCharacterController();
            // ..
            // Update Animation State Params
            // ..
            if (this.animationState != null && this.updateStateParams === true) {
                this.validateAnimationStateParams();
                this.animationState.setInteger(this.animationStateParams.moveDirection, this.playerMoveDirection);
                this.animationState.setFloat(this.animationStateParams.heightInput, this.verticalVelocity);
                this.animationState.setBool(this.animationStateParams.jumpFrame, this.isCharacterJumpFrame);
                this.animationState.setBool(this.animationStateParams.jumpState, this.isCharacterJumping);
                this.animationState.setInteger(this.animationStateParams.actionState, this.performActionNumber);
                this.animationState.setBool(this.animationStateParams.fallingState, this.isCharacterFalling);
                this.animationState.setBool(this.animationStateParams.slidingState, this.isCharacterSliding);
                this.animationState.setBool(this.animationStateParams.groundedState, this.isCharacterGrounded);
                if (this.smoothInputTime > 0) {
                    if (this.smoothInputVectors === true) {
                        this.animationState.setSmoothFloat(this.animationStateParams.horizontalInput, this.playerInputX, this.smoothInputTime, this.deltaTime);
                        this.animationState.setSmoothFloat(this.animationStateParams.verticalInput, this.playerInputZ, this.smoothInputTime, this.deltaTime);
                        this.animationState.setSmoothFloat(this.animationStateParams.mouseXInput, this.playerMouseX, this.smoothInputTime, this.deltaTime);
                        this.animationState.setSmoothFloat(this.animationStateParams.mouseYInput, this.playerMouseY, this.smoothInputTime, this.deltaTime);
                    } else {
                        this.animationState.setFloat(this.animationStateParams.horizontalInput, this.playerInputX);
                        this.animationState.setFloat(this.animationStateParams.verticalInput, this.playerInputZ);
                        this.animationState.setFloat(this.animationStateParams.mouseXInput, this.playerMouseX);
                        this.animationState.setFloat(this.animationStateParams.mouseYInput, this.playerMouseY);
                    }
                    this.animationState.setSmoothFloat(this.animationStateParams.inputMagnitude, this.inputMagnitude, this.smoothInputTime, this.deltaTime);
                    this.animationState.setSmoothFloat(this.animationStateParams.speedInput, this.animationSpeed, this.smoothInputTime, this.deltaTime);
                } else {
                    this.animationState.setFloat(this.animationStateParams.horizontalInput, this.playerInputX);
                    this.animationState.setFloat(this.animationStateParams.verticalInput, this.playerInputZ);
                    this.animationState.setFloat(this.animationStateParams.mouseXInput, this.playerMouseX);
                    this.animationState.setFloat(this.animationStateParams.mouseYInput, this.playerMouseY);
                    this.animationState.setFloat(this.animationStateParams.inputMagnitude, this.inputMagnitude);
                    this.animationState.setFloat(this.animationStateParams.speedInput, this.animationSpeed);
                }
                if (this.isCharacterNavigating === true) {
                    // TODO - Update Speed Input With Navigation Magnitude
                    // this.animationState.setFloat(this.animationStateParams.speedInput, this.inputMagnitude);
                }
                if (this.onAnimationStateObservable && this.onAnimationStateObservable.hasObservers()) {
                    this.onAnimationStateObservable.notifyObservers(this.transform);
                }
            }
            // ..
            // Post Network Attributes
            // ..
            if (this.postNetworkAttributes == true && BABYLON.Toolkit.EntityController.HasNetworkEntity(this.transform)) {
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 0, this.playerMoveDirection);                    // Direction
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 1, this.inputMagnitude);                         // Magnitude
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 2, this.playerInputX);                           // Horizonal
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 3, this.playerInputZ);                           // Vertical
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 4, this.playerMouseX);                           // MouseX
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 5, this.playerMouseY);                           // MouseY
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 6, this.verticalVelocity);                       // Vertical Velocity
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 7, this.animationSpeed);                         // Movement Speed
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 8, this.performActionNumber);                    // Action State
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 9, ((this.isCharacterJumpFrame) ? 1 : 0));       // Jump Frame
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 10, ((this.isCharacterJumping) ? 1 : 0));        // Is Jumping
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 11, ((this.isCharacterFalling) ? 1 : 0));        // Is Falling
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 12, ((this.isCharacterSliding) ? 1 : 0));        // Is Sliding
                BABYLON.Toolkit.EntityController.PostBufferedAttribute(this.transform, 13, ((this.isCharacterGrounded) ? 1 : 0));       // Is Grounded
            }
            // ..
            // Update Post Notifications
            // ..
            if (this.onPostUpdateObservable && this.onPostUpdateObservable.hasObservers()) {
                this.onPostUpdateObservable.notifyObservers(this.transform);
            }
        }

        private afterPlayerController(): void {
        }

        // FIXME: Extra Raycast Distance When On Various Slope Angles - ???
        private updateCharacterController(): void {
            if (this.characterController != null) {
                this.isCharacterRising = (this.isCharacterJumping == true && this.verticalVelocity > 0);
                this.isCharacterLanding = (this.isCharacterJumping == true && this.verticalVelocity < 0);
                if (this.isCharacterRising == true) {
                    this.hasGroundedContact = false;    // IGNORE CONTACT
                }
                if (this.hasGroundedContact === true && this.minJumpTimer <= 0) {
                    this.isCharacterSliding = false;    // NOT SLIDING
                    this.isCharacterGrounded = true;    // IS GROUNDED
                }


                if (this.isCharacterGrounded === true) this.isCharacterJumping = false;
                this.isCharacterFalling = (this.isCharacterGrounded === false && this.isCharacterSliding == false && this.isCharacterJumping == false && this.verticalVelocity < 0 && Math.abs(this.verticalVelocity) >= this.minFallVelocity);
                if (this.isCharacterFalling === true && this.isCharacterFallTriggered === false) {
                    this.isCharacterFallTriggered = true;
                    if (this.jumpDelay > 0) this.delayJumpTimer = this.jumpDelay; // DUNNO: MAYBE USE SEPERATE FALLING DELAY TIMER - ???
                }
                if (this.isCharacterGrounded === true) this.isCharacterFallTriggered = false;
                // var msgx = ("Grounded: " + this.isCharacterGrounded + " -> Jumping: " + this.isCharacterJumping + " -> Rising: " + this.isCharacterRising + " -> Landing: " + this.isCharacterLanding + " -> Velocity: " + this.verticalVelocity);
                // console.log(msgx);
                // WM.PrintToScreen(msgx);
                // ..
                // Update Climbing System
                // ..
                if (this.useClimbSystem === true) {
                    this.castPhysicsClimbingVolumeRay();
                    this.castPhysicsHeightCheckVolumeRay();
                }
                // ..
                // Process Character Movement
                // ..
                //if (this.movementAllowed === false) return;
                if (this.isCharacterNavigating === false && this.movementAllowed === true) {
                    if (this.isCharacterGrounded === true) {
                        if (this.delayJumpTimer <= 0) this.isCharacterJumpFrame = (this.canPlayerJump === true && this.isJumpPressed === true);
                        if (this.isPerformingAction === false && this.isCharacterJumpFrame === true && this.useClimbSystem === true && this.climbContact === true && this.heightContact === true) {
                            let climbAction: number = -1;
                            let rotateSpeed: number = 1;
                            let rotateTowards: boolean = false;
                            let matchHeight: boolean = false;
                            let startTime: number = 0;
                            let targetTime: number = 0;
                            let targetOffset: number = 0;
                            const hitHeight: number = parseFloat(this.heightContactPoint.y.toFixed(2));
                            const playerHeight: number = parseFloat(this.transform.position.y.toFixed(2));
                            const obstacleHeight: number = parseFloat((hitHeight - playerHeight).toFixed(2));
                            //console.log("Climb Action -->  Hit Height: " + hitHeight + " --> Player Height: " + playerHeight + " --> Obstacle Height: " + obstacleHeight + " --> Rotate Towards: " + rotateTowards);
                            if (obstacleHeight >= this.maxHeightRanges.stepUpRange.minimumHeight && obstacleHeight <= this.maxHeightRanges.stepUpRange.maximumHeight) {
                                climbAction = PROJECT.ActionAnimationType.StepUp;
                                rotateSpeed = this.maxHeightRanges.stepUpRange.rotationSpeed;
                                rotateTowards = this.maxHeightRanges.stepUpRange.rotateTowards;
                                matchHeight = this.maxHeightRanges.stepUpRange.matchHeight;
                                startTime = this.maxHeightRanges.stepUpRange.startTime;
                                targetTime = this.maxHeightRanges.stepUpRange.targetTime;
                                targetOffset = this.maxHeightRanges.stepUpRange.targetOffset;
                            } else if (obstacleHeight >= this.maxHeightRanges.jumpUpRange.minimumHeight && obstacleHeight <= this.maxHeightRanges.jumpUpRange.maximumHeight) {
                                climbAction = PROJECT.ActionAnimationType.JumpUp;
                                rotateSpeed = this.maxHeightRanges.jumpUpRange.rotationSpeed;
                                rotateTowards = this.maxHeightRanges.jumpUpRange.rotateTowards;
                                matchHeight = this.maxHeightRanges.jumpUpRange.matchHeight;
                                startTime = this.maxHeightRanges.jumpUpRange.startTime;
                                targetTime = this.maxHeightRanges.jumpUpRange.targetTime;
                                targetOffset = this.maxHeightRanges.jumpUpRange.targetOffset;
                            } else if (obstacleHeight >= this.maxHeightRanges.climbUpRange.minimumHeight && obstacleHeight <= this.maxHeightRanges.climbUpRange.maximumHeight) {
                                climbAction = PROJECT.ActionAnimationType.ClimbUp;
                                rotateSpeed = this.maxHeightRanges.climbUpRange.rotationSpeed;
                                rotateTowards = this.maxHeightRanges.climbUpRange.rotateTowards;
                                matchHeight = this.maxHeightRanges.climbUpRange.matchHeight;
                                startTime = this.maxHeightRanges.climbUpRange.startTime;
                                targetTime = this.maxHeightRanges.climbUpRange.targetTime;
                                targetOffset = this.maxHeightRanges.climbUpRange.targetOffset;
                            }
                            if (climbAction >= 0) {
                                if (this.canClimbObstaclePredicate == null || this.canClimbObstaclePredicate(climbAction) === true) {
                                    this.isCharacterJumpFrame = false;
                                    this.isCharacterJumping = false;
                                    this.isCharacterLanding = false;
                                    this.isCharacterRising = false;
                                    this.playActionAnimation(climbAction, false, true);
                                    this.playerRotationSpeed = rotateSpeed;
                                    this.rotatePlayerTowards = rotateTowards;
                                    this.matchTargetHeight = matchHeight;
                                    this.matchStartTime = (startTime - PROJECT.ThirdPersonPlayerController.MIN_TIMER_OFFSET);
                                    this.matchTargetTime = (targetTime - PROJECT.ThirdPersonPlayerController.MIN_TIMER_OFFSET);
                                    this.matchTargetOffset = targetOffset;
                                    this.lastTargetHeight = hitHeight;
                                    this.lastStartHeight = null;
                                    this.lockTargetHeight = false;
                                }
                            }
                        }
                        if (this.isCharacterJumpFrame === true && this.jumpSpeed > 0) {
                            this.isCharacterJumping = true;
                            this.characterController.jump(this.jumpSpeed);
                            if (this.jumpDelay > 0) this.delayJumpTimer = this.jumpDelay;
                            if (this.airbornTimeout > 0) this.minJumpTimer = (this.airbornTimeout + this.deltaTime);
                            this.lastJumpVelocity.set(this.movementVelocity.x, 0, this.movementVelocity.z);
                        }
                        // ..
                        // Update Move Notifications
                        // ..
                        if (this.onBeforeMoveObservable && this.onBeforeMoveObservable.hasObservers()) {
                            this.onBeforeMoveObservable.notifyObservers(this.transform);
                        }
                        // ..
                        // Validate Root Motion Velocity
                        // ..
                        if (this.animationState != null && this.rootMotion === true) {
                            const rootMotion: BABYLON.Vector3 = this.getDeltaMotionPosition();
                            this.movementVelocity.set(rootMotion.x, 0, rootMotion.z);
                            BABYLON.Vector3.TransformNormalToRef(this.movementVelocity, this.transform.getWorldMatrix(), this.movementVelocity);
                            this.characterController.move(this.movementVelocity);
                        } else {
                            //this.movementVelocity.scaleInPlace(this.deltaTime);
                            this.characterController.move(this.movementVelocity);
                        }
                    }
                    // this.characterController.updatePosition = true; - Which Is Best - ???
                } else {
                    // this.characterController.updatePosition = false; - Which Is Best - ???
                    // FIXME: EITHER OR - ???
                    // this.characterController.setGhostWorldPosition(this.transform.position);
                    //this.characterController.syncGhostToTransformPosition();
                }
            }
        }

        private updateCameraController(): void {
            if (this.enableInput === false) return;
            // DUNNO FUR SURE:  if (this.isCharacterNavigating === true && this.navigationAngularSpeed > 0) allowRotation = false;
            if (this.cameraPivot != null) {
                // .. 
                // Update Camera Pivot Offset
                // ..
                if (this.targetCameraOffset.x !== 0 || this.targetCameraOffset.y !== 0 || this.targetCameraOffset.z !== 0) {
                    this.cameraPivotOffset.copyFrom(this.targetCameraOffset);
                } else {
                    this.cameraPivotOffset.set(0, this.pivotHeight, 0);
                }
                // ..
                // Update Camera Pivot Position
                // ..
                BABYLON.Toolkit.Utilities.GetAbsolutePositionToRef(this.transform, this.cameraPivot.position, this.cameraPivotOffset);
                // ..
                // Update Camera Pivot Rotation
                // ..
                if (this.rotateCamera === true) {
                    BABYLON.Quaternion.FromEulerAnglesToRef(this.playerRotationVector.x, this.playerRotationVector.y, 0, this.cameraPivot.rotationQuaternion);
                }
            }
            if (this.rotateCamera === true && this.cameraNode != null) {
                if (this.cameraSmoothing <= 0) this.cameraSmoothing = 5.0; // Default Camera Smoothing
                if (this.cameraCollisions === true) {
                    // ..
                    // Check Camera Collision
                    // ..
                    // const maxDistance:number = Math.abs(this.boomPosition.z);
                    const parentNode: BABYLON.TransformNode = (this.cameraNode.parent as BABYLON.TransformNode);
                    this.dollyDirection.scaleToRef(this.maxDistance, this.scaledMaxDirection);
                    this.dollyDirection.scaleToRef(this.cameraDistance, this.scaledCamDirection);
                    BABYLON.Toolkit.Utilities.GetAbsolutePositionToRef(parentNode, this.parentNodePosition);
                    BABYLON.Toolkit.Utilities.TransformPointToRef(parentNode, this.scaledMaxDirection, this.maximumCameraPos);
                    // ..
                    let contact: boolean = false;
                    let distance: number = 0;
                    if (this.characterController != null) {
                        // NOTE: USE SHAPECAST
                        if (this.cameraRaycastShape != null) {
                            const query = {
                                shape: this.cameraRaycastShape,
                                rotation: this.cameraNode.rotationQuaternion,
                                startPosition: this.parentNodePosition,
                                endPosition: this.maximumCameraPos,
                                ignoreBody: this.transform.physicsBody,
                                shouldHitTriggers: false
                            }
                            const result = BABYLON.Toolkit.RigidbodyPhysics.Shapecast(query);
                            contact = (result != null && result.world != null && result.world.hasHit === true && result.world.body != null);
                            distance = (contact === true) ? BABYLON.Vector3.Distance(this.parentNodePosition, result.world.hitPoint) : 0;
                        }
                        /* DEPRECATED: USE RAYCAST
                        if (this.cameraRaycastResult == null) this.cameraRaycastResult = new BABYLON.PhysicsRaycastResult;
                        BABYLON.Toolkit.RigidbodyPhysics.RaycastToRef(this.parentNodePosition, this.maximumCameraPos, this.cameraRaycastResult);
                        contact = (this.cameraRaycastResult != null && this.cameraRaycastResult.hasHit === true && this.cameraRaycastResult.body != null && this.cameraRaycastResult.body.transformNode != null);
                        distance = (this.cameraRaycastResult != null && this.cameraRaycastResult.hasHit === true) ? this.cameraRaycastResult.hitDistance : 0;
                        //let contactBody:string = (contact === true) ? this.cameraRaycastResult.body.transformNode.name : "";
                        //WM.PrintToScreen("Camera Collision: " + contact + " --> Distance:  " + distance + " --> Transform: " + contactBody);*/
                    }
                    if (contact === true) {
                        this.cameraDistance = BABYLON.Scalar.Clamp((distance * this.distanceFactor), this.minimumDistance, this.maxDistance);
                        // Lerp Past Camera Collisions
                        if (this.cameraNode.position.x !== this.scaledCamDirection.x || this.cameraNode.position.y !== this.scaledCamDirection.y || this.cameraNode.position.z !== this.scaledCamDirection.z) {
                            BABYLON.Vector3.LerpToRef(this.cameraNode.position, this.scaledCamDirection, (this.deltaTime * this.cameraSmoothing), this.cameraNode.position);
                        }
                    } else {
                        if (this.mouseWheel === true) {
                            if (BABYLON.Toolkit.InputController.IsWheelScrolling()) {
                                const wheel: number = BABYLON.Toolkit.InputController.GetUserInput(BABYLON.Toolkit.UserInputAxis.Wheel);
                                if (wheel < 0) { // ZOOM OUT
                                    const zoomOutSpeed: number = (this.scrollSpeed * this.deltaTime);
                                    this.boomPosition.z = BABYLON.Scalar.MoveTowards(this.boomPosition.z, -this.maxDistance, zoomOutSpeed);
                                } else if (wheel > 0) { // ZOOM IN
                                    const zoomInSpeed: number = (this.scrollSpeed * this.deltaTime);
                                    this.boomPosition.z = BABYLON.Scalar.MoveTowards(this.boomPosition.z, -this.minimumDistance, zoomInSpeed);
                                }
                            }
                        }
                        // Lerp To Camera Boom Position
                        if (this.cameraNode.position.x !== this.boomPosition.x || this.cameraNode.position.y !== this.boomPosition.y || this.cameraNode.position.z !== this.boomPosition.z) {
                            BABYLON.Vector3.LerpToRef(this.cameraNode.position, this.boomPosition, (this.deltaTime * this.cameraSmoothing), this.cameraNode.position);
                        }
                    }
                } else {
                    // Lerp To Camera Boom Position
                    if (this.cameraNode.position.x !== this.boomPosition.x || this.cameraNode.position.y !== this.boomPosition.y || this.cameraNode.position.z !== this.boomPosition.z) {
                        BABYLON.Vector3.LerpToRef(this.cameraNode.position, this.boomPosition, (this.deltaTime * this.cameraSmoothing), this.cameraNode.position);
                    }
                }
            }
            this.updateSmoothBoomArmLength();
        }
        public getBoomArmMaxDistance(): number { return this.maxDistance; }
        public setBoomArmMaxDistance(distance: number): void { this.maxDistance = Math.abs(distance); }
        public setSmoothBoomArmLength(length: number, speed: number, updateMaxDistance: boolean = true): void {
            const absoluteLength: number = Math.abs(length);
            this.smoothBoomArmLength = -absoluteLength;
            this.smoothBoomArmSpeed = speed;
            if (updateMaxDistance === true) {
                const absoluteDistance: number = Math.abs(this.maxDistance);
                if (absoluteLength > absoluteDistance) {
                    this.setBoomArmMaxDistance(absoluteLength);
                }
            }
        }
        private smoothBoomArmLength: BABYLON.Nullable<number> = null;
        private smoothBoomArmSpeed: BABYLON.Nullable<number> = null;
        private updateSmoothBoomArmLength(): void {
            if (this.smoothBoomArmLength != null && this.smoothBoomArmSpeed != null) {
                if (this.boomPosition.z !== this.smoothBoomArmLength) {
                    this.boomPosition.z = BABYLON.Scalar.MoveTowards(this.boomPosition.z, this.smoothBoomArmLength, (this.smoothBoomArmSpeed * this.getDeltaSeconds()));
                } else {
                    this.smoothBoomArmLength = null;
                    this.smoothBoomArmSpeed = null;
                }
            }
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //  Ammo Physics Raycasting
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        private castPhysicsClimbingVolumeRay(): void {
            let raycast: BABYLON.Toolkit.RaycastHitResult = null;
            this.climbContact = false;
            this.climbContactNode = null;
            this.climbContactPoint.set(0, 0, 0);
            this.climbContactNormal.set(0, 0, 0);
            this.climbContactAngle = 0;
            this.climbContactDistance = 0;
            // ..
            // Climbing Raycast Positions
            // ..
            const playerTransformForwardDirection: BABYLON.Vector3 = UTIL.TransformDirection(this.transform, this.forwardDirection);
            this.offsetClimbRaycastPosition.set(0, this.rayClimbOffset, 0);
            BABYLON.Toolkit.Utilities.GetAbsolutePositionToRef(this.transform, this.startClimbRaycastPosition, this.offsetClimbRaycastPosition);
            BABYLON.Toolkit.Utilities.GetAbsolutePositionToRef(this.transform, this.endClimbRaycastPosition, this.forwardDirection.scale(this.rayClimbLength));
            this.endClimbRaycastPosition.y += this.rayClimbOffset;
            // ..
            // raycast = BABYLON.Toolkit.RigidbodyPhysics.PhysicsRaycast(this.scene, this.startClimbRaycastPosition, playerTransformForwardDirection, this.rayClimbLength, this.defaultRaycastGroup, this.defaultRaycastMask);
            if (raycast != null && raycast.hasHit === true && raycast.collisionObject != null && raycast.collisionObject.entity != null) {
                const checkTag = BABYLON.Toolkit.SceneManager.GetTransformTag(raycast.collisionObject.entity);
                if (checkTag === this.climbVolumeTag) {
                    this.climbContact = true;
                    this.climbContactNode = raycast.collisionObject.entity;
                    if (raycast.hitPoint != null) this.climbContactPoint.copyFrom(raycast.hitPoint);
                    if (raycast.hitNormal != null) this.climbContactNormal.copyFrom(raycast.hitNormal);
                    this.climbContactAngle = (this.climbContactNormal != null) ? Math.abs(BABYLON.Toolkit.Utilities.GetAngle(this.climbContactNormal, BABYLON.Vector3.UpReadOnly)) : 0;
                    this.climbContactDistance = raycast.hitDistance;
                }
            }
            // Climbing Draw Debug Line
            if (this.showDebugColliders === true) {
                if (this.climbSensorLine == null) this.climbSensorLine = new BABYLON.Toolkit.LinesMeshRenderer(this.transform.name + ".ClimbingSensorLine", this.scene);
                if (raycast != null && this.climbContact === true) {
                    this.climbSensorLine.drawLine([this.startClimbRaycastPosition, raycast.hitPoint], BABYLON.Color3.Red());
                } else {
                    this.climbSensorLine.drawLine([this.startClimbRaycastPosition, this.endClimbRaycastPosition], BABYLON.Color3.Green());
                }
            }
        }

        private castPhysicsHeightCheckVolumeRay(): void {
            let raycast: BABYLON.Toolkit.RaycastHitResult = null;
            this.heightContact = false;
            this.heightContactNode = null;
            this.heightContactPoint.set(0, 0, 0);
            this.heightContactNormal.set(0, 0, 0);
            this.heightContactAngle = 0;
            this.heightContactDistance = 0;
            // ..
            // Height Check Raycast Positions
            // ..
            const playerTransformHeightDirection: BABYLON.Vector3 = UTIL.TransformDirection(this.transform, this.downDirection);
            if (this.climbContact === true) {
                this.endHeightRaycastPosition.copyFrom(this.climbContactPoint);
                this.startHeightRaycastPosition.copyFrom(this.climbContactPoint);
                this.startHeightRaycastPosition.addInPlace(BABYLON.Vector3.UpReadOnly.scale(this.rayHeightLength));
                // raycast = BABYLON.Toolkit.RigidbodyPhysics.PhysicsRaycast(this.scene, this.startHeightRaycastPosition, playerTransformHeightDirection, this.rayHeightLength, this.defaultRaycastGroup, this.defaultRaycastMask);
            } else {
                this.offsetHeightRaycastPosition.set(0, this.rayHeightOffset, this.rayClimbLength);
                BABYLON.Toolkit.Utilities.GetAbsolutePositionToRef(this.transform, this.startHeightRaycastPosition, this.offsetHeightRaycastPosition);
                this.endHeightRaycastPosition.copyFrom(this.startHeightRaycastPosition);
                this.endHeightRaycastPosition.addInPlace(this.downDirection.scale(this.rayHeightLength));
            }
            // ..
            if (raycast != null && raycast.hasHit === true && raycast.collisionObject != null && raycast.collisionObject.entity != null) {
                const checkTag = BABYLON.Toolkit.SceneManager.GetTransformTag(raycast.collisionObject.entity);
                if (checkTag === this.climbVolumeTag) {
                    this.heightContact = true;
                    this.heightContactNode = raycast.collisionObject.entity;
                    if (raycast.hitPoint != null) this.heightContactPoint.copyFrom(raycast.hitPoint);
                    if (raycast.hitNormal != null) this.heightContactNormal.copyFrom(raycast.hitNormal);
                    this.heightContactAngle = (this.heightContactNormal != null) ? Math.abs(BABYLON.Toolkit.Utilities.GetAngle(this.heightContactNormal, BABYLON.Vector3.UpReadOnly)) : 0;
                    this.heightContactDistance = raycast.hitDistance;
                }
            }
            // Height Check Draw Debug Line
            if (this.showDebugColliders === true) {
                if (this.heightSensorLine == null) this.heightSensorLine = new BABYLON.Toolkit.LinesMeshRenderer(this.transform.name + ".HeightCheckSensorLine", this.scene);
                if (raycast != null && this.heightContact === true) {
                    this.heightSensorLine.drawLine([this.startHeightRaycastPosition, raycast.hitPoint], BABYLON.Color3.Red());
                } else {
                    this.heightSensorLine.drawLine([this.startHeightRaycastPosition, this.endHeightRaycastPosition], BABYLON.Color3.Green());
                }
            }
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //  Private Worker Functions
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        private getCheckedVerticalVelocity(): number {
            const currentVelocity: number = (this.characterController != null) ? this.characterController.getVerticalVelocity() : 0;
            return (Math.abs(currentVelocity) >= PROJECT.ThirdPersonPlayerController.MIN_VERTICAL_VELOCITY) ? currentVelocity : 0;
        }
        private destroyPlayerController(): void {
            this.cameraPivot = null;
            this.cameraNode = null;
            this.animationState = null;
            this.characterController = null;
            this.onPreUpdateObservable.clear();
            this.onPreUpdateObservable = null;
            this.onBeforeMoveObservable.clear();
            this.onBeforeMoveObservable = null;
            this.onPostUpdateObservable.clear();
            this.onPostUpdateObservable = null;
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
                    groundedState: "Grounded",
                };
            }
        }
    }
    /**
    * Babylon Enum Definition
    * @interface ThirdPersonControl
    */
    export enum ThirdPersonControl {
        ThirdPersonTurning = 0,
        ThirdPersonForward = 1
    }
}
