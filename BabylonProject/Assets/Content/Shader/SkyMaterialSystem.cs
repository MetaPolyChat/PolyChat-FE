using System;
using System.IO;

using UnityEngine;
using UnityEditor;

[Babylon(Class="PROJECT.SkyMaterialSystem"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Shader/Sky Material System", 2142)]
public class SkyMaterialSystem : EditorScriptComponent
{
    public float boxSize = 1000.0f;
    public Color tintColor = Color.white;
    /**
     * Defines the overall luminance of sky in interval [0, 1].
     */
    [Range(0.0f, 1.0f)] public float luminance = 1.0f;

    /**
     * Defines the amount (scattering) of haze as opposed to molecules in atmosphere.
     */
    [Range(0.0f, 100.0f)] public float turbidity = 10.0f;

    /**
     * Defines the sky appearance (light intensity).
     */
    [Range(0.0f, 10.0f)] public float rayleigh = 2.0f;

    /**
     * Defines the mieCoefficient in interval [0, 0.1] which affects the property .mieDirectionalG.
     */
    [Range(0.0f, 0.1f)] public float mieCoefficient = 0.005f;

    /**
     * Defines the amount of haze particles following the Mie scattering theory.
     */
    [Range(0.0f, 10.0f)] public float mieDirectionalG = 0.8f;

    /**
     * Defines the distance of the sun according to the active scene camera.
     */
    [Range(1.0f, 100000.0f)] public float distance = 500;

    /**
    * Defines the sun inclination, in interval [-0.5, 0.5]. When the inclination is not 0, the sun is said
    * "inclined".
    */
    [Range(-0.5f, 0.5f)] public float inclination = 0.0f;

    /**
     * Defines the solar azimuth in interval [0, 1]. The azimuth is the angle in the horizontal plan between
     * an object direction and a reference direction.
     */
    [Range(0.0f, 1.0f)] public float azimuth = 0.25f;

    /**
     * Defines the reflection probe cube texture size
     */
    [Range(16, 2048)] public float probeSize = 128;

    /**
     * Defines an offset vector used to get a horizon offset.
     * @example skyMaterial.cameraOffset.y = camera.globalPosition.y Set horizon relative to 0 on the Y axis.
     */
    public Vector3 cameraOffset = new Vector3(0,0,0);

    public bool applyMeshFog = false;

    public bool useSunPosition = false;

    [Header("Environment Properties")]

    public bool reflections = false;

    [Range(0.0f, 10.0f)] public float reflectLevel = 1.0f;
}