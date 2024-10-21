import * as path from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
    root: process.cwd(),

    server: {
        host: 'localhost',
        open: true,
    },

    preview: {
        host: 'localhost',
    },

    plugins: [ vue() ],

    resolve: {
        alias: {
            '@': path.resolve(process.cwd(), './src'),
        },
    },

    build: {
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
})
