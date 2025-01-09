import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            skipDiagnostics: true,
            include: ['src'],
            rollupTypes: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: (format) => `sdk.${format}.js`,
        },
        rollupOptions: {
            external: [
                // Peer dependencies
                'react',
                'react-dom',
                '@inertiajs/react',
                '@inertiajs/core',
                // Utilities
                'lodash-es',
                'react-tooltip',
                'react-select',
                '@headlessui/react',
            ],
            output: {
                exports: 'named',
            },
        },
        sourcemap: true,
        target: 'esnext',
    },
});
