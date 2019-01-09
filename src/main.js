import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//总线
Vue.prototype.$bus = new Vue({})

new Vue({
  render: h => h(App),
}).$mount('#app')
