import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from "../views/Profile.vue"
import Team from "../views/Team.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
