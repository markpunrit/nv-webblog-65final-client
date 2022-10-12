import Vue from 'vue'
import Router from 'vue-router'

import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'

import createIndex from '@/components/creates/Index'
import createCreate from '@/components/creates/Createcreate'
import createEdit from '@/components/creates/Editcreate'
import createShow from '@/components/creates/Showcreate'

Vue.use(Router)

export default new Router({
  mode:'speaker',
  routes: [
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/creates',
      name: 'creates',
      component: createIndex
    },
    {
      path: '/create/create',
      name: 'creates-edit',
      component: createCreate
    },
    {
      path: '/create/edit/:createId',
      name: 'create-edit',
      component: createEdit
    },
    {
      path: '/create/:createId',
      name: 'create',
      component: createShow
    },
  ]
})
