module PROJECT {
    /**
    * Babylon Script Component
    * @class UserInterface
    */
    export class UserInterface extends BABYLON.Toolkit.ScriptComponent {
        public static IsCanvasReady(): boolean { return (PROJECT.UserInterface.AdvancedTexture != null); }
        public static GetCanvasElement(name: string): BABYLON.GUI.Control { return (PROJECT.UserInterface.AdvancedTexture != null) ? PROJECT.UserInterface.AdvancedTexture.getControlByName(name) : null; }
        public static ShowCanvasElement(element: BABYLON.GUI.Control, fadeSpeedRatio: number = 0.0, onAnimationComplete: () => void = null): BABYLON.Animatable {
            let result: BABYLON.Animatable = null;
            if (element != null) {
                if (fadeSpeedRatio > 0) {
                    const alphaStart: number = element.alpha;
                    const alphaEnd: number = 1.0;

                    element.isEnabled = true;
                    element.alpha = alphaEnd;
                    if (onAnimationComplete != null) onAnimationComplete();

                    //result = BABYLON.Toolkit.SceneManager.StartTweenAnimation(PROJECT.UserInterface.SceneController, (element.name + "-ShowAlphaTween"), element, "alpha", alphaStart, alphaEnd, fadeSpeedRatio, null, null, null, ()=>{
                    //    element.isEnabled = true;
                    //    if (onAnimationComplete != null) onAnimationComplete();
                    //});

                } else {
                    element.isEnabled = true;
                    element.alpha = 1.0;
                }
            }
            return result;
        }
        public static HideCanvasElement(element: BABYLON.GUI.Control, fadeSpeedRatio: number = 0.0, onAnimationComplete: () => void = null): BABYLON.Animatable {
            let result: BABYLON.Animatable = null;
            if (element != null) {
                if (fadeSpeedRatio > 0) {
                    element.isEnabled = false;
                    const alphaStart: number = element.alpha;
                    const alphaEnd: number = 0.0;

                    element.isEnabled = false;
                    element.alpha = alphaEnd;
                    if (onAnimationComplete != null) onAnimationComplete();

                    //result = BABYLON.Toolkit.SceneManager.StartTweenAnimation(PROJECT.UserInterface.SceneController, (element.name + "-HideAlphaTween"), element, "alpha", alphaStart, alphaEnd, fadeSpeedRatio, null, null, null, ()=>{
                    //    if (onAnimationComplete != null) onAnimationComplete();
                    //});

                } else {
                    element.isEnabled = false;
                    element.alpha = 0.0;
                }
            }
            return result;
        }
        public static SetSceneController(scene: BABYLON.Scene): void { PROJECT.UserInterface.SceneController = scene; }
        public static GetAdvancedTexture(): BABYLON.GUI.AdvancedDynamicTexture { return PROJECT.UserInterface.AdvancedTexture; }
        public static GetBackgroundTexture(): BABYLON.GUI.AdvancedDynamicTexture { return PROJECT.UserInterface.BackgroundTexture; }
        public static OnFontFacesReady = new BABYLON.Observable<any>();
        public static OnFontFacesLoaded = new BABYLON.Observable<any>();
        public static OnParseNodeObject = new BABYLON.Observable<any>();
        public static OnInterfaceLoaded = new BABYLON.Observable<BABYLON.GUI.AdvancedDynamicTexture>();

        private static SceneController: BABYLON.Scene = null;
        private static AdvancedTexture: BABYLON.GUI.AdvancedDynamicTexture = null;
        private static BackgroundTexture: BABYLON.GUI.AdvancedDynamicTexture = null;
        private static FontFacesAttached: boolean = false;
        private static FontFacesPreloaded: boolean = false;
        private exportLowerCase: boolean = false;
        private backgroundData: any = null;
        private textureSampleMode: number = 2;
        private idealRenderingSize: number = 0;
        private viewportRenderSize: number = 0;
        private customViewportSize: BABYLON.Vector2 = new BABYLON.Vector2(1920, 1080);
        private defaultImageLocation: string = "scenes/assets/";
        private defaultImageControl: boolean = true;
        private isManagedTexture: boolean = true;
        private scaleTextureSize: boolean = true;
        private setAdaptiveScale: boolean = true;
        private drawAtIdealSize: boolean = true;
        private useSmallestIdeal: boolean = false;
        private fontFamilyList: string[] = null;

        constructor(transform: BABYLON.TransformNode, scene: BABYLON.Scene, properties?: any) {
            super(transform, scene, properties);
            PROJECT.UserInterface.SetSceneController(scene);
            this.attachWebFonts();
        }

        protected awake(): void {
            this.setupProperties();
            this.preloadWebFonts();
        }

        protected start(): void {
            this.setupInterface();
        }

        protected destroy(): void {
            PROJECT.UserInterface.OnFontFacesReady.clear();
            PROJECT.UserInterface.OnFontFacesReady = null;
            PROJECT.UserInterface.OnFontFacesLoaded.clear();
            PROJECT.UserInterface.OnFontFacesLoaded = null;
            PROJECT.UserInterface.OnParseNodeObject.clear();
            PROJECT.UserInterface.OnParseNodeObject = null;
            PROJECT.UserInterface.OnInterfaceLoaded.clear();
            PROJECT.UserInterface.OnInterfaceLoaded = null;
            if (this.isManagedTexture === false && PROJECT.UserInterface.AdvancedTexture != null) {
                PROJECT.UserInterface.AdvancedTexture.dispose();
            }
            PROJECT.UserInterface.AdvancedTexture = null;
            if (PROJECT.UserInterface.BackgroundTexture != null) {
                PROJECT.UserInterface.BackgroundTexture.dispose();
            }
            PROJECT.UserInterface.BackgroundTexture = null;
        }

        protected engineResize(): void {
            this.scene.getEngine().resize(true); // Note: Force Initial Resize Content
        }

        protected setupProperties(): void {
            if (this.defaultImageLocation != null && this.defaultImageLocation !== "") {
                this.defaultImageLocation = this.defaultImageLocation.trim();
            }
            if (this.defaultImageLocation != null && this.defaultImageLocation !== "" && this.defaultImageLocation.endsWith("/") === false) {
                this.defaultImageLocation = (this.defaultImageLocation + "/");
            }
            if (this.customViewportSize.x <= 0) this.customViewportSize.x = 1920;
            if (this.customViewportSize.y <= 0) this.customViewportSize.y = 1080;
        }

        protected setupInterface(): void {
            let interfaceParsed: any = null;
            let backgroundParsed: any = null;
            const interfaceText: string = this.getProperty("base64UserInterface");
            if (interfaceText != null && interfaceText !== "") {
                const interfaceJson: string = window.atob(interfaceText);
                if (interfaceJson != null && interfaceJson !== "") {
                    interfaceParsed = JSON.parse(interfaceJson);
                    if (interfaceParsed != null) {
                        if (interfaceParsed.root != null) {
                            this.parseNodeObject(interfaceParsed.root);
                        }
                        let width: number = (this.viewportRenderSize === 0 && interfaceParsed.width !== null && interfaceParsed.width >= 0) ? interfaceParsed.width : this.customViewportSize.x;
                        let height: number = (this.viewportRenderSize === 0 && interfaceParsed.height !== null && interfaceParsed.height >= 0) ? interfaceParsed.height : this.customViewportSize.y;
                        if (this.viewportRenderSize === 1) {
                            width = this.scene.getEngine().getRenderingCanvas().width;
                            height = this.scene.getEngine().getRenderingCanvas().height;
                        }
                        // ..
                        // Advanced Texture
                        // ..
                        if (this.isManagedTexture === true) {
                            if ((<any>BABYLON.Toolkit.SceneManager).AdvDynamicTexture == null) (<any>BABYLON.Toolkit.SceneManager).AdvDynamicTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("Default-Screen-UI", true, this.scene, this.textureSampleMode, this.setAdaptiveScale);
                            PROJECT.UserInterface.AdvancedTexture = (<any>BABYLON.Toolkit.SceneManager).AdvDynamicTexture;
                        } else {
                            PROJECT.UserInterface.AdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI", true, this.scene, this.textureSampleMode, this.setAdaptiveScale);
                        }
                        if (PROJECT.UserInterface.AdvancedTexture != null) {
                            if (this.idealRenderingSize > 0) {
                                if (this.idealRenderingSize === 1 || this.idealRenderingSize === 3) {
                                    PROJECT.UserInterface.AdvancedTexture.idealWidth = width;
                                }
                                if (this.idealRenderingSize === 2 || this.idealRenderingSize === 3) {
                                    PROJECT.UserInterface.AdvancedTexture.idealHeight = height;
                                }
                                if (this.idealRenderingSize === 3) {
                                    PROJECT.UserInterface.AdvancedTexture.useSmallestIdeal = this.useSmallestIdeal;
                                }
                                PROJECT.UserInterface.AdvancedTexture.renderAtIdealSize = this.drawAtIdealSize;
                            } else {
                                PROJECT.UserInterface.AdvancedTexture.useSmallestIdeal = false;
                                PROJECT.UserInterface.AdvancedTexture.renderAtIdealSize = false;
                            }
                            if (this.scaleTextureSize === true) {
                                PROJECT.UserInterface.AdvancedTexture.parseSerializedObject(interfaceParsed, false);
                                PROJECT.UserInterface.AdvancedTexture.scaleTo(width, height);
                            } else {
                                PROJECT.UserInterface.AdvancedTexture.parseSerializedObject(interfaceParsed, false);
                            }
                        }
                        // ..
                        // Background Texture
                        // ..
                        if (this.backgroundData != null && this.backgroundData.createBackground === true) {
                            const backgroundText: string = this.getProperty("base64BackgroundData");
                            if (backgroundText != null && backgroundText !== "") {
                                const backgroundJson: string = window.atob(backgroundText);
                                if (backgroundJson != null && backgroundJson !== "") {
                                    backgroundParsed = JSON.parse(backgroundJson);
                                    if (backgroundParsed != null) {
                                        if (backgroundParsed.root != null) {
                                            this.parseNodeObject(backgroundParsed.root);
                                        }
                                    }
                                }
                            }
                            PROJECT.UserInterface.BackgroundTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("BACKGROUND", false, this.scene, this.textureSampleMode, this.setAdaptiveScale);
                            if (PROJECT.UserInterface.BackgroundTexture != null) {
                                if (this.backgroundData.scaleToForeground === true) {
                                    if (PROJECT.UserInterface.AdvancedTexture.idealWidth != null) {
                                        PROJECT.UserInterface.BackgroundTexture.idealWidth = PROJECT.UserInterface.AdvancedTexture.idealWidth;
                                    }
                                    if (PROJECT.UserInterface.AdvancedTexture.idealHeight != null) {
                                        PROJECT.UserInterface.BackgroundTexture.idealHeight = PROJECT.UserInterface.AdvancedTexture.idealHeight;
                                    }
                                    if (PROJECT.UserInterface.AdvancedTexture.useSmallestIdeal != null) {
                                        PROJECT.UserInterface.BackgroundTexture.useSmallestIdeal = PROJECT.UserInterface.AdvancedTexture.useSmallestIdeal;
                                    }
                                    if (PROJECT.UserInterface.AdvancedTexture.renderAtIdealSize != null) {
                                        PROJECT.UserInterface.BackgroundTexture.renderAtIdealSize = PROJECT.UserInterface.AdvancedTexture.renderAtIdealSize;
                                    }
                                } else {
                                    PROJECT.UserInterface.BackgroundTexture.useSmallestIdeal = false;
                                    PROJECT.UserInterface.BackgroundTexture.renderAtIdealSize = false;
                                }
                                if (backgroundParsed != null) PROJECT.UserInterface.BackgroundTexture.parseSerializedObject(backgroundParsed, false);
                                if (this.backgroundData.scaleToForeground === true) PROJECT.UserInterface.BackgroundTexture.scaleTo(width, height);
                            }
                        }
                    }
                }
            }
            if (PROJECT.UserInterface.OnInterfaceLoaded && PROJECT.UserInterface.OnInterfaceLoaded.hasObservers()) {
                try {
                    PROJECT.UserInterface.OnInterfaceLoaded.notifyObservers(PROJECT.UserInterface.AdvancedTexture);
                } catch (error) {
                    console.warn(error.message);
                }
            }
            this.engineResize();
        }

        protected attachWebFonts(): void {
            if (PROJECT.UserInterface.FontFacesAttached === false) {
                PROJECT.UserInterface.FontFacesAttached = true;
                document.fonts.ready.then(() => {
                    BABYLON.Tools.Log("Document fonts ready.");
                    if (PROJECT.UserInterface.OnFontFacesReady && PROJECT.UserInterface.OnFontFacesReady.hasObservers()) {
                        try {
                            PROJECT.UserInterface.OnFontFacesReady.notifyObservers(document.fonts);
                        } catch (error) {
                            console.warn(error.message);
                        }
                    }
                });
                document.fonts.onloadingdone = (fontFaceSetEvent: any) => {
                    this.engineResize();
                    BABYLON.Tools.Warn("All document fonts loaded.");
                    if (PROJECT.UserInterface.OnFontFacesLoaded && PROJECT.UserInterface.OnFontFacesLoaded.hasObservers()) {
                        try {
                            PROJECT.UserInterface.OnFontFacesLoaded.notifyObservers(fontFaceSetEvent);
                        } catch (error) {
                            console.warn(error.message);
                        }
                    }
                };
            }
        }

        protected preloadWebFonts(): void {
            if (PROJECT.UserInterface.FontFacesPreloaded === false) {
                PROJECT.UserInterface.FontFacesPreloaded = true;
                if (this.fontFamilyList != null && this.fontFamilyList.length > 0) {
                    this.fontFamilyList.forEach((family: string) => {
                        const txt: HTMLSpanElement = document.createElement("span");
                        txt.style.fontFamily = family;
                        document.body.appendChild(txt);
                    });
                }
            }
        }

        protected parseNodeObject(object: any): void {
            if (object != null) {
                if (this.defaultImageControl === true) {
                    try {
                        if (object.name != null && object.source != null && object.source !== "" && object.source.toLowerCase().indexOf("./images/") >= 0) {
                            object.source = (this.defaultImageLocation.endsWith("/")) ? object.source.replace("./images/", this.defaultImageLocation) : object.source.replace("./images", this.defaultImageLocation);
                            if (this.exportLowerCase === true) object.source = object.source.toLowerCase();
                            /* DEPRECATED: KEEP-FOR-REFERENCE
                            const oname:string = object.name;
                            const lpart:number = oname.indexOf("(");
                            const rpart:number = oname.indexOf(")");
                            // .. 
                            // Format New Object Source
                            // ..
                            if (lpart >= 0 && rpart >= 0 && rpart > lpart) {
                                let url:string = oname.substring((lpart + 1), rpart);
                                if (url != null && url !== "") {
                                    url = url.trim();
                                }
                                if (url != null && url !== "") {
                                    object.source = (this.defaultImageLocation.endsWith("/")) ? (this.defaultImageLocation + url) : (this.defaultImageLocation + "/" + url);
                                    // .. 
                                    // Format New Object Name
                                    // ..
                                    let fname1:string = oname.substring(0, lpart);
                                    let fname2:string = oname.substring((rpart + 1));
                                    let fname3 = (fname1 + fname2);
                                    if (fname3 != null && fname3 !== "") {
                                        fname3 = fname3.trim();
                                    }
                                    if (fname3 != null && fname3 !== "") {
                                        object.name = fname3;
                                    }
                                }
                            }*/
                        }
                    } catch (error) {
                        console.warn(error.message);
                    }
                }
                if (PROJECT.UserInterface.OnParseNodeObject && PROJECT.UserInterface.OnParseNodeObject.hasObservers()) {
                    try {
                        PROJECT.UserInterface.OnParseNodeObject.notifyObservers(object);
                    } catch (error) {
                        console.warn(error.message);
                    }
                }
                if (object.children != null) {
                    object.children.forEach((child: any) => {
                        this.parseNodeObject(child);
                    });
                }
            }
        }
    }
}