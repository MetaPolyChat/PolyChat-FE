using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class NodeMaterialTexture
*/
[Babylon(Class="PROJECT.NodeMaterialTexture"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Material/Node Material Texture", 2207)]
public class NodeMaterialTexture : EditorScriptComponent
{
    [Auto] public NodeMaterialInstance nodeMaterialEditor = null;
    [Auto] public int textureSize = 256;
}
