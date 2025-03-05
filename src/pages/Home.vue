<template>
  <div>
    <!-- ================== HERO SECTION ================== -->
    <section class="hero">
      <div class="hero-left">
        <h1 class="hero-title">
          GERÇEK ZAMANLI <br />
          DÜNYA NÜFUS VERİLERİ
        </h1>
        <div class="hero-map-img-container">
          <img class="hero-map" src="/img/deneme.svg" alt="Dünya Haritası" />
        </div>
        <!-- Görselin hemen altında yer alacak başlık -->
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
          <a href="#" class="icon">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <!-- İkonlar ile butonlar arasında yer alan metin -->
        <p class="hero-text">
          Dünya nüfus verilerini dakikalar önce güncellenen en yeni verilerle keşfedin. Doğumlar,
          ölümler ve göç hareketlerini interaktif grafiklerle detaylı inceleyin.
        </p>
        <div class="button-group">
          <button class="primary-btn">Ülke Bazlı Nüfus Verileri</button>
          <button class="secondary-btn">Dünya Bazlı Nüfus Verileri</button>
        </div>
      </div>
    </section>

    <!-- ================== ANLIK DÜNYA NÜFUS AKIŞI SECTION ================== -->
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

    <!-- ================== AÇIK KAYNAK BİLDİRİMİ SECTION ================== -->
    <section class="open-source-section">
      <div class="open-source-header">
        <h1>AÇIK KAYNAK BİLDİRİMİ</h1>
        <p class="open-source-description">
          Projemizde kullandığımız açık kaynak teknolojiler ile dünya nüfus verilerini gerçek
          zamanlı takip ediyoruz.
        </p>
      </div>
      <div class="open-source-grid">
        <!-- Kutucuk 1: Worldometer -->
        <div class="open-source-box">
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
        <div class="open-source-box">
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
        <div class="open-source-box">
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
        <div class="open-source-box">
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
        <div class="open-source-box">
          <div class="open-source-icon-box">
            <img src="/img/Vue.svg" alt="Vue" width="64" height="64" />
          </div>
          <h3>Vue</h3>
          <p>Bu web sitesi, modern JavaScript çerçevesi Vue ile geliştirilmiştir.</p>
        </div>
        <!-- Kutucuk 6: Python -->
        <div class="open-source-box">
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
      <div class="open-source-button-wrapper">
        <button class="open-source-button">Açık Kaynak Kodları İncelemek İçin Tıklayın</button>
      </div>
    </section>

    <!-- ================== FAQ SECTION ================== -->
    <FaqSection
      title="PROJE HAKKINDA BİLMENİZ GEREKENLER"
      subtitle="Nüfus verileri ve proje hakkında en merak edilen soruların yanıtlarını burada bulabilirsiniz."
      :faqs="faqs"
      faqImage="/img/Faq-img.png"
    />
  </div>
</template>

<script>
import FaqSection from '@/components/faq/FaqSection.vue'
import faqs from '@/components/faq/faqData.js'

export default {
  name: 'AppHome',
  components: {
    FaqSection,
  },
  data() {
    return {
      faqs,
    }
  },
  mounted() {
    if (window.innerWidth <= 768) {
      // Hedeflenen elemanlar; DOM sıralaması mobilde hero-title, button-group, hero-text, social-icons şeklinde olacak
      const fadeElements = document.querySelectorAll(
        '.hero-title, .button-group, .hero-text, .social-icons',
      )
      // Her eleman viewport’a girdiğinde fade animasyonunu uyguluyoruz.
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in')
            }
          })
        },
        { threshold: 0.5 },
      )
      fadeElements.forEach((el) => observer.observe(el))
    }
  },
}
</script>

<!-- ================== BASE STİLLER & ÖZEL BÖLÜM STİLLERİ ================== -->
<style scoped>
/* ================== HERO SECTION ================== */
.hero {
  display: grid;
  grid-template-columns: 58% 40%;
  color: #fff;
  background: #000;
  height: 100vh;
  padding: 2.8rem;
  margin-left: 2rem;
}
.hero-left,
.hero-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hero-left {
  align-items: flex-start;
  margin-bottom: 3rem;
}
.hero-right {
  align-items: flex-end;
  margin-left: 6rem;
  margin-bottom: 4rem;
}
.hero-title {
  font-size: 4rem;
  font-weight: bold;
  text-align: left;
  letter-spacing: 0.2px;
  line-height: 1.3;
}
.hero-map-img-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-right: 1.5rem;
}
.hero-map {
  width: 40rem;
  height: auto;
  object-fit: contain;
}
.interactive-panels-title {
  font-size: 2.3rem;
  color: #fff;
  font-weight: 600;
  text-align: center;
  margin-bottom: 4rem;
}
.hero-text {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  transition:
    background 0.5s ease,
    transform 0.3s ease,
    box-shadow 0.5s ease;
}
.icon:hover {
  transform: scale(1.2);
  box-shadow: 0 8px 26px rgba(12, 54, 103, 0.8);
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

/* ================== HERO SECTION (MOBİL AYARLARI) ================== */

/* ================== IPHONE 12 ================== */
@media only screen and (min-width: 390px) and (max-width: 844px) {
  /* Hero ana kapsayıcı */
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center; /* İçerikleri ortalıyoruz */
    justify-content: center;
    text-align: center;
    margin: 0 auto; /* Varsayılan margin değerlerini sıfırlayıp ortalıyoruz */
  }

  /* Başlık */
  .hero-title {
    font-size: 4.3rem; /* Daha büyük ve göz alıcı başlık */
    line-height: 1.1;
    font-weight: 700;
    margin-top: 30vh;

    opacity: 0; /* Animasyon başlangıcı */
    transform: translateY(20px);
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;
  }

  /* Bu kısımları tamamen gizledik */
  .hero-map-img-container,
  .interactive-panels-title {
    display: none;
  }

  /* Tanıtım metni */
  .hero-text {
    font-size: 1.4rem;
    font-weight: 500; /* Kalınlık azaltıldı */
    line-height: 1.3;
    margin-right: 25%;
    margin-bottom: 0.1rem;
    opacity: 0; /* Animasyon başlangıcı */
    transform: translateY(20px);
    transition:
      opacity 0.6s ease 0.4s,
      transform 0.6s ease 0.4s;
  }

  .button-group {
    /* Flex düzeni etkinleştiriyoruz */
    display: flex;
    /* Butonları yatayda ortalıyoruz */
    justify-content: center;
    /* Dikeyde ortalıyoruz */
    align-items: center;

    margin: 3rem 1rem 5rem;

    /* ::after pseudo-element için konumlandırma */
  }

  .button-group::after {
    position: absolute;
    transform: translateX(-50%);
    height: 4px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    /* Genişlik vermek isterseniz: width: 80%; gibi */
  }

  .button-group button {
    /* Genişliği otomatik olsun ki flex ile yan yana gelsin */
    font-size: 1.15rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    border-radius: 12px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    /* Önceden var olan margin-right'ı kaldırıyoruz */
    margin-left: 0;
  }

  /* Geri kalan buton stilleriniz değişmeden kalabilir */
  .primary-btn {
    background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
    color: #fff;
    margin-left: 5rem;

    box-shadow:
      0 6px 20px rgba(0, 0, 0, 0.08),
      inset 0 1px 1px rgba(255, 255, 255, 0.1);
  }

  .secondary-btn {
    background: linear-gradient(135deg, #faf9f6 0%, #f8f8f8 100%);
    color: #2d2d2d;
    margin-right: 5rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow:
      0 6px 30px rgba(0, 0, 0, 0.06),
      inset 0 -1px 2px rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease-in-out;
  }

  /* Hover & Active States */
  .button-group button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }

  .button-group button:active {
    transform: translateY(1px);
    transition-duration: 0.1s;
  }

  .primary-btn:hover {
    background: linear-gradient(135deg, #262626 0%, #141414 100%);
  }

  .secondary-btn:hover {
    background: linear-gradient(135deg, #fdfdfd 0%, #eaeaea 100%);
    border-color: rgba(0, 0, 0, 0.12);
    box-shadow:
      0 8px 35px rgba(0, 0, 0, 0.08),
      inset 0 -2px 2px rgba(0, 0, 0, 0.04);
  }
  .button-group button:hover::before {
    opacity: 1;
  }
  /* Sosyal ikonlar */
  .social-icons {
    display: none;
  } /* Fade-in aktif olduğunda animasyonu tetikleyen sınıf */

  .fade-in {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ================== ANLIK DÜNYA NÜFUS AKIŞI SECTION ================== */
.equal-boxes {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  background: #000;
  align-items: center;
}
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
  color: #fbfbff;
  max-width: 400px;
  line-height: 1.6;
  margin-bottom: 3rem;
}
.boxes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: stretch;
  margin-top: 3.7rem;
}
.box {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition:
    transform 0.3s ease,
    background 0.3s ease;
  display: flex;
  flex-direction: column;
}
.box:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.11);
}
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
  margin: 0 auto 1rem;
}
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
  margin-top: auto;
}
.box-button:hover {
  background: rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.6);
}

/* ================== AÇIK KAYNAK BİLDİRİMİ SECTION ================== */
.open-source-section {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  background: #000;
  align-items: center;
}
.open-source-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 3rem;
}
.open-source-header h1 {
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  max-width: 12ch;
  white-space: normal;
  line-height: 1.3;
  margin: 0;
}
.open-source-header .open-source-description {
  font-size: 1rem;
  font-weight: 600;
  color: #fbfbff;
  max-width: 400px;
  line-height: 1.6;
  margin-bottom: 3rem;
}
.open-source-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: stretch;
  margin-top: 3.7rem;
}
.open-source-box {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition:
    transform 0.3s ease,
    background 0.3s ease;
  display: flex;
  flex-direction: column;
}
.open-source-box:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.11);
}
.open-source-icon-box {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}
.open-source-box h3 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 1rem;
}
.open-source-box p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
}
.open-source-button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.open-source-button {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}
.open-source-button:hover {
  background: rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.6);
}
</style>
