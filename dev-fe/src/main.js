// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate'
import './assets/css/app.css'
import { nav } from './utils/nav'
import { fixed } from './utils/fixed'
Vue.prototype.$nav = nav
Vue.prototype.$fixed = fixed
Vue.use(Vuelidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
