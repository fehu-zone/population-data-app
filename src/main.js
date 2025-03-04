import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/global.css' // Global stil dosyası
import i18n from './i18n' // i18n modülünü ekledik

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
