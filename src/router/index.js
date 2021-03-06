import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/pages/Main'
import Dashboard from '@/pages/Dashboard'
import UserList from '@/pages/User'
import AddUser from '@/pages/AddUser'
import EditUser from '@/pages/EditUser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        { path: '/', component: Dashboard },
        { path: '/user-list', component: UserList },
        { path: '/add-user', component: AddUser },
        { path: '/edit-user', component: EditUser }
      ]
    }
  ]
})
