module PROJECT {
    /**
    * Babylon Script Component
    * @class MobileOccludeMaterial
    */
    export class MobileOccludeMaterial extends BABYLON.Toolkit.ScriptComponent {
        private applyToMaterial: boolean = true;

        protected awake(): void {
            if (this.applyToMaterial === true && this.transform instanceof BABYLON.AbstractMesh) {
                this.transform.material.disableColorWrite = true;
            }
        }
    }
}