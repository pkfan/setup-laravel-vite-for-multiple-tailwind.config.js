import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/admin-dashboard/css/app.css',
                'resources/admin-dashboard/js/app.js',
            ],
            refresh: [
                ...refreshPaths,
            ],
            buildDirectory: '/admin-dashboard',
        }),
    ],
});
