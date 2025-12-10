import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Remove the following block:
  // esbuild: {
  //   loader: 'jsx',
  //   include: /src\/.*\.js$/,
  // }
})