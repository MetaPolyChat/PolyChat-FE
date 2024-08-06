module PROJECT {
    /**
    * Babylon Script Component
    * @class NodeMaterialTexture
    */
    export class NodeMaterialTexture extends BABYLON.Toolkit.ScriptComponent {
        private nodeMaterialEditor: BABYLON.TransformNode = null;
        private textureSize: number = 256;

        public getProceduralTexture(): BABYLON.ProceduralTexture { return this.m_proceduralTexture; }

        protected m_proceduralTexture: BABYLON.ProceduralTexture = null;

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
            this.m_proceduralTexture = materialInstance.createProceduralTexture(this.textureSize, this.scene);
            if (this.m_proceduralTexture != null) {
                this.m_proceduralTexture.name = (this.transform.name + ".Texture");
            }
        }

        protected destroy(): void {
            this.nodeMaterialEditor = null;
            if (this.m_proceduralTexture != null) {
                this.m_proceduralTexture.dispose();
                this.m_proceduralTexture = null;
            }
        }
    }
}