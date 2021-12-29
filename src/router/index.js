import { createRouter, createWebHistory } from 'vue-router'
import Waiting from '../views/Waiting.vue'

const routes = [
  {
    path: '/waiting',
    name: 'Waiting',
    component: Waiting
  },
  {
    path: '/',
    redirect: '/waiting',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
