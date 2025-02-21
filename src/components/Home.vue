<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-left">
      <h1 class="hero-title">GERÇEK ZAMANLI DÜNYA NÜFUS VERİLERİ</h1>

      <div class="hero-map-img-container">
        <img class="hero-map" src="@/img/deneme.svg" alt="Dünya Haritası" />
      </div>

      <!-- Görselin tam altında yer alacak başlık -->
      <h2 class="interactive-panels-title">İnteraktif Panelleri Keşfedin</h2>
    </div>

    <div class="hero-right">
      <div class="social-icons">
        <a href="#" class="icon">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#" class="icon">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="#" class="icon"> <i class="fa-solid fa-share-from-square"></i> </a>
      </div>

      <!-- İkonlar ile butonlar arasında yer alan metin -->
      <p class="hero-text">
        Dünya nüfus verilerini dakikalar önce güncellenen en güncel verilerimizle. Doğumlar, ölümler
        ve göç hareketlerini interaktif grafiklerle keşfedin.
      </p>

      <div class="button-group">
        <button class="primary-btn">Dünya Bazlı Nüfus Verileri</button>
        <button class="secondary-btn">Ülke Bazlı Nüfus Verileri</button>
      </div>
    </div>
  </section>

  <!-- ANLIK DÜNYA NÜFUS AKIŞI Bölümü -->
  <section class="equal-boxes">
    <div class="section-header">
      <h1>ANLIK DÜNYA NÜFUS AKIŞI</h1>
      <p class="section-description">
        Dakikalar önce güncellenen en güncel verilerimizle, dünya genelindeki nüfus dinamiklerini
        anlık olarak takip edin.
      </p>
    </div>

    <div class="boxes-grid">
      <!-- Kutucuk 1 -->
      <div class="box">
        <div class="box-icon-box">
          <!-- Örnek ikon: Font Awesome kullanıyorsanız -->
          <i class="fa-solid fa-globe"></i>
        </div>
        <h3>Küresel Veri</h3>
        <p>Dünya nüfus değişimlerini anlık olarak takip edin ve analiz edin.</p>
        <button class="box-button">Dünya Bazlı Nüfus Verileri</button>
      </div>

      <!-- Kutucuk 2 -->
      <div class="box">
        <div class="box-icon-box">
          <i class="fa-solid fa-chart-line"></i>
        </div>
        <h3>Ülke Analizi</h3>
        <p>Her ülkenin nüfus değişimlerini detaylı grafiklerle inceleyin.</p>
        <button class="box-button">Ülke Bazlı Nüfus Verileri</button>
      </div>

      <!-- Kutucuk 3 -->
      <div class="box">
        <div class="box-icon-box">
          <i class="fa-solid fa-code"></i>
        </div>
        <h3>Açık Kaynak Kod</h3>
        <p>Açık kaynak kodlarını inceleyin ve projeye katkıda bulunun.</p>
        <button class="box-button">Açık Kaynak Kod</button>
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
}
</script>

<style scoped>
/* ================== HERO SECTION ================== */

.hero {
  display: grid;
  grid-template-columns: 60% 55%;
  color: #fff;
  background: ffff;
  height: 100vh;
  padding: 2.5rem;
  align-items: stretch;
}

.hero-left,
.hero-right {
  display: flex;
  flex-direction: column;
  /* Dağılımı her iki kolonda da eşitlemek için */
  justify-content: space-between;
}

.hero-left {
  align-items: flex-start;
  margin-bottom: 6rem;
  /* İsteğe bağlı: elemanlar arasında belirli bir boşluk varsa gap eklenebilir */
}

.hero-right {
  align-items: flex-end;
  margin-left: 12rem;
  margin-bottom: 3rem;
}

/* Yeni eklenen metin stili */
.hero-text {
  color: #fff;
  font-size: 1.22rem;
  margin: 0;
}

.interactive-panels-title {
  font-size: 2.4rem;
  color: #fff;
  font-weight: SemiBold;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
  letter-spacing: 0.5px;
}

.hero-map-img-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left: -4.375rem;
}

.hero-map {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.social-icons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
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

.icon:hover {
  background: rgba(255, 255, 255, 0.3);
}

.button-group {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.primary-btn,
.secondary-btn {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  text-align: center;
  transition: all 0.3s ease;
  max-width: 250px;
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

/* 768px ve altı için düzeltmeler (mobil) */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem;
  }
  .hero-left {
    align-items: center;
    margin-left: 0;
  }
  .hero-right {
    align-items: center;
  }
  .hero-title {
    font-size: 3rem;
  }
  .hero-map {
    max-width: 80%;
  }
}

/* ================== DİĞER BÖLÜMLER ================== */

/* ================== EŞİT KUTUCUKLAR ================== */
.equal-boxes {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  background: var(--background-color); /* Arka plan renginiz */
}

/* Başlık ve açıklama alanı */
.equal-boxes .section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.equal-boxes .section-header h1 {
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  max-width: 12ch;
  white-space: normal;
  line-height: 1.3;
  margin: 0;
}

.equal-boxes .section-header .section-description {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  max-width: 400px;
  line-height: 1.6;
  margin-bottom: 3rem;
}

/* Kutucukları 3 sütunda tutan grid */
.boxes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: stretch;
  margin-top: 3.7rem;
}

/* Her kutucuk */
.box {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition:
    transform 0.3s ease,
    background 0.3s ease;
  display: flex;
  flex-direction: column; /* Butonun en altta kalabilmesi için */
}

.box:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
}

/* İkon kutusu */
.box-icon-box {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
  margin: 0 auto 1rem; /* Ortalar ve alt boşluk ekler */
}

/* Başlık ve metin */
.box h3 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 1rem;
}

.box p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* Buton */
.box-button {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto; /* İçerik az olsa bile buton en altta kalsın */
}

.box-button:hover {
  background: rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.6);
}

/* Responsive (mobil) düzen */
@media (max-width: 768px) {
  .boxes-grid {
    grid-template-columns: 1fr;
  }

  .equal-boxes .section-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .equal-boxes .section-header h1,
  .equal-boxes .section-header .section-description {
    max-width: 100%;
    margin-bottom: 2rem;
  }
}
/* ================== EŞİT KUTUCUKLAR END ================== */

/* ================== DATA CARDS SECTION END ================== */

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
