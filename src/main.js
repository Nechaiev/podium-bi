import './assets/main.css'
import {createPinia} from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia();
// console.log(pinia.state.value.user);

pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(pinia)
app.mount('#app')
