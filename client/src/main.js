import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'

import router from '@/router'
//allows app.vue to use router-view which in turn houses our StateList or whatever State detail may be pulled up

//importing leaflet's style sheets:
import 'leaflet/dist/leaflet.css'

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService


app.use(router)

app.mount('#app')



