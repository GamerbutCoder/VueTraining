import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'
import Products from '@/views/products.vue'
import User from '@/views/user.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name: 'login',
    component: Login

  },
  {
    path:'/',
    name: 'products',
    component: Products
  },
  {
    path:'/user/:username',
    name:'user',
    component: User
  }
  ,{
    path:'/user',
    name:'user',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
