<template>
  <header class="site-header">
    <div class="header-container">
      
      <!-- Навигационное меню с поддержкой переходов между страницами -->
      <nav class="header-nav">
        <router-link :to="{ path: '/', hash: '#about' }">О нас</router-link>
        <router-link :to="{ path: '/', hash: '#services' }">Услуги</router-link>
        <router-link :to="{ path: '/', hash: '#rooms' }">Номера</router-link>
        <router-link :to="{ path: '/', hash: '#booking' }">Бронь</router-link>
        <router-link :to="{ path: '/', hash: '#faq' }">Вопросы</router-link>
      </nav>
      
      <!-- Кнопка связи, ведущая на форму бронирования на главной -->
      <router-link :to="{ path: '/', hash: '#booking' }" class="btn-header-contact">Связаться</router-link>
      
    </div>
  </header>
</template>

<script setup>
// Компонент переиспользует глобальный роутер, дополнительная логика тут не нужна
</script>

