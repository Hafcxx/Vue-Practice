import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'

//import './assets/main.css'

//Vinculando bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App)
const pinia = createPinia();

app.use(router)
app.use(pinia);

//usando bootstrap
app.use(bootstrap)

app.mount('#app')
