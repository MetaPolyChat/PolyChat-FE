using System;
using System.IO;

using UnityEngine;
using UnityEditor;

[Babylon(Class="PROJECT.WaterMaterialSystem"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Shader/Water Material System", 2144)]
public class WaterMaterialSystem : EditorScriptComponent
{
    public string waterTag = "Water";

    public Vector2 targetSize = new Vector2(128, 128);

    public Vector2 renderSize = new Vector2(512, 512);

    [Range(0.0f, 1.0f)] public float depthFactor = 1.0f;

    [Range(32, 512)] public int subDivisions = 32;

    [Range(0.0f, 10.0f)] public float heightOffset = 1.0f;

    public Texture2D bumpTexture = null;

    public bool reflectSkybox = true;

    [Header("Shader Properties")]

    public Vector2 windDirection = new Vector2(0.0f, 1.0f);

    public float windForce = 6.0f;

    public float waveSpeed = 1.0f;

    public float waveLength = 0.4f;

    public float waveHeight = 0.4f;

    public float bumpHeight = 0.4f;

    public bool bumpSuperimpose = false;

    public bool bumpAffectsReflection = false;

    public Color waterColor = new Color(0.1f, 0.1f, 0.6f);

    public float colorBlendFactor = 0.2f;

    public Color waterColor2 = new Color(0.1f, 0.1f, 0.6f);

    public float colorBlendFactor2 = 0.2f;

    public bool disableClipPlane = false;

    public bool fresnelSeparate = false;
}