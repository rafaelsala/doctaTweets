import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Feed from '@/views/Feed.vue'
import Login from '@/views/Login.vue'
import Registro from '@/views/Registro.vue'
import Perfil from '@/views/Perfil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {logueado: true},
  },

  {
    path: '/feed/:username',
    name: 'feed',
    component: Feed,
    meta: {logueado: true},
  },

  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },

  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil,
    meta: {logueado: true},
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
