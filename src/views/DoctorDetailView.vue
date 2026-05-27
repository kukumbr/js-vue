<template>
  <div class="doctor-detail-page">
    <TheHeader />

    <!-- Сообщение об ошибке -->
    <div v-if="error" class="error-state">
      <p>{{ error }}</p>
    </div>

    <!-- Основной контент страницы -->
    <main v-else-if="doctor" class="doctor-main-content">
      <div class="doctor-container">
        
        <!-- Левая колонка - Фотография и сертификаты -->
        <div class="doctor-gallery-block">
          <div class="main-doctor-image-container">
            <img :src="doctor.image" :alt="doctor.name" class="main-doctor-img" />
          </div>
          <div class="certificates-grid">
            <div 
              v-for="(cert, idx) in doctor.certificates" 
              :key="idx" 
              class="cert-box"
            >
              <img :src="cert" alt="Сертификат специалиста" class="cert-img" />
            </div>
          </div>
        </div>

        <!-- Правая колонка - Информация о враче -->
        <div class="doctor-info-block">
          <h1 class="doctor-detail-name">{{ doctor.name }}</h1>
          
          <div class="doctor-meta">
            <p class="meta-item">Специализация: {{ doctor.specialization }}</p>
            <p class="meta-item">Стаж работы: {{ doctor.experience }}</p>
          </div>

          <div class="doctor-full-description" v-html="doctor.description"></div>
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
import TheFooter from '../components/TheFooter.vue'
import BookingSection from '../components/BookingSection.vue'

const route = useRoute()
const doctor = ref(null)
const error = ref(null)

// База данных врачей (названия картинок можете менять как вам удобно)
const staffMockData = [
  {
    id: "7",
    name: "Лебедева Светлана Юрьевна",
    specialization: "Массажист, специалист по мануальной терапии",
    experience: "9 лет",
    image: "/staff-7.jpg", // Фото врача
    certificates: [
      "/certificate1.jpg", // Первый сертификат
      "/certificate2.jpg"  // Второй сертификат
    ],
    description: "<p>Светлана Юрьевна — высококвалифицированный специалист, работающий в санатории уже девять лет. За это время она зарекомендовала себя как опытный массажист и мануальный терапевт, помогая пациентам восстанавливать здоровье и улучшать общее самочувствие. Светлана использует индивидуальный подход к каждому клиенту, учитывая его уникальные потребности и особенности организма. Она владеет различными техниками массажа, включая классический, лечебный и расслабляющий, а также методами мануальной терапии, что позволяет ей эффективно справляться с болевыми синдромами и мышечными напряжениями. Светлана активно следит за новыми тенденциями в области физиотерапии и регулярно проходит курсы повышения квалификации.</p>"
  }
]

const getDoctorDetails = (id) => {
  error.value = null
  const foundDoctor = staffMockData.find(item => String(item.id) === String(id))
  
  if (foundDoctor) {
    doctor.value = foundDoctor
  } else {
    doctor.value = null
    error.value = `Специалист с ID "${id}" не найден в базе данных.`
  }
}

onMounted(() => {
  getDoctorDetails(route.params.id)
})

watch(() => route.params.id, (newId) => {
  if (newId) getDoctorDetails(newId)
})
</script>
