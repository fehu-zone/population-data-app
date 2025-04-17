<template>
  <footer>
    <!-- Divider -->
    <div class="footer-divider"></div>

    <!-- Üst Kısım (4 sütun) -->
    <div class="footer-content">
      <!-- Logo ve İletişim -->
      <div class="footer-section">
        <h3 class="logo-text">{{ $t('header.logo') }}</h3>
      </div>

      <!-- İletişim -->
      <div class="footer-section contact-section">
        <h4>{{ $t('contact.title') }}</h4>
        <ul>
          <li>
            <a href="mailto:ahmett.karadas@icloud.com" class="no-style-link">{{
              $t('contact.email')
            }}</a>
          </li>
          <li>
            <a href="https://wa.me/905078774897" class="no-style-link">{{ $t('contact.phone') }}</a>
          </li>
          <li>
            <a href="https://ahmetkaradas.site" class="no-style-link">
              {{ $t('contact.website') }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Linkler -->
      <div class="footer-section">
        <h4>{{ $t('menu.links') }}</h4>
        <ul>
          <li>
            <router-link to="/" class="no-style-link">{{ $t('menu.home') }}</router-link>
          </li>
          <li>
            <router-link to="/world-data" class="no-style-link">{{
              $t('menu.worldData')
            }}</router-link>
          </li>
          <li>
            <router-link to="/country-data" class="no-style-link">{{
              $t('menu.countryData')
            }}</router-link>
          </li>
          <li>
            <router-link to="/open-source" class="no-style-link">{{
              $t('menu.openSource')
            }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Hakkımızda ve Kaynaklar -->
      <div class="footer-section about-section">
        <h4>{{ $t('about.title') }}</h4>
        <p>{{ $t('about.description') }}</p>
      </div>
    </div>

    <!-- Alt Kısım (Metin ve İkonlar) -->
    <div class="footer-bottom">
      <p class="footer-text">{{ $t('footer.copyright') }}</p>
      <div class="footer-bottom-icons">
        <a href="https://www.linkedin.com/in/ahmetkaradas/" class="icon-bottom" target="_blank">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/fehu-zone" class="icon-bottom" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="#" class="icon-bottom" id="shareButton">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { handleShare } from '@/share' // share.js dosyasını import et

export default {
  name: 'AppFooter',
  mounted() {
    // Paylaşım butonunun işlevselliği
    const shareButton = document.getElementById('shareButton')
    if (shareButton) {
      shareButton.addEventListener('click', handleShare) // share.js'deki fonksiyonu kullan
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');

/* GENEL STİLLER */
.footer-divider {
  width: 100%;
  height: 1.3px;
  background-color: rgba(255, 255, 255, 0.15);
  margin-bottom: 2rem;
}

footer {
  background-color: #000;
  padding: 3rem 2rem;
}

/* Temel düzen: dört sütun (laptop ve üstü) */
.footer-content {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-items: start;
}

.logo-text {
  font-family: 'Saira Stencil One', sans-serif;
  color: #fff;
  margin-bottom: 1rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
  font-weight: 600;
  color: #fff;
}

.contact-section {
  padding-left: 5rem;
}

.footer-section p,
.footer-section ul li {
  color: rgba(255, 255, 255, 0.48);
  margin-bottom: 0.5rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Footer Alt Kısmı: Metin ve İkonlar */
.footer-bottom {
  width: 100%;
  margin: 2rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 1rem;
}

.footer-text {
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.875rem;
  margin: 0;
}

/* Alt Kısım İkonları */
.footer-bottom-icons {
  display: flex;
  gap: 1rem;
}

.icon-bottom {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.3s ease;
}
.icon-bottom:hover {
  box-shadow: 0 8px 26px rgba(12, 54, 103, 0.8);
}

/* --- 1) Mobil (max-width: 1023px) => Tek sütun, merkezli --- */
@media (max-width: 1023px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
  .contact-section {
    padding-left: 0;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
}

/* --- 2) 1024px - 1919px (Laptop ve Tablet) => Varsayılan 4 sütun düzeni --- */
/* Bu aralıkta herhangi bir özel override yapmadan temel düzen kullanılabilir */

/* --- 3) 1920px ve üzeri (Full HD, 2K, 4K, 8K) => Daha büyük fontlar, artan gap --- */
@media (min-width: 1920px) {
  .footer-content {
    gap: 2.5rem;
  }
  .footer-section h3,
  .footer-section h4 {
    font-size: 2rem;
  }
  .footer-section p,
  .footer-section ul li {
    font-size: 1.1rem;
  }
}

/* 2K (2560×1440) ~ 3839px */
@media (min-width: 2560px) and (max-width: 3839px) {
  .footer-content {
    gap: 3rem;
  }
  .footer-section h3,
  .footer-section h4 {
    font-size: 2.2rem;
  }
  .footer-section p,
  .footer-section ul li {
    font-size: 1.2rem;
  }
}

/* 4K UHD (3840×2160) ~ 7679px */
@media (min-width: 3840px) and (max-width: 7679px) {
  .footer-content {
    gap: 3.5rem;
  }
  .footer-section h3,
  .footer-section h4 {
    font-size: 2.5rem;
  }
  .footer-section p,
  .footer-section ul li {
    font-size: 1.3rem;
  }
}

/* 8K UHD (7680px ve üzeri) */
@media (min-width: 7680px) {
  .footer-content {
    gap: 4rem;
  }
  .footer-section h3,
  .footer-section h4 {
    font-size: 3rem;
  }
  .footer-section p,
  .footer-section ul li {
    font-size: 1.5rem;
  }
}

/* --- 4) ÖZEL: Tam olarak 1920×1200 çözünürlüğe sahip cihazlar için override --- */
@media only screen and (device-width: 1920px) and (device-height: 1200px) and (orientation: landscape) {
  .footer-content {
    gap: 8rem; /* Daha geniş aralık */
  }
  .footer-section h3,
  .footer-section h4 {
    font-size: 2.2rem;
  }
  .footer-section p,
  .footer-section ul li {
    font-size: 1.2rem;
  }
}

/* Samsung Galaxy Z Fold 5 ve benzeri katlanabilir cihazlar için */
/* 1) Kapalı Mod (Dar Dış Ekran - Telefon Modu) */
@media (max-width: 812px) and (orientation: portrait) {
  .footer-content {
    grid-template-columns: 1fr; /* Tek sütun */
    text-align: center;
  }
  .footer-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
  .contact-section {
    padding-left: 0;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
}

/* 2) Açık Mod (Katlanmış Geniş Ekran - Tablet Modu) */
@media (min-width: 1600px) and (max-width: 2200px) {
  .footer-content {
    grid-template-columns: repeat(4, 1fr); /* Dört sütun düzeni korunur */
    gap: 3rem;
  }
  .footer-section h3,
  .footer-section h4 {
    font-size: 2rem;
  }
  .footer-section p,
  .footer-section ul li {
    font-size: 1.1rem;
  }
}
</style>
