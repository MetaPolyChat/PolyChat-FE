using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class LockedJoint
*/
[Babylon(Class="PROJECT.LockedJoint"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Physics/Locked Joint")]
public class LockedJoint : EditorScriptComponent
{
    public Rigidbody bodyA = null;
    public Rigidbody bodyB = null;

    [Auto] public Vector3 pivotA = new Vector3(0.5f, 0.5f, -0.5f);
    [Auto] public Vector3 pivotB = new Vector3(-0.5f, -0.5f, 0.5f);

    [Auto] public Vector3 axisA = new Vector3(0,1,0);
    [Auto] public Vector3 axisB = new Vector3(0,1,0);

    [Auto] public bool collisionsEnabled = false;
}