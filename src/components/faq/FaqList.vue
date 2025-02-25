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
      this.openFaq = this.openFaq === index ? null : index
    },
  },
}
</script>

<style scoped>
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
