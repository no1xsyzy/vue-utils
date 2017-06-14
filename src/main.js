import Vue from 'vue'
import VueRouter from 'vue-router'
import Routing from './components/Routing.vue'
import Homepage from './components/Homepage.vue'
import Todos from './components/Todos.vue'

import style from "./assets/main.css"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Routing,
      children: [
        { path: '', component: Homepage },
        { path: 'todos', component: Todos },
      ]
    }
  ]
})

console.log(router);

const app=new Vue({
  el:'#app',
  router,
  template: '<router-view></router-view>'
})

console.log(app);
