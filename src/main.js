import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD

import router from "./routers/router.js"
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.config.productionTip = false

=======
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "./routers/router.js"

Vue.config.productionTip = false
Vue.use(ElementUI)
>>>>>>> 39616ae008359a05037fd5e9bc6592b2cd9fe45d

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
