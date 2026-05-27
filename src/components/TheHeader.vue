<template>
  <header class="site-header">
    <div class="header-container">
      
      <nav class="header-nav">
        <router-link :to="{ path: '/', hash: '#about' }">О нас</router-link>
        <router-link :to="{ path: '/', hash: '#services' }">Услуги</router-link>
        <router-link :to="{ path: '/', hash: '#rooms' }">Номера</router-link>
        <router-link :to="{ path: '/', hash: '#booking' }">Бронь</router-link>
        <router-link :to="{ path: '/', hash: '#faq' }">Вопросы</router-link>
      </nav>
      
      <router-link :to="{ path: '/', hash: '#footer' }" class="btn-header-contact">Связаться</router-link>
      
    </div>
  </header>
</template>

<script setup>

</script>

