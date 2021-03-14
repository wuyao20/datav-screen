import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Echarts from 'vue-echarts'

createApp(App)
  .use(store)
  .use(router)
  .component('vue-echarts', Echarts)
  .mount('#app')
