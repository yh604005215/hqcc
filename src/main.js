import Vue from 'vue'
import App from './App.vue'
import Button from './components/button.vue'
import './assets/fonts/style.scss'

Vue.config.productionTip = false

Vue.component(Button.name, Button)

new Vue({
  render: h => h(App)
}).$mount('#app')
