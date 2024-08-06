module PROJECT {
    /**
     * Babylon water material system pro class (Babylon Water Material)
     * @class SkyMaterialSystem - All rights reserved (c) 2020 Mackey Kinard
     */
    export class SkyMaterialSystem extends BABYLON.Toolkit.ScriptComponent {
        private skyfog: boolean = false;
        private skysize: number = 1000;
        private probesize: number = 128;
        private reflections: boolean = false;
        private reflectlevel: number = 1;
        private skytintcolor: BABYLON.Color3 = new BABYLON.Color3(1, 1, 1);
        public getSkyboxMesh(): BABYLON.AbstractMesh { return this.m_skyboxMesh; }
        public getSkyMaterial(): BABYLON.SkyMaterial { return this.m_skyMaterial; }
        public getReflectionProbe(): BABYLON.ReflectionProbe { return this.m_reflectProbe; }

        protected awake(): void { this.awakeSkyboxMaterial(); }
        protected start(): void { /* Start render loop function */ }
        protected update(): void { /* Update render loop function */ }
        protected late(): void { /* Late update render loop function */ }
        protected after(): void { /* After render loop function */ }
        protected destroy(): void { this.destroySkyboxMaterial(); }

        protected m_skyboxMesh: BABYLON.Mesh = null;
        protected m_skyMaterial: BABYLON.SkyMaterial = null;
        protected m_reflectProbe: BABYLON.ReflectionProbe = null;
        protected awakeSkyboxMaterial(): void {
            this.skyfog = this.getProperty("applyMeshFog", this.skyfog);
            this.skysize = this.getProperty("boxSize", this.skysize);
            this.probesize = this.getProperty("probeSize", this.probesize);
            this.reflections = this.getProperty("reflections", this.reflections);
            this.reflectlevel = this.getProperty("reflectLevel", this.reflectlevel);
            // ..
            const tintColor: BABYLON.Toolkit.IUnityColor = this.getProperty("tintColor");
            if (tintColor != null) this.skytintcolor = BABYLON.Toolkit.Utilities.ParseColor3(tintColor);
            // ..
            this.m_skyboxMesh = BABYLON.MeshBuilder.CreateBox("Ambient Skybox", { size: this.skysize }, this.scene);
            this.m_skyboxMesh.position.set(0, 0, 0);
            this.m_skyboxMesh.infiniteDistance = true;
            this.m_skyboxMesh.applyFog = this.skyfog;
            if (this.scene.useRightHandedSystem === true) this.m_skyboxMesh.scaling.x *= -1;
            // Setup Sky Material Properties
            this.m_skyMaterial = new BABYLON.SkyMaterial(this.transform.name + ".SkyMaterial", this.scene);
            this.m_skyMaterial.backFaceCulling = false;
            this.setSkyboxTintColor(this.skytintcolor);
            /**
             * Defines the overall luminance of sky in interval [0, 1].
             */
            this.m_skyMaterial.luminance = this.getProperty("luminance", this.m_skyMaterial.luminance);
            /**
            * Defines the amount (scattering) of haze as opposed to molecules in atmosphere.
            */
            this.m_skyMaterial.turbidity = this.getProperty("turbidity", this.m_skyMaterial.turbidity);
            /**
             * Defines the sky appearance (light intensity).
             */
            this.m_skyMaterial.rayleigh = this.getProperty("rayleigh", this.m_skyMaterial.rayleigh);
            /**
             * Defines the mieCoefficient in interval [0, 0.1] which affects the property .mieDirectionalG.
             */
            this.m_skyMaterial.mieCoefficient = this.getProperty("mieCoefficient", this.m_skyMaterial.mieCoefficient);
            /**
             * Defines the amount of haze particles following the Mie scattering theory.
             */
            this.m_skyMaterial.mieDirectionalG = this.getProperty("mieDirectionalG", this.m_skyMaterial.mieDirectionalG);
            /**
             * Defines the distance of the sun according to the active scene camera.
             */
            this.m_skyMaterial.distance = this.getProperty("distance", this.m_skyMaterial.distance);
            /**
             * Defines the sun inclination, in interval [-0.5, 0.5]. When the inclination is not 0, the sun is said
             * "inclined".
             */
            this.m_skyMaterial.inclination = this.getProperty("inclination", this.m_skyMaterial.inclination);
            /**
             * Defines the solar azimuth in interval [0, 1]. The azimuth is the angle in the horizontal plan between
             * an object direction and a reference direction.
             */
            this.m_skyMaterial.azimuth = this.getProperty("azimuth", this.m_skyMaterial.azimuth);
            /**
             * Defines an offset vector used to get a horizon offset.
             * @example skyMaterial.cameraOffset.y = camera.globalPosition.y // Set horizon relative to 0 on the Y axis
             */
            const camOffsetData: BABYLON.Toolkit.IUnityVector3 = this.getProperty("cameraOffset");
            if (camOffsetData != null) this.m_skyMaterial.cameraOffset = BABYLON.Toolkit.Utilities.ParseVector3(camOffsetData);
            /**
             * Defines if the sun position should be computed (inclination and azimuth) according to the scene
             * sun position.
             */
            this.m_skyMaterial.useSunPosition = this.getProperty("useSunPosition", this.m_skyMaterial.useSunPosition);
            this.m_skyMaterial.sunPosition = new BABYLON.Vector3(0, 50, 0);
            if (this.scene.metadata != null && this.scene.metadata.unity != null && this.scene.metadata.unity) {
                if (this.scene.metadata.toolkit.sunposition != null) {
                    this.m_skyMaterial.sunPosition = BABYLON.Toolkit.Utilities.ParseVector3(this.scene.metadata.toolkit.sunposition);
                }
            }
            // Assign Sky Material To Skybox Mesh
            this.m_skyboxMesh.material = this.m_skyMaterial;
            // Setup Environment Reflection Probe Texture
            if (this.reflections === true) {
                this.m_reflectProbe = new BABYLON.ReflectionProbe("Skybox-ReflectionProbe", this.probesize, this.scene);
                this.m_reflectProbe.renderList.push(this.m_skyboxMesh);
                this.scene.customRenderTargets.push(this.m_reflectProbe.cubeTexture);
                this.scene.environmentTexture = this.m_reflectProbe.cubeTexture;
                this.scene.environmentIntensity = this.reflectlevel;
            }
        }
        protected destroySkyboxMaterial(): void {
            if (this.m_skyboxMesh != null) {
                this.m_skyboxMesh.dispose();
                this.m_skyboxMesh = null;
            }
            if (this.m_reflectProbe != null) {
                this.m_reflectProbe.dispose();
                this.m_reflectProbe = null;
            }
            if (this.m_skyMaterial != null) {
                this.m_skyMaterial.dispose();
                this.m_skyMaterial = null;
            }
        }
        /** Set Skybox Mesh tint color. (Box Mesh Vertex Colors) */
        public setSkyboxTintColor(color: BABYLON.Color3): void {
            const colors = [];
            const numVertices = this.m_skyboxMesh.getTotalVertices();
            for (let i = 0; i < numVertices; ++i) {
                colors.push(color.r, color.g, color.b, 1.0);
            }
            this.m_skyboxMesh.setVerticesData("color", colors);
            this.m_skyboxMesh.useVertexColors = true;
        }
    }
}
