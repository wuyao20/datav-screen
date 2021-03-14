import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Loading from '@/components/loading'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
