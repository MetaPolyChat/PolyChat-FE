import React from 'react';

const Kalidoface = () => {
    return (
        <>
            <meta charSet="utf-8" />
            {/* HTML Meta Tags */}
            <title>Kalidoface 3D - Face & Full Body Tracking</title>
            <meta
                name="description"
                content="Animate character faces, poses and fingers in 3D using just your browser webcam!"
            />

            {/* Facebook Meta Tags */}
            <meta property="og:url" content="https://3d.kalidoface.com/" />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Kalidoface 3D - Face & Full Body Tracking"
            />
            <meta
                property="og:description"
                content="Animate character faces, poses and fingers in 3D using just your browser webcam!"
            />
            <meta
                property="og:image"
                content="https://yeemachine.github.io/k2021/favicon/kalidoface3d/meta.jpg"
            />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="3d.kalidoface.com" />
            <meta property="twitter:url" content="https://3d.kalidoface.com/" />
            <meta
                name="twitter:title"
                content="Kalidoface 3D - Face & Full Body Tracking"
            />
            <meta
                name="twitter:description"
                content="Animate character faces, poses and fingers in 3D using just your browser webcam!"
            />
            <meta
                name="twitter:image"
                content="https://yeemachine.github.io/k2021/favicon/kalidoface3d/meta.jpg"
            />

            <link rel="manifest" href="/manifest.json" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta
                name="viewport"
                content="viewport-fit=cover, user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
            />

            <meta name="theme-color" content="#16161d" />
            <base href="%PUBLIC_URL%" />
            <link rel="stylesheet" href="/global.css" />
            <script>
                var parcelRequire;
            </script>
            <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils@0.3.1620248257/drawing_utils.js" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.5.1635989137/holistic.js" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4.1633559619/face_mesh.min.js" crossOrigin="anonymous"></script>
            <link
                rel="shortcut icon"
                href="https://yeemachine.github.io/k2021/favicon/kalidoface3d/icon-circle.svg"
            />

            <link
                rel="apple-touch-icon"
                href="https://yeemachine.github.io/k2021/favicon/kalidoface3d/apple-icon-180.png"
            />

            <link
                rel="apple-touch-startup-image"
                href="https://yeemachine.github.io/k2021/splash/apple-splash-2048-2732.jpg"
                media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="https://yeemachine.github.io/k2021/splash/apple-splash-2732-2048.jpg"
                media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            {/* Add the rest of the apple-touch-startup-image links here */}
            {/* Google Tag Manager */}
            <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5V3VF28');`}
            </script>
            {/* End Google Tag Manager */}
            <h1 className="notranslate">kalidoface</h1>
            <script type="module" src="./src/main.js"></script>
            {/* <pwa-update></pwa-update> */}
        </>
    );
};

export default Kalidoface;
