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

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
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
</style>
