import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).mount('#app')
AOS.init()
