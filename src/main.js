import '@/assets/style.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from "@/routers/router.js";
import {createPinia} from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate)// плагін бере змінну і міняє на тру якщо е в стор
app.use(router)
app.use(pinia)
app.mount('#app')