import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import store from './store'
import 'vant/lib/index.css'
// import { Toast } from 'vant'

// Vue.use(Toast)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(Vant)

new Vue({
  router,
  Vant,
  store,
  render: (h) => h(App),
}).$mount('#app')
