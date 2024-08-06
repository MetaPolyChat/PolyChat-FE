module PROJECT {
    /**
    * Babylon Script Component
    * @class CustomHtmlMarkup
    */
    export class CustomHtmlMarkup extends BABYLON.Toolkit.ScriptComponent {
        private styleSheet: string = null;
        private htmlMarkup: string = null;
        private parentElement: string = "";
        private uiParentElement: HTMLElement = null;

        protected awake(): void {
            const parentName: string = (this.parentElement != null && this.parentElement !== "" && this.parentElement.toLowerCase() !== "body") ? this.parentElement : this.transform.name.toLowerCase().replaceAll(" ", "-");
            const rootElement: HTMLElement = document.getElementById(parentName);
            if (rootElement != null) {
                this.uiParentElement = rootElement;
            } else {
                this.uiParentElement = document.createElement("div");
                this.uiParentElement.id = parentName;
                document.body.appendChild(this.uiParentElement);
            }
        }

        protected start(): void {
            this.loadStyleSheet();
            this.loadHtmlMarkup();
        }

        protected destroy(): void {
            /* Destroy component function */
        }

        protected loadStyleSheet(): void {
            if (this.styleSheet != null && this.styleSheet !== "") {
                const style: HTMLStyleElement = document.createElement("style");
                style.id = (this.transform.name.toLowerCase().replaceAll(" ", "-") + ".stylesheet");
                style.type = "text/css";
                if ((style as any).styleSheet) { // Note: Internet Explorer Support
                    (style as any).styleSheet.cssText = this.styleSheet;
                } else {
                    style.appendChild(document.createTextNode(this.styleSheet));
                }
                document.head.appendChild(style);
            } else {
                console.warn("WARNING: Mobile Style Sheet Not Defined For: " + this.transform.name);
            }
        }

        protected loadHtmlMarkup(): void {
            if (this.htmlMarkup != null && this.htmlMarkup !== "") {
                this.uiParentElement.innerHTML = this.htmlMarkup;
            } else {
                console.warn("WARNING: Mobile Markup File Not Defined For: " + this.transform.name);
            }
        }
    }
}