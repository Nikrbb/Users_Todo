import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoList.vue'

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList,
    meta: { layout: 'main' },
  },
  {
    path: '/users',
    name: 'Users',
    meta: { layout: 'main' },
    component: () => import('../views/Users.vue')
  },
  {
    path: '/users/:id',
    name: 'User',
    meta: { layout: 'main' },
    component: () => import('../views/User.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: { layout: 'main' },
    component: () => import('../views/404.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
