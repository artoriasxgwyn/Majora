import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import { Quasar, Notify } from 'quasar'
import {router} from "./routes/routes.js"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(Quasar, {
  plugins: {
    Notify
  }, // import Quasar plugins and add here
})

app.use(router)
app.use(pinia)
app.mount('#app')
