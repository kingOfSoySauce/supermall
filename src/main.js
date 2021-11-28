import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import store from './store'
import 'vant/lib/index.css'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(Vant)

Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png'),
})

FastClick.attach(document.body)

new Vue({
  router,
  Vant,
  store,
  render: (h) => h(App),
}).$mount('#app')
