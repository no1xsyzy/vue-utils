import Vue from 'vue'
import VueRouter from 'vue-router'

import Routing from './components/Routing.vue'
import Homepage from './components/Homepage.vue'
import Todos from './components/Todos.vue'
import store from './store'

import style from "./assets/main.css"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Homepage },
    { path: '/todos', component: Todos },
  ]
})

const app=new Vue({
  el:'#app',
  router,
  store,
  render: h => h(Routing)
})
