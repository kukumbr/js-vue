<template>
  <footer id="footer" class="site-footer">
    <div class="footer-container">
      
      <nav class="footer-nav">
        <ul class="footer-menu">
          <li><router-link :to="{ path: '/', hash: '#about' }" class="footer-link">О нас</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#services' }" class="footer-link">Услуги</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#staff' }" class="footer-link">Медицинский персонал</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#rooms' }" class="footer-link">Номера/Домики</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#booking' }" class="footer-link">Забронировать отдых</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#faq' }" class="footer-link">Часто задаваемые вопросы</router-link></li>
        </ul>
      </nav>

      <div class="footer-contacts">
        <div class="contacts-info">
          <a href="tel:+77777777777" class="contact-item phone-link">+7 (777) 777-77-77</a>
          <a href="mailto:help@cleanair.ru" class="contact-item email-link">help@cleanair.ru</a>
          <p class="contact-item address-text">
            г. Москва, ул. Зеленая, д. 15<br>
            Лесной массив "Сосновый бор"
          </p>
        </div>

        <div class="footer-socials">
          <a href="#" target="_blank" class="social-icon">
            <img src="/icon-telegram.svg" alt="Telegram" />
          </a>
          <a href="#" target="_blank" class="social-icon">
            <img src="/icon-vk.svg" alt="VK" />
          </a>
          <a href="#" target="_blank" class="social-icon">
            <img src="/icon-whatsapp.svg" alt="WhatsApp" />
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>

</script>
