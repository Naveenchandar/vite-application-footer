import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'footerApp',
      filename: 'footerRemoteEntry.js',
      exposes: {
        './Footer': './src/App.jsx'
      },
      shared: {
        'react': {
          singleton: true
        },
        'react-dom': {
          singleton: true
        }
      }
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  preview: {
    port: 4003,
  },
  server: {
    port: 5003
  },
  build: {
    target: 'esnext', //browsers can handle the latest ES features
    cssCodeSplit: true
  },
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    }
  },
})
