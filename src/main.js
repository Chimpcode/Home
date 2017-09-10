import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'


Vue.component('cc-logo', require('./components/Logo.vue'));
Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
