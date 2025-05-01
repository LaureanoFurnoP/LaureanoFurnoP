import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.docx'],
  base:'https://LaureanoFurnoP.github.io/vite-deploy/'
})
