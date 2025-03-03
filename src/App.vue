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
  data() {
    return {
      technologies: [
        { name: 'Worldometer', icon: '/worldometer-icon.svg' },
        { name: 'Elasticsearch', icon: '/elasticsearch-icon.svg' },
        { name: 'Kibana', icon: '/kibana-icon.svg' },
        { name: 'Python', icon: '/python-icon.svg' },
      ],
      faqs: [
        { question: 'Bu proje ne işe yarıyor?' },
        { question: 'Veriler Nasıl Güncelleniyor?' },
        { question: 'Bu Proje Açık Kaynak mı?' },
      ],
    }
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
