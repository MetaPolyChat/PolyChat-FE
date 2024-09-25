import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import fs from 'fs';

const keyPath = path.resolve(__dirname, '../https/localhost-key.pem');
const certPath = path.resolve(__dirname, '../https/localhost.pem');
console.log("Key Path: ", keyPath);
console.log("Cert Path: ", certPath);

export default defineConfig({
    base: './',
    plugins: [
        react(),
    ],
    server: {
        https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certPath),
        },
        host: '0.0.0.0',
        port: 3000,
    },
})

