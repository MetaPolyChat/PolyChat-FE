using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class PrismaticJoint
*/
[Babylon(Class="PROJECT.PrismaticJoint"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Physics/Prismatic Joint")]
public class PrismaticJoint : EditorScriptComponent
{
    public Rigidbody bodyA = null;
    public Rigidbody bodyB = null;

    [Auto] public Vector3 pivotA = new Vector3(0,0,-0.2f);
    [Auto] public Vector3 pivotB = new Vector3(0,0,0.25f);

    [Auto] public Vector3 axisA = new Vector3(0,1,0);
    [Auto] public Vector3 axisB = new Vector3(0,1,0);

    [Auto] public bool collisionsEnabled = false;
}