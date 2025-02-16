// App.vue
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

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h2>GERÇEK ZAMANLI DÜNYA NÜFUS VERİLERİ</h2>
        <p>
          Dünya bazlı verilerin dünyanın dört bir yanındaki en güncel verilerinden oluşmuştur. 
          Büyüme, ölümler ve göç hareketlerini kaynakları göstererek sağlarız.
        </p>
        <div class="button-group">
          <button class="btn primary">Dünya bazlı nüfus verileri</button>
          <button class="btn secondary">Ülke bazlı nüfus verileri</button>
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
          <img :src="tech.icon" :alt="tech.name">
          <p>{{ tech.name }}</p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
      <h2>PROJE HAKKINDA BİLMENİZ GEREKENLER</h2>
      <div class="faq-list">
        <button 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="faq-item"
        >
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
      ]
    }
  }
}
</script>

<style>
:root {
  --primary-color: #1a1f2c;
  --secondary-color: #2d3748;
  --accent-color: #3182ce;
  --text-color: #ffffff;
  --text-secondary: #a0aec0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: var(--primary-color);
  color: var(--text-color);
  line-height: 1.6;
}

.app {
  min-height: 100vh;
}

/* Header Styles */
header {
  padding: 1.5rem 2rem;
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--text-secondary);
}

/* Hero Section */
.hero {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  max-width: 800px;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.hero p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.button-group {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn.primary {
  background-color: var(--accent-color);
  color: white;
}

.btn.secondary {
  background-color: transparent;
  border: 1px solid var(--accent-color);
  color: white;
}

/* Data Cards Section */
.data-cards {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.data-cards h2 {
  font-size: 2rem;
  margin-bottom: 3rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background-color: var(--secondary-color);
  padding: 2rem;
  border-radius: 0.5rem;
}

.icon-box {
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

/* Technologies Section */
.technologies {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.tech-item img {
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
}

/* FAQ Section */
.faq {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.faq-list {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  width: 100%;
  background-color: var(--secondary-color);
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  color: var(--text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: left;
}

.faq-item:hover {
  background-color: rgba(45, 55, 72, 0.8);
}

/* Footer */
footer {
  background-color: var(--secondary-color);
  padding: 3rem 2rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    flex-direction: column;
    text-align: center;
  }
  
  .hero h2 {
    font-size: 2rem;
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>