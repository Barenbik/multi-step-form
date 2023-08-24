import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // Using dynamic import for better performance
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      // Using dynamic import for better performance
      component: () => import('../views/PersonalView.vue')
    },
    {
      path: '/plans',
      name: 'plans',
      // Using dynamic import for better performance
      component: () => import('../views/PlanView.vue')
    },
    {
      path: '/addons',
      name: 'addons',
      // Using dynamic import for better performance
      component: () => import('../views/AddOnView.vue')
    },
    {
      path: '/finishingup',
      name: 'finishingup',
      // Using dynamic import for better performance
      component: () => import('../views/FinishingUp.vue')
    }
  ]
})

export default router
