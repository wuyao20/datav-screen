import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Loading from '@/components/loading'
import Test from '@/views/Test'
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
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
