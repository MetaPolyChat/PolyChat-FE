using System;
using System.IO;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class UserInterfaceManager
*/
[Babylon(Class="PROJECT.UserInterface"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Interface/User Interface Manager", 2141)]
public class UserInterfaceManager : EditorScriptComponent
{
    [Auto][HideInInspector] public bool exportLowerCase = false;
    [Auto][HideInInspector] public bool useRenderingSize = false;
    [Auto][HideInInspector] public bool useBothIdealSizes = false;
    [Auto][HideInInspector] public bool useActualTextureSize = false;

    [Tooltip("Set the user interface json data file")]
    [IgnoreExport] public TextAsset userInterfaceData = null;
    [Tooltip("Render the user intreface at the ideal scaling ratio")]
    [Auto] public IdealRenderSizing idealRenderingSize = IdealRenderSizing.None;
    [Tooltip("Defines advanced dynamic texture sampling mode")]
    [Auto] public TextureSamplingMode textureSampleMode = TextureSamplingMode.Bilinear;
    [Tooltip("Use texture render size from design document or custom values")]
    [Auto] public TextureRenderSize viewportRenderSize = TextureRenderSize.Artboard;
    [Tooltip("Define the custom texture render size values")]
    [Auto][ConditionalField("useActualTextureSize", Inverse = false, Visible = false)] public Vector2 customViewportSize = new Vector2(1920,1080);
    [Tooltip("Defines the default image control place holder url prefix")]
    [Auto][ConditionalField("defaultImageControl", Inverse = false, Visible = false)] public string defaultImageLocation = "scenes/assets/";
    [Tooltip("Defines whether to export the default image control place holder")]
    [Auto] public bool defaultImageControl = true;
    [Tooltip("Use the scene manager advanced dynamic texture")]
    [Auto] public bool isManagedTexture = true;
    [Tooltip("Defines whether to scale the texture to the saved size")]
    [Auto] public bool scaleTextureSize = true;
    [Tooltip("Defines whether to automatically set hardware scaling")]
    [Auto] public bool setAdaptiveScale = true;
    [Tooltip("Draw the canvas at ideal rendering size")]
    [Auto][ConditionalField("useRenderingSize", Inverse = false, Visible = false)] public bool drawAtIdealSize = true;
    [Tooltip("Use the smallest ideal value if idealWidth and idealHeight are both set")]
    [Auto][ConditionalField("useBothIdealSizes", Inverse = false, Visible = false)] public bool useSmallestIdeal = false;
    [Tooltip("Defines optional background canvas data")]
    [Auto] public BackgroundTextureInfo backgroundData = null;
    [Tooltip("Defines the list of font families to preload")]
    [Auto] public string[] fontFamilyList = null;

    [HideInInspector] public string base64UserInterface = null;
    [HideInInspector] public string base64BackgroundData = null;

    public override void OnUpdateProperties(Transform transform, SceneExporterTool exporter)
    {
        this.exportLowerCase = (CanvasToolsInfo.Instance.ExportCaseMode == 1);
        if (this.userInterfaceData != null) {
            string jsonPath = AssetDatabase.GetAssetPath(this.userInterfaceData);
            if (!String.IsNullOrWhiteSpace(jsonPath)) {
                string nativePath = UnityTools.GetNativePath(jsonPath);
                if (File.Exists(nativePath)) {
                    string jsonData = FileTools.ReadAllText(nativePath);
                    if (!String.IsNullOrWhiteSpace(jsonData)) {
                        this.base64UserInterface = UnityTools.FormatBase64(jsonData);
                    }
                }
            }
        }
        if (this.backgroundData != null && this.backgroundData.backgroundInterface != null) {
            string jsonPath = AssetDatabase.GetAssetPath(this.backgroundData.backgroundInterface);
            if (!String.IsNullOrWhiteSpace(jsonPath)) {
                string nativePath = UnityTools.GetNativePath(jsonPath);
                if (File.Exists(nativePath)) {
                    string jsonData = FileTools.ReadAllText(nativePath);
                    if (!String.IsNullOrWhiteSpace(jsonData)) {
                        this.base64BackgroundData = UnityTools.FormatBase64(jsonData);
                    }
                }
            }
        }
        //if (this.defaultImageControl == true) {
        //    string imageControlDefault = Path.Combine(Application.dataPath, CanvasToolsStatics.CANVAS_TOOLS_FOLDER + "/Images/imageControlDefault.jpg");
        //    string projectExportFolder = CanvasToolsInfo.DefaultProjectFolder;
        //    string outputImageFile = Path.Combine(projectExportFolder, "imageControlDefault.jpg");
        //    if (System.IO.File.Exists(imageControlDefault)) {
        //        System.IO.FileTools.CopyDiskFile(imageControlDefault, outputImageFile, true);
        //    }
        //}
    }
}

// Optional Script Component Custom Editor Class
[CustomEditor(typeof(UserInterfaceManager)), CanEditMultipleObjects]
public class UserInterfaceManagerEditor : Editor
{
    private  UserInterfaceManager owner = null;
    public void OnEnable()
    {
        this.owner = (UserInterfaceManager)target;
        this.UpdateOwnerProperties();
    }
    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();
        this.UpdateOwnerProperties();
    }

    public void UpdateOwnerProperties()
    {
        if (this.owner != null)
        {
            this.owner.useRenderingSize = (this.owner.idealRenderingSize != IdealRenderSizing.None);
            this.owner.useBothIdealSizes = (this.owner.idealRenderingSize == IdealRenderSizing.Both);
            this.owner.useActualTextureSize = (this.owner.viewportRenderSize == TextureRenderSize.Custom);
        }
    }
}

[Serializable]
public class BackgroundTextureInfo
{
    [Tooltip("Defines whether to create a background texture")]
    [Auto] public bool createBackground = false;

    [Tooltip("Defines whether to scale the texture to the foreground size")]
    [Auto] public bool scaleToForeground = true;

    [Tooltip("Set the user interface json data file")]
    [IgnoreExport] public TextAsset backgroundInterface = null;
}

public enum TextureRenderSize { Artboard = 0, Canvas = 1, Custom = 2 }
public enum IdealRenderSizing { None = 0, Width = 1, Height = 2, Both = 3 }
public enum TextureSamplingMode { Nearest = 1, Bilinear = 2, Trilinear = 3 }
