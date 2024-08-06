using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class NodeMaterialProcess
*/
[Babylon(Class="PROJECT.NodeMaterialProcess"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Material/Node Material Process", 2203)]
public class NodeMaterialProcess : EditorScriptComponent
{
    [Auto] public NodeMaterialInstance nodeMaterialEditor = null;
    [Auto] [Range(1, 32)] public int numberOfSamples = 1;
    [Auto] public BabylonSamplingMode samplingMode = BabylonSamplingMode.DEFAULT;
    [Auto] public BabylonTextureType textureType = BabylonTextureType.DEFAULT;
    [Auto] public BabylonTextureFormat textureFormat = BabylonTextureFormat.DEFAULT;
    [Auto] [Range(0.0f, 1.0f)] public float sizeRatio = 1.0f;
    [Auto] public bool resuable = false;

    public enum BabylonSamplingMode
    {
        DEFAULT = 0,
        NEAREST = 1,
        BILINEAR = 2,
        TRILINEAR = 3,
        NEAREST_LINEAR = 7,
        NEAREST_NEAREST = 1,
        LINEAR_LINEAR = 2,
        LINEAR_NEAREST = 12,
        LINEAR_LINEAR_MIPLINEAR = 3,
        NEAREST_NEAREST_MIPNEAREST = 4,
        NEAREST_LINEAR_MIPNEAREST = 5,
        NEAREST_LINEAR_MIPLINEAR = 6,
        NEAREST_NEAREST_MIPLINEAR = 8,
        LINEAR_NEAREST_MIPNEAREST = 9,
        LINEAR_NEAREST_MIPLINEAR = 10,
        LINEAR_LINEAR_MIPNEAREST = 11
    }

    public enum BabylonTextureType
    {
        DEFAULT = 0,
        FLOAT = 1,
        HALF_FLOAT = 2,
        BYTE = 3,
        SHORT = 4,
        UNSIGNED_SHORT = 5,
        INTEGER = 6,
        UNSIGNED_INTEGER = 7,
        UNSIGNED_SHORT_4_4_4_4 = 8,
        UNSIGNED_SHORT_5_5_5_1 = 9,
        UNSIGNED_SHORT_5_6_5 = 10,
        UNSIGNED_INT_2_10_10_10_REV = 11,
        UNSIGNED_INT_24_8 = 12,
        UNSIGNED_INT_10F_11F_11F_REV = 13,
        UNSIGNED_INT_5_9_9_9_REV = 14,
        FLOAT_32_UNSIGNED_INT_24_8_REV = 15
    }

    public enum BabylonTextureFormat
    {
        DEFAULT = 5,
        ALPHA = 0,
        LUMINANCE = 1,
        LUMINANCE_ALPHA = 2,
        RGB = 4,
        RGBA = 5,
        RED = 6,
        RG = 7,
        RED_INTEGER = 8,
        RG_INTEGER = 9,
        RGB_INTEGER = 10,
        RGBA_INTEGER = 11
    }
}
