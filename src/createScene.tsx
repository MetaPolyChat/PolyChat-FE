// createScene.ts
import * as BABYLON from 'babylonjs';

export const createScene = (engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene => {
    const scene = new BABYLON.Scene(engine);

    // Create a basic light
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0), scene);

    // Create a basic camera
    const camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Create a sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 1 }, scene);

    return scene;
};

