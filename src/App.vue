<template>
  <div class="app">
    <!-- Header -->
    <header>
      <nav>
        <h1>FEHU.POPULATION</h1>
        <div class="nav-links">
          <a href="#">Anasayfa</a>
          <a href="#">Dünya Bazlı Veriler</a>
          <a href="#">Ülke Bazlı Veriler</a>
          <a href="#">Açık Kaynak</a>
        </div>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-left">
        <h1 class="hero-title">GERÇEK ZAMANLI DÜNYA NÜFUS VERİLERİ</h1>

        <div class="hero-map-img-container">
          <img class="hero-map" src="@/img/deneme.svg" alt="Dünya Haritası" />
        </div>

        <h2 class="hero-section-h2">İNTERAKTİF PANELLERİ KEŞFEDİN</h2>
      </div>

      <div class="hero-right">
        <div class="social-icons">
          <a href="#" class="icon">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" class="icon">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="#" class="icon">
            <i class="fa-solid fa-share-nodes"></i>
          </a>
        </div>

        <p class="hero-text">
          Dünya nüfus verilerini dakikalar önce güncellenen en güncel verilerimizle inceleyebilir,
          doğumlar, ölümler ve göç hareketlerini interaktif grafiklerle takip edebilirsiniz.
        </p>

        <div class="button-group">
          <button class="primary-btn">Dünya Bazlı Nüfus Verileri</button>
          <button class="secondary-btn">Ülke Bazlı Nüfus Verileri</button>
        </div>
      </div>
    </section>

    <!-- Data Cards Section -->
    <section class="data-cards">
      <h2>ANLIK DÜNYA NÜFUS AKIŞI</h2>
      <div class="cards-grid">
        <div class="card">
          <div class="icon-box">📊</div>
          <h3>Küresel Veri</h3>
          <p>Dünya nüfus değişimlerinin günle birlikte nasıl değiştiğini gösterir.</p>
        </div>
        <div class="card">
          <div class="icon-box">🌍</div>
          <h3>Ülke Analizi</h3>
          <p>Her ülkenin bazlı nüfus değişimlerinin detaylı grafikleri ile gösterilir.</p>
        </div>
        <div class="card">
          <div class="icon-box">📱</div>
          <h3>Açık Kaynak Kodu</h3>
          <p>Açık kaynak kodlarının kullanımı ve örnekleri bulunan.</p>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="technologies">
      <h2>AÇIK KAYNAK BİLDİRİMİ</h2>
      <div class="tech-grid">
        <div v-for="tech in technologies" :key="tech.name" class="tech-item">
          <img :src="tech.icon" :alt="tech.name" />
          <p>{{ tech.name }}</p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
      <h2>PROJE HAKKINDA BİLMENİZ GEREKENLER</h2>
      <div class="faq-list">
        <button v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <span>{{ faq.question }}</span>
          <span class="arrow">→</span>
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>FEHU.POPULATION</h3>
          <p>İletişim: contact@fehu.population</p>
        </div>
        <div class="footer-section">
          <h4>İLETİŞİM</h4>
          <ul>
            <li>Email</li>
            <li>Telefon</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>LİNKLER</h4>
          <ul>
            <li>Dünya Bazlı Veriler</li>
            <li>Ülke Bazlı Veriler</li>
            <li>Açık Kaynak</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>HAKKIMIZDAKİ VE KAYNAKLAR</h4>
          <p>Bu proje verilerin dünyayı anlaşılır şekilde sunmak için tasarlanmıştır.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import '@/assets/style.css' // Tüm CSS kurallarını buradan içe aktarıyoruz

export default {
  name: 'App',
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
