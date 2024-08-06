module PROJECT {
    /**
     * Babylon Script Component
     * @class DebugInformation
     */
    export class DebugInformation extends BABYLON.Toolkit.ScriptComponent {
        private keys: boolean = true;
        private show: boolean = true;
        private popup: boolean = false;
        private views: boolean = false;
        private xbox: boolean = false;
        private color: BABYLON.Color3 = BABYLON.Color3.Green();

        protected awake(): void {
            this.keys = this.getProperty("enableDebugKeys", this.keys);
            this.show = this.getProperty("showDebugLabels", this.show);
            this.popup = this.getProperty("popupDebugPanel", this.popup);
            this.views = this.getProperty("togglePlayerViews", this.views);
            this.xbox = this.getProperty("allowXboxLiveSignIn", this.xbox);
            // ..
            const debugLabelColor: BABYLON.Toolkit.IUnityColor = this.getProperty("debugOutputTextColor");
            if (debugLabelColor != null) this.color = BABYLON.Toolkit.Utilities.ParseColor3(debugLabelColor);
            // ..
            if (BABYLON.Toolkit.WindowManager.IsWindows()) this.popup = false;
            BABYLON.Toolkit.SceneManager.LogMessage("Debug information overlay loaded");
        }

        /*
        var elem = document.documentElement;
        function openFullscreen() {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { // Safari
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { // IE11
                elem.msRequestFullscreen();
            }
        }
        function closeFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { // Safari
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE11
                document.msExitFullscreen();
            }
        }
        */

        protected start(): void {
            //this.screen = document.getElementById("screen");
            //this.toggle = document.getElementById("toggle");
            //this.signin = document.getElementById("signin");
            //this.reload = document.getElementById("reload");
            //this.mouse = document.getElementById("mouse");
            //this.debug = document.getElementById("debug");
            if (this.show === true) {
                /*
                if (this.keys === true) {
                    if (!BABYLON.Toolkit.SceneManager.IsXboxOne()) {
                        if (this.screen) this.screen.innerHTML = "F - Show Full Screen";
                    }
                    if (BABYLON.CameraSystem.IsMultiPlayerView() && this.views === true) {
                        if (this.toggle) {
                            if (BABYLON.Toolkit.SceneManager.IsXboxOne()) {
                                this.toggle.style.top = "29px";
                            }
                            this.toggle.innerHTML = "1 - 4 Toggle Player View";
                        }
                    }
                    if (BABYLON.Toolkit.SceneManager.IsXboxLivePluginEnabled() && this.xbox === true) {
                        if (this.signin) {
                            if (BABYLON.Toolkit.SceneManager.IsXboxOne()) {
                                this.signin.style.top = "49px";
                            }
                            this.signin.innerHTML = "X - Xbox Live Sign In";
                        }
                    }
                    if (this.mouse) this.mouse.innerHTML = (BABYLON.Toolkit.SceneManager.IsXboxOne()) ? "M - Mouse" : "";
                    if (this.reload) this.reload.innerHTML = "R - Reload";
                    if (this.debug) this.debug.innerHTML = "P - Debug";
                }
                */
            }
            if (this.keys === true) {
                if (this.views === true) {
                    BABYLON.Toolkit.SceneManager.LogMessage("Enable Multiplayer Keys");
                    BABYLON.Toolkit.InputController.OnKeyboardPress(BABYLON.Toolkit.UserInputKey.Num1, () => {
                        PROJECT.DefaultCameraSystem.SetMultiPlayerViewLayout(this.scene, 1);
                        BABYLON.Toolkit.SceneManager.LogMessage("1 player pressed");
                    });
                    BABYLON.Toolkit.InputController.OnKeyboardPress(BABYLON.Toolkit.UserInputKey.Num2, () => {
                        PROJECT.DefaultCameraSystem.SetMultiPlayerViewLayout(this.scene, 2);
                        BABYLON.Toolkit.SceneManager.LogMessage("2 players pressed");
                    });
                    BABYLON.Toolkit.InputController.OnKeyboardPress(BABYLON.Toolkit.UserInputKey.Num3, () => {
                        PROJECT.DefaultCameraSystem.SetMultiPlayerViewLayout(this.scene, 3);
                        BABYLON.Toolkit.SceneManager.LogMessage("3 players pressed");
                    });
                    BABYLON.Toolkit.InputController.OnKeyboardPress(BABYLON.Toolkit.UserInputKey.Num4, () => {
                        PROJECT.DefaultCameraSystem.SetMultiPlayerViewLayout(this.scene, 4);
                        BABYLON.Toolkit.SceneManager.LogMessage("4 players pressed");
                    });
                }
                BABYLON.Toolkit.InputController.OnKeyboardPress(BABYLON.Toolkit.UserInputKey.R, () => {
                    window.location.reload();
                });
                BABYLON.Toolkit.InputController.OnKeyboardPress(BABYLON.Toolkit.UserInputKey.I, () => {
                    if (this.popup === true) {
                        BABYLON.Toolkit.WindowManager.PopupDebug(this.scene);
                    } else {
                        BABYLON.Toolkit.WindowManager.ToggleDebug(this.scene, true, null);
                    }
                });
                BABYLON.Toolkit.InputController.OnKeyboardPress(BABYLON.Toolkit.UserInputKey.F, () => {
                    //BABYLON.Toolkit.SceneManager.ToggleFullscreenMode(this.scene);
                    this.openFullscreen(window.top.document.documentElement);
                });

                /*
                if (BABYLON.Toolkit.SceneManager.IsXboxOne()) {
                    if (navigator.gamepadInputEmulation) {
                        BABYLON.Toolkit.InputController.OnKeyboardPress(BABYLON.Toolkit.UserInputKey.M, ()=>{
                            if (navigator.gamepadInputEmulation !== "mouse") {
                                navigator.gamepadInputEmulation = "mouse";
                            } else {
                                navigator.gamepadInputEmulation = "gamepad";
                            }
                        });
                    }
                } else {
                    BABYLON.Toolkit.InputController.OnKeyboardPress(BABYLON.Toolkit.UserInputKey.F, ()=>{
                        //BABYLON.Tools.RequestFullscreen(document.documentElement);
                        this.scene.getEngine().enterFullscreen(true);
                    });
                }
                if (BABYLON.WindowsPlatform.IsXboxLivePluginEnabled() && this.xbox === true) {
                    BABYLON.Toolkit.InputController.OnKeyboardPress(BABYLON.Toolkit.UserInputKey.X, ()=>{
                        var player:BABYLON.Toolkit.PlayerNumber.One = BABYLON.Toolkit.PlayerNumber.One;
                        if (!BABYLON.WindowsPlatform.IsXboxLiveUserSignedIn(null, player)) {
                            BABYLON.Toolkit.SceneManager.LogMessage("===> Trying Xbox Live Sign In For Player: " + player.toString());
                            BABYLON.WindowsPlatform.XboxLiveUserSignIn(player, (result: Microsoft.Xbox.Services.System.SignInResult) => {
                                var user = BABYLON.WindowsPlatform.GetXboxLiveUser(player);
                                var msg = "(" + user.xboxUserId + ") - " + user.gamertag;
                                BABYLON.Toolkit.SceneManager.AlertMessage(msg, "Xbox Live User Signed In");
                            }, (err)=>{
                                BABYLON.Toolkit.SceneManager.LogMessage(err);
                                var msg:string = "Encountered Sign Error";
                                BABYLON.Toolkit.SceneManager.LogWarning(msg);
                                BABYLON.Toolkit.SceneManager.AlertMessage(msg, "Xbox Live Warning");
                            });
                        } else {
                            BABYLON.Toolkit.SceneManager.LogWarning("Xbox Live User Already Signed In");
                            BABYLON.Toolkit.SceneManager.AlertMessage("User Already Signed In", "Xbox Live Warning");
                        } 
                    });
                }
                */

            }
            // Default Print To Screen Text
            var printColor: string = this.color.toHexString();
            var graphicsVersion: string = BABYLON.Toolkit.SceneManager.GetEngineVersionString(this.scene);
            BABYLON.Toolkit.WindowManager.PrintToScreen(graphicsVersion, printColor);
        }

        protected destroy(): void {
            //this.screen = null;
            //this.toggle = null;
            //this.signin = null;
            //this.reload = null;
            //this.mouse = null;
            //this.debug = null;
        }


        protected openFullscreen(elem: any): void {
            //if (elem.requestFullscreen) {
            //    elem.requestFullscreen();
            //} else if (elem.webkitRequestFullscreen) { // Safari
            //    elem.webkitRequestFullscreen();
            //} else if (elem.msRequestFullscreen) { // IE11
            //    elem.msRequestFullscreen();
            //}
            DebugInformation._RequestFullscreen(elem);
        }
        protected closeFullscreen(): void {
            //if (document.exitFullscreen) {
            //    document.exitFullscreen();
            //} else if ((<any>document).webkitExitFullscreen) { // Safari
            //    (<any>document).webkitExitFullscreen();
            //} else if ((<any>document).msExitFullscreen) { // IE11
            //    (<any>document).msExitFullscreen();
            //}
            DebugInformation._ExitFullscreen();
        }
        /**
         * Ask the browser to promote the current element to fullscreen rendering mode
         * @param element defines the DOM element to promote
         */
        static _RequestFullscreen(element: HTMLElement): void {
            const requestFunction = element.requestFullscreen || (<any>element).webkitRequestFullscreen;
            if (!requestFunction) {
                return;
            }
            requestFunction.call(element);
        }

        /**
         * Asks the browser to exit fullscreen mode
         */
        static _ExitFullscreen(): void {
            const anyDoc = document as any;

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (anyDoc.webkitCancelFullScreen) {
                anyDoc.webkitCancelFullScreen();
            }
        }

    }
}