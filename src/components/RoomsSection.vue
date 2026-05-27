<template>
  <section id="rooms" class="rooms-section">
    <h2 class="rooms-title">Номера/Домики</h2>
    <p class="rooms-subtitle">
      Санаторий "Чистый Воздух" предлагает разнообразное жилье: уютные стандартные номера, полулюксы и люксы для пар и семей, а также комфортабельные домики для уединенного отдыха. Семейные домики подходят для больших компаний, а эко-домики создают атмосферу близости к природе. Каждый номер оборудован всем необходимым для комфортного отдыха.
    </p>

    <div class="rooms-list">
      <div 
        v-for="room in roomsList" 
        :key="room.id" 
        class="room-card"
      >

        <div class="room-img-wrapper">
          <img :src="room.image" :alt="room.title" class="room-image" />
        </div>

        <div class="room-content">
          <h3 class="room-card-title">{{ room.title }}</h3>
          <p class="room-capacity">Вместимость: {{ room.capacity }}</p>
          <p class="room-description">{{ room.description }}</p>
          
          <div class="room-footer">
            <span class="room-price">{{ room.price }} руб</span>
            <router-link :to="{ name: 'room-detail', params: { id: room.id } }" class="btn-room-more">Подробнее</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const roomsList = ref([
  {
    id: 1,
    title: 'Стандартный номер',
    capacity: '2 человека',
    description: 'В номер входит: двуспальная кровать, телевизор, холодильник, санузел, балкон с видом на природу',
    price: '3500',
    image: '/room-standart.jpg'
  },
  {
    id: 2,
    title: 'Полулюкс',
    capacity: '3 человека',
    description: 'В номер входит: двуспальная кровать и раскладной диван, телевизор, мини-бар, санузел, балкон, кондиционер',
    price: '4500',
    image: '/room-junior.jpg'
  },
  {
    id: 3,
    title: 'Люкс',
    capacity: '4 человека',
    description: 'В номер входит: две отдельные спальни, гостиная зона, телевизор, холодильник, санузел с ванной, балкон с панорамным видом',
    price: '6000',
    image: '/room-luxury.jpg'
  }
])
</script>
