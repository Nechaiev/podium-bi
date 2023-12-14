import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')
