import './assets/main.css'
import { greet, burger } from './assets/module1'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
console.log(greet('Pall'))
burger()
