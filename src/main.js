import Vue from 'vue'
import App from './App.vue'
import FormApp from './FormApp.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'


Vue.component('cc-logo', require('./components/Logo.vue'))
Vue.component('cc-console', require('./components/ConsoleEffect.vue'))

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
