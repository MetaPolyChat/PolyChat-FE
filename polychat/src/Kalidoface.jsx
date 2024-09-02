import React from "react";
import "./global.css";
import "./assets/index.1b91a8e8.css";  // This imports the CSS styles that your application needs.
import { useEffect } from 'react';
import './global.css';
import './assets/index.1b91a8e8.css';


function Kalidoface() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "../../PolyChat-FE/polychat/src/assets/index.e2bec78d.js"
        script.async = true;
        document.body.appendChild(script);
        
        const vendorScript = document.createElement("script");
        vendorScript.src = "../../PolyChat-FE/polychat/src/assets/vendor.8332d142e.js"
        vendorScript.async = true;
        document.body.appendChild(vendorScript);
        
        const cssAssets = document.createElement("style");
        cssAssets.src = "../../PolyChat-FE/polychat/src/assets/index.1b91a8e8.css"
        cssAssets.async = true;
        document.body.appendChild(cssAssets);
    },[])

    return (
        <div>
            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-5V3VF28"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                    title="Google Tag Manager"
                ></iframe>
            </noscript>
            {/* Content of the page */}
            <h1 className="notranslate">kalidoface</h1>
        </div>
    );
}

export default Kalidoface;



