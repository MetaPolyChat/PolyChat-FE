using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class BallSocketJoint
*/
[Babylon(Class="PROJECT.BallSocketJoint"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Physics/Ball Socket Joint")]
public class BallSocketJoint : EditorScriptComponent
{
    public Rigidbody bodyA = null;
    public Rigidbody bodyB = null;

    [Auto] public Vector3 pivotA = new Vector3(-0.5f, 0, -0.5f);
    [Auto] public Vector3 pivotB = new Vector3(-0.5f, 0, 0.5f);

    [Auto] public Vector3 axisA = new Vector3(0,1,0);
    [Auto] public Vector3 axisB = new Vector3(0,1,0);

    [Auto] public bool collisionsEnabled = false;
}