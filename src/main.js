// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import '@audi/audi-icon/dist/css/audi-iconfont.css'
import 'simple-line-icons/css/simple-line-icons.css'
import '@/assets/font/flaticon.css'
import 'roboto-fontface'
import 'material-design-icons/iconfont/material-icons.css'

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.MAPS_API_KEY,
    libraries: ['places', 'geometry']
  }
})

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
