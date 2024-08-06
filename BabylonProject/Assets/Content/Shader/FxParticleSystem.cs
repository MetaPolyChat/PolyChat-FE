using System;
using System.IO;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class FxParticleSystem
*/
[Babylon(Class="PROJECT.FxParticleSystem"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Shader/Fx Particle System", 2141)]
public class FxParticleSystem : EditorScriptComponent
{
    [Serializable] public enum ParticleSystemType { CPU = 0, GPU = 1 }
    public ParticleSystemType classType = ParticleSystemType.CPU;
    public bool playOnAwake = true;
    public Texture2D particleTexture = null;
    [IgnoreExport] public TextAsset particleSystemData = null;
    [HideInInspector] public string base64ParticleSystem = null;
    
    public override void OnUpdateProperties(Transform transform, SceneExporterTool exporter)
    {
        if (this.particleSystemData != null) {
            string jsonPath = AssetDatabase.GetAssetPath(this.particleSystemData);
            if (!String.IsNullOrWhiteSpace(jsonPath)) {
                string nativePath = UnityTools.GetNativePath(jsonPath);
                if (File.Exists(nativePath)) {
                    string jsonData = FileTools.ReadAllText(nativePath);
                    if (!String.IsNullOrWhiteSpace(jsonData)) {
                        this.base64ParticleSystem = UnityTools.FormatBase64(jsonData);
                    }
                }
            }
        }
    }
}
