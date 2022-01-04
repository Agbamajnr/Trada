import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Waiting from '../views/Waiting.vue'
import ComingSoon from '../views/Comingsoon.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/waiting',
    name: 'Waiting',
    component: Waiting
  },
  {
    path: '/comingsoon',
    name: 'ComingSoon',
    component: ComingSoon
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
