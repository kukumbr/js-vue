<template>
  <section id="booking" class="booking-section">
    <h2 class="booking-title">Забронировать отдых</h2>

    <div class="booking-card">
      <p class="booking-subtitle">
        Пожалуйста, заполните форму ниже для бронирования вашего отдыха в нашем санатории.
      </p>

      <form @submit.prevent="handleBooking" class="booking-form" novalidate>

        <!-- ФИО -->
        <div class="form-group" :class="{ 'has-error': errors.fullName }">
          <input 
            v-model="bookingData.fullName" 
            type="text" 
            placeholder="ФИО*" 
            class="form-input"
            @input="clearError('fullName')"
          />
          <span v-if="errors.fullName" class="error-text">{{ errors.fullName }}</span>
        </div>

        <!-- Номер телефона (Простой инпут без маски) -->
        <div class="form-group" :class="{ 'has-error': errors.phone }">
          <input 
            v-model="bookingData.phone" 
            type="tel" 
            placeholder="Номер телефона*" 
            class="form-input"
            @input="clearError('phone')"
          />
          <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>
        </div>

        <!-- Email -->
        <div class="form-group" :class="{ 'has-error': errors.email }">
          <input 
            v-model="bookingData.email" 
            type="email" 
            placeholder="Email*" 
            class="form-input"
            @input="clearError('email')"
          />
          <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
        </div>

        <!-- Даты заезда и выезда -->
        <div class="form-row">
          <div class="form-group date-wrapper" :class="{ 'has-error': errors.dateIn }">
            <input 
              v-model="bookingData.dateIn" 
              type="date" 
              class="form-input date-input"
              :class="{ 'has-value': bookingData.dateIn }"
              @change="clearError('dateIn')"
            />
            <span class="date-placeholder">Дата заезда*</span>
            <span v-if="errors.dateIn" class="error-text">{{ errors.dateIn }}</span>
          </div>
          
          <div class="form-group date-wrapper" :class="{ 'has-error': errors.dateOut }">
            <input 
              v-model="bookingData.dateOut" 
              type="date" 
              class="form-input date-input"
              :class="{ 'has-value': bookingData.dateOut }"
              @change="clearError('dateOut')"
            />
            <span class="date-placeholder">Дата выезда*</span>
            <span v-if="errors.dateOut" class="error-text">{{ errors.dateOut }}</span>
          </div>
        </div>

        <!-- Количество человек и Тип номера -->
        <div class="form-row">
          <div class="form-group" :class="{ 'has-error': errors.guests }">
            <select 
              v-model="bookingData.guests" 
              class="form-input form-select"
              :class="{ 'select-placeholder': !bookingData.guests }"
              @change="clearError('guests')"
            >
              <option value="" disabled selected hidden>Количество человек*</option>
              <option value="1">1 человек</option>
              <option value="2">2 человека</option>
              <option value="3">3 человека</option>
              <option value="4">4 человека и более</option>
            </select>
            <span v-if="errors.guests" class="error-text">{{ errors.guests }}</span>
          </div>

          <div class="form-group" :class="{ 'has-error': errors.roomType }">
            <select 
              v-model="bookingData.roomType" 
              class="form-input form-select"
              :class="{ 'select-placeholder': !bookingData.roomType }"
              @change="clearError('roomType')"
            >
              <option value="" disabled selected hidden>Тип номера*</option>
              <option value="Стандартный номер">Стандартный номер</option>
              <option value="Полулюкс">Полулюкс</option>
              <option value="Люкс">Люкс</option>
            </select>
            <span v-if="errors.roomType" class="error-text">{{ errors.roomType }}</span>
          </div>
        </div>

        <!-- Дополнительные пожелания -->
        <div class="form-group">
          <textarea 
            v-model="bookingData.comments" 
            placeholder="Дополнительные пожелания" 
            class="form-input form-textarea"
          ></textarea>
        </div>

        <div class="form-agreement">
          Нажимая кнопку, вы даете согласие на обработку ваших персональных данных.<br>
          <a href="" class="policy-link">Политика конфиденциальности</a>
        </div>
        
        <div class="form-submit-container">
          <button type="submit" class="btn-submit-booking">Забронировать</button>
        </div>
      </form>
    </div>

    <!-- Модальное окно подтверждения успешного бронирования -->
    <div v-if="isModalOpen" class="booking-modal-overlay" @click.self="closeModal">
      <div class="booking-modal-card">
        <h3 class="modal-title">Успешно!</h3>
        <p class="modal-text">
          Ваш номер успешно забронирован. Наш менеджер свяжется с вами по указанному телефону в ближайшее время для подтверждения деталей.
        </p>
        <button class="btn-modal-close" @click="closeModal">Отлично</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue'

const props = defineProps({
  selectedRoom: {
    type: String,
    default: ''
  }
})

const isModalOpen = ref(false)

const bookingData = reactive({
  fullName: '',
  phone: '',
  email: '',
  dateIn: '',
  dateOut: '',
  guests: '',
  roomType: '',
  comments: ''
})

const errors = reactive({
  fullName: '',
  phone: '',
  email: '',
  dateIn: '',
  dateOut: '',
  guests: '',
  roomType: ''
})

const clearError = (field) => {
  errors[field] = ''
}

const autoSelectRoom = () => {
  if (props.selectedRoom) {
    bookingData.roomType = props.selectedRoom
    clearError('roomType')
  }
}

onMounted(() => {
  autoSelectRoom()
})

watch(() => props.selectedRoom, () => {
  autoSelectRoom()
})

const validateForm = () => {
  let isValid = true
  Object.keys(errors).forEach(key => errors[key] = '')

  // Валидация ФИО
  if (!bookingData.fullName.trim()) {
    errors.fullName = 'Пожалуйста, введите ваше ФИО'
    isValid = false
  }

  // Валидация телефона (Простая проверка на цифры)
  const cleanPhone = bookingData.phone.replace(/\D/g, '') // Оставляем только цифры для проверки
  if (!bookingData.phone.trim()) {
    errors.phone = 'Введите номер телефона'
    isValid = false
  } else if (cleanPhone.length < 10 || cleanPhone.length > 11) {
    errors.phone = 'Номер телефона должен содержать 10 или 11 цифр'
    isValid = false
  }

  // Валидация Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!bookingData.email.trim()) {
    errors.email = 'Введите ваш Email'
    isValid = false
  } else if (!emailRegex.test(bookingData.email)) {
    errors.email = 'Некорректный формат email адреса'
    isValid = false
  }

  // Валидация дат
  if (!bookingData.dateIn) {
    errors.dateIn = 'Выберите дату заезда'
    isValid = false
  }
  if (!bookingData.dateOut) {
    errors.dateOut = 'Выберите дату выезда'
    isValid = false
  }
  if (bookingData.dateIn && bookingData.dateOut) {
    const checkIn = new Date(bookingData.dateIn)
    const checkOut = new Date(bookingData.dateOut)
    if (checkOut <= checkIn) {
      errors.dateOut = 'Дата выезда не может быть раньше заезда'
      isValid = false
    }
  }

  // Селекты
  if (!bookingData.guests) {
    errors.guests = 'Укажите количество человек'
    isValid = false
  }
  if (!bookingData.roomType) {
    errors.roomType = 'Выберите тип номера'
    isValid = false
  }

  return isValid
}

const handleBooking = () => {
  if (!validateForm()) return

  isModalOpen.value = true
  Object.keys(bookingData).forEach(key => bookingData[key] = '')
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>
