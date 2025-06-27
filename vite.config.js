import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: 'index.js',
            output: {
                entryFileNames: 'jkcss.min.js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'jkcss.min.css';
                    }
                    return assetInfo.name;
                }
            },
        },
        cssCodeSplit: false,
    },
});

