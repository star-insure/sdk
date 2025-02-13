import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            include: ['src'],
            rollupTypes: false,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es', 'cjs'],
            fileName: (format) => `sdk.${format}.js`,
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                '@inertiajs/react',
                '@inertiajs/core',
                'lodash-es',
                'react-tooltip',
                'react-select',
                '@headlessui/react',
            ],
            output: {
                preserveModules: true,
                exports: 'named',
            },
        },
        sourcemap: true,
        target: 'esnext',
    },
});
