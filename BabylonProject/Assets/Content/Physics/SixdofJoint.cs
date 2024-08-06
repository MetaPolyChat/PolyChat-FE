using System;
using UnityEditor;
using UnityEngine;
using UnityEngine.Animations;

/**
* Editor Script Component
* @class SixdofJoint
*/
[Babylon(Class="PROJECT.SixdofJoint"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Physics/Sixdof Joint")]
public class SixdofJoint : EditorScriptComponent
{
    public Rigidbody bodyA = null;
    public Rigidbody bodyB = null;

    [Auto] public Vector3 pivotA = new Vector3(0, -0.5f, 0);
    [Auto] public Vector3 pivotB = new Vector3(0, 0.5f, 0);

    [Auto] public Vector3 perpAxisA = new Vector3(1,0,0);
    [Auto] public Vector3 perpAxisB = new Vector3(1,0,0);

    [Auto] public Physics6DoFLimit[] axisLimits = new Physics6DoFLimit[] { new Physics6DoFLimit(PhysicsConstraintAxis.LINEAR_DISTANCE, 1, 2) };

    [Auto] public bool collisionsEnabled = false;
}

[Serializable]
public class Physics6DoFLimit
{
    public PhysicsConstraintAxis axis = PhysicsConstraintAxis.LINEAR_DISTANCE;
    public float minLimit = 0;
    public float maxLimit = 1;
    public float stiffness = 0;
    public float damping = 0;
    public Physics6DoFLimit(PhysicsConstraintAxis axis = PhysicsConstraintAxis.LINEAR_DISTANCE, float minLimit = 0, float maxLimit = 1, float stiffness = 0, float damping = 0)
    {
        this.axis = axis;
        this.minLimit = minLimit;
        this.maxLimit = maxLimit;
        this.stiffness = stiffness;
        this.damping = damping;
    }
}

[Serializable]
public enum PhysicsConstraintAxis
{
    LINEAR_X = 0,
    LINEAR_Y = 1,
    LINEAR_Z = 2,
    ANGULAR_X = 3,
    ANGULAR_Y = 4,
    ANGULAR_Z = 5,
    LINEAR_DISTANCE = 6
}