import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Echarts from 'vue-echarts'
import CountTo from '@/components/VueCountTo/vue-countTo'
import VueEcharts from '@/components/VueEcharts/VueEcharts'
createApp(App)
  .use(store)
  .use(router)
  .component('count-to', CountTo)
  .component('vue-echarts', VueEcharts)
  .mount('#app')
