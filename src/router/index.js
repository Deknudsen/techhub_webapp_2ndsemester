import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

// for editing (CRUD)
import Edit from '../views/Edit.vue'

// For login stuff
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'

// route guarding
//import firebase from 'firebase'
//import 'firebase/firestore'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',  // id parameter to know which project we clicked
    name: 'Edit',
    component: Edit
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register', 
    component: Register
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsView.vue')
  },
  {
    path: '/startups',
    name: 'startups',
    component: () => import('../views/ForStartupsView.vue')
  },
  {
    path: '/event',
    name: 'event',
    component: () => import('../views/SingleEventView.vue')
  },
  {
    path: '/admin/events',
    name: 'adminEvents',
    component: () => import('../views/AdminEventListView.vue')
  },
  {
    path: '/admin/testimonials',
    name: 'adminTestimonials',
    component: () => import('../views/AdminTestimonialsListView.vue')
  },
  {
    path: '/admin/createevents',
    name: 'createEvents',
    component: () => import('../views/AdminCreateEventsView.vue')
  },
  {
    path: '/admin/editevents/:id',
    name: 'createEvents',
    component: () => import('../views/AdminEditEventView.vue')
  },
  {
    path: '/admin/createtestimonials',
    name: 'createTestimonials',
    component: () => import('../views/AdminCreateTestimonialsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
  
})
export default router
