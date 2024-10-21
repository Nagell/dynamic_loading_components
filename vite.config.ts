import path from 'path'

import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

// eslint-disable-next-line
import { getApplicationConfiguration, getProxyConfiguration } from './config/vite'

export default getApplicationConfiguration({
    cacheDir: './node_modules/.vite/dynamic_loading_components',

    server: {
        port: 5005,
        proxy: {
            // sample proxy configuration
            '/api': getProxyConfiguration('https://localhost:7148/'),
        },
    },

    preview: {
        port: 5005,
    },

    resolve: {
        alias: {
            'tailwind-config': path.resolve(__dirname, 'tailwind.config.ts'),
        },
    },

    build: {
        outDir: './dist/dynamic_loading_components',
        // solving vite based storybook issue
        // https://github.com/tailwindlabs/tailwindcss/discussions/3646#discussioncomment-825556
        // sample: https://lobotuerto.com/notes/import-tailwind-config-in-vite
        commonjsOptions: {
            transformMixedEsModules: true,
            include: [ 'tailwind-config.cjs', 'node_modules/**' ],
        }
    },

    optimizeDeps: {
        include: [
            'tailwind-config',
        ],
    },

    plugins: [
        chunkSplitPlugin({
            strategy: 'default',
            customChunk(args) {
                const { file } = args

                // If some custom split is needed filter it out here and return the chunk name
                // It is recommended to use 'includes' as vue files are transformed in the process,
                // ex. 'ButtonItem.vue' -> 'ButtonItem.vue_vue_type_script_setup_true_lang-73YVYCtP'
                if (file.includes('_domain_A.vue')) return 'domain_A'
                if (file.includes('_domain_B.vue')) return 'domain_B'
                if (file.includes('node_modules/')) return 'vendor'
                else return 'index'
            },
        }),
    ],
})
