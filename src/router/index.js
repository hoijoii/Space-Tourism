import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '../views/DestinationView.vue'
import CrewView from '../views/CrewView.vue'
import TechView from '../views/TechView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/destination',
    name: 'destination',
    component: DestinationView
  },
  {
    path: '/crew',
    name: 'crew',
    component: CrewView
  },
  {
    path: '/technology',
    name: 'technology',
    component: TechView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router