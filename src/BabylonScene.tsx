// BabylonScene.tsx
import React, { useEffect, useRef } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import {createScene} from "./createScene"; // createScene 함수 불러오기

const BabylonScene: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null); // HTMLCanvasElement 타입 지정

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // canvas가 null이 아니어야 함

        const engine = new BABYLON.Engine(canvas, true);

        const scene = createScene(engine, canvas);  // createScene 함수 호출

        engine.runRenderLoop(() => {
            scene.render();
        });

        const handleResize = () => {
            engine.resize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            engine.dispose();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default BabylonScene;


