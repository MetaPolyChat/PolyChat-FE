module PROJECT {
    /**
     * Babylon water material system pro class (Babylon Water Material)
     * @class WaterMaterialSystem - All rights reserved (c) 2020 Mackey Kinard
     */
    export class WaterMaterialSystem extends BABYLON.Toolkit.ScriptComponent {
        private waterTag: string = "Water";
        private targetSize: BABYLON.Vector2 = new BABYLON.Vector2(128, 128);
        private renderSize: BABYLON.Vector2 = new BABYLON.Vector2(512, 512);
        private depthFactor: number = 1.0;
        private reflectSkybox: boolean = true;
        private subDivisions: number = 32;
        private heightOffset: number = 1.0;
        private windDirection: BABYLON.Vector2 = new BABYLON.Vector2(0, 1);
        private windForce: number = 6;
        private waveSpeed: number = 1.0;
        private waveLength: number = 0.4;
        private waveHeight: number = 0.4;
        private bumpHeight: number = 0.4;
        private bumpSuperimpose: boolean;
        private bumpAffectsReflection: boolean;
        private waterColor: BABYLON.Color3 = new BABYLON.Color3(0.1, 0.1, 0.6);
        private colorBlendFactor: number = 0.2;
        private waterColor2: BABYLON.Color3 = new BABYLON.Color3(0.1, 0.1, 0.6);
        private colorBlendFactor2: number = 0.2;
        private disableClipPlane: boolean = false;
        private fresnelSeparate: boolean;
        public getWaterGeometry(): BABYLON.AbstractMesh { return this.m_waterGeometry; }
        public getWaterMaterial(): BABYLON.WaterMaterial { return this.m_waterMaterial; }
        protected m_waterGeometry: BABYLON.AbstractMesh = null;
        protected m_waterMaterial: BABYLON.WaterMaterial = null;
        protected awake(): void {
            this.waterTag = this.getProperty("waterTag", this.waterTag);
            this.depthFactor = this.getProperty("depthFactor", this.depthFactor);
            this.subDivisions = this.getProperty("subDivisions", this.subDivisions);
            this.heightOffset = this.getProperty("heightOffset", this.heightOffset);
            this.reflectSkybox = this.getProperty("reflectSkybox", this.reflectSkybox);
            this.windForce = this.getProperty("windForce", this.windForce);
            this.waveSpeed = this.getProperty("waveSpeed", this.waveSpeed);
            this.waveLength = this.getProperty("waveLength", this.waveLength);
            this.waveHeight = this.getProperty("waveHeight", this.waveHeight);
            this.bumpHeight = this.getProperty("bumpHeight", this.bumpHeight);
            this.bumpSuperimpose = this.getProperty("bumpSuperimpose", this.bumpSuperimpose);
            this.bumpAffectsReflection = this.getProperty("bumpAffectsReflection", this.bumpAffectsReflection);
            this.colorBlendFactor = this.getProperty("colorBlendFactor", this.colorBlendFactor);
            this.colorBlendFactor2 = this.getProperty("colorBlendFactor2", this.colorBlendFactor2);
            this.disableClipPlane = this.getProperty("disableClipPlane", this.disableClipPlane);
            this.fresnelSeparate = this.getProperty("fresnelSeparate", this.fresnelSeparate);
            // ..
            const wcolor1: BABYLON.Toolkit.IUnityColor = this.getProperty("waterColor");
            this.waterColor = BABYLON.Toolkit.Utilities.ParseColor3(wcolor1);
            // ..
            const wcolor2: BABYLON.Toolkit.IUnityColor = this.getProperty("waterColor2");
            this.waterColor2 = BABYLON.Toolkit.Utilities.ParseColor3(wcolor2);
            // ..
            const wdirection: BABYLON.Toolkit.IUnityVector2 = this.getProperty("windDirection");
            this.windDirection = BABYLON.Toolkit.Utilities.ParseVector2(wdirection);
            // ..
            const itargetsize: BABYLON.Toolkit.IUnityVector2 = this.getProperty("targetSize");
            if (itargetsize != null) this.targetSize = BABYLON.Toolkit.Utilities.ParseVector2(itargetsize);
            // ..        
            const irendersize: BABYLON.Toolkit.IUnityVector2 = this.getProperty("renderSize");
            if (irendersize != null) this.renderSize = BABYLON.Toolkit.Utilities.ParseVector2(irendersize);
            /* Awake component function */
            let bumpTexture: BABYLON.Texture = null;
            const bumpTextureData: BABYLON.Toolkit.IUnityTexture = this.getProperty("bumpTexture");
            if (bumpTextureData != null) bumpTexture = BABYLON.Toolkit.Utilities.ParseTexture(bumpTextureData, this.scene);
            if (bumpTexture != null) {
                this.m_waterMaterial = new BABYLON.WaterMaterial(this.transform.name + ".Water", this.scene, this.renderSize);
                this.m_waterMaterial.bumpTexture = bumpTexture;
                this.m_waterMaterial.windDirection = this.windDirection;
                this.m_waterMaterial.windForce = this.windForce;
                this.m_waterMaterial.waveSpeed = this.waveSpeed;
                this.m_waterMaterial.waveLength = this.waveLength;
                this.m_waterMaterial.waveHeight = this.waveHeight;
                this.m_waterMaterial.bumpHeight = this.bumpHeight;
                this.m_waterMaterial.bumpSuperimpose = this.bumpSuperimpose;
                this.m_waterMaterial.bumpAffectsReflection = this.bumpAffectsReflection;
                this.m_waterMaterial.waterColor = this.waterColor;
                this.m_waterMaterial.colorBlendFactor = this.colorBlendFactor;
                this.m_waterMaterial.waterColor2 = this.waterColor2;
                this.m_waterMaterial.colorBlendFactor2 = this.colorBlendFactor2;
                this.m_waterMaterial.disableClipPlane = this.disableClipPlane;
                this.m_waterMaterial.fresnelSeparate = this.fresnelSeparate;
                // ..
                // Water Material Tags
                // ..
                if (this.reflectSkybox === true) {
                    const skyboxMesh: BABYLON.AbstractMesh = BABYLON.Toolkit.SceneManager.GetDefaultSkybox(this.scene);
                    if (skyboxMesh != null) this.m_waterMaterial.addToRenderList(skyboxMesh);
                }
                if (this.waterTag != null && this.waterTag !== "") {
                    const waterMeshes: BABYLON.AbstractMesh[] = this.scene.getMeshesByTags(this.waterTag);
                    if (waterMeshes != null && waterMeshes.length > 0) {
                        waterMeshes.forEach((mesh: BABYLON.AbstractMesh) => {
                            this.m_waterMaterial.addToRenderList(mesh);
                        });
                    }
                }
                // ..
                // Water Material Mesh
                // ..
                this.m_waterGeometry = BABYLON.MeshBuilder.CreateGround(this.transform.name + ".WaterMesh", { width: this.targetSize.x, height: this.targetSize.y, subdivisions: this.subDivisions, updatable: false }, this.scene);
                this.m_waterGeometry.parent = this.transform;
                this.m_waterGeometry.position.set(0, this.heightOffset, 0);
                if (this.depthFactor > 0) this.m_waterGeometry.scaling.y *= this.depthFactor;
                this.m_waterGeometry.material = this.m_waterMaterial;
            } else {
                BABYLON.Toolkit.SceneManager.LogWarning("No supported water bump texture for: " + this.transform.name);
            }
        }
        protected start(): void { /* Start render loop function */ }
        protected update(): void { /* Update render loop function */ }
        protected late(): void { /* Late update render loop function */ }
        protected after(): void { /* After render loop function */ }
        protected destroy(): void { /* Destroy component function */ }
    }
}
