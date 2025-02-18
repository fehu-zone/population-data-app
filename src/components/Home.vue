<template>
<section class="hero">
    <div class="hero-left">
      <h1 class="hero-title">GERÇEK ZAMANLI <br/> DÜNYA NÜFUS VERİLERİ</h1>

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

</template>

<script>
export default {
    name: 'AppHome',
};
</script>

<style scoped>

/* ================== HERO SECTION ================== */

.hero {
  display: grid;
  grid-template-columns: 1fr 0.7fr; /* Ekranı ikiye böl */
  align-items: center;
  background-color: #000;
  color: #fff;
  height: 100vh; /* Tüm ekranı kaplasın */
}

.hero-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  max-width: 500px;
  margin-top: 300px; /* Added margin-top to move it down */
}

.hero-left {
  display: grid;
  grid-template-columns: 1fr; /* Tek sütun */
  justify-items: start; /* Sola hizala */
  gap: 1.5rem; /* Elemanlar arası boşluk */
}

.hero-title {
  font-size: 3.9rem;
  font-weight: bold;
  text-align: left;
  letter-spacing: 0.5px;
  margin-bottom: 1.2rem;
  margin-right: -80px; /* Negatif margin ile sağa uzatıldı */
  margin-left: 20px; /* Sol taraftan boşluk eklendi */
}
.hero-subtitle {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
}

.hero-section-h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600; /* Semibold */
  font-size: 2rem;
  color: #ffffff;
  margin-top:  -1rem; /* Negatif margin ile yukarı çektim */
  margin-left: -2rem;
  text-align: center;
  width: 100%; /* Tam genişlik almasını sağladım */
}



.hero-map-img-container {
  width: 100%; /* Kapsayıcıyı tam genişlik yap */
  display: flex;
  justify-content: flex-start; /* Görseli sola hizala */
  margin-left: -70px; /* Sola doğru negatif margin ekle */
}

.hero-map {
  width: 100%; /* Görselin tam genişlik kaplamasını sağla */
  height: 90% ;
  object-fit: contain; /* Görselin bozulmadan sığmasını sağla */
  margin-left: 60px;
}

.social-icons {
  position: absolute;
  right: 160px;
  top:180px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
}

.icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  transition: background 0.3s ease;
}

.icon-wrapper {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.icon-wrapper:hover {
  background: rgba(255, 255, 255, 0.3);
}

.icon:hover {
  background: rgba(255, 255, 255, 0.3);
}

.hero-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: -90px;
  text-align: left;
  margin-top: 136px;
}

/* Butonlar */
.button-group {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  padding-top: 100px; /* Reduced padding to account for hero-text spacing */
  margin-top: -20px; /* Negative margin to move buttons up */

}

.primary-btn,
.secondary-btn {
  flex-grow: 1;
  padding: 0.75rem 2rem; /* Reduced vertical padding to make buttons thinner */
  font-size: 0.9rem; /* Slightly smaller font */
  font-weight: bold;
  border: none;
  border-radius: 25px; /* Reduced border radius for thinner look */
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  max-width: 250px; /* Added max-width to make buttons longer but not too wide */
}

.primary-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.secondary-btn {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
}

.primary-btn:hover,
.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.4);
}
/* 1440px ve altı için düzeltmeler */
@media (max-width: 1440px) {
  .hero {
    grid-template-columns: 1.8fr 1fr;
  }
  .hero-left {
    margin-left: -50px;
  }
  .hero-title {
    font-size: 4rem;
  }
  .hero-map {
    max-width: 90%;
  }
}

/* 768px ve altı için düzeltmeler (mobil) */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem;
  }
  .hero-left {
    margin-left: 0;
  }
  .hero-right {
    align-items: center;
    padding-left: 0;
  }
  .hero-title {
    font-size: 3rem;
  }
  .hero-map {
    max-width: 80%;
  }
}

/* ================== DİĞER BÖLÜMLER ================== */
.data-cards {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.data-cards h2 {
  font-size: 2rem;
  margin-bottom: 3rem;
  font-weight: 600; /* Semibold */
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
</style>