using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class MyRotator
*/
[Babylon(Class="PROJECT.MyRotator"), AddComponentMenu("Scripts/My Project/MyRotator")]
public class MyRotator : EditorScriptComponent
{
    
    [Auto] [Range(0.0f,10.0f)] public float rotateSpeed = 0.25f;

}