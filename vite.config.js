import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'
import mkcert  from 'vite-plugin-mkcert'
import ViteFonts from 'unplugin-fonts/vite'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
    mkcert(),
    AutoImport({
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
