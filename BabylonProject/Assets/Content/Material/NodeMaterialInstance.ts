module PROJECT {
    /**
    * Babylon Script Component
    * @class NodeMaterialInstance
    */
    export class NodeMaterialInstance extends BABYLON.Toolkit.ScriptComponent {
        private nodeMaterialData: any = null;
        private setCustomRootUrl: string = null;

        public getMaterialInstance(): BABYLON.NodeMaterial { return this.m_nodeMaterial; }

        protected m_nodeMaterial: BABYLON.NodeMaterial = null;

        protected awake(): void {
            if (this.nodeMaterialData != null) {
                const rootUrl: string = (this.setCustomRootUrl != null && this.setCustomRootUrl !== "") ? this.setCustomRootUrl.trim() : "";
                this.m_nodeMaterial = BABYLON.NodeMaterial.Parse(this.nodeMaterialData, this.scene, rootUrl);
                this.m_nodeMaterial.name = this.transform.name + ".NodeMaterial";
            }
        }

        protected destroy(): void {
            if (this.m_nodeMaterial != null) {
                this.m_nodeMaterial.dispose();
                this.m_nodeMaterial = null;
            }
        }
    }
}