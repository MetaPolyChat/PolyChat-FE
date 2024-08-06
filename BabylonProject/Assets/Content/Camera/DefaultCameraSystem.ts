module PROJECT {
    /**
     * Babylon toolkit default camera system class
     * @class DefaultCameraSystem - All rights reserved (c) 2020 Mackey Kinard
     * https://doc.babylonjs.com/divingDeeper/postProcesses/defaultRenderingPipeline
     */
    export class DefaultCameraSystem extends BABYLON.Toolkit.ScriptComponent {
        protected static PlayerOneCamera: BABYLON.FreeCamera = null;
        protected static PlayerTwoCamera: BABYLON.FreeCamera = null;
        protected static PlayerThreeCamera: BABYLON.FreeCamera = null;
        protected static PlayerFourCamera: BABYLON.FreeCamera = null;
        protected static XRExperienceHelper: BABYLON.WebXRDefaultExperience = null;

        private static multiPlayerView: boolean = false;
        private static multiPlayerCount: number = 1;
        private static multiPlayerCameras: BABYLON.Camera[] = null;
        private static stereoCameras: boolean = true;
        private static startupMode: number = 1;
        private static cameraReady: boolean = false;
        private static renderingPipeline: BABYLON.DefaultRenderingPipeline = null;
        private static screenSpacePipeline: BABYLON.SSAORenderingPipeline = null;
        public static GetRenderingPipeline(): BABYLON.DefaultRenderingPipeline { return PROJECT.DefaultCameraSystem.renderingPipeline; };
        public static GetScreenSpacePipeline(): BABYLON.SSAORenderingPipeline { return PROJECT.DefaultCameraSystem.screenSpacePipeline; };
        public static IsCameraSystemReady(): boolean { return PROJECT.DefaultCameraSystem.cameraReady; }
        /** Register handler that is triggered when the webxr experience helper has been created */
        public static OnXRExperienceHelperObservable = new BABYLON.Observable<BABYLON.WebXRDefaultExperience>();

        private mainCamera: boolean = false;
        private cameraType: number = 0;
        private cameraInertia: number = 0.5;
        private cameraController: any = null;
        private immersiveOptions: any = null;
        private arcRotateConfig: any = null;
        private multiPlayerSetup: any = null;
        private fullScreenToggle: number = 0;
        private setPointerLock: boolean = true;
        private editorPostProcessing: PROJECT.IEditorPostProcessing = null;

        public isMainCamera(): boolean { return this.mainCamera; }
        public getCameraType(): number { return this.cameraType; }

        protected m_cameraRig: BABYLON.TargetCamera = null;

        protected awake(): void { this.awakeCameraSystemState(); }
        protected start(): void { this.startCameraSystemState(); }
        protected update(): void { this.updateCameraSystemState(); }
        protected destroy(): void { this.destroyCameraSystemState(); }

        /////////////////////////////////////////////
        // Universal Camera System State Functions //
        /////////////////////////////////////////////

        protected awakeCameraSystemState(): void {
            this.mainCamera = (this.getTransformTag() === "MainCamera");
            this.cameraType = this.getProperty("mainCameraType", this.cameraType);
            this.cameraInertia = this.getProperty("setCameraInertia", this.cameraInertia);
            this.fullScreenToggle = this.getProperty("fullScreenToggle", this.fullScreenToggle);
            this.setPointerLock = this.getProperty("setPointerLock", this.setPointerLock);
            this.immersiveOptions = this.getProperty("immersiveOptions", this.immersiveOptions);
            this.arcRotateConfig = this.getProperty("arcRotateConfig", this.arcRotateConfig);
            this.multiPlayerSetup = this.getProperty("multiPlayerSetup", this.multiPlayerSetup);
            this.cameraController = this.getProperty("cameraController", this.cameraController);
            this.editorPostProcessing = this.getProperty("renderingPipeline", this.editorPostProcessing);
            this.cleanCameraSystemState();
            if (this.fullScreenToggle === 0) {
                BABYLON.Toolkit.InputController.OnKeyboardPress(BABYLON.Toolkit.UserInputKey.F, () => {
                    //this.scene.getEngine().enterFullscreen(true);
                    SM.EnterFullscreenMode(this.scene, this.setPointerLock);
                });
            }
        }

        protected async startCameraSystemState(): Promise<void> {
            BABYLON.Toolkit.Utilities.ValidateTransformQuaternion(this.transform);
            if (this.multiPlayerSetup != null) {
                PROJECT.DefaultCameraSystem.startupMode = this.multiPlayerSetup.playerStartupMode;
                PROJECT.DefaultCameraSystem.stereoCameras = this.multiPlayerSetup.stereoSideBySide;
            }
            // ..
            // Default Camera System Support
            // ..
            this.m_cameraRig = this.getCameraRig();
            if (this.m_cameraRig != null) {
                this.m_cameraRig.inertia = this.cameraInertia;
                if (this.cameraController != null) {
                    this.m_cameraRig.speed = this.cameraController.cameraSpeed;
                    this.m_cameraRig.inverseRotationSpeed = this.cameraController.invRotationSpeed;
                    if (this.m_cameraRig instanceof BABYLON.UniversalCamera) {
                        this.m_cameraRig.gamepadAngularSensibility = this.cameraController.gamepadRotation;
                        this.m_cameraRig.gamepadMoveSensibility = this.cameraController.gamepadMovement;
                        this.m_cameraRig.touchAngularSensibility = this.cameraController.touchRotation;
                        this.m_cameraRig.touchMoveSensibility = this.cameraController.touchMovement;
                    }
                    if (this.cameraController.keyboardWASD === true) {
                        if (this.m_cameraRig.inputs != null && this.m_cameraRig.inputs.attached != null && this.m_cameraRig.inputs.attached.keyboard != null) {
                            if (this.m_cameraRig.inputs.attached.keyboard instanceof BABYLON.FreeCameraKeyboardMoveInput) {
                                const cinput: BABYLON.FreeCameraKeyboardMoveInput = this.m_cameraRig.inputs.attached.keyboard;
                                cinput.keysUp.push(BABYLON.Toolkit.UserInputKey.W);
                                cinput.keysLeft.push(BABYLON.Toolkit.UserInputKey.A);
                                cinput.keysDown.push(BABYLON.Toolkit.UserInputKey.S);
                                cinput.keysRight.push(BABYLON.Toolkit.UserInputKey.D);
                                cinput.rotationSpeed = this.cameraController.rotationSpeed;
                                if (this.cameraController.arrowKeyRotation === true) {
                                    cinput.keysLeft = [BABYLON.Toolkit.UserInputKey.A];
                                    cinput.keysRight = [BABYLON.Toolkit.UserInputKey.D];
                                    cinput.keysRotateLeft = [BABYLON.Toolkit.UserInputKey.LeftArrow];
                                    cinput.keysRotateRight = [BABYLON.Toolkit.UserInputKey.RightArrow];
                                }
                            }
                        }
                    }
                }
                if (this.m_cameraRig.inputs != null && this.m_cameraRig.inputs.attached != null && this.m_cameraRig.inputs.attached.mouse != null) {
                    const mouseInput: any = this.m_cameraRig.inputs.attached.mouse;
                    // ..
                    // NOTE: Touch Enabled Mouse Hack
                    // ..
                    if (BABYLON.Toolkit.Utilities.HasOwnProperty(mouseInput, "touchEnabled")) {
                        mouseInput.touchEnabled = true;
                    }
                }
                if (this.cameraType === 0 || this.cameraType === 4) { // Universal And Free Target Camera
                    //if (PROJECT.DefaultCameraSystem.PlayerOneCamera == null) {
                    PROJECT.DefaultCameraSystem.PlayerOneCamera = (this.m_cameraRig as BABYLON.FreeCamera);
                    PROJECT.DefaultCameraSystem.PlayerOneCamera.inertia = this.cameraInertia;
                    (<any>PROJECT.DefaultCameraSystem.PlayerOneCamera).transform = this.transform;
                    //}             
                } else if (this.cameraType === 1 || this.cameraType === 2) { // WebXR Camera Types
                    //if (PROJECT.DefaultCameraSystem.PlayerOneCamera == null) {
                    PROJECT.DefaultCameraSystem.PlayerOneCamera = (this.m_cameraRig as BABYLON.FreeCamera);
                    PROJECT.DefaultCameraSystem.PlayerOneCamera.inertia = this.cameraInertia;
                    (<any>PROJECT.DefaultCameraSystem.PlayerOneCamera).transform = this.transform;
                    //}             
                    if (this.immersiveOptions != null) {
                        const localStorageRequired: boolean = (this.immersiveOptions.localStorageOption === true);
                        if (localStorageRequired === false || (localStorageRequired === true && BABYLON.Toolkit.WindowManager.GetVirtualRealityEnabled())) {
                            let webvrFloorMeshes: BABYLON.AbstractMesh[] = null;
                            let webvrHelperOptions: BABYLON.WebXRDefaultExperienceOptions = null;
                            let webvrImmersiveMode: XRSessionMode = (this.cameraType === 1) ? "immersive-ar" : "immersive-vr";
                            let webvrReferenceType: XRReferenceSpaceType = "local-floor";
                            switch (this.immersiveOptions.referenceSpaceType) {
                                case 0:
                                    webvrReferenceType = "viewer";
                                    break;
                                case 1:
                                    webvrReferenceType = "local";
                                    break;
                                case 2:
                                    webvrReferenceType = "local-floor";
                                    break;
                                case 4:
                                    webvrReferenceType = "unbounded";
                                    break;
                                default:
                                    webvrReferenceType = "local-floor";
                                    break;
                            }
                            if (this.immersiveOptions.setFloorMeshesTags == null || this.immersiveOptions.setFloorMeshesTags === "") this.immersiveOptions.setFloorMeshesTags = "Navigation";
                            if (this.immersiveOptions.defaultTeleportationSetup.useTeleportation === true) webvrFloorMeshes = this.scene.getMeshesByTags(this.immersiveOptions.setFloorMeshesTags);
                            if (this.immersiveOptions.defaultTeleportationSetup.useTeleportation === true && webvrFloorMeshes != null && webvrFloorMeshes.length > 0) {
                                webvrHelperOptions = {
                                    floorMeshes: webvrFloorMeshes,
                                    optionalFeatures: this.immersiveOptions.optionalFeatures,
                                    useStablePlugins: this.immersiveOptions.useStablePlugins,
                                    renderingGroupId: this.immersiveOptions.renderingGroupNum,
                                    disableDefaultUI: this.immersiveOptions.disableUserInterface,
                                    disableTeleportation: (this.immersiveOptions.defaultTeleportationSetup.useTeleportation === false),
                                    disablePointerSelection: this.immersiveOptions.disablePointerSelect,
                                    ignoreNativeCameraTransformation: this.immersiveOptions.ignoreNativeCamera,
                                    inputOptions: {
                                        doNotLoadControllerMeshes: this.immersiveOptions.experienceInputOptions.disableMeshLoad,
                                        forceInputProfile: this.immersiveOptions.experienceInputOptions.forceInputProfile,
                                        disableOnlineControllerRepository: this.immersiveOptions.experienceInputOptions.disableRepository,
                                        customControllersRepositoryURL: this.immersiveOptions.experienceInputOptions.customRepository,
                                        disableControllerAnimation: this.immersiveOptions.experienceInputOptions.disableModelAnim,
                                        controllerOptions: {
                                            disableMotionControllerAnimation: this.immersiveOptions.experienceInputOptions.controllerOptions.disableCtrlAnim,
                                            doNotLoadControllerMesh: this.immersiveOptions.experienceInputOptions.controllerOptions.disableCtrlMesh,
                                            forceControllerProfile: this.immersiveOptions.experienceInputOptions.controllerOptions.forceCtrlProfile,
                                            renderingGroupId: this.immersiveOptions.experienceInputOptions.controllerOptions.renderingGroup
                                        }
                                    },
                                    uiOptions: {
                                        sessionMode: webvrImmersiveMode,
                                        referenceSpaceType: webvrReferenceType
                                    }
                                }
                            } else {
                                webvrHelperOptions = {
                                    optionalFeatures: this.immersiveOptions.optionalFeatures,
                                    useStablePlugins: this.immersiveOptions.useStablePlugins,
                                    renderingGroupId: this.immersiveOptions.renderingGroupNum,
                                    disableDefaultUI: this.immersiveOptions.disableUserInterface,
                                    disableTeleportation: (this.immersiveOptions.defaultTeleportationSetup.useTeleportation === false),
                                    disablePointerSelection: this.immersiveOptions.disablePointerSelect,
                                    ignoreNativeCameraTransformation: this.immersiveOptions.ignoreNativeCamera,
                                    inputOptions: {
                                        doNotLoadControllerMeshes: this.immersiveOptions.experienceInputOptions.disableMeshLoad,
                                        forceInputProfile: this.immersiveOptions.experienceInputOptions.forceInputProfile,
                                        disableOnlineControllerRepository: this.immersiveOptions.experienceInputOptions.disableRepository,
                                        customControllersRepositoryURL: this.immersiveOptions.experienceInputOptions.customRepository,
                                        disableControllerAnimation: this.immersiveOptions.experienceInputOptions.disableModelAnim,
                                        controllerOptions: {
                                            disableMotionControllerAnimation: this.immersiveOptions.experienceInputOptions.controllerOptions.disableCtrlAnim,
                                            doNotLoadControllerMesh: this.immersiveOptions.experienceInputOptions.controllerOptions.disableCtrlMesh,
                                            forceControllerProfile: this.immersiveOptions.experienceInputOptions.controllerOptions.forceCtrlProfile,
                                            renderingGroupId: this.immersiveOptions.renderingGroupNum
                                        }
                                    },
                                    uiOptions: {
                                        sessionMode: webvrImmersiveMode,
                                        referenceSpaceType: webvrReferenceType
                                    }
                                }
                            }
                            PROJECT.DefaultCameraSystem.XRExperienceHelper = await this.scene.createDefaultXRExperienceAsync(webvrHelperOptions);
                            if (PROJECT.DefaultCameraSystem.XRExperienceHelper != null && PROJECT.DefaultCameraSystem.XRExperienceHelper.baseExperience != null) {
                                if (PROJECT.DefaultCameraSystem.XRExperienceHelper.teleportation != null) {
                                    PROJECT.DefaultCameraSystem.XRExperienceHelper.teleportation.rotationAngle = BABYLON.Tools.ToRadians(this.immersiveOptions.defaultTeleportationSetup.turningAxisAngle);
                                    PROJECT.DefaultCameraSystem.XRExperienceHelper.teleportation.rotationEnabled = this.immersiveOptions.defaultTeleportationSetup.rotationsEnabled;
                                    PROJECT.DefaultCameraSystem.XRExperienceHelper.teleportation.backwardsMovementEnabled = this.immersiveOptions.defaultTeleportationSetup.backwardsEnabled;
                                    PROJECT.DefaultCameraSystem.XRExperienceHelper.teleportation.backwardsTeleportationDistance = this.immersiveOptions.defaultTeleportationSetup.backwardsDistance;
                                    PROJECT.DefaultCameraSystem.XRExperienceHelper.teleportation.parabolicCheckRadius = this.immersiveOptions.defaultTeleportationSetup.parabolicRadius;
                                }
                                if (PROJECT.DefaultCameraSystem.OnXRExperienceHelperObservable && PROJECT.DefaultCameraSystem.OnXRExperienceHelperObservable.hasObservers()) {
                                    PROJECT.DefaultCameraSystem.OnXRExperienceHelperObservable.notifyObservers(PROJECT.DefaultCameraSystem.XRExperienceHelper);
                                }
                                if (BABYLON.Toolkit.SceneManager.HasNavigationData()) {
                                    const navmesh: BABYLON.Mesh = BABYLON.Toolkit.SceneManager.GetNavigationMesh();
                                    PROJECT.DefaultCameraSystem.SetupNavigationWebXR(navmesh, this.immersiveOptions.setFloorMeshesTags);
                                } else {
                                    BABYLON.Toolkit.SceneManager.OnNavMeshReadyObservable.addOnce((navmesh: BABYLON.Mesh) => {
                                        PROJECT.DefaultCameraSystem.SetupNavigationWebXR(navmesh, this.immersiveOptions.setFloorMeshesTags);
                                    });
                                }
                            } else {
                                BABYLON.Toolkit.SceneManager.LogWarning("WebXR not supported in current browser.");
                            }
                        }
                    }
                } else if (this.cameraType === 3) { // Multi Player Camera
                    const cameraName = this.m_cameraRig.name;
                    //if (PROJECT.DefaultCameraSystem.PlayerOneCamera == null) {
                    const playerOneTransform: BABYLON.TransformNode = new BABYLON.TransformNode("Player Camera 1", this.scene);
                    playerOneTransform.rotationQuaternion = this.transform.rotationQuaternion.clone();
                    playerOneTransform.position = this.transform.position.clone();
                    playerOneTransform.parent = this.transform.parent;
                    // ..
                    const playerOneName: string = cameraName + ".1";
                    const playerOneCamerax: BABYLON.FreeCamera = this.m_cameraRig.clone(playerOneName) as BABYLON.FreeCamera;
                    playerOneCamerax.name = playerOneName;
                    playerOneCamerax.parent = playerOneTransform;
                    playerOneCamerax.position = new BABYLON.Vector3(0, 0, 0);
                    playerOneCamerax.rotationQuaternion = new BABYLON.Quaternion(0, 0, 0, 1);
                    playerOneCamerax.viewport = new BABYLON.Viewport(0, 0, 0, 0);
                    playerOneCamerax.setEnabled(false);
                    PROJECT.DefaultCameraSystem.PlayerOneCamera = playerOneCamerax;
                    PROJECT.DefaultCameraSystem.PlayerOneCamera.inertia = this.cameraInertia;
                    (<any>PROJECT.DefaultCameraSystem.PlayerOneCamera).transform = playerOneTransform;
                    (<any>playerOneTransform).cameraRig = PROJECT.DefaultCameraSystem.PlayerOneCamera;
                    //}             
                    //if (PROJECT.DefaultCameraSystem.PlayerTwoCamera == null) {
                    const playerTwoTransform: BABYLON.TransformNode = new BABYLON.TransformNode("Player Camera 2", this.scene);
                    playerTwoTransform.rotationQuaternion = this.transform.rotationQuaternion.clone();
                    playerTwoTransform.position = this.transform.position.clone();
                    playerTwoTransform.parent = this.transform.parent;
                    // ..
                    const playerTwoName: string = cameraName + ".2";
                    const playerTwoCamerax: BABYLON.FreeCamera = this.m_cameraRig.clone(playerTwoName) as BABYLON.FreeCamera;
                    playerTwoCamerax.name = playerTwoName;
                    playerTwoCamerax.parent = playerTwoTransform;
                    playerTwoCamerax.position = new BABYLON.Vector3(0, 0, 0);
                    playerTwoCamerax.rotationQuaternion = new BABYLON.Quaternion(0, 0, 0, 1);
                    playerTwoCamerax.viewport = new BABYLON.Viewport(0, 0, 0, 0);
                    playerTwoCamerax.setEnabled(false);
                    PROJECT.DefaultCameraSystem.PlayerTwoCamera = playerTwoCamerax;
                    PROJECT.DefaultCameraSystem.PlayerTwoCamera.inertia = this.cameraInertia;
                    (<any>PROJECT.DefaultCameraSystem.PlayerTwoCamera).transform = playerTwoTransform;
                    (<any>playerTwoTransform).cameraRig = PROJECT.DefaultCameraSystem.PlayerTwoCamera;
                    //}
                    //if (PROJECT.DefaultCameraSystem.PlayerThreeCamera == null) {
                    const playerThreeTransform: BABYLON.TransformNode = new BABYLON.TransformNode("Player Camera 3", this.scene);
                    playerThreeTransform.rotationQuaternion = this.transform.rotationQuaternion.clone();
                    playerThreeTransform.position = this.transform.position.clone();
                    playerThreeTransform.parent = this.transform.parent;
                    // ..
                    const playerThreeName: string = cameraName + ".3";
                    const playerThreeCamerax: BABYLON.FreeCamera = this.m_cameraRig.clone(playerThreeName) as BABYLON.FreeCamera;
                    playerThreeCamerax.name = playerThreeName;
                    playerThreeCamerax.parent = playerThreeTransform;
                    playerThreeCamerax.position = new BABYLON.Vector3(0, 0, 0);
                    playerThreeCamerax.rotationQuaternion = new BABYLON.Quaternion(0, 0, 0, 1);
                    playerThreeCamerax.viewport = new BABYLON.Viewport(0, 0, 0, 0);
                    playerThreeCamerax.setEnabled(false);
                    PROJECT.DefaultCameraSystem.PlayerThreeCamera = playerThreeCamerax;
                    PROJECT.DefaultCameraSystem.PlayerThreeCamera.inertia = this.cameraInertia;
                    (<any>PROJECT.DefaultCameraSystem.PlayerThreeCamera).transform = playerThreeTransform;
                    (<any>playerThreeTransform).cameraRig = PROJECT.DefaultCameraSystem.PlayerThreeCamera;
                    //}
                    //if (PROJECT.DefaultCameraSystem.PlayerFourCamera == null) {
                    const playerFourTransform: BABYLON.TransformNode = new BABYLON.TransformNode("Player Camera 4", this.scene);
                    playerFourTransform.rotationQuaternion = this.transform.rotationQuaternion.clone();
                    playerFourTransform.position = this.transform.position.clone();
                    playerFourTransform.parent = this.transform.parent;
                    // ..
                    const playerFourName: string = cameraName + ".4";
                    const playerFourCamerax: BABYLON.FreeCamera = this.m_cameraRig.clone(playerFourName) as BABYLON.FreeCamera;
                    playerFourCamerax.name = playerFourName;
                    playerFourCamerax.parent = playerFourTransform;
                    playerFourCamerax.position = new BABYLON.Vector3(0, 0, 0);
                    playerFourCamerax.rotationQuaternion = new BABYLON.Quaternion(0, 0, 0, 1);
                    playerFourCamerax.viewport = new BABYLON.Viewport(0, 0, 0, 0);
                    playerFourCamerax.setEnabled(false);
                    PROJECT.DefaultCameraSystem.PlayerFourCamera = playerFourCamerax;
                    PROJECT.DefaultCameraSystem.PlayerFourCamera.inertia = this.cameraInertia;
                    (<any>PROJECT.DefaultCameraSystem.PlayerFourCamera).transform = playerFourTransform;
                    (<any>playerFourTransform).cameraRig = PROJECT.DefaultCameraSystem.PlayerFourCamera;
                    //}
                    PROJECT.DefaultCameraSystem.multiPlayerView = true;
                    PROJECT.DefaultCameraSystem.SetMultiPlayerViewLayout(this.scene, PROJECT.DefaultCameraSystem.startupMode);
                }
                // ..
                // Validate Camera Attach Control
                // ..
                if (this.cameraController.attachControl === true) {
                    this.m_cameraRig.parent = null; // Detach Camera Parent When Attaching Control
                    this.m_cameraRig.position.copyFrom(this.transform.position);
                    this.m_cameraRig.rotationQuaternion = (this.transform.rotationQuaternion != null) ? this.transform.rotationQuaternion.clone() : BABYLON.Quaternion.FromEulerAngles(this.transform.rotation.x, this.transform.rotation.y, this.transform.rotation.z);
                    const children: BABYLON.Node[] = this.transform.getChildren(null, true);
                    if (children != null) {
                        children.forEach((child: BABYLON.Node) => { child.parent = this.m_cameraRig; });
                    }
                    if (this.m_cameraRig instanceof BABYLON.FreeCamera) { // Note: Check Base Class For Universal Camera
                        this.m_cameraRig.checkCollisions = this.cameraController.checkCollisions;
                        this.m_cameraRig.applyGravity = this.cameraController.setApplyGravity;
                    }
                    this.m_cameraRig.attachControl(this.cameraController.preventDefault);
                }
            }
            const quality: BABYLON.Toolkit.RenderQuality = BABYLON.Toolkit.RenderQuality.High; // FIXME: BABYLON.Toolkit.SceneManager.GetRenderQuality();
            const allowProcessing: boolean = (quality === BABYLON.Toolkit.RenderQuality.High);
            //if (PROJECT.DefaultCameraSystem.renderingPipeline == null) {
            if (allowProcessing === true && this.editorPostProcessing != null && this.editorPostProcessing.usePostProcessing === true) {
                PROJECT.DefaultCameraSystem.renderingPipeline = new BABYLON.DefaultRenderingPipeline("DefaultCameraSystem", this.editorPostProcessing.highDynamicRange, this.scene, this.scene.cameras, true);
                if (PROJECT.DefaultCameraSystem.renderingPipeline.isSupported === true) {
                    const defaultPipeline: BABYLON.DefaultRenderingPipeline = PROJECT.DefaultCameraSystem.renderingPipeline;
                    defaultPipeline.samples = this.editorPostProcessing.screenAntiAliasing.msaaSamples; // 1 by default (MSAA)
                    /* Image Processing */
                    defaultPipeline.imageProcessingEnabled = this.editorPostProcessing.imageProcessingConfig.imageProcessing; //true by default
                    if (defaultPipeline.imageProcessingEnabled) {
                        defaultPipeline.imageProcessing.contrast = this.editorPostProcessing.imageProcessingConfig.imageContrast; // 1 by default
                        defaultPipeline.imageProcessing.exposure = this.editorPostProcessing.imageProcessingConfig.imageExposure; // 1 by default
                        defaultPipeline.imageProcessing.toneMappingEnabled = this.editorPostProcessing.imageProcessingConfig.toneMapping; // false by default
                        defaultPipeline.imageProcessing.toneMappingType = this.editorPostProcessing.imageProcessingConfig.toneMapType; // standard by default
                        defaultPipeline.imageProcessing.vignetteEnabled = this.editorPostProcessing.imageProcessingConfig.vignetteEnabled;
                        if (defaultPipeline.imageProcessing.vignetteEnabled) {
                            defaultPipeline.imageProcessing.vignetteBlendMode = this.editorPostProcessing.imageProcessingConfig.vignetteBlendMode;
                            defaultPipeline.imageProcessing.vignetteCameraFov = this.editorPostProcessing.imageProcessingConfig.vignetteCameraFov;
                            defaultPipeline.imageProcessing.vignetteCentreX = this.editorPostProcessing.imageProcessingConfig.vignetteCentreX;
                            defaultPipeline.imageProcessing.vignetteCentreY = this.editorPostProcessing.imageProcessingConfig.vignetteCentreY;
                            defaultPipeline.imageProcessing.vignetteStretch = this.editorPostProcessing.imageProcessingConfig.vignetteStretch;
                            defaultPipeline.imageProcessing.vignetteWeight = this.editorPostProcessing.imageProcessingConfig.vignetteWeight;
                            if (this.editorPostProcessing.imageProcessingConfig.vignetteColor != null) {
                                const vcolor: BABYLON.Color4 = BABYLON.Toolkit.Utilities.ParseColor4(this.editorPostProcessing.imageProcessingConfig.vignetteColor);
                                if (vcolor != null) defaultPipeline.imageProcessing.vignetteColor = vcolor;
                            }
                        }
                        /* Color Grading */
                        defaultPipeline.imageProcessing.colorGradingEnabled = this.editorPostProcessing.imageProcessingConfig.useColorGrading; // false by default
                        if (defaultPipeline.imageProcessing.colorGradingEnabled) {
                            // KEEP FOR REFERENCE
                            /* using .3dl (best) : defaultPipeline.imageProcessing.colorGradingTexture = new BABYLON.ColorGradingTexture("textures/LateSunset.3dl", this.scene); */
                            /* using .png :
                            var colorGradingTexture = new BABYLON.Texture("textures/colorGrade-highContrast.png", this.scene, true, false);
                            colorGradingTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
                            colorGradingTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;                
                            defaultPipeline.imageProcessing.colorGradingTexture = colorGradingTexture;
                            defaultPipeline.imageProcessing.colorGradingWithGreenDepth = false; */
                            //////////////////////////////////////////////////////////////////////////
                            if (this.editorPostProcessing.imageProcessingConfig.setGradingTexture != null) {
                                const colorGradingTexture: BABYLON.Texture = BABYLON.Toolkit.Utilities.ParseTexture(this.editorPostProcessing.imageProcessingConfig.setGradingTexture, this.scene, true, false);
                                colorGradingTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
                                colorGradingTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
                                defaultPipeline.imageProcessing.colorGradingTexture = colorGradingTexture;
                                (<any>defaultPipeline.imageProcessing).colorGradingWithGreenDepth = false;
                            }
                        }
                        /* Color Curves */
                        defaultPipeline.imageProcessing.colorCurvesEnabled = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.curvesEnabled; // false by default
                        if (defaultPipeline.imageProcessing.colorCurvesEnabled) {
                            var curve = new BABYLON.ColorCurves();
                            curve.globalDensity = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.globalDen; // 0 by default
                            curve.globalExposure = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.globalExp; // 0 by default
                            curve.globalHue = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.globalHue; // 30 by default
                            curve.globalSaturation = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.globalSat; // 0 by default
                            curve.highlightsDensity = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.highlightsDen; // 0 by default
                            curve.highlightsExposure = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.highlightsExp; // 0 by default
                            curve.highlightsHue = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.highlightsHue; // 30 by default
                            curve.highlightsSaturation = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.highlightsSat; // 0 by default
                            curve.midtonesDensity = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.midtonesDen; // 0 by default
                            curve.midtonesExposure = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.midtonesExp; // 0 by default
                            curve.midtonesHue = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.midtonesHue; // 30 by default
                            curve.midtonesSaturation = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.midtonesSat; // 0 by default
                            curve.shadowsDensity = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.shadowsDen; // 0 by default
                            curve.shadowsExposure = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.shadowsExp; // 800 by default
                            curve.shadowsHue = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.shadowsHue; // 30 by default
                            curve.shadowsSaturation = this.editorPostProcessing.imageProcessingConfig.imagingColorCurves.shadowsSat; // 0 by default;
                            defaultPipeline.imageProcessing.colorCurves = curve;
                        }
                    }
                    /* Bloom */
                    defaultPipeline.bloomEnabled = this.editorPostProcessing.bloomEffectProperties.bloomEnabled; // false by default
                    if (defaultPipeline.bloomEnabled) {
                        defaultPipeline.bloomKernel = this.editorPostProcessing.bloomEffectProperties.bloomKernel; // 64 by default
                        defaultPipeline.bloomScale = this.editorPostProcessing.bloomEffectProperties.bloomScale; // 0.5 by default
                        defaultPipeline.bloomWeight = this.editorPostProcessing.bloomEffectProperties.bloomWeight; // 0.15 by default
                        defaultPipeline.bloomThreshold = this.editorPostProcessing.bloomEffectProperties.bloomThreshold; // 0.9 by default
                    }
                    /* Chromatic Abberation */
                    defaultPipeline.chromaticAberrationEnabled = this.editorPostProcessing.chromaticAberration.aberrationEnabled; // false by default
                    if (defaultPipeline.chromaticAberrationEnabled) {
                        defaultPipeline.chromaticAberration.aberrationAmount = this.editorPostProcessing.chromaticAberration.aberrationAmount; // 30 by default
                        defaultPipeline.chromaticAberration.adaptScaleToCurrentViewport = this.editorPostProcessing.chromaticAberration.adaptScaleViewport; // false by default
                        defaultPipeline.chromaticAberration.alphaMode = this.editorPostProcessing.chromaticAberration.alphaMode; // 0 by default
                        defaultPipeline.chromaticAberration.alwaysForcePOT = this.editorPostProcessing.chromaticAberration.alwaysForcePOT; // false by default
                        defaultPipeline.chromaticAberration.enablePixelPerfectMode = this.editorPostProcessing.chromaticAberration.pixelPerfectMode; // false by default
                        defaultPipeline.chromaticAberration.forceFullscreenViewport = this.editorPostProcessing.chromaticAberration.fullscreenViewport; // true by default
                    }
                    /* DOF */
                    defaultPipeline.depthOfFieldEnabled = this.editorPostProcessing.focalDepthOfField.depthOfField; // false by default
                    if (defaultPipeline.depthOfFieldEnabled && defaultPipeline.depthOfField.isSupported) {
                        defaultPipeline.depthOfFieldBlurLevel = this.editorPostProcessing.focalDepthOfField.blurLevel; // 0 by default
                        defaultPipeline.depthOfField.fStop = this.editorPostProcessing.focalDepthOfField.focalStop; // 1.4 by default
                        defaultPipeline.depthOfField.focalLength = this.editorPostProcessing.focalDepthOfField.focalLength; // 50 by default, mm
                        defaultPipeline.depthOfField.focusDistance = this.editorPostProcessing.focalDepthOfField.focusDistance; // 2000 by default, mm
                        defaultPipeline.depthOfField.lensSize = this.editorPostProcessing.focalDepthOfField.maxLensSize; // 50 by default
                    }
                    /* FXAA */
                    defaultPipeline.fxaaEnabled = this.editorPostProcessing.screenAntiAliasing.fxaaEnabled; // false by default
                    if (defaultPipeline.fxaaEnabled) {
                        defaultPipeline.fxaa.samples = this.editorPostProcessing.screenAntiAliasing.fxaaSamples; // 1 by default
                        defaultPipeline.fxaa.adaptScaleToCurrentViewport = this.editorPostProcessing.screenAntiAliasing.fxaaScaling; // false by default
                    }
                    /* GlowLayer */
                    defaultPipeline.glowLayerEnabled = this.editorPostProcessing.glowLayerProperties.glowEnabled;
                    if (defaultPipeline.glowLayerEnabled) {
                        defaultPipeline.glowLayer.intensity = this.editorPostProcessing.glowLayerProperties.glowIntensity; // 1 by default
                        defaultPipeline.glowLayer.blurKernelSize = this.editorPostProcessing.glowLayerProperties.blurKernelSize; // 16 by default
                    }
                    /* Grain */
                    defaultPipeline.grainEnabled = this.editorPostProcessing.grainEffectProperties.grainEnabled;
                    if (defaultPipeline.grainEnabled) {
                        defaultPipeline.grain.animated = this.editorPostProcessing.grainEffectProperties.grainAnimated; // false by default
                        defaultPipeline.grain.intensity = this.editorPostProcessing.grainEffectProperties.grainIntensity; // 30 by default
                        defaultPipeline.grain.adaptScaleToCurrentViewport = this.editorPostProcessing.grainEffectProperties.adaptScaleViewport; // false by default
                    }
                    /* Sharpen */
                    defaultPipeline.sharpenEnabled = this.editorPostProcessing.sharpEffectProperties.sharpenEnabled;
                    if (defaultPipeline.sharpenEnabled) {
                        defaultPipeline.sharpen.edgeAmount = this.editorPostProcessing.sharpEffectProperties.sharpEdgeAmount; // 0.3 by default
                        defaultPipeline.sharpen.colorAmount = this.editorPostProcessing.sharpEffectProperties.sharpColorAmount; // 1 by default
                        defaultPipeline.sharpen.adaptScaleToCurrentViewport = this.editorPostProcessing.sharpEffectProperties.adaptScaleViewport; // false by default
                    }
                } else {
                    BABYLON.Toolkit.SceneManager.LogWarning("Babylon.js default rendering pipeline not supported");
                }
                // ..
                // Screen Space Ambient Occlusion
                // ..
                if (this.editorPostProcessing.screenSpaceRendering != null && this.editorPostProcessing.screenSpaceRendering.SSAO === true) {
                    const ssaoRatio: any = {
                        ssaoRatio: this.editorPostProcessing.screenSpaceRendering.SSAORatio,     // Ratio of the SSAO post-process, in a lower resolution
                        combineRatio: this.editorPostProcessing.screenSpaceRendering.combineRatio   // Ratio of the combine post-process (combines the SSAO and the scene)
                    };
                    PROJECT.DefaultCameraSystem.screenSpacePipeline = new BABYLON.SSAORenderingPipeline("DefaultCameraSystem-SSAO", this.scene, ssaoRatio, this.scene.cameras);
                    if (PROJECT.DefaultCameraSystem.screenSpacePipeline.isSupported === true) {
                        const ssaoPipeline: BABYLON.SSAORenderingPipeline = PROJECT.DefaultCameraSystem.screenSpacePipeline;
                        ssaoPipeline.fallOff = this.editorPostProcessing.screenSpaceRendering.fallOff;
                        ssaoPipeline.area = this.editorPostProcessing.screenSpaceRendering.area;
                        ssaoPipeline.radius = this.editorPostProcessing.screenSpaceRendering.radius;
                        ssaoPipeline.totalStrength = this.editorPostProcessing.screenSpaceRendering.totalStrength;
                        ssaoPipeline.base = this.editorPostProcessing.screenSpaceRendering.baseValue;
                    } else {
                        BABYLON.Toolkit.SceneManager.LogWarning("Babylon.js SSAO rendering pipeline not supported");
                    }
                }
            }
            //}
            PROJECT.DefaultCameraSystem.cameraReady = true;
        }
        protected updateCameraSystemState(): void {
            if (this.m_cameraRig != null) {
                if (this.cameraType === 0) {        // Default Universal Camera
                } else if (this.cameraType === 1) { // Augmented Reality Camera
                } else if (this.cameraType === 2) { // Virtual Reality Camera
                } else if (this.cameraType === 3) { // Multi Player Camera
                }
            }
        }
        protected cleanCameraSystemState(): void {
            if (PROJECT.DefaultCameraSystem.PlayerOneCamera != null) {
                //PROJECT.DefaultCameraSystem.PlayerOneCamera.dispose();
                PROJECT.DefaultCameraSystem.PlayerOneCamera = null;
            }
            if (PROJECT.DefaultCameraSystem.PlayerTwoCamera != null) {
                //PROJECT.DefaultCameraSystem.PlayerTwoCamera.dispose();
                PROJECT.DefaultCameraSystem.PlayerTwoCamera = null;
            }
            if (PROJECT.DefaultCameraSystem.PlayerThreeCamera != null) {
                //PROJECT.DefaultCameraSystem.PlayerThreeCamera.dispose();
                PROJECT.DefaultCameraSystem.PlayerThreeCamera = null;
            }
            if (PROJECT.DefaultCameraSystem.PlayerFourCamera != null) {
                //PROJECT.DefaultCameraSystem.PlayerFourCamera.dispose();
                PROJECT.DefaultCameraSystem.PlayerFourCamera = null;
            }
        }
        protected destroyCameraSystemState(): void {
            this.immersiveOptions = null;
        }

        ////////////////////////////////////////////////////////////////////////////////////
        // Universal Camera Virtual Reality Functions
        ////////////////////////////////////////////////////////////////////////////////////

        /** Get the WebXR default experience helper */
        public static GetWebXR(): BABYLON.WebXRDefaultExperience { return PROJECT.DefaultCameraSystem.XRExperienceHelper; }
        /** Is universal camera system in WebXR mode */
        public static IsInWebXR(): boolean { return (PROJECT.DefaultCameraSystem.XRExperienceHelper != null && PROJECT.DefaultCameraSystem.XRExperienceHelper.baseExperience != null && PROJECT.DefaultCameraSystem.XRExperienceHelper.baseExperience.state === BABYLON.WebXRState.IN_XR); }
        /** Setup navigation mesh for WebXR */
        private static SetupNavigationWebXR(mesh: BABYLON.Mesh, tag: string): void {
            const webxr: BABYLON.WebXRDefaultExperience = PROJECT.DefaultCameraSystem.XRExperienceHelper;
            if (webxr != null && webxr.teleportation != null && mesh != null && tag != null && tag != "") {
                const hastag: boolean = BABYLON.Tags.MatchesQuery(mesh, tag);
                if (hastag === true) webxr.teleportation.addFloorMesh(mesh);
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////
        // Universal Camera System Player Functions
        ////////////////////////////////////////////////////////////////////////////////////

        /** Get main camera rig for the scene */
        public static GetMainCamera(scene: BABYLON.Scene, detach: boolean = false): BABYLON.FreeCamera {
            return PROJECT.DefaultCameraSystem.GetPlayerCamera(scene, BABYLON.Toolkit.PlayerNumber.One, detach);
        }
        /** Get universal camera rig for desired player */
        public static GetPlayerCamera(scene: BABYLON.Scene, player: BABYLON.Toolkit.PlayerNumber = BABYLON.Toolkit.PlayerNumber.One, detach: boolean = false): BABYLON.FreeCamera {
            let result: BABYLON.FreeCamera = null;
            let transform: BABYLON.TransformNode = PROJECT.DefaultCameraSystem.GetCameraTransform(scene, player);
            if (PROJECT.DefaultCameraSystem.IsCameraSystemReady()) {
                if (player === BABYLON.Toolkit.PlayerNumber.One && PROJECT.DefaultCameraSystem.PlayerOneCamera != null) result = PROJECT.DefaultCameraSystem.PlayerOneCamera;
                else if (player === BABYLON.Toolkit.PlayerNumber.Two && PROJECT.DefaultCameraSystem.PlayerTwoCamera != null) result = PROJECT.DefaultCameraSystem.PlayerTwoCamera;
                else if (player === BABYLON.Toolkit.PlayerNumber.Three && PROJECT.DefaultCameraSystem.PlayerThreeCamera != null) result = PROJECT.DefaultCameraSystem.PlayerThreeCamera;
                else if (player === BABYLON.Toolkit.PlayerNumber.Four && PROJECT.DefaultCameraSystem.PlayerFourCamera != null) result = PROJECT.DefaultCameraSystem.PlayerFourCamera;
                if (result != null && detach === true && parent != null) {
                    result.parent = null;
                    if (transform != null) {
                        result.position.copyFrom(transform.position);
                        result.rotationQuaternion = (transform.rotationQuaternion != null) ? transform.rotationQuaternion.clone() : BABYLON.Quaternion.FromEulerAngles(transform.rotation.x, transform.rotation.y, transform.rotation.z);
                        const children: BABYLON.Node[] = transform.getChildren(null, true);
                        if (children != null) {
                            children.forEach((child: BABYLON.Node) => { child.parent = result; });
                        }
                    }
                }
            }
            return result;
        }
        /** Get camera transform node for desired player */
        public static GetCameraTransform(scene: BABYLON.Scene, player: BABYLON.Toolkit.PlayerNumber = BABYLON.Toolkit.PlayerNumber.One): BABYLON.TransformNode {
            let result: BABYLON.TransformNode = null;
            if (PROJECT.DefaultCameraSystem.IsCameraSystemReady()) {
                if (player === BABYLON.Toolkit.PlayerNumber.One && PROJECT.DefaultCameraSystem.PlayerOneCamera != null && (<any>PROJECT.DefaultCameraSystem.PlayerOneCamera).transform != null) result = (<any>PROJECT.DefaultCameraSystem.PlayerOneCamera).transform;
                else if (player === BABYLON.Toolkit.PlayerNumber.Two && PROJECT.DefaultCameraSystem.PlayerTwoCamera != null && (<any>PROJECT.DefaultCameraSystem.PlayerTwoCamera).transform != null) result = (<any>PROJECT.DefaultCameraSystem.PlayerTwoCamera).transform;
                else if (player === BABYLON.Toolkit.PlayerNumber.Three && PROJECT.DefaultCameraSystem.PlayerThreeCamera != null && (<any>PROJECT.DefaultCameraSystem.PlayerThreeCamera).transform != null) result = (<any>PROJECT.DefaultCameraSystem.PlayerThreeCamera).transform;
                else if (player === BABYLON.Toolkit.PlayerNumber.Four && PROJECT.DefaultCameraSystem.PlayerFourCamera != null && (<any>PROJECT.DefaultCameraSystem.PlayerFourCamera).transform != null) result = (<any>PROJECT.DefaultCameraSystem.PlayerFourCamera).transform;
            }
            return result;
        }

        ////////////////////////////////////////////////////////////////////////////////////
        // Universal Camera System Multi Player Functions
        ////////////////////////////////////////////////////////////////////////////////////

        /** Are stereo side side camera services available. */
        public static IsStereoCameras(): boolean {
            return PROJECT.DefaultCameraSystem.stereoCameras;
        }
        /** Are local multi player view services available. */
        public static IsMultiPlayerView(): boolean {
            return PROJECT.DefaultCameraSystem.multiPlayerView;
        }
        /** Get the current local multi player count */
        public static GetMultiPlayerCount(): number {
            return PROJECT.DefaultCameraSystem.multiPlayerCount;
        }
        /** Activates current local multi player cameras. */
        public static ActivateMultiPlayerCameras(scene: BABYLON.Scene): boolean {
            let result: boolean = false;
            if (PROJECT.DefaultCameraSystem.multiPlayerCameras != null && PROJECT.DefaultCameraSystem.multiPlayerCameras.length > 0) {
                scene.activeCameras = PROJECT.DefaultCameraSystem.multiPlayerCameras;
                result = true;
            }
            return result;
        }
        /** Disposes current local multiplayer cameras */
        public static DisposeMultiPlayerCameras(): void {
            if (PROJECT.DefaultCameraSystem.PlayerOneCamera != null) {
                PROJECT.DefaultCameraSystem.PlayerOneCamera.dispose();
                PROJECT.DefaultCameraSystem.PlayerOneCamera = null;
            }
            if (PROJECT.DefaultCameraSystem.PlayerTwoCamera != null) {
                PROJECT.DefaultCameraSystem.PlayerTwoCamera.dispose();
                PROJECT.DefaultCameraSystem.PlayerTwoCamera = null;
            }
            if (PROJECT.DefaultCameraSystem.PlayerThreeCamera != null) {
                PROJECT.DefaultCameraSystem.PlayerThreeCamera.dispose();
                PROJECT.DefaultCameraSystem.PlayerThreeCamera = null;
            }
            if (PROJECT.DefaultCameraSystem.PlayerFourCamera != null) {
                PROJECT.DefaultCameraSystem.PlayerFourCamera.dispose();
                PROJECT.DefaultCameraSystem.PlayerFourCamera = null;
            }
        }
        /** Sets the multi player camera view layout */
        public static SetMultiPlayerViewLayout(scene: BABYLON.Scene, totalNumPlayers: number): boolean {
            let result: boolean = false;
            let players: number = BABYLON.Scalar.Clamp(totalNumPlayers, 1, 4);
            if (PROJECT.DefaultCameraSystem.IsMultiPlayerView()) {
                if (PROJECT.DefaultCameraSystem.PlayerOneCamera != null && PROJECT.DefaultCameraSystem.PlayerTwoCamera != null && PROJECT.DefaultCameraSystem.PlayerThreeCamera != null && PROJECT.DefaultCameraSystem.PlayerFourCamera != null) {
                    PROJECT.DefaultCameraSystem.multiPlayerCameras = [];
                    if (players === 1) {
                        PROJECT.DefaultCameraSystem.PlayerOneCamera.viewport = new BABYLON.Viewport(0, 0, 1, 1);
                        PROJECT.DefaultCameraSystem.PlayerTwoCamera.viewport = new BABYLON.Viewport(0, 0, 0, 0);
                        PROJECT.DefaultCameraSystem.PlayerTwoCamera.setEnabled(false);
                        PROJECT.DefaultCameraSystem.PlayerThreeCamera.viewport = new BABYLON.Viewport(0, 0, 0, 0);
                        PROJECT.DefaultCameraSystem.PlayerThreeCamera.setEnabled(false);
                        PROJECT.DefaultCameraSystem.PlayerFourCamera.viewport = new BABYLON.Viewport(0, 0, 0, 0);
                        PROJECT.DefaultCameraSystem.PlayerFourCamera.setEnabled(false);
                        PROJECT.DefaultCameraSystem.multiPlayerCameras.push(PROJECT.DefaultCameraSystem.PlayerOneCamera);
                    } else if (players === 2) {
                        if (PROJECT.DefaultCameraSystem.stereoCameras === true) {
                            PROJECT.DefaultCameraSystem.PlayerOneCamera.viewport = new BABYLON.Viewport(0, 0, 0.5, 1);
                            PROJECT.DefaultCameraSystem.PlayerTwoCamera.viewport = new BABYLON.Viewport(0.5, 0, 0.5, 1);
                        } else {
                            PROJECT.DefaultCameraSystem.PlayerOneCamera.viewport = new BABYLON.Viewport(0, 0.5, 1, 0.5);
                            PROJECT.DefaultCameraSystem.PlayerTwoCamera.viewport = new BABYLON.Viewport(0, 0, 1, 0.5);
                        }
                        PROJECT.DefaultCameraSystem.PlayerTwoCamera.setEnabled(true);
                        PROJECT.DefaultCameraSystem.PlayerThreeCamera.viewport = new BABYLON.Viewport(0, 0, 0, 0);
                        PROJECT.DefaultCameraSystem.PlayerThreeCamera.setEnabled(false);
                        PROJECT.DefaultCameraSystem.PlayerFourCamera.viewport = new BABYLON.Viewport(0, 0, 0, 0);
                        PROJECT.DefaultCameraSystem.PlayerFourCamera.setEnabled(false);
                        PROJECT.DefaultCameraSystem.multiPlayerCameras.push(PROJECT.DefaultCameraSystem.PlayerOneCamera);
                        PROJECT.DefaultCameraSystem.multiPlayerCameras.push(PROJECT.DefaultCameraSystem.PlayerTwoCamera);
                    } else if (players === 3) {
                        PROJECT.DefaultCameraSystem.PlayerOneCamera.viewport = new BABYLON.Viewport(0, 0, 0.5, 1);
                        PROJECT.DefaultCameraSystem.PlayerTwoCamera.viewport = new BABYLON.Viewport(0.5, 0.5, 0.5, 0.5);
                        PROJECT.DefaultCameraSystem.PlayerTwoCamera.setEnabled(true);
                        PROJECT.DefaultCameraSystem.PlayerThreeCamera.viewport = new BABYLON.Viewport(0.5, 0, 0.5, 0.5);
                        PROJECT.DefaultCameraSystem.PlayerThreeCamera.setEnabled(true);
                        PROJECT.DefaultCameraSystem.PlayerFourCamera.viewport = new BABYLON.Viewport(0, 0, 0, 0);
                        PROJECT.DefaultCameraSystem.PlayerFourCamera.setEnabled(false);
                        PROJECT.DefaultCameraSystem.multiPlayerCameras.push(PROJECT.DefaultCameraSystem.PlayerOneCamera);
                        PROJECT.DefaultCameraSystem.multiPlayerCameras.push(PROJECT.DefaultCameraSystem.PlayerTwoCamera);
                        PROJECT.DefaultCameraSystem.multiPlayerCameras.push(PROJECT.DefaultCameraSystem.PlayerThreeCamera);
                    } else if (players === 4) {
                        PROJECT.DefaultCameraSystem.PlayerOneCamera.viewport = new BABYLON.Viewport(0, 0.5, 0.5, 0.5);
                        PROJECT.DefaultCameraSystem.PlayerTwoCamera.viewport = new BABYLON.Viewport(0, 0, 0.5, 0.5);
                        PROJECT.DefaultCameraSystem.PlayerTwoCamera.setEnabled(true);
                        PROJECT.DefaultCameraSystem.PlayerThreeCamera.viewport = new BABYLON.Viewport(0.5, 0.5, 0.5, 0.5);
                        PROJECT.DefaultCameraSystem.PlayerThreeCamera.setEnabled(true);
                        PROJECT.DefaultCameraSystem.PlayerFourCamera.viewport = new BABYLON.Viewport(0.5, 0, 0.5, 0.5);
                        PROJECT.DefaultCameraSystem.PlayerFourCamera.setEnabled(true);
                        PROJECT.DefaultCameraSystem.multiPlayerCameras.push(PROJECT.DefaultCameraSystem.PlayerOneCamera);
                        PROJECT.DefaultCameraSystem.multiPlayerCameras.push(PROJECT.DefaultCameraSystem.PlayerTwoCamera);
                        PROJECT.DefaultCameraSystem.multiPlayerCameras.push(PROJECT.DefaultCameraSystem.PlayerThreeCamera);
                        PROJECT.DefaultCameraSystem.multiPlayerCameras.push(PROJECT.DefaultCameraSystem.PlayerFourCamera);
                    } else {
                        BABYLON.Toolkit.SceneManager.LogWarning("Babylon.js camera rig invalid player count specified: " + players);
                    }
                } else {
                    BABYLON.Toolkit.SceneManager.LogWarning("Babylon.js camera rig failed to initialize multi player cameras");
                }
                PROJECT.DefaultCameraSystem.multiPlayerCount = players;
                result = PROJECT.DefaultCameraSystem.ActivateMultiPlayerCameras(scene);
                if (result === false) BABYLON.Toolkit.SceneManager.LogWarning("Babylon.js camera rig failed to initialize multi player views");
            } else {
                BABYLON.Toolkit.SceneManager.LogWarning("Babylon.js camera rig multi player view option not enabled");
            }
            return result;
        }
    }
    /*********************************************/
    /** Camera Editor Properties Support Classes */
    /*********************************************/
    export interface IEditorArcRtotate {
        alpha: number;
        beta: number;
        radius: number;
        target: BABYLON.Toolkit.IUnityVector3;
    }
    export interface IEditorPostProcessing {
        usePostProcessing: boolean;
        highDynamicRange: boolean;
        screenAntiAliasing: PROJECT.IEditorAntiAliasing;
        focalDepthOfField: PROJECT.IEditorDepthOfField;
        chromaticAberration: PROJECT.IEditorChromaticAberration;
        glowLayerProperties: PROJECT.IEditorGlowLayer;
        grainEffectProperties: PROJECT.IEditorGrainEffect;
        sharpEffectProperties: PROJECT.IEditorSharpenEffect;
        bloomEffectProperties: PROJECT.IEditorBloomProcessing;
        imageProcessingConfig: PROJECT.IEditorImageProcessing;
        screenSpaceRendering: PROJECT.IEditorScreenSpace;
    }
    export interface IEditorScreenSpace {
        SSAO: boolean;
        SSAORatio: number;
        combineRatio: number;
        totalStrength: number;
        radius: number;
        area: number;
        fallOff: number;
        baseValue: number;
    }
    export interface IEditorAntiAliasing {
        msaaSamples: number;
        fxaaEnabled: boolean;
        fxaaScaling: boolean;
        fxaaSamples: number;
    }
    export interface IEditorDepthOfField {
        depthOfField: boolean;
        blurLevel: number;
        focalStop: number;
        focalLength: number;
        focusDistance: number;
        maxLensSize: number;
    }
    export interface IEditorChromaticAberration {
        aberrationEnabled: boolean;
        aberrationAmount: number;
        adaptScaleViewport: boolean;
        alphaMode: number;
        alwaysForcePOT: boolean;
        pixelPerfectMode: boolean;
        fullscreenViewport: boolean;
    }
    export interface IEditorGlowLayer {
        glowEnabled: boolean;
        glowIntensity: number;
        blurKernelSize: number;
    }
    export interface IEditorGrainEffect {
        grainEnabled: boolean;
        grainAnimated: boolean;
        grainIntensity: number;
        adaptScaleViewport: boolean;
    }
    export interface IEditorSharpenEffect {
        sharpenEnabled: boolean;
        sharpEdgeAmount: number;
        sharpColorAmount: number;
        adaptScaleViewport: boolean;
    }
    export interface IEditorBloomProcessing {
        bloomEnabled: boolean;
        bloomKernel: number;
        bloomScale: number;
        bloomWeight: number;
        bloomThreshold: number;
    }
    export interface IEditorColorCurves {
        curvesEnabled: boolean;
        globalDen: number;
        globalExp: number;
        globalHue: number;
        globalSat: number;
        highlightsDen: number;
        highlightsExp: number;
        highlightsHue: number;
        highlightsSat: number;
        midtonesDen: number;
        midtonesExp: number;
        midtonesHue: number;
        midtonesSat: number;
        shadowsDen: number;
        shadowsExp: number;
        shadowsHue: number;
        shadowsSat: number;
    }
    export interface IEditorImageProcessing {
        imageProcessing: boolean;
        imageContrast: number;
        imageExposure: number;
        toneMapping: boolean;
        toneMapType: number;
        vignetteEnabled: boolean;
        vignetteBlendMode: number;
        vignetteCameraFov: number;
        vignetteStretch: number;
        vignetteCentreX: number;
        vignetteCentreY: number;
        vignetteWeight: number;
        vignetteColor: BABYLON.Toolkit.IUnityColor;
        useColorGrading: boolean;
        setGradingTexture: any;
        imagingColorCurves: PROJECT.IEditorColorCurves;
    }
}