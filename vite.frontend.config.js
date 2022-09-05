import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/frontend/frontend-tailwind.css',
            ],
            refresh: [
                ...refreshPaths,
            ],
            buildDirectory: '/frontendAssets',
        }),
    ],
    css: {
        postcss: {
            plugins: [
                require("tailwindcss/nesting"),
                require("tailwindcss")({
                    config: "./frontend-tailwind.config.js",
                }),
                require("autoprefixer"),
            ],
        },
    },
});
