import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },

    {
      path: '/people',
      name: 'people',
      component: () => import('../views/pages/people/People.vue')
    },

    {
      path: '/person/view/:id',
      name: 'person',
      component: () => import('../views/pages/people/View.vue')
    }
   
  ]
})

export default router
