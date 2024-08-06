module PROJECT {
    /**
    * Babylon Script Component
    * @class NodeMaterialParticle
    */
    export class NodeMaterialParticle extends BABYLON.Toolkit.ScriptComponent {
        private nodeMaterialEditor: BABYLON.TransformNode = null;

        protected awake(): void {
            /* Init component function */
        }

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

        }

        protected update(): void {
            /* Update render loop function */
        }

        protected late(): void {
            /* Late update render loop function */
        }

        protected after(): void {
            /* After update render loop function */
        }

        protected fixed(): void {
            /* Fixed update physics step function */
        }

        protected ready(): void {
            /* Execute when scene is ready function */
        }

        protected destroy(): void {
            this.nodeMaterialEditor = null;
        }
    }
}