<template>
  <div class="room-detail-page">
    <!-- Переиспользуем готовый хедер -->
    <TheHeader />

    <!-- Состояние загрузки данных из API -->
    <div v-if="loading" class="loading-state">Загрузка информации о номере...</div>

    <!-- Основной контент страницы (отображается после загрузки API) -->
    <main v-else-if="room" class="room-main-content">
      <div class="room-container">
        
        <!-- Левая колонка: Галерея картинок -->
        <div class="room-gallery-block">
          <div class="main-image-container">
            <img :src="activeImage || room.main_image" :alt="room.title" class="main-room-img" />
          </div>
          <div class="thumbnails-grid">
            <div 
              v-for="(img, idx) in room.images" 
              :key="idx" 
              class="thumb-box"
              @click="activeImage = img"
            >
              <img :src="img" alt="Миниатюра" class="thumb-img" />
            </div>
          </div>
        </div>

        <!-- Правая колонка: Текстовое описание -->
        <div class="room-info-block">
          <h1 class="room-detail-title">{{ room.title }}</h1>
          
          <div class="room-meta">
            <p class="meta-item"><strong>Вместимость:</strong> {{ room.capacity }}</p>
            <p class="meta-item"><strong>Площадь:</strong> {{ room.space }}</p>
          </div>

          <div class="room-full-description" v-html="room.description"></div>

          <div class="room-price-box">
            <span class="price-value">{{ room.price }} руб</span>
          </div>
        </div>

      </div>
    </main>

    <!-- Переиспользуем готовый блок бронирования -->
    <BookingSection />

    <!-- Переиспользуем готовый футер -->
    <TheFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import TheHeader from '../components/TheHeader.vue'
import BookingSection from '../components/BookingSection.vue'
import TheFooter from '../components/TheFooter.vue'

const route = useRoute()
const room = ref(null)
const loading = ref(true)
const activeImage = ref('')

// Функция запроса к вашему API
const fetchRoomDetails = async (id) => {
  loading.value = true
  try {
    // Замените URL на ваш реальный эндпоинт API
    const response = await fetch(`https://your-sanatorium.ru{id}`)
    const data = await response.json()
    room.value = data
    activeImage.value = data.main_image // Устанавливаем главное фото по умолчанию
  } catch (error) {
    console.error('Ошибка при загрузке данных номера:', error)
  } finally {
    loading.value = false
  }
}

// Загрузка при открытии страницы
onMounted(() => {
  fetchRoomDetails(route.params.id)
})

// Следим за изменением id в урле (если переключаемся между номерами)
watch(() => route.params.id, (newId) => {
  if (newId) fetchRoomDetails(newId)
})
</script>
