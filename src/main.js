import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import router from './router/router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

const app = createApp(App)
.component('fa', FontAwesomeIcon)
app.use(router)
.mount('#app')
