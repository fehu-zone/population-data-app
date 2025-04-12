<template>
  <div class="app">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import '@/assets/global.css'
import '@/components/Design and Responsive/responsive-text.css'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler(newLocale) {
        document.documentElement.setAttribute('lang', newLocale);
      }
    }
  }
}
</script>

<style scoped>
/* Ana sayfa düzeni */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* İçerik alanı */
main {
  flex: 1;
  padding: 2rem;
}

@media (max-width: 768px) {
  main {
    padding: 1rem;
  }
}
</style>
