import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoList.vue'

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/users',
    name: 'Users',
    meta: { layout: 'main' },
    component: () => import('../views/Users.vue')
  },
  // {
  //   path: '/current',
  //   name: 'User',
  //   meta: { layout: 'main' },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/Users.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
