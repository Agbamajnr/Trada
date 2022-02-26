import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Waiting from '../views/Waiting.vue'
import ComingSoon from '../views/Comingsoon.vue'
import Store from '../views/Store.vue'
import Error from '../views/404.vue'
import Admin from '../views/Admin.vue'
import NewStore from '../views/NewStore.vue'
import AddProduct from '../views/addProduct.vue'
import Chat from '../views/Chat.vue'
import VideoChat from '../views/VideoChat.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newstore',
    name: 'NewStore',
    component: NewStore
  },
  {
    path: '/store/:storeId/admin/new_product',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/tdttoken',
    name: 'Waiting',
    component: Waiting
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/messages',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/store/:id/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/comingsoon',
    name: 'ComingSoon',
    component: ComingSoon
  },
  {
    path: '/chat/videochat/:roomId',
    name: 'VideoChat',
    component: VideoChat
  },
  {
    path: '/store/:id',
    name: 'Store',
    component: Store,
    props: true
  },
  {
    path: '/:catchAll()',
    name: 'Error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
