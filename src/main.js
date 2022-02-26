import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

createApp(App).use(store).use(router).mount('#app')


import './assets/css/tailwind.css';
import './assets/css/global.css';
import  "./assets/css/components/utilities.css";
import "./assets/css/fontawesome.min.css";