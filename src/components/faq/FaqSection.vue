<template>
  <section class="project-faq">
    <div class="faq-container">
      <!-- Üst Kısım: Başlık & Açıklama -->
      <div class="faq-header-row">
        <h1 class="faq-title">{{ $t('faq.title') }}</h1>
        <p class="faq-subtitle">{{ $t('faq.subtitle') }}</p>
      </div>
      <!-- Alt Kısım: FAQ Listesi & Görsel -->
      <div class="faq-content-row">
        <FaqList :faqs="localizedFaqs" />
        <div class="faq-right">
          <img :src="faqImage" :alt="$t('faq.imageAlt')" class="faq-image" />
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
    faqs: {
      type: Array,
      required: true,
    },
    faqImage: {
      type: String,
      default: '@/img/Faq-img.png',
    },
  },
  computed: {
    localizedFaqs() {
      return this.faqs.map(faq => ({
        question: this.$t(`faq.questions.${faq.key}`),
        answer: this.$t(`faq.answers.${faq.key}`),
        key: faq.key
      }));
    }
  }
}
</script>

<!-- Merkezi CSS dosyasını import ediyoruz -->
<style src="@/components/Design and Responsive/faq.css"></style>
