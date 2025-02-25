<template>
  <div class="app">
    <AppHeader />
    <AppHome />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue' // Import the Header component
import AppHome from '@/components/Home.vue' // Import the Home component
import AppFooter from '@/components/Footer.vue' // Import the Footer component
import '@/assets/style.css' // Tüm CSS kurallarını buradan içe aktarıyoruz

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHome,
    AppFooter,
    // Header komponentini burada tanımlıyoruz
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
