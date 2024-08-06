using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class DistanceJoint
*/
[Babylon(Class="PROJECT.DistanceJoint"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Physics/Distance Joint")]
public class DistanceJoint : EditorScriptComponent
{
    public Rigidbody bodyA = null;
    public Rigidbody bodyB = null;
    [Auto] public float maxDistance = 2;

    [Auto] public bool collisionsEnabled = false;
}