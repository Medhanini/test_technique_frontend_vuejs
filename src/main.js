import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios';
import axios from 'axios';


Vue.use(VueAxios, axios);

import 'bootstrap';
import './assets/app.scss';
import Notifications from 'vue-notification'
 
Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
