using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class MobileShadowMaterial
*/
[Babylon(Class="PROJECT.MobileShadowMaterial"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Mobile/Mobile Shadow Material", 2104)]
public class MobileShadowMaterial : EditorScriptComponent
{
    [Tooltip("Create new shadow only matieral")]
    [Auto] public bool createNewMaterial = true;
}
