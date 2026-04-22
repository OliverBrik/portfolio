import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/myprojects',
      name: 'myprojects',
      // route level code-splitting
      // this generates a separate chunk (MyProjects.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MyProjectsView.vue'),
    },
    {
      path: '/projects/broedrene-loevehjerte',
      name: 'broedrene-loevehjerte',
      component: () => import('../views/BroedreneLoevehjerteView.vue'),
    },
    {
      path: '/projects/portfolio-website',
      name: 'portfolio-website',
      component: () => import('../views/PortfolioWebsiteView.vue'),
    },
    {
      path: '/projects/mini-me',
      name: 'mini-me',
      component: () => import('../views/MiniMeView.vue'),
    },
    {
      path: '/projects/infographics-plakat',
      name: 'infographics-plakat',
      component: () => import('../views/InfographicsPlakatView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
