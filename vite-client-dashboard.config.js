import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/client-dashboard/css/app.css',
                'resources/client-dashboard/js/app.js',
            ],
            refresh: [
                ...refreshPaths,
            ],
            buildDirectory: '/client-dashboard',
        }),
    ],
});
