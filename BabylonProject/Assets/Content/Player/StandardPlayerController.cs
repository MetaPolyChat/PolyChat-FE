using System;
using UnityEngine;
using UnityEditor;

/**
* Editor Script Component
* @class StandardPlayerController
*/
[Babylon(Class="PROJECT.StandardPlayerController"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Player/Standard Player Controller", 2124)]
public class StandardPlayerController : EditorScriptComponent
{
	public bool enableInput = false;
   	public bool attachCamera = false;
	public EditorPlayerNumber playerNumber = EditorPlayerNumber.One;
	public PlayerInputControl playerControl = PlayerInputControl.FirstPersonStrafing;
    public string avatarSkinTag = "Skin";
    public bool runKeyRequired = true;
    public bool arrowKeyRotation = false;
    public bool postNetworkAttribs = false;
    public bool showDebugRaycasts = false;

    [Header("Player Character")]
    [Range(0.0000001f, 100000.0f)] public float rigidBodyMass = 85.0f;
    [Range(0.0f, 6.0f)] public float gravityMultiplier = 3.0f;
    [Range(0.0f, 10.0f)] public float stepUpVelocity = 1.0f;
    [Range(0.0f, 1.0f)] public float minStepHeight = 0.15f;
    [Range(0.0f, 10.0f)] public float minFallVelocity = 1.0f;
    [Range(0.0f, 1.0f)] public float airbornTimeout = 0.5f;
    public bool cylinderShape = false;

    [Header("Player Controller")]
    [Range(0.0f, 100.0f)] public float moveSpeed = 5.335f;
    [Range(0.0f, 50.0f)] public float walkSpeed = 2.0f;
    [Range(0.0f, 50.0f)] public float lookSpeed = 2.0f;
    [Range(0.0f, 100.0f)] public float jumpSpeed = 10.0f;
    [Range(0.0f, 10.0f)] public float jumpDelay = 0.25f;
    public bool rootMotion = false;

    //[Header("Player Acceleration")]
    //[Range(0.01f, 10.0f)] public float accelerationSpeed = 1.0f;
    //[Range(0.01f, 10.0f)] public float decelerationSpeed = 1.0f;
   	//public bool smoothAcceleration = false;

    [Header("Player Rotations")]
    [Range(0.0f, 90.0f)] public float topLookLimit = 60.0f;
    [Range(0.0f, 90.0f)] public float downLookLimit = 30.0f;
	[Range(1.0f, 100.0f)] public float lowTurnSpeed = 15.0f;
	[Range(1.0f, 100.0f)] public float highTurnSpeed = 25.0f;
    // ..
    // DEPRECIATED: [Range(0.0f, 1.0f)] public float smoothingSpeed = 0.12f;
    [HideInInspector] public bool hasCharacterController = false;
    [ConditionalField("hasCharacterController", Inverse = true, Visible = false)] public float maxAngle = 45.0f;

    [Header("Action Controller")]
    public bool useClimbSystem = false;
    public string vaultVolumeTag = "Vault";
    public string climbVolumeTag = "Climb";
    [Range(0.0f, 10.0f)] public float rayClimbOffset = 0.35f;
    [Range(0.0f, 10.0f)] public float rayClimbLength = 0.85f;
    [Range(0.0f, 10.0f)] public float rayHeightOffset = 5.0f;
    [Range(0.0f, 10.0f)] public float rayHeightLength = 6.0f;
    public ClimbSystemRanges maxHeightRanges = null;

    [Header("Camera Controller")]
   	public bool toggleView = true;
   	public bool mouseWheel = true;
	public bool rotateCamera = true;
    [Range(0.0f, 5.0f)] public float eyesHeight = 1.55f;
    [Range(0.0f, 5.0f)] public float pivotHeight = 1.35f;
    public Vector3 boomPosition = new Vector3(0.0f, 0.0f, -5.0f);
    [Range(0.0f, 50.0f)] public float maxDistance = 5.0f;
    [Range(0.0f, 50.0f)] public float scrollSpeed = 25f;
   	public bool freeLooking = true;

    [Header("Camera Collisions")]
	[Range(0.1f, 1.0f)] public float sphereRadius = 0.65f;
	[Range(0.1f, 1.0f)] public float distanceFactor = 0.85f;
	[Range(0.0f, 5.0f)] public float minimumDistance = 0.5f;
    [Range(0.0f, 50.0f)] public float cameraSmoothing = 8;
   	public bool cameraCollisions = true;

    [Header("Inverse Kinematics")]
    public bool displayHandles = false;
    public SkinnedMeshRenderer abstractSkinMesh = null;
    public Transform rootBoneTransform = null;
    public Transform leftFootTransform = null;
    public Vector3 leftFootPolePos = new Vector3(0,0,0);
    public Vector3 leftFootBendAxis = new Vector3(1,0,0);
    public float leftFootPoleAngle = 0.0f;
    public float leftFootMaxAngle = 180.0f;
    public Transform rightFootTransform = null;
    public Vector3 rightFootPolePos = new Vector3(0,0,0);
    public Vector3 rightFootBendAxis = new Vector3(1,0,0);
    public float rightFootPoleAngle = 0.0f;
    public float rightFootMaxAngle = 180.0f;

    [Header("Animation Controller")]
	public bool updateStateParams = true;
   	[Range(0.0f, 10.0f)] public float smoothMotionTime = 0.0f;
	public bool smoothInputVectors = false;
    public AnimationStateParams animationStateParams = null;
}

[Serializable]
public enum PlayerInputControl
{
    FirstPersonStrafing = 0,
	ThirdPersonStrafing = 1
}

[Serializable]
public class ClimbSystemRanges
{
    public ClimbSystemRange stepUpRange = new ClimbSystemRange(0.25f, 0.85f, 10.0f, false);
    public ClimbSystemRange jumpUpRange = new ClimbSystemRange(0.85f, 1.5f, 10.0f, true);
    public ClimbSystemRange climbUpRange = new ClimbSystemRange(1.5f, 2.5f, 10.0f, true);
    public ClimbSystemRange vaultOverRange = new ClimbSystemRange(0.75f, 1.25f, 10.0f, true);
}

[Serializable]
public class ClimbSystemRange
{
    [Range(0.0f, 10.0f)] public float minimumHeight = 0.25f;
    [Range(0.0f, 10.0f)] public float maximumHeight = 5.0f;
    [Range(0.0f, 100.0f)] public float rotationSpeed = 10.0f;
    public bool rotateTowards = false;
    public bool matchHeight = false;
    public float startTime = 0.0f;
    public float targetTime = 0.0f;
    public float targetOffset = 0.0f;

    public ClimbSystemRange(float min = 0.25f, float max = 5.0f, float rotateSpeed = 10.0f, bool rotateTowards = false)
    {
        this.minimumHeight = min;
        this.maximumHeight = max;
        this.rotationSpeed = rotateSpeed;
        this.rotateTowards = rotateTowards;
    }
}

[Serializable]
public class AnimationStateParams
{
    public string moveDirection = "Direction";
    public string inputMagnitude = "Magnitude";
    public string horizontalInput = "Horizontal";
    public string verticalInput = "Vertical";
    public string mouseXInput = "MouseX";
    public string mouseYInput = "MouseY";
    public string heightInput = "Height";
    public string speedInput = "Speed";
    public string jumpFrame = "Jumped";
    public string jumpState = "Jump";
    public string actionState = "Action";
    public string fallingState = "FreeFall";
    public string slidingState = "Sliding";
    public string groundedState = "Grounded";
}

[CustomEditor(typeof(StandardPlayerController)), CanEditMultipleObjects]
public class StandardPlayerControllerEditor : Editor
{
    private  StandardPlayerController owner = null;
    public void OnEnable()
    {
        this.owner = (StandardPlayerController)target;
        var cc = this.owner.GetComponent<CharacterController>();
        this.owner.hasCharacterController = (cc != null && cc.enabled == true);
    }
    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();
    }
}