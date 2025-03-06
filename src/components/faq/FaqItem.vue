<template>
  <div class="faq-item" :class="{ active: isActive }" @click.prevent="onToggle">
    <div class="faq-question-container">
      <span class="faq-question">{{ faq.question }}</span>
      <span class="faq-icon" :class="{ rotated: isActive }">›</span>
    </div>
    <div v-if="isActive" class="faq-answer">
      {{ faq.answer }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqItem',
  props: {
    faq: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onToggle() {
      this.$emit('toggle', this.index)
    },
  },
}
</script>

<!-- Merkezi CSS dosyasını import ediyoruz -->
<style src="@/components/Design and Responsive/faq.css"></style>
