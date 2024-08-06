module PROJECT {
    /**
    * Babylon Script Component
    * @class MobileShadowMaterial
    */
    export class MobileShadowMaterial extends BABYLON.Toolkit.ScriptComponent {
        private createNewMaterial: boolean = true;

        protected awake(): void {
            if (this.createNewMaterial === true && this.transform instanceof BABYLON.AbstractMesh) {
                const materialName: string = this.transform.name.replace(" ", "") + ".ShadowMaterial";
                this.transform.material = new BABYLON.ShadowOnlyMaterial(materialName, this.scene);
            }
        }

        protected destroy(): void {
            if (this.createNewMaterial === true && this.transform instanceof BABYLON.AbstractMesh) {
                if (this.transform.material != null && this.transform.material instanceof BABYLON.ShadowOnlyMaterial) {
                    this.transform.material.dispose();
                }
            }
        }
    }
}