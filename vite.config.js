@@ -1,7 +1,8 @@
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/new/',
  plugins: [react()],
})
})
