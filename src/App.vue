<template>
  <div class="app">
    <AppHeader />
    <RouterView />
    <!-- AppHome yerine dinamik sayfa yükleme -->
    <AppFooter />
  </div>
</template>

<script>
import { RouterView } from 'vue-router' // Sayfa bileşenleri için
import AppHeader from '@/components/Header.vue' // Header component
import AppFooter from '@/components/Footer.vue' // Footer component
import '@/assets/global.css' // CSS dosyası

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    RouterView, // Vue Router bileşenini kullanıyoruz
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

<style></style>
