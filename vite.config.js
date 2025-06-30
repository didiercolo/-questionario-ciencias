import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
// Vite configuration for Vercel
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    base: '/-questionario-ciencias/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        // Ensure assets are referenced with relative paths
        assetsInlineLimit: 0,
    },
    server: {
        port: 3000,
        open: true,
        // Enable CORS for local development
        cors: true,
    },
    // Ensure the public directory is copied correctly
    publicDir: 'public',
});
