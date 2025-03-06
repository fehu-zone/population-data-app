<template>
  <div class="faq-list">
    <FaqItem
      v-for="(faq, index) in faqs"
      :key="index"
      :faq="faq"
      :index="index"
      :isActive="openFaq === index"
      @toggle="toggleFaq"
    />
  </div>
</template>

<script>
import FaqItem from './FaqItem.vue'

export default {
  name: 'FaqList',
  components: {
    FaqItem,
  },
  props: {
    faqs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openFaq: null,
    }
  },
  methods: {
    toggleFaq(index) {
      const currentScroll = window.pageYOffset
      const body = document.documentElement || document.body

      // Scroll koruma için geçici overflow fix
      body.style.overflow = 'hidden'

      this.openFaq = this.openFaq === index ? null : index

      this.$nextTick(() => {
        window.scrollTo({
          top: currentScroll,
          behavior: 'auto',
        })
        // Overflow'u eski haline getir
        setTimeout(() => (body.style.overflow = ''), 10)
      })
    },
  },
}
</script>

<!-- Merkezi CSS dosyasını import ediyoruz -->
<style src="@/components/Design and Responsive/faq.css"></style>
