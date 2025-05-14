import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RSVP from '../views/RSVP.vue'
import Food from '../views/Food.vue'
import Venue from '../views/Venue.vue'
import Schedule from '../views/Schedule.vue'
import Registry from '../views/Registry.vue'
import Confirmation from '../views/Confirmation.vue'

const routes = [
  { path: '/', component: Home, meta: { title: 'Home - Parker & Emily Wedding' } },
  { path: '/rsvp', component: RSVP, meta: { title: 'RSVP - Parker & Emily Wedding' } },
  { path: '/food', component: Food, meta: { title: 'Food - Parker & Emily Wedding' } },
  { path: '/venue', component: Venue, meta: { title: 'Venue - Parker & Emily Wedding' } },
  { path: '/schedule', component: Schedule, meta: { title: 'Schedule - Parker & Emily Wedding' } },
  { path: '/registry', component: Registry, meta: { title: 'Registry - Parker & Emily Wedding' } },
  { path: '/confirmation', component: Confirmation, meta: { title: 'Confirmation - Parker & Emily Wedding' } }, 
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Parker & Emily Wedding'
})

export default router
