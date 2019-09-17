import Vue from 'vue'
import App from './App.vue'
import router from "./routers/router.js"

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(iView);
Vue.config.productionTip = false
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
