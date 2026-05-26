<template>
  <section id="staff" class="staff-section">
    
    <h2 class="staff-title">Медицинский персонал</h2>

    <div class="staff-grid">
      
      <div 
        v-for="employee in staffList" 
        :key="employee.id" 
        class="staff-item"
      >
        <div class="staff-img-wrapper">
          <img :src="employee.image" :alt="employee.name" class="staff-image" />
        </div>
        <h3 class="staff-item-name">{{ employee.name }}</h3>
        <p class="staff-item-role">{{ employee.role }}</p>
      </div>

      <div class="staff-info-text">
        <p>
          В санатории "Чистый Воздух" трудится опытный медицинский персонал, 
          который является основой нашего оздоровительного подхода. 
          Наши врачи и медсестры имеют специальное образование в курортологии, 
          физиотерапии и реабилитации. Каждый сотрудник предлагает индивидуальные 
          программы лечения, учитывая состояние здоровья каждого гостя.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Этот массив карточек в будущем полностью заменится на данные из вашего API
const staffList = ref([
  {
    id: 1,
    name: 'Петрова Анна Сергеевна',
    role: 'Терапевт',
    image: '/staff-1.jpg'
  },
  {
    id: 2,
    name: 'Сидоров Алексей Иванович',
    role: 'Массажист',
    image: '/staff-2.jpg'
  },
  {
    id: 3,
    name: 'Кузнецова Мария Владимировна',
    role: 'Физиотерапевт',
    image: '/staff-3.jpg'
  },
  {
    id: 4,
    name: 'Иванов Сергей Николаевич',
    role: 'Реабилитолог',
    image: '/staff-4.jpg'
  },
  {
    id: 5,
    name: 'Федорова Елена Анатольевна',
    role: 'Психотерапевт',
    image: '/staff-5.jpg'
  },
  {
    id: 6,
    name: 'Григорьев Дмитрий Павлович',
    role: 'Врач-диетолог',
    image: '/staff-6.jpg'
  },
  {
    id: 7,
    name: 'Лебедева Светлана Юрьевна',
    role: 'Массажист',
    image: '/staff-7.jpg'
  }
])
</script>
