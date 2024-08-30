import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/global.css',
                'resources/css/table.css',
                'resources/css/forms.css',
                'resources/css/turn.css',
                'resources/css/footer.css',
                'resources/js/app.js',
                'resources/js/turn.js',
                'resources/js/helpers.js',
                ],
                refresh: true,
                publicDir: 'public',
            }),
        ],
        resolve: {
            alias: {
                '$': 'jquery'
            },
        },
});