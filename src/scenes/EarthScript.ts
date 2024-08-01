import { Node } from "@babylonjs/core/node";
import {Mesh} from "@babylonjs/core/Meshes/mesh";
import {visibleInInspector} from "./decorators";
import {Debug} from "@babylonjs/core/Legacy/legacy";


export default class EarthScript extends Mesh {
    @visibleInInspector("number","speed")
    private speed : number = 0.001;


    public onUpdate(): void {
        this.rotation.y += this.speed;
    }
}
