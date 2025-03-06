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

<!-- Merkezi CSS dosyasını import ediyoruz -->
<style src="@/components/Design and Responsive/faq.css"></style>
