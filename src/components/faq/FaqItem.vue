<template>
  <div class="faq-item" :class="{ active: isActive }" @click="onToggle">
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

<style scoped>
.faq-item {
  padding: 1.5rem;
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  transition: background 0.3s ease;
  cursor: pointer;
}
.faq-item:hover {
  background: rgba(255, 255, 255, 0.15);
}
.faq-item.active {
  background: rgba(255, 255, 255, 0.15) !important;
}
.faq-question-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.faq-question {
  font-weight: 600;
  font-size: 1.1rem;
  flex-grow: 1;
}
.faq-icon {
  transition: transform 0.3s ease;
  font-size: 1.5rem;
  margin-left: 1rem;
}
.faq-icon.rotated {
  transform: rotate(90deg);
}
.faq-answer {
  padding-top: 1rem;
  color: rgba(255, 255, 255, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 1rem;
  animation: fadeIn 0.3s ease-in;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
