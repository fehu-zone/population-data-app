<template>
  <div>
    <!-- ================== HERO SECTION ================== -->
    <section class="hero" v-fade>
      <div class="hero-left">
        <h1 class="hero-title" v-fade>
          GERÇEK ZAMANLI <br />
          DÜNYA NÜFUS VERİLERİ
        </h1>
        <div class="hero-map-img-container" v-fade>
          <img class="hero-map" src="/img/deneme.svg" alt="Dünya Haritası" loading="lazy" />
        </div>
        <!-- Görselin hemen altında yer alacak başlık -->
        <h2 class="interactive-panels-title" v-fade>İnteraktif Panelleri Keşfedin</h2>
      </div>
      <div class="hero-right">
        <div class="social-icons" v-fade>
          <a href="https://www.linkedin.com/in/ahmetkaradas/" class="icon">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/fehu-zone/population_scraper" class="icon">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="#" class="icon" id="shareButton">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <!-- İkonlar ile butonlar arasında yer alan metin -->
        <p class="hero-text" v-fade>
          Dünya nüfus verilerini dakikalar önce güncellenen en yeni verilerle keşfedin. Doğumlar,
          ölümler ve göç hareketlerini interaktif grafiklerle detaylı inceleyin.
        </p>
        <div class="button-group" v-fade>
          <button class="primary-btn" @click="goToCountryData">Ülke Bazlı Nüfus Verileri</button>
          <button class="secondary-btn" @click="goToWorldData">Dünya Bazlı Nüfus Verileri</button>
        </div>
      </div>
    </section>

    <!-- ================== ANLIK DÜNYA NÜFUS AKIŞI SECTION ================== -->
    <section class="equal-boxes" v-fade>
      <div class="section-header" v-fade>
        <h1>ANLIK DÜNYA NÜFUS AKIŞI</h1>
        <p class="section-description">
          Dakikalar önce güncellenen en güncel verilerimizle, dünya genelindeki nüfus dinamiklerini
          anlık olarak takip edin.
        </p>
      </div>
      <div class="boxes-grid">
        <!-- Kutucuk 1 -->
        <div class="box" v-fade>
          <div class="box-icon-box">
            <i class="fa-solid fa-globe"></i>
          </div>
          <h3>Küresel Veri</h3>
          <p>Dünya nüfus değişimlerini anlık olarak takip edin ve analiz edin.</p>
          <button class="box-button" @click="goToWorldData">Dünya Bazlı Nüfus Verileri</button>
        </div>
        <!-- Kutucuk 2 -->
        <div class="box" v-fade>
          <div class="box-icon-box">
            <i class="fa-solid fa-chart-line"></i>
          </div>
          <h3>Ülke Analizi</h3>
          <p>Her ülkenin nüfus değişimlerini detaylı grafiklerle inceleyin.</p>
          <button class="box-button" @click="goToCountryData">Ülke Bazlı Nüfus Verileri</button>
        </div>
        <!-- Kutucuk 3 -->
        <div class="box" v-fade>
          <div class="box-icon-box">
            <i class="fa-solid fa-code"></i>
          </div>
          <h3>Açık Kaynak Kod</h3>
          <p>Açık kaynak kodlarını inceleyin ve projeye katkıda bulunun.</p>
          <button class="box-button" @click="goToOpenSource">Açık Kaynak Kod</button>
        </div>
      </div>
    </section>

    <!-- ================== AÇIK KAYNAK BİLDİRİMİ SECTION ================== -->
    <section class="open-source-section" id="open-source-id" v-fade>
      <div class="open-source-header" v-fade>
        <h1>ÖZGÜR VE AÇIK KAYNAK BİLDİRİMİ</h1>
        <p class="open-source-description">
          Projemizde kullandığımız açık kaynak teknolojiler ile dünya nüfus verilerini gerçek
          zamanlı takip ediyoruz.
        </p>
      </div>
      <div class="open-source-grid">
        <!-- Kutucuk 1: Worldometer -->
        <div class="open-source-box" v-fade>
          <div class="open-source-icon-box">
            <img src="/img/Worldometer.svg" alt="Worldometer" width="64" height="64" />
          </div>
          <h3>Worldometer</h3>
          <p>
            Worldometer dünya nüfus verilerini, gerçek zamanlı ve güvenilir şekilde sürekli olarak
            sunmaktadır.
          </p>
        </div>
        <!-- Kutucuk 2: Elasticsearch -->
        <div class="open-source-box" v-fade>
          <div class="open-source-icon-box">
            <img src="/img/Elasticsearch.svg" alt="Elasticsearch" width="64" height="64" />
          </div>
          <h3>Elasticsearch</h3>
          <p>
            Veri sorgulama ve analiz süreçlerinde Elasticsearch olağanüstü yüksek performans ile
            süreklilik sağlamaktadır.
          </p>
        </div>
        <!-- Kutucuk 3: Kibana -->
        <div class="open-source-box" v-fade>
          <div class="open-source-icon-box">
            <img src="/img/Kibana.svg" alt="Kibana" width="64" height="64" />
          </div>
          <h3>Kibana</h3>
          <p>
            Kibana, nüfus verilerinin dinamik görselleştirilmesinde ve interaktif grafiklerin
            oluşturulmasında titizlikle kullanılmıştır.
          </p>
        </div>
        <!-- Kutucuk 4: Docker -->
        <div class="open-source-box" v-fade>
          <div class="open-source-icon-box">
            <img src="/img/Dockerr.svg" alt="Docker" width="64" height="64" />
          </div>
          <h3>Docker</h3>
          <p>
            Projenin dağıtım ve izolasyon süreci, Docker ile başarıyla sağlanarak ortam bağımsızlığı
            garantilenmiştir.
          </p>
        </div>
        <!-- Kutucuk 5: Vue -->
        <div class="open-source-box" v-fade>
          <div class="open-source-icon-box">
            <img src="/img/Vue.svg" alt="Vue" width="64" height="64" />
          </div>
          <h3>Vue</h3>
          <p>Bu web sitesi, modern JavaScript çerçevesi Vue ile geliştirilmiştir.</p>
        </div>
        <!-- Kutucuk 6: Python -->
        <div class="open-source-box" v-fade>
          <div class="open-source-icon-box">
            <img src="/img/Python.svg" alt="Python" width="64" height="64" />
          </div>
          <h3>Python</h3>
          <p>
            Veri işleme ve analiz süreçleri, Python'un güçlü kütüphane desteğiyle etkin şekilde
            desteklenmektedir.
          </p>
        </div>
      </div>
      <div class="open-source-button-wrapper" v-fade>
        <a
          href="https://github.com/fehu-zone/population_scraper"
          target="_blank"
          class="open-source-button no-style-link"
        >
          Açık Kaynak Kodları İncelemek İçin Tıklayın
        </a>
      </div>
    </section>

    <!-- ================== FAQ SECTION ================== -->
    <FaqSection
      title="PROJE HAKKINDA BİLMENİZ GEREKENLER"
      subtitle="Nüfus verileri ve proje hakkında en merak edilen soruların yanıtlarını burada bulabilirsiniz."
      :faqs="faqs"
      faqImage="/img/Faq-img.png"
      v-fade
    />
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import fadeDirective from '@/directives.js'
import '@/components/Design and Responsive/home.css'
import '@/components/Design and Responsive/open-source-styles.css'
import FaqSection from '@/components/faq/FaqSection.vue'
import faqs from '@/components/faq/faqData.js'
import { handleShare } from '@/share'

export default {
  name: 'AppHome',
  directives: {
    fade: fadeDirective,
  },
  components: {
    FaqSection,
  },
  data() {
    return {
      faqs,
    }
  },
  // SEO: useHead ile meta etiketlerini ayarlıyoruz:
  setup() {
    useHead({
      title: 'Gerçek Zamanlı Dünya Nüfus Verileri',
      meta: [
        {
          name: 'description',
          content:
            'Dünya nüfus verilerini anlık olarak takip edin. Doğum, ölüm ve göç hareketleri ile ilgili en güncel verilere ulaşın.',
        },
        {
          name: 'keywords',
          content: 'dünya nüfusu, gerçek zamanlı veri, nüfus analizi, interaktif grafikler',
        },
        { name: 'author', content: 'Ahmet Karadaş' },
        { property: 'og:title', content: 'Gerçek Zamanlı Dünya Nüfus Verileri' },
        {
          property: 'og:description',
          content:
            'Dünya nüfus verilerini anlık olarak takip edin. Doğum, ölüm ve göç hareketleri ile ilgili en güncel verilere ulaşın.',
        },
        { property: 'og:image', content: '/img/Faq-img.png' },
        { property: 'og:url', content: 'http://localhost:5173/#/' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Gerçek Zamanlı Dünya Nüfus Verileri' },
        {
          name: 'twitter:description',
          content:
            'Dünya nüfus verilerini anlık olarak takip edin. Doğum, ölüm ve göç hareketleri ile ilgili en güncel verilere ulaşın.',
        },
        { name: 'twitter:image', content: '/img/Faq-img.png' },
      ],
      link: [
        { rel: 'canonical', href: 'http://localhost:5173/#/' },
        { rel: 'icon', type: 'image/png', href: '/img/favicon.png' },
      ],
    })
  },
  methods: {
    goToCountryData() {
      this.$router.push({ name: 'countryData' })
    },
    goToWorldData() {
      this.$router.push({ name: 'worldData' })
    },
    goToOpenSource() {
      this.$router.push({ name: 'openSource' })
    },
  },
  mounted() {
    const shareButton = document.getElementById('shareButton')
    if (shareButton) {
      shareButton.addEventListener('click', handleShare)
    }
  },
}
</script>

<style scoped>
/* Ekstra yerel stil tanımlamaları eklenebilir */
</style>
