import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-slot'],
        },
        assetFileNames: (assetInfo) => {
          // Ensure CSS files have proper naming and MIME type detection
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/[name]-[hash].css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 3,
        unsafe_math: true,
        unsafe_methods: true,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    cssMinify: true,
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
