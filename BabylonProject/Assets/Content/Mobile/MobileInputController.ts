module PROJECT {
    /**
    * Babylon Script Component
    * @class MobileInputController
    */
    export class MobileInputController extends BABYLON.Toolkit.ScriptComponent {
        public static get Instance(): PROJECT.MobileInputController { return PROJECT.MobileInputController.StaticInstance; }
        private static StaticInstance: PROJECT.MobileInputController = null;
        private styleSheet: string = null;
        // DEPRECATED: private htmlMarkup: string = null;
        private controlType: number = 0;
        private parentElement: string = "root";
        private maxReadyTimeout: number = 200;
        private maxMoveDistance: number = 28;
        private maxMoveDeadzone: number = 4;
        private uiParentElement: HTMLElement = null;
        private leftBaseElement: HTMLDivElement = null;
        private rightBaseElement: HTMLDivElement = null;
        private buttonBaseElement: HTMLDivElement = null;
        private leftStickStyle: number = 0;
        private rightStickStyle: number = 0;
        private leftStickFactor: number = 1.0;
        private rightStickFactor: number = 1.0;
        private invertLeftStickY: boolean = true;
        private centerLeftJoystick: boolean = false;
        private enableLeftJoystick: boolean = true;
        private invertRightStickY: boolean = true;
        private centerRightJoystick: boolean = false;
        private enableRightJoystick: boolean = true;
        private enableMouseAxes: boolean = false;
        private enableVirtualButtons: boolean = false;
        private virtualButtonControls: any = null;

        protected m_leftStick: BABYLON.Toolkit.TouchJoystickHandler = null;
        protected m_rightStick: BABYLON.Toolkit.TouchJoystickHandler = null;
        protected m_mobileDevice: boolean = false;

        public getLeftStick(): BABYLON.Toolkit.TouchJoystickHandler { return this.m_leftStick; }
        public getRightStick(): BABYLON.Toolkit.TouchJoystickHandler { return this.m_rightStick; }
        public getLeftStickEnabled(): boolean { return this.enableLeftJoystick; }
        public getRightStickEnabled(): boolean { return this.enableRightJoystick; }
        public getLeftStickElement(): HTMLDivElement { return this.leftBaseElement; }
        public getRightStickElement(): HTMLDivElement { return this.rightBaseElement; }
        public showLeftStickElement(show: boolean) { if (this.leftBaseElement != null) this.leftBaseElement.style.display = (show === true) ? "block" : "none"; }
        public showRightStickElement(show: boolean) { if (this.rightBaseElement != null) this.rightBaseElement.style.display = (show === true) ? "block" : "none"; }

        constructor(transform: BABYLON.TransformNode, scene: BABYLON.Scene, properties?: any) {
            super(transform, scene, properties);
            PROJECT.MobileInputController.StaticInstance = this;
        }

        protected awake(): void {
            if (this.controlType === 1 || this.m_mobileDevice === true) {
                this.m_mobileDevice = BABYLON.Toolkit.WindowManager.IsMobile();
                //window.addEventListener("orientationchange", () => { this.checkOrientation(); });
                //this.checkOrientation();
            }
            const rootElement: HTMLElement = (this.parentElement != null && this.parentElement !== "" && this.parentElement.toLowerCase() !== "body") ? document.getElementById(this.parentElement) : null;
            this.uiParentElement = (rootElement != null) ? rootElement : document.body;
        }

        protected start(): void {
            if (this.controlType === 1 || this.m_mobileDevice === true) {
                this.loadStyleSheet();
                this.loadHtmlMarkup();
            }
        }

        protected ready(): void {
            if (this.controlType === 1 || this.m_mobileDevice === true) {
                BABYLON.Toolkit.SceneManager.VirtualJoystickEnabled = !this.enableMouseAxes; // Note: Disable MouseX And MouseY User Input Axes
                const displayTimeout: number = (this.maxReadyTimeout >= 10) ? this.maxReadyTimeout : 10;
                BABYLON.Toolkit.WindowManager.SetTimeout(displayTimeout, () => {
                    this.createHtmlElements();
                    if (this.enableLeftJoystick === true) this.m_leftStick = new BABYLON.Toolkit.TouchJoystickHandler("stick1", this.maxMoveDistance, this.maxMoveDeadzone);
                    if (this.enableRightJoystick === true) this.m_rightStick = new BABYLON.Toolkit.TouchJoystickHandler("stick2", this.maxMoveDistance, this.maxMoveDeadzone);
                });
            }
        }

        protected update(): void {
            if (this.controlType === 1 || this.m_mobileDevice === true) {
                if (BABYLON.Toolkit.InputController.AllowMobileControls === true) {
                    // ..
                    // TODO: Validate Mobile Control Visuals Are Enabled
                    // ..
                    if (this.enableLeftJoystick === true && this.m_leftStick != null) {
                        BABYLON.Toolkit.InputController.MobileControlsActive = true;
                        const leftStickValueX: number = this.m_leftStick.getValueX();
                        const leftStickValueY: number = this.m_leftStick.getValueY();
                        const leftStickFixedX: number = BABYLON.Scalar.Clamp((leftStickValueX * this.leftStickFactor), -1, 1);
                        const leftStickFixedY: number = BABYLON.Scalar.Clamp((leftStickValueY * this.leftStickFactor), -1, 1);
                        BABYLON.Toolkit.InputController.SetLeftJoystickBuffer(leftStickFixedX, leftStickFixedY, this.invertLeftStickY);
                    }
                    if (this.enableRightJoystick === true && this.m_rightStick != null) {
                        BABYLON.Toolkit.InputController.MobileControlsActive = true;
                        const rightStickValueX: number = this.m_rightStick.getValueX();
                        const rightStickValueY: number = this.m_rightStick.getValueY();
                        const rightStickFixedX: number = BABYLON.Scalar.Clamp((rightStickValueX * this.rightStickFactor), -1, 1);
                        const rightStickFixedY: number = BABYLON.Scalar.Clamp((rightStickValueY * this.rightStickFactor), -1, 1);
                        BABYLON.Toolkit.InputController.SetRightJoystickBuffer(rightStickFixedX, rightStickFixedY, this.invertRightStickY);
                    }
                    if (this.enableVirtualButtons === true) {
                        BABYLON.Toolkit.InputController.MobileControlsActive = true;
                    }
                } else {
                    // ..
                    // TODO: Validate Mobile Control Visuals Are Disabled
                    // ..
                }
            }
        }

        protected destroy(): void {
            if (this.m_leftStick != null) {
                this.m_leftStick.dispose();
                this.m_leftStick = null;
            }
            if (this.m_rightStick != null) {
                this.m_rightStick.dispose();
                this.m_rightStick = null;
            }
        }

        /*
        protected checkOrientation(): void {
            const orientation: string = BABYLON.Toolkit.WindowManager.GetOrientation();
            const pcover: HTMLElement = document.getElementById("portrait-warning-cover");
            const lcover: HTMLElement = document.getElementById("landscape-warning-cover");
            console.log("Check Orientation(): " + orientation + " -> " + this.inputOrientation + " -> Size: " + window.innerWidth + " x " + window.innerHeight);
            if (orientation === "landscape" || orientation === "portrait") {
                if (this.inputOrientation === 1) { // Note: Enforce Portrait Orientation
                    if (pcover != null) {
                        if (orientation !== "portrait") {
                            console.log("Show Rotate To Portrait Warning");
                            //pcover.className = "mobile-orientation-cover";
                        } else {
                            console.log("Reset Rotate To Portrait Warning");
                            //pcover.className = "no-display";
                        }
                    }
                } else if (this.inputOrientation === 2) { // Note: Enforce Landscape Orientation
                    if (lcover != null) {
                        if (orientation !== "landscape") {
                            console.log("Show Rotate To Landscape Warning");
                            //lcover.className = "mobile-orientation-cover";
                        } else {
                            console.log("Clear Rotate To Landscape Warning");
                            //lcover.className = "no-display";
                        }
                    }
                } else {
                    if (pcover != null) pcover.className = "no-display";
                    if (lcover != null) lcover.className = "no-display";
                }
            } else {
                if (pcover != null) pcover.className = "no-display";
                if (lcover != null) lcover.className = "no-display";
            }
        }
        */

        protected loadStyleSheet(): void {
            if (this.styleSheet != null && this.styleSheet !== "") {
                const style: HTMLStyleElement = document.createElement("style");
                style.id = "MobileStyleSheet";
                style.type = "text/css";
                if ((style as any).styleSheet) { // Note: Internet Explorer Support
                    (style as any).styleSheet.cssText = this.styleSheet;
                } else {
                    style.appendChild(document.createTextNode(this.styleSheet));
                }
                document.head.appendChild(style);
            } else {
                console.warn("WARNING: Mobile Style Sheet Not Defined For: " + this.transform.name);
            }
        }

        protected loadHtmlMarkup(): void {
            // if (this.htmlMarkup != null && this.htmlMarkup !== "") {
            //     const markupContainer = document.createElement("div");
            //     markupContainer.id = "MobileMarkup";
            //     markupContainer.className = "mobile-markup";
            //     markupContainer.innerHTML = this.htmlMarkup;
            //     this.uiParentElement.appendChild(markupContainer);
            // } else {
            //     console.warn("WARNING: Mobile Markup File Not Defined For: " + this.transform.name);
            // }
        }

        protected createHtmlElements(): void {
            const rootUrl: string = BABYLON.Toolkit.SceneManager.GetRootUrl(this.scene);
            const leftBaseImageData: BABYLON.Toolkit.IUnityTexture = this.getProperty("leftStickBase");
            const rightBaseImageData: BABYLON.Toolkit.IUnityTexture = this.getProperty("rightStickBase");
            const leftStickImageData: BABYLON.Toolkit.IUnityTexture = this.getProperty("leftStickImage");
            const rightStickImageData: BABYLON.Toolkit.IUnityTexture = this.getProperty("rightStickImage");
            const lbaseImageFilename: string = (leftBaseImageData != null) ? leftBaseImageData.filename : "baseImage.png";
            const rbaseImageFilename: string = (rightBaseImageData != null) ? rightBaseImageData.filename : "baseImage.png";
            const leftStickImageFilename: string = (leftStickImageData != null) ? leftStickImageData.filename : "leftStick.png";
            const rightStickImageFilename: string = (rightStickImageData != null) ? rightStickImageData.filename : "rightStick.png";
            if (this.enableLeftJoystick === true) {
                this.leftBaseElement = document.createElement("div");
                this.leftBaseElement.id = "base1";
                this.leftBaseElement.style.display = (this.leftStickStyle === 0) ? "block" : "none";
                this.leftBaseElement.className = (this.centerLeftJoystick === true) ? "GamepadCenterStick" : "GamepadLeftStick";
                // ..
                const baseImg1: HTMLImageElement = document.createElement("img");
                baseImg1.id = "image1";
                baseImg1.src = (rootUrl + lbaseImageFilename);
                baseImg1.className = "GamepadLeftBase";
                // ..
                const ballDiv1: HTMLDivElement = document.createElement("div");
                ballDiv1.id = "stick1";
                ballDiv1.className = "GamepadLeftContent";
                // ..
                const ballImg1: HTMLImageElement = document.createElement("img");
                ballImg1.id = "ball1";
                ballImg1.src = (rootUrl + leftStickImageFilename);
                ballImg1.className = "GamepadLeftControl";
                // ..
                ballDiv1.appendChild(ballImg1);
                this.leftBaseElement.appendChild(baseImg1);
                this.leftBaseElement.appendChild(ballDiv1);
                this.uiParentElement.appendChild(this.leftBaseElement);
            }
            if (this.enableRightJoystick === true) {
                this.rightBaseElement = document.createElement("div");
                this.rightBaseElement.id = "base2";
                this.rightBaseElement.style.display = (this.rightStickStyle === 0) ? "block" : "none";
                this.rightBaseElement.className = (this.centerRightJoystick === true) ? "GamepadCenterStick" : "GamepadRightStick";
                // ..
                const baseImg2: HTMLImageElement = document.createElement("img");
                baseImg2.id = "image2";
                baseImg2.src = (rootUrl + rbaseImageFilename);
                baseImg2.className = "GamepadRightBase";
                // ..
                const ballDiv2: HTMLDivElement = document.createElement("div");
                ballDiv2.id = "stick2";
                ballDiv2.className = "GamepadRightContent";
                // ..
                const ballImg2: HTMLImageElement = document.createElement("img");
                ballImg2.id = "ball2";
                ballImg2.src = (rootUrl + rightStickImageFilename);
                ballImg2.className = "GamepadRightControl";
                // ..
                ballDiv2.appendChild(ballImg2);
                this.rightBaseElement.appendChild(baseImg2);
                this.rightBaseElement.appendChild(ballDiv2);
                this.uiParentElement.appendChild(this.rightBaseElement);
            }
            if (this.enableVirtualButtons === true) {
                this.buttonBaseElement = document.createElement("div");
                this.buttonBaseElement.id = "base0";
                this.buttonBaseElement.style.pointerEvents = "none";
                this.buttonBaseElement.className = "GamepadButtonGroup";
                if (this.virtualButtonControls != null) {
                    this.virtualButtonControls.forEach((element: any, index: number) => {
                        const buttonIndexCount: number = (index + 1);
                        const buttonImageData: BABYLON.Toolkit.IUnityTexture = element.buttonImage;
                        const virtualButton: HTMLElement = document.createElement("div");
                        virtualButton.id = ("button" + buttonIndexCount.toFixed(0));
                        virtualButton.style.cursor = "pointer";         // Note: Default Cursor Style
                        virtualButton.style.pointerEvents = "auto";     // Note: Enable Pointer Events
                        virtualButton.className = element.className;
                        virtualButton.addEventListener("pointerdown", (e) => { BABYLON.Toolkit.InputController.InputKeyDownHandler(element.inputKeyCode, e); });
                        virtualButton.addEventListener("pointerup", (e) => { BABYLON.Toolkit.InputController.InputKeyUpHandler(element.inputKeyCode, e); });
                        if (buttonImageData != null && buttonImageData.filename != null) {
                            if (element.buttonCover === 0) {
                                const buttonImg: HTMLImageElement = document.createElement("img");
                                buttonImg.id = (virtualButton.id + ".Image");
                                buttonImg.src = (rootUrl + buttonImageData.filename);
                                buttonImg.style.top = "0px";
                                buttonImg.style.left = "0px";
                                buttonImg.style.width = "100%";
                                buttonImg.style.height = "100%";
                                buttonImg.style.border = "none";
                                buttonImg.style.margin = "0px";
                                buttonImg.style.padding = "0px";
                                buttonImg.style.position = "absolute";
                                virtualButton.appendChild(buttonImg);
                            } else {
                                virtualButton.textContent = element.buttonName;
                                virtualButton.style.backgroundImage = ("url(" + rootUrl + buttonImageData.filename + ")");
                                virtualButton.style.backgroundRepeat = "no-repeat";
                                virtualButton.style.backgroundSize = (element.buttonCover === 1) ? "cover" : "contain";
                            }
                        } else {
                            virtualButton.textContent = element.buttonName;
                        }
                        this.buttonBaseElement.appendChild(virtualButton);
                    });
                }
                this.uiParentElement.appendChild(this.buttonBaseElement);
            }
        }
    }
    /**
     * Manage the joystick inputs to control a free camera.
     * @see https://doc.babylonjs.com/how_to/customizing_camera_inputs
     */
    export class FreeCameraTouchJoystickInput implements BABYLON.ICameraInput<BABYLON.FreeCamera> {
        /**
         * Define the camera the input is attached to.
         */
        public camera: BABYLON.FreeCamera;

        /**
         * Define the joystick controlling the input
         */
        public controller: BABYLON.Nullable<PROJECT.MobileInputController>;

        /**
         * Defines the joystick rotation sensiblity.
         * This is the threshold from when rotation starts to be accounted for to prevent jittering.
         */
        @BABYLON.serialize()
        public joystickAngularSensibility = 200;

        /**
         * Defines the joystick move sensiblity.
         * This is the threshold from when moving starts to be accounted for for to prevent jittering.
         */
        @BABYLON.serialize()
        public joystickMoveSensibility = 40.0;

        /**
         * Defines the minimum value at which any analog stick input is ignored.
         * Note: This value should only be a value between 0 and 1.
         */
        public deadzoneDelta = 0.1;


        private _yAxisScale = 1.0;
        /**
         * Gets or sets a boolean indicating that Yaxis (for right stick) should be inverted
         */
        public get invertYAxis() { return this._yAxisScale !== 1.0; }
        public set invertYAxis(value: boolean) { this._yAxisScale = value ? -1.0 : 1.0; }

        // private members
        private LSValues: BABYLON.Vector2 = new BABYLON.Vector2(0, 0);
        private RSValues: BABYLON.Vector2 = new BABYLON.Vector2(0, 0);
        private _cameraTransform: BABYLON.Matrix = BABYLON.Matrix.Identity();
        private _deltaTransform: BABYLON.Vector3 = BABYLON.Vector3.Zero();
        private _vector3: BABYLON.Vector3 = BABYLON.Vector3.Zero();
        private _vector2: BABYLON.Vector2 = BABYLON.Vector2.Zero();
        private _attached: boolean = false;

        /**
         * Attach the input controls to a specific dom element to get the input from.
         */
        public attachControl(): void {
            this._attached = true;
        }

        /**
         * Detach the current controls from the specified dom element.
         */
        public detachControl(): void;

        /**
         * Detach the current controls from the specified dom element.
         * @param ignored defines an ignored parameter kept for backward compatibility. If you want to define the source input element, you can set engine.inputElement before calling camera.attachControl
         */
        public detachControl(ignored?: any): void {
            this._attached = false;
        }

        /**
         * Update the current camera state depending on the inputs that have been used this frame.
         * This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.
         */
        public checkInputs(): void {
            if (this.camera != null && this.controller != null && this._attached === true) {
                const LStick = this.controller.getLeftStick();
                if (LStick != null) {
                    this.LSValues.set(LStick.getValueX(), LStick.getValueY());
                    if (this.joystickMoveSensibility !== 0) {
                        this.LSValues.x = (Math.abs(this.LSValues.x) > this.deadzoneDelta) ? this.LSValues.x / this.joystickMoveSensibility : 0;
                        this.LSValues.y = (Math.abs(this.LSValues.y) > this.deadzoneDelta) ? this.LSValues.y / this.joystickMoveSensibility : 0;
                    }
                } else {
                    this.LSValues.set(0, 0);
                }
                // ..
                const RStick = this.controller.getRightStick();
                if (RStick != null) {
                    this.RSValues.set(RStick.getValueX(), RStick.getValueY());
                    if (this.joystickAngularSensibility !== 0) {
                        this.RSValues.x = (Math.abs(this.RSValues.x) > this.deadzoneDelta) ? this.RSValues.x / this.joystickAngularSensibility : 0;
                        this.RSValues.y = ((Math.abs(this.RSValues.y) > this.deadzoneDelta) ? this.RSValues.y / this.joystickAngularSensibility : 0) * this._yAxisScale;
                    }
                } else {
                    this.RSValues.set(0, 0);
                }
                // ..
                if (!this.camera.rotationQuaternion) {
                    BABYLON.Matrix.RotationYawPitchRollToRef(this.camera.rotation.y, this.camera.rotation.x, 0, this._cameraTransform);
                } else {
                    this.camera.rotationQuaternion.toRotationMatrix(this._cameraTransform);
                }
                // ..
                var speed = this.camera._computeLocalCameraSpeed() * 50.0;
                this._vector3.copyFromFloats(this.LSValues.x * speed, 0, -this.LSValues.y * speed);
                // ..
                BABYLON.Vector3.TransformCoordinatesToRef(this._vector3, this._cameraTransform, this._deltaTransform);
                this.camera.cameraDirection.addInPlace(this._deltaTransform);
                this._vector2.copyFromFloats(this.RSValues.y, this.RSValues.x);
                this.camera.cameraRotation.addInPlace(this._vector2);
            }
        }

        /**
         * Gets the class name of the current input.
         * @returns the class name
         */
        public getClassName(): string {
            return "FreeCameraTouchJoystickInput";
        }

        /**
         * Get the friendly name associated with the input class.
         * @returns the input friendly name
         */
        public getSimpleName(): string {
            return "joystick";
        }
    }

    (<any>BABYLON.CameraInputTypes)["FreeCameraTouchJoystickInput"] = PROJECT.FreeCameraTouchJoystickInput;
}