import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/ArticleView.vue')

  },
  {
    path: '/clubs',
    name: 'clubs',
    component: () => import('../views/ClubView.vue')
  },
  {
    path: '/regattas',
    name: 'regattas',
    component: () => import('../views/RegattaView.vue')
  },
  {
    path: '/articles/:id',
    component: () => import('../views/ArticleOneView.vue')
  },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
