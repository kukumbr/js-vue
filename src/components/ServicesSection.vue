<template>
  <section id="services" class="services-section">
    
    <h2 class="services-title">Услуги</h2>
    <p class="services-subtitle">
      Санаторий "Чистый Воздух" предлагает широкий спектр услуг, направленных<br>
      на восстановление здоровья и общее оздоровление гостей. Мы создаем<br>
      комфортные условия для отдыха и лечения, сочетая современные технологии<br>
      с природными ресурсами.
    </p>

    <div class="services-grid">

      <div 
        v-for="service in servicesList" 
        :key="service.id" 
        class="service-item"
      >
        <div class="service-img-wrapper">
          <img :src="service.image" :alt="service.title" class="service-image" />
        </div>
        <h3 class="service-item-title">{{ service.title }}</h3>
        <p class="service-item-text">{{ service.description }}</p>
      </div>
    </div>

    <div class="services-cta">
      <a href="#booking" class="btn-services-book">Забронировать отдых</a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// В скрипте остался только массив карточек для будущего подключения к API
const servicesList = ref([
  {
    id: 1,
    title: 'Бассейн',
    image: '/service-pool.jpg',
    description: 'Санаторий предлагает комфортабельный крытый и открытый бассейны с подогревом, где гости могут наслаждаться плаванием в любое время года.'
  },
  {
    id: 2,
    title: 'Физиотерапия',
    image: '/service-physio.jpg',
    description: 'Физиотерапевтические процедуры включают в себя такие методы, как электрофорез, ультразвуковая терапия и магнитотерапия.'
  },
  {
    id: 3,
    title: 'Массаж',
    image: '/service-massage.jpg',
    description: 'В санатории доступны различные виды массажа, включая классический, расслабляющий, лечебный и спортивный.'
  },
  {
    id: 4,
    title: 'Бальнеотерапия',
    image: '/service-balneo.jpg',
    description: 'Бальнеотерапия включает в себя лечение с использованием минеральных вод и грязей. В санатории предлагаются процедуры с использованием целебных ванн, обертываний и аппликаций.'
  }
])
</script>
