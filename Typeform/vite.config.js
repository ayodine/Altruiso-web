import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The form is served from the Altruiso site at /pitch on the same domain.
// It builds into ../out/pitch so it deploys alongside the Next static export
// (Firebase hosting `public: "out"`). Run `next build` first, then this build.
// https://vite.dev/config/
export default defineConfig({
  base: '/pitch/',
  plugins: [react()],
  build: {
    outDir: '../out/pitch',
    emptyOutDir: true,
  },
})
