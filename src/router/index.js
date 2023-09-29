import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [   
    {
      path: '/',      
      name: 'home',
      redirect: { name: 'personal' }      
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
      component: () => import('../views/FinishingUpView.vue')
    },
    {
      path: '/completed',
      name: 'completed',
      // Using dynamic import for better performance
      component: () => import('../views/CompletedView.vue')
    }
  ]
})

export default router
