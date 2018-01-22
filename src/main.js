// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'

Vue.use(function (Vue) {
  Vue.prototype.$axios = axios
})

axios.defaults.baseURL = 'http://api.tubatulu.com/'

axios.interceptors.request.use(
  config => {
      config.data = qs.stringify(config.data)
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Accept': 'application/json',
      }
      return config;
  },
  err => {
      return Promise.reject(err);
  }
);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
