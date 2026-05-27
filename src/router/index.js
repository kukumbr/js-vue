import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomDetailView from '../views/RoomDetailView.vue'
import DoctorDetailView from '../views/DoctorDetailView.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/room/:id',
    name: 'room-detail',
    component: RoomDetailView,
    props: true
  },
  {
    path: '/doctor/:id',
    name: 'doctor-detail',
    component: DoctorDetailView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  
  scrollBehavior(to, from, savedPosition) {

    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth', 
            top: 60 
          })
        }, 120)
      })
    }
    

    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
