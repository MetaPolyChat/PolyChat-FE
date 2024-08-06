module PROJECT {
    /**
    * Babylon Script Component
    * @class FxParticleSystem
    */
    export class FxParticleSystem extends BABYLON.Toolkit.ScriptComponent {
        public getParticleEmitter(): BABYLON.AbstractMesh { return this.m_particleEmitter; }
        public getParticleSystem(): BABYLON.ParticleSystem | BABYLON.GPUParticleSystem { return this.m_particleSystem; }

        protected m_particleEmitter: BABYLON.AbstractMesh = null;
        protected m_particleSystem: BABYLON.ParticleSystem | BABYLON.GPUParticleSystem = null;
        protected awake(): void {
            const rootUrl: string = BABYLON.Toolkit.SceneManager.GetRootUrl(this.scene);
            const classType: number = this.getProperty("classType", 0);
            const particleText: string = this.getProperty("base64ParticleSystem");
            const playOnAwake: boolean = this.getProperty("playOnAwake", false);
            const particleTexture: BABYLON.Toolkit.IUnityTexture = this.getProperty("particleTexture");
            this.m_particleEmitter = this.getAbstractMesh();
            if (this.m_particleEmitter == null) {
                this.m_particleEmitter = BABYLON.MeshBuilder.CreateBox(this.transform.name + ".Emitter", { size: 0.25 }, this.scene);
                this.m_particleEmitter.parent = this.transform;
                this.m_particleEmitter.position.set(0, 0, 0);
                this.m_particleEmitter.isVisible = false;
                this.m_particleEmitter.isPickable = false;
                this.m_particleEmitter.material = BABYLON.Toolkit.Utilities.GetColliderMaterial(this.scene);
            }
            if (particleText != null && particleText !== "") {
                const particleJson: string = window.atob(particleText);
                if (particleJson != null && particleJson !== "") {
                    const particleParsed: any = JSON.parse(particleJson);
                    if (particleParsed != null) {
                        if (particleParsed.texture != null && particleTexture != null) {
                            particleParsed.texture.name = particleTexture.filename; // Note: Particle System Parser Use Name Not Url
                            particleParsed.texture.url = particleTexture.filename;  // Note: Particle System Parser Use Name Not Url
                        }
                        if (classType === 1) {  // GPU Particle System
                            this.m_particleSystem = BABYLON.GPUParticleSystem.Parse(particleParsed, this.scene, rootUrl);
                        } else {                // CPU Particle System
                            this.m_particleSystem = BABYLON.ParticleSystem.Parse(particleParsed, this.scene, rootUrl);
                        }
                        if (this.m_particleSystem != null) {
                            if (this.m_particleEmitter != null) this.m_particleSystem.emitter = this.m_particleEmitter;
                            if (playOnAwake === false) this.m_particleSystem.stop();
                        }
                    }
                }
            }
        }

        protected destroy(): void {
            this.m_particleEmitter = null;
            if (this.m_particleSystem != null) {
                this.m_particleSystem.dispose();
                this.m_particleSystem = null;
            }
        }
    }
}