using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class RemotePlayerController
*/
[Babylon(Class="PROJECT.RemotePlayerController"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Player/Remote Player Controller", 2126)]

public class RemotePlayerController : EditorScriptComponent
{
	public bool updateStateParams = true;
   	[Range(0.0f, 10.0f)] public float smoothMotionTime = 0.0f;
	public bool smoothInputVectors = false;
    public AnimationStateParams animationStateParams = null;
}

// Optional Script Component Custom Editor Class
[CustomEditor(typeof(RemotePlayerController)), CanEditMultipleObjects]
public class RemotePlayerControllerEditor : Editor
{
    public void OnEnable()
    {
        RemotePlayerController owner = (RemotePlayerController)target;
    }
    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();
    }
}