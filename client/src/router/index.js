import Vue from 'vue'
import Router from 'vue-router'
import Blank from '@/components/Blank'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blank',
      component: Blank
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
