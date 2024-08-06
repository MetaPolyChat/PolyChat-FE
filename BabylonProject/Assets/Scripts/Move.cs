using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class Move
*/
[Babylon(Class="PROJECT.Move"), AddComponentMenu("Scripts/My Project/Move")]
public class Move : EditorScriptComponent
{
    /* Add Editor Properties To Script Component */
    // Example: [Tooltip("Example hello world property")]
    // Example: [Auto] public string helloWorld = "Hello World";

	/* [Serializable, HideInInspector] public string exportProperty = null; */
    public override void OnUpdateProperties(Transform transform, SceneExporterTool exporter)
    {
        // Example: this.helloWorld = "Update Hello World";
    }
}

// Optional Script Component Custom Editor Class
[CustomEditor(typeof(Move)), CanEditMultipleObjects]
public class MoveEditor : Editor
{
    public void OnEnable()
    {
        Move owner = (Move)target;
    }
    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();
    }
}