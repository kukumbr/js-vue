<template>
  <div class="room-detail-page">

    <TheHeader />

    <!-- Сообщение, если ID из адресной строки не найден в массиве -->
    <div v-if="error" class="error-state">
      <p>{{ error }}</p>
    </div>

    <!-- Основной контент страницы -->
    <main v-else-if="room" class="room-main-content">
      <div class="room-container">
        
        <!-- Левая колонка - Галерея картинок -->
        <div class="room-gallery-block">
          <div class="main-image-container">
            <img :src="room.main_image" :alt="room.title" class="main-room-img" />
          </div>
          <div class="thumbnails-grid">
            <div 
              v-for="(img, idx) in room.images" 
              :key="idx" 
              class="thumb-box"
            >
              <img :src="img" alt="Миниатюра" class="thumb-img" />
            </div>
          </div>
        </div>

        <!-- Правая колонка - Описание -->
        <div class="room-info-block">
          <h1 class="room-detail-title">{{ room.title }}</h1>
          
          <div class="room-meta">
            <p class="meta-item">Вместимость: {{ room.capacity }}</p>
            <p class="meta-item">Площадь: {{ room.space }}</p>
          </div>

          <div class="room-full-description" v-html="room.description"></div>

          <div class="room-price-box">
            <span class="price-value">{{ room.price }} руб</span>
          </div>
        </div>

      </div>
    </main>

    <BookingSection />

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
const error = ref(null)

// Имитация базы данных с вашими локальными названиями ссылок
const roomsMockData = [
  {
    id: "1",
    title: "Стандартный номер",
    capacity: "2 человека",
    space: "24 м²",
    description: "<p>Стандартный номер в нашем санатории идеально подходит для комфортного проживания двух человек. В номере вас ждет уютная двуспальная кровать, где можно расслабиться после насыщенного дня. Для вашего удобства предусмотрены телевизор и холодильник, а также санузел с необходимыми принадлежностями. Особое удовольствие доставит балкон с живописным видом на природу, где можно насладиться свежим воздухом и прекрасными пейзажами. Стоимость проживания в стандартном номере составляет 3500 рублей за сутки. Мы создаем все условия для вашего отдыха и восстановления сил!</p>",
    price: "3500",
    main_image: "/unsplash.jpg", // Главная большая фотография
    images: [
      "/unsplash1.jpg", // Первая миниатюра
      "/unsplash2.jpg", // Вторая миниатюра
      "/unsplash3.jpg"  // Третья миниатюра
    ]
  }
]

// Функция мгновенного поиска номера в массиве
const getRoomDetails = (id) => {
  error.value = null
  const foundRoom = roomsMockData.find(item => String(item.id) === String(id))
  
  if (foundRoom) {
    room.value = foundRoom
  } else {
    room.value = null
    error.value = `Номер с ID "${id}" не найден в макете.`
  }
}

// Поиск при открытии страницы
onMounted(() => {
  getRoomDetails(route.params.id)
})

// Поиск при смене ID в адресе страницы
watch(() => route.params.id, (newId) => {
  if (newId) getRoomDetails(newId)
})
</script>
