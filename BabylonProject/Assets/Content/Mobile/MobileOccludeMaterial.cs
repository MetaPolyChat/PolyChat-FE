using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class MobileOccluderMaterial
*/
[Babylon(Class="PROJECT.MobileOccludeMaterial"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Mobile/Mobile Occlude Material", 2105)]
public class MobileOccludeMaterial : EditorScriptComponent
{
    [Tooltip("Apply occlusion to source material")]
    [Auto] public bool applyToMaterial = true;
}
