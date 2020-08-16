import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/pages/Main'
import Dashboard from '@/pages/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        { path: '/', component: Dashboard }
      ]
    }
  ]
})
