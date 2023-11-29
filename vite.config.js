import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'
import mkcert  from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mkcert(), AutoImport({
      dirs: ['./src/composables/**'],
      imports: [
        'vue',
        'vue-router',
      ],
      dts: true
    }),
    Components({
      dirs: ['src/components', 'src/layouts'],
      dts: true,
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    https: true,
    host: 'newera.staging.yourcourses.kalyna.dev'
  },
})
 
