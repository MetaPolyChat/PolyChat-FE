module PROJECT {
    /**
    * Babylon Script Component
    * @class NodeMaterialProcess
    */
    export class NodeMaterialProcess extends BABYLON.Toolkit.ScriptComponent {
        private nodeMaterialEditor: BABYLON.TransformNode = null;
        private numberOfSamples: number = 1;
        private samplingMode: number = 0;
        private textureType: number = 0;
        private textureFormat: number = BABYLON.Constants.TEXTUREFORMAT_RGBA;
        private sizeRatio: number = 1.0;
        private resuable: boolean = false;

        public getPostProcess(): BABYLON.PostProcess { return this.m_postProcess; }

        protected m_postProcess: BABYLON.PostProcess = null;

        protected start(): void {
            if (this.nodeMaterialEditor != null) {
                const nme: PROJECT.NodeMaterialInstance = SM.FindScriptComponent(this.nodeMaterialEditor, "PROJECT.NodeMaterialInstance");
                if (nme != null) {
                    const materialInstance: BABYLON.NodeMaterial = nme.getMaterialInstance();
                    if (materialInstance != null) {
                        this.setupNodeMaterial(materialInstance);
                    } else {
                        console.warn("Null node material instance on: " + this.nodeMaterialEditor.name);
                    }
                } else {
                    console.warn("Failed to locate node material editor on: " + this.nodeMaterialEditor.name);
                }
            }
        }

        protected setupNodeMaterial(materialInstance: BABYLON.NodeMaterial): void {
            const camera: BABYLON.FreeCamera = this.getCameraRig();
            if (camera != null) {
                this.m_postProcess = materialInstance.createPostProcess(camera, this.sizeRatio, this.samplingMode, this.scene.getEngine(), this.resuable, this.textureType, this.textureFormat);
                if (this.m_postProcess != null) {
                    this.m_postProcess.name = (this.transform.name + ".Process");
                    this.m_postProcess.samples = this.numberOfSamples;
                } else {
                    console.warn("Failed to create post process for: " + this.transform.name);
                }
            } else {
                console.warn("Null camera rig for: " + this.transform.name);
            }
        }

        protected destroy(): void {
            this.nodeMaterialEditor = null;
            if (this.m_postProcess != null) {
                this.m_postProcess.dispose();
                this.m_postProcess = null;
            }
        }
    }
}