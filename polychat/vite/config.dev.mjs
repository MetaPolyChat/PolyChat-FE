import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import fs from 'fs';

// https 전환
// const keyPath = path.resolve(__dirname, '../https/localhost-key.pem');
// const certPath = path.resolve(__dirname, '../https/localhost.pem');
// console.log("Key Path: ", keyPath);
// console.log("Cert Path: ", certPath);
//
// export default defineConfig({
//     base: './',
//     plugins: [
//         react(),
//     ],
//     server: {
//         https: {
//             key: fs.readFileSync(keyPath),
//             cert: fs.readFileSync(certPath),
//         },
//         host: '0.0.0.0',
//         port: 3000,
//     },
// })



// http 변환
export default defineConfig(({ mode }) => {
    // .env 파일의 변수 로드
    const env = loadEnv(mode, process.cwd(), '');
    
    
    return {
        plugins: [
            react(), // React 플러그인
        ],
        server: {
            host: env.VITE_IP || '0.0.0.0',
            port: parseInt(env.VITE_PORT, 10) || 3000
        },
    };
});


