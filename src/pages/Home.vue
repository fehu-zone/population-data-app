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
          <img class="hero-map" src="/img/deneme.svg" alt="Dünya Haritası" />
        </div>
        <!-- Görselin hemen altında yer alacak başlık -->
        <h2 class="interactive-panels-title" v-fade>İnteraktif Panelleri Keşfedin</h2>
      </div>
      <div class="hero-right">
        <div class="social-icons" v-fade>
          <a href="#" class="icon">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" class="icon">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="#" class="icon">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <!-- İkonlar ile butonlar arasında yer alan metin -->
        <p class="hero-text" v-fade>
          Dünya nüfus verilerini dakikalar önce güncellenen en yeni verilerle keşfedin. Doğumlar,
          ölümler ve göç hareketlerini interaktif grafiklerle detaylı inceleyin.
        </p>
        <div class="button-group" v-fade>
          <button class="primary-btn">Ülke Bazlı Nüfus Verileri</button>
          <button class="secondary-btn">Dünya Bazlı Nüfus Verileri</button>
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
          <button class="box-button">Dünya Bazlı Nüfus Verileri</button>
        </div>
        <!-- Kutucuk 2 -->
        <div class="box" v-fade>
          <div class="box-icon-box">
            <i class="fa-solid fa-chart-line"></i>
          </div>
          <h3>Ülke Analizi</h3>
          <p>Her ülkenin nüfus değişimlerini detaylı grafiklerle inceleyin.</p>
          <button class="box-button">Ülke Bazlı Nüfus Verileri</button>
        </div>
        <!-- Kutucuk 3 -->
        <div class="box" v-fade>
          <div class="box-icon-box">
            <i class="fa-solid fa-code"></i>
          </div>
          <h3>Açık Kaynak Kod</h3>
          <p>Açık kaynak kodlarını inceleyin ve projeye katkıda bulunun.</p>
          <button class="box-button">Açık Kaynak Kod</button>
        </div>
      </div>
    </section>

    <!-- ================== AÇIK KAYNAK BİLDİRİMİ SECTION ================== -->
    <section class="open-source-section" v-fade>
      <div class="open-source-header" v-fade>
        <h1>AÇIK KAYNAK BİLDİRİMİ</h1>
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
        <button class="open-source-button">Açık Kaynak Kodları İncelemek İçin Tıklayın</button>
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
import fadeDirective from '@/directives.js'
import '@/components/Design and Responsive/home.css'
import FaqSection from '@/components/faq/FaqSection.vue'
import faqs from '@/components/faq/faqData.js'

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
}
</script>

<style scoped>
/* Ekstra yerel stil tanımlamaları eklenebilir */
</style>
