using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class MobileInputController
*/
[Babylon(Class="PROJECT.MobileInputController"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Mobile/Mobile Input Controller")]
public class MobileInputController : EditorScriptComponent
{
    public enum MobileInputType { Mobile = 0, AlwaysOn = 1 }
    public enum MobileInputStyle { Visible = 0, Hidden = 1 }
    public enum MobileButtonImage { Foreground = 0, Background = 1, Contained = 2 }

    [Serializable]
    public class VirtualButton
    {
        public string className = "button";
        public string buttonName;
        public Texture2D buttonImage;
        public MobileButtonImage buttonCover = MobileButtonImage.Foreground;
        public UserInputKey inputKeyCode;
        public VirtualButton(string name, UserInputKey keyCode, string klassName = "button")
        {
            buttonName = name;
            inputKeyCode = keyCode;
            className = klassName;
            buttonCover = MobileButtonImage.Foreground;
        }
    }

    [Auto][EmbeddedAsset] public DefaultAsset styleSheet = null;
    // ..
    // DEPRECATED: [Auto][EmbeddedAsset] public TextAsset htmlMarkup = null;
    // ..
    [Auto] public MobileInputType controlType = MobileInputType.Mobile;
    [Auto] public string parentElement = "root";
    [Auto][Range(0, 1000)] public int maxReadyTimeout = 200;
    [Auto][Range(1, 128)] public int maxMoveDistance = 28;
    [Auto][Range(1, 128)] public int maxMoveDeadzone = 4;

    [Header("Left Joystick")]
    [Auto] public MobileInputStyle leftStickStyle = MobileInputStyle.Visible;
    public Texture2D leftStickBase = null;
    public Texture2D leftStickImage = null;
    [Auto][Range(1.0f, 10.0f)] public float leftStickFactor = 1.0f;
    [Auto] public bool invertLeftStickY = true;
    [Auto] public bool centerLeftJoystick = false;
    [Auto] public bool enableLeftJoystick = true;

    [Header("Right Joystick")]
    [Auto] public MobileInputStyle rightStickStyle = MobileInputStyle.Visible;
    public Texture2D rightStickBase = null;
    public Texture2D rightStickImage = null;
    [Auto][Range(1.0f, 10.0f)] public float rightStickFactor = 1.0f;
    [Auto] public bool invertRightStickY = true;
    [Auto] public bool centerRightJoystick = false;
    [Auto] public bool enableRightJoystick = true;

    [Header("Device Properties")]
    [Auto] public bool enableMouseAxes = false;
    [Auto] public bool enableVirtualButtons = false; 
    [Auto] public VirtualButton[] virtualButtonControls = new VirtualButton[]
    {
        new VirtualButton("A", UserInputKey.A, "GamepadButtonA"),
        new VirtualButton("B", UserInputKey.B, "GamepadButtonB"),
        new VirtualButton("X", UserInputKey.X, "GamepadButtonX"),
        new VirtualButton("Y", UserInputKey.Y, "GamepadButtonY")
    };

    private bool previousCenterLeftJoystick = false;
    private bool previousCenterRightJoystick = false;

    // DEPRECATED: [Auto, HideInInspector] public int inputOrientation = 0;
    public override void OnUpdateProperties(Transform transform, SceneExporterTool exporter)
    {
        // DEPRECATED: this.inputOrientation = CanvasToolsInfo.Instance.DefaultOrientation;
    }

    private void OnValidate()
    {
        string scriptPath = AssetDatabase.GetAssetPath(MonoScript.FromMonoBehaviour(this));
        string folderPath = System.IO.Path.GetDirectoryName(scriptPath);
        if (styleSheet == null)
        {
            string cssPath = folderPath + "/MobileInputController.css";
            try
            {
                styleSheet = AssetDatabase.LoadAssetAtPath<DefaultAsset>(cssPath);
            }
            catch (Exception e)
            {
                UnityEngine.Debug.LogErrorFormat("Load Style Asset At Path Error: {0}", e.Message);
            }
            // ..
            // Mark the scene as dirty so the change is saved
            // ..
            if (styleSheet != null)
            {
                EditorUtility.SetDirty(this);
            }
            else
            {
                UnityEngine.Debug.LogErrorFormat("Failed To Load Mobile CSS Style Sheet At: {0}", cssPath);
            }
        }
        // if (htmlMarkup == null)
        // {
        //     string htmlPath = folderPath + "/MobileInputController.html";
        //     try
        //     {
        //         htmlMarkup = AssetDatabase.LoadAssetAtPath<TextAsset>(htmlPath);
        //     }
        //     catch (Exception e)
        //     {
        //         UnityEngine.Debug.LogErrorFormat("Load Mark Asset At Path Error: {0}", e.Message);
        //     }
        //     // ..
        //     // Mark the scene as dirty so the change is saved
        //     // ..
        //     if (htmlMarkup != null)
        //     {
        //         EditorUtility.SetDirty(this);
        //     }
        //     else
        //     {
        //         UnityEngine.Debug.LogErrorFormat("Failed To Load Mobile Html Markup File At: {0}", htmlPath);
        //     }
        // }
        // If centerLeftJoystick is checked and wasn't previously, uncheck centerRightJoystick
        if (centerLeftJoystick && !previousCenterLeftJoystick)
        {
            centerRightJoystick = false;
        }
        // If centerRightJoystick is checked and wasn't previously, uncheck centerLeftJoystick
        else if (centerRightJoystick && !previousCenterRightJoystick)
        {
            centerLeftJoystick = false;
        }
        // Update previous states
        previousCenterLeftJoystick = centerLeftJoystick;
        previousCenterRightJoystick = centerRightJoystick;
        // If both checkboxes are still checked, reset one of them
        if (centerLeftJoystick && centerRightJoystick)
        {
            // Decide which one to uncheck. In this case, we uncheck the second one
            centerRightJoystick = false;

            // Optionally, you can log a warning to the console
            Debug.LogWarning("Only one joystick can be centered at a time. CenterRightJoystick has been unchecked.");
        }
    }
}

[Serializable]
public enum UserInputKey
{
    BackSpace = 8,
    Tab = 9,
    Enter = 13,
    Shift = 16,
    Ctrl = 17,
    Alt = 18,
    Pause = 19,
    Break = 19,
    CapsLock = 20,
    Escape = 27,
    SpaceBar = 32,
    PageUp = 33,
    PageDown = 34,
    End = 35,
    Home = 36,
    LeftArrow = 37,
    UpArrow = 38,
    RightArrow = 39,
    DownArrow = 40,
    Insert = 45,
    Delete = 46,
    Num0 = 48,
    Num1 = 49,
    Num2 = 50,
    Num3 = 51,
    Num4 = 52,
    Num5 = 53,
    Num6 = 54,
    Num7 = 55,
    Num8 = 56,
    Num9 = 57,
    A = 65,
    B = 66,
    C = 67,
    D = 68,
    E = 69,
    F = 70,
    G = 71,
    H = 72,
    I = 73,
    J = 74,
    K = 75,
    L = 76,
    M = 77,
    N = 78,
    O = 79,
    P = 80,
    Q = 81,
    R = 82,
    S = 83,
    T = 84,
    U = 85,
    V = 86,
    W = 87,
    X = 88,
    Y = 89,
    Z = 90,
    LeftWindowKey = 91,
    RightWindowKey = 92,
    SelectKey = 93,
    Numpad0 = 96,
    Numpad1 = 97,
    Numpad2 = 98,
    Numpad3 = 99,
    Numpad4 = 100,
    Numpad5 = 101,
    Numpad6 = 102,
    Numpad7 = 103,
    Numpad8 = 104,
    Numpad9 = 105,
    Multiply = 106,
    Add = 107,
    Subtract = 109,
    DecimalPoint = 110,
    Divide = 111,
    F1 = 112,
    F2 = 113,
    F3 = 114,
    F4 = 115,
    F5 = 116,
    F6 = 117,
    F7 = 118,
    F8 = 119,
    F9 = 120,
    F10 = 121,
    F11 = 122,
    F12 = 123,
    NumLock = 144,
    ScrollLock = 145,
    SemiColon = 186,
    EqualSign = 187,
    Comma = 188,
    Dash = 189,
    Period = 190,
    ForwardSlash = 191,
    GraveAccent = 192,
    OpenBracket = 219,
    BackSlash = 220,
    CloseBraket = 221,
    SingleQuote = 222
}