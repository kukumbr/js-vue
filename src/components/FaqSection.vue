<template>
  <section id="faq" class="faq-section">
    <h2 class="faq-title">Часто задаваемые вопросы</h2>

    <div class="faq-container">
      <div 
        v-for="(item, index) in faqList" 
        :key="index" 
        class="faq-item"
        :class="{ 'is-open': activeIndex === index }"
      >
        <div class="faq-question" @click="toggleFaq(index)">
          <span class="question-text">{{ item.question }}</span>
          <span class="faq-icon"></span>
        </div>

        <div class="faq-answer" :style="getAnswerStyle(index)">
          <div class="faq-answer-content">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const activeIndex = ref(-1)

const faqList = reactive([
  {
    question: 'Как добраться до санатория?',
    answer: 'До санатория можно добраться на личном автомобиле по трассе Р-254, либо на рейсовом автобусе от главного автовокзала до остановки "Санаторий Чистый воздух". Также доступен трансфер по предварительному заказу.'
  },
  {
    question: 'Как забронировать номер в санатории?',
    answer: 'Вы можете воспользоваться формой онлайн-бронирования на этой странице, выбрать тип номера, даты заезда и оставить свои контактные данные. Наш менеджер свяжется с вами для подтверждения.'
  },
  {
    question: 'Какие развлечения доступны на территории санатория?',
    answer: 'Для наших гостей доступны пешие экскурсии по лесу, зоны для занятий йогой, спортивные площадки, прокат велосипедов, финская баня, купель и организованные вечерние развлекательные программы.'
  },
  {
    question: 'Какой режим питания в санатории?',
    answer: 'В санатории организовано трехразовое сбалансированное питание по системе "шведский стол". Меню разрабатывается с учетом диетологических рекомендаций наших медицинских специалистов.'
  },
  {
    question: 'Какие медицинские услуги предоставляет санаторий?',
    answer: 'Мы специализируемся на лечении органов дыхания, сердечно-сосудистой системы и опорно-двигательного аппарата. Доступны ингаляции, грязелечение, массаж, физиотерапия и водолечебные процедуры.'
  }
])

const toggleFaq = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = -1
  } else {
    activeIndex.value = index
  }
}

const getAnswerStyle = (index) => {
  if (activeIndex.value === index) {
    return {
      'max-height': '200px',
      'opacity': '1'
    }
  }
  return {
    'max-height': '0px',
    'opacity': '0'
  }
}
</script>
