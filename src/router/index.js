import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomDetailView from '../views/RoomDetailView.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  
  // ИСПРАВЛЕННЫЙ БЛОК СКРОЛЛА:
  scrollBehavior(to, from, savedPosition) {
    // Проверяем, есть ли в ссылке хэш-якорь (например, #rooms)
    if (to.hash) {
      return new Promise((resolve) => {
        // Небольшой таймаут, чтобы Vue успел смонтировать компоненты главной страницы
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth', // Включает плавное перемещение
            top: 60 // Делает отступ сверху, чтобы шапка не перекрывала заголовок блока
          })
        }, 120) // 120мс гарантирует, что блок уже отрисован на странице
      })
    }
    
    // Если хэша нет (например, перешли на детальную страницу номера), скроллим вверх
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
