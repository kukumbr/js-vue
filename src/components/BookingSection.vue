<template>
  <section id="booking" class="booking-section">
    <h2 class="booking-title">Забронировать отдых</h2>

    <div class="booking-card">
      <p class="booking-subtitle">
        Пожалуйста, заполните форму ниже для бронирования вашего отдыха в нашем санатории.
      </p>

      <form @submit.prevent="handleBooking" class="booking-form">
        
        <!-- ФИО -->
        <div class="form-group">
          <input 
            v-model="bookingData.fullName" 
            type="text" 
            placeholder="ФИО*" 
            class="form-input"
          />
        </div>

        <!-- Телефон -->
        <div class="form-group">
          <input 
            v-model="bookingData.phone" 
            type="tel" 
            placeholder="Номер телефона*" 
            class="form-input"
          />
        </div>

        <!-- Email -->
        <div class="form-group">
          <input 
            v-model="bookingData.email" 
            type="email" 
            placeholder="Email*" 
            class="form-input"
          />
        </div>

        <!-- Даты заезда и выезда -->
        <div class="form-row">
          <div class="form-group date-wrapper">
            <input 
              v-model="bookingData.dateIn" 
              type="date" 
              class="form-input date-input"
              :class="{ 'has-value': bookingData.dateIn }"
            />
            <span class="date-placeholder">Дата заезда*</span>
          </div>
          
          <div class="form-group date-wrapper">
            <input 
              v-model="bookingData.dateOut" 
              type="date" 
              class="form-input date-input"
              :class="{ 'has-value': bookingData.dateOut }"
            />
            <span class="date-placeholder">Дата выезда*</span>
          </div>
        </div>

        <!-- Количество человек и Тип номера -->
        <div class="form-row">
          <div class="form-group">
            <select 
              v-model="bookingData.guests" 
              class="form-input form-select"
              :class="{ 'select-placeholder': !bookingData.guests }"
            >
              <option value="" disabled selected hidden>Количество человек*</option>
              <option value="1">1 человек</option>
              <option value="2">2 человека</option>
              <option value="3">3 человека</option>
              <option value="4">4 человека и более</option>
            </select>
          </div>

          <div class="form-group">
            <select 
              v-model="bookingData.roomType" 
              class="form-input form-select"
              :class="{ 'select-placeholder': !bookingData.roomType }"
            >
              <option value="" disabled selected hidden>Тип номера*</option>
              <option value="standard">Стандартный номер</option>
              <option value="junior">Полулюкс</option>
              <option value="luxury">Люкс</option>
            </select>
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

        <!-- Согласие и политика -->
        <div class="form-agreement">
          Нажимая кнопку, вы даете согласие на обработку ваших персональных данных.<br>
          <a href="" class="policy-link">Политика конфиденциальности</a>
        </div>

        <!-- Кнопка отправки -->
        <div class="form-submit-container">
          <button type="submit" class="btn-submit-booking">Забронировать</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

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

const handleBooking = () => {
  console.log('Форма отправлена:', bookingData)
  
  bookingData.fullName = ''
  bookingData.phone = ''
  bookingData.email = ''
  bookingData.dateIn = ''
  bookingData.dateOut = ''
  bookingData.guests = ''
  bookingData.roomType = ''
  bookingData.comments = ''
}
</script>