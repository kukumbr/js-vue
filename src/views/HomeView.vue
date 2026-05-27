<template>
  <div class="site-wrapper">
    
    <section id="hero" class="hero-section">
      <TheHeader />
      <div class="hero-content">
        <p class="hero-top-text">Лечебно-курортный санаторий</p>
        <h1 class="hero-title">Чистый воздух</h1>
        <p class="hero-description">
          Санаторий "Чистый Воздух" предлагает уникальную возможность<br>
          восстановить здоровье и гармонию с природой в окружении<br>
          живописного леса и свежего воздуха.
        </p>
      </div>
    </section>

    <section id="about" class="about-section">
      <h2 class="about-title">О нас</h2>

      <div class="about-container">
        <div class="about-text">
          <p>Лечебно-курортный санаторий "Чистый воздух" — это уникальное место, где каждый гость может восстановить здоровье и насладиться атмосферой умиротворения. Расположенный в живописной местности, окружённой лесами и чистыми водоёмами, санаторий предлагает идеальные условия для лечения и отдыха.</p>
          
          <p>Санаторий специализируется на лечении различных заболеваний, включая заболевания органов дыхания, сердечно-сосудистой системы и опорно-двигательного аппарата. В медицинском центре работают квалифицированные специалисты, которые разрабатывают индивидуальные программы лечения, основанные на современных методах и природных факторах.</p>
          
          <p>На территории санатория созданы все условия для активного отдыха: прогулочные зоны, спортивные площадки и возможности для занятий йогой на свежем воздухе. Для любителей природы предусмотрены экскурсии и пешие прогулки по живописным маршрутам.</p>
          
          <p>"Чистый воздух" — это не только лечение, но и возможность отвлечься от повседневной суеты, восстановить силы и зарядиться положительной энергией. </p>
        </div>
        
        <div class="about-gallery">
          <img src="/about-1.jpg" alt="Утки на пруду" class="gallery-img img-1">
          <img src="/about-2.jpg" alt="Баня и дрова" class="gallery-img img-2">
          <img src="/about-3.jpg" alt="Тропинка в лесу" class="gallery-img img-3">
          <img src="/about-4.jpg" alt="Бочка-купель" class="gallery-img img-4">
          <img src="/about-5.jpg" alt="Озеро со столиком" class="gallery-img img-5">
        </div>
      </div>
    </section>

    <ServicesSection />

    <StaffSection />

    <RoomsSection />

    <BookingSection />

    <FaqSection />

    <TheFooter />

  </div>
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue'

import ServicesSection from '../components/ServicesSection.vue'

import StaffSection from '../components/StaffSection.vue'

import RoomsSection from '../components/RoomsSection.vue'

import BookingSection from '../components/BookingSection.vue'

import FaqSection from '../components/FaqSection.vue'

import TheFooter from '../components/TheFooter.vue'
</script>

