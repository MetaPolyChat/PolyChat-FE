using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class FixedHingeJoint
*/
[Babylon(Class="PROJECT.FixedHingeJoint"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Physics/Fixed Hinge Joint")]
public class FixedHingeJoint : EditorScriptComponent
{
    public Rigidbody bodyA = null;
    public Rigidbody bodyB = null;

    [Auto] public Vector3 pivotA = new Vector3(0,0,-0.5f);
    [Auto] public Vector3 pivotB = new Vector3(0,0,0.5f);

    [Auto] public bool collisionsEnabled = false;
}