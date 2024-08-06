using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class NodeMaterialParticle
*/
[Babylon(Class="PROJECT.NodeMaterialParticle"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Material/Node Material Particle", 2205)]
public class NodeMaterialParticle : EditorScriptComponent
{
    [Auto] public NodeMaterialInstance nodeMaterialEditor = null;
    [Auto] public FxParticleSystem fxParticleSystem = null;
}
