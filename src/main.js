import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/main.css'

const app = createApp(App)

// components
import FaIcon from '@/components/FaIcon'
app.component('FaIcon', FaIcon)

app.mount('#app')
