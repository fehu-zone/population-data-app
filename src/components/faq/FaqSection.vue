<template>
  <section class="project-faq">
    <div class="faq-container">
      <!-- Üst Kısım: Başlık & Açıklama -->
      <div class="faq-header-row">
        <h1 class="faq-title">{{ title }}</h1>
        <p class="faq-subtitle">{{ subtitle }}</p>
      </div>
      <!-- Alt Kısım: FAQ Listesi & Görsel -->
      <div class="faq-content-row">
        <FaqList :faqs="faqs" />
        <div class="faq-right">
          <img :src="faqImage" alt="SSS Görseli" class="faq-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FaqList from './FaqList.vue'

export default {
  name: 'FaqSection',
  components: {
    FaqList,
  },
  props: {
    title: {
      type: String,
      default: 'PROJE HAKKINDA BİLMENİZ GEREKENLER',
    },
    subtitle: {
      type: String,
      default:
        'Nüfus verileri ve proje hakkında en merak edilen soruların yanıtlarını burada bulabilirsiniz.',
    },
    faqs: {
      type: Array,
      required: true,
    },
    faqImage: {
      type: String,
      default: '@/img/Faq-img.png',
    },
  },
}
</script>

<style scoped>
.project-faq {
  padding: 3rem 1rem;
  background: #000;
  font-family: 'Poppins', sans-serif;
}
.faq-container {
  max-width: 1200px;
  margin: 0 auto;
}
.faq-header-row {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 2rem;
}
.faq-title {
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
}
.faq-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-weight: 600;
  max-width: 450px;
  margin-left: 2.5rem;
  margin-top: 1.2rem;
}
.faq-content-row {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 6rem;
}
.faq-right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.faq-image {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin-left: 5rem;
}
</style>
