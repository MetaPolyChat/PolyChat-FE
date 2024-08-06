using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class NodeMaterialInstance
*/
[Babylon(Class="PROJECT.NodeMaterialInstance"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Material/Node Material Instance", 2299)]
public class NodeMaterialInstance : EditorScriptComponent
{
    [Auto][JsonEmbeddedAsset] public TextAsset nodeMaterialData = null;
    [Auto] public string setCustomRootUrl = null;
}
