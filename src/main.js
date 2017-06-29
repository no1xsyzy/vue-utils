import Vue from 'vue'
import VueRouter from 'vue-router'

import Routing from './components/Routing.vue'
const Homepage = resolve => require(['./components/Homepage.vue'], resolve)
const Todos = resolve => require(['./components/Todos.vue'], resolve)
const Register = resolve => require(['./components/Register.vue'], resolve)
import store from './store'

import style from "./assets/main.css"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Homepage },
    { path: '/todos', component: Todos },
    { path: '/register', component: Register },
  ]
})

const app=new Vue({
  el:'#app',
  router,
  store,
  render: h => h(Routing)
})
