import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/backend/dashboard/backend-tailwind.css',
            ],
            refresh: [
                ...refreshPaths,
            ],
            buildDirectory: '/backendAssets/dashboard',
        }),
    ],
    css: {
        postcss: {
            plugins: [
                require("tailwindcss/nesting"),
                require("tailwindcss")({
                    config: "./backend-tailwind.config.js",
                }),
                require("autoprefixer"),
            ],
        },
    },
});
