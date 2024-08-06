using System;
using UnityEditor;
using UnityEngine;

/**
* Editor Script Component
* @class CustomHtmlMarkup
*/
[Babylon(Class="PROJECT.CustomHtmlMarkup"), AddComponentMenu(CanvasToolsStatics.CANVAS_TOOLS_MENU + "/Content Components/Interface/Custom Markup Content")]
public class CustomHtmlMarkup : EditorScriptComponent
{
    [Auto][EmbeddedAsset] public DefaultAsset styleSheet = null;
    [Auto][EmbeddedAsset] public TextAsset htmlMarkup = null;
    [Auto] public string parentElement = null;

    private void OnValidate()
    {
        string scriptPath = AssetDatabase.GetAssetPath(MonoScript.FromMonoBehaviour(this));
        string folderPath = System.IO.Path.GetDirectoryName(scriptPath);
        if (styleSheet == null)
        {
            string cssPath = folderPath + "/CustomHtmlMarkup.css";
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
        if (htmlMarkup == null)
        {
            string htmlPath = folderPath + "/CustomHtmlMarkup.html";
            try
            {
                htmlMarkup = AssetDatabase.LoadAssetAtPath<TextAsset>(htmlPath);
            }
            catch (Exception e)
            {
                UnityEngine.Debug.LogErrorFormat("Load Mark Asset At Path Error: {0}", e.Message);
            }
            // ..
            // Mark the scene as dirty so the change is saved
            // ..
            if (htmlMarkup != null)
            {
                EditorUtility.SetDirty(this);
            }
            else
            {
                UnityEngine.Debug.LogErrorFormat("Failed To Load Mobile Html Markup File At: {0}", htmlPath);
            }
        }
    }
}

