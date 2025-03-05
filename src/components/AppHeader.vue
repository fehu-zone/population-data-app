<template>
  <header class="fehu-header">
    <nav class="fehu-nav">
      <!-- Logo (solda) -->
      <h1 class="fehu-logo">FEHU.POPULATION</h1>

      <!-- Sağ Kısım: Masaüstü Menü + Dil Dropdown + Mobil Butonlar -->
      <div class="fehu-nav-right">
        <!-- Masaüstü Menü Linkleri -->
        <div class="fehu-desktop-links desktop-only">
          <router-link to="/" exact class="fehu-link">Anasayfa</router-link>
          <router-link to="/country-data" class="fehu-link">Ülke Bazlı Veriler</router-link>
          <router-link to="/world-data" class="fehu-link">Dünya Bazlı Veriler</router-link>
          <router-link to="/open-source" class="fehu-link">Açık Kaynak</router-link>
        </div>

        <!-- Masaüstü Dil Dropdown (desktop-only) -->
        <div class="fehu-language-dropdown desktop-only">
          <button aria-label="Select Language" @click="toggleLanguageDropdown">
            <span class="globe-icon">🌐</span>
            <span class="arrow" :class="{ open: isLanguageDropdownOpen }"></span>
          </button>
          <ul v-if="isLanguageDropdownOpen" class="fehu-language-menu">
            <li @click="changeLanguage('tr')">🇹🇷 Türkçe</li>
            <li @click="changeLanguage('en')">🇬🇧 English</li>
            <li @click="changeLanguage('de')">🇩🇪 Deutsch</li>
            <li @click="changeLanguage('fr')">🇫🇷 Français</li>
            <li @click="changeLanguage('es')">🇪🇸 Español</li>
            <li @click="changeLanguage('nl')">🇳🇱 Nederlands</li>
            <li @click="changeLanguage('ja')">🇯🇵 日本語</li>
            <li @click="changeLanguage('zh')">🇨🇳 中文</li>
            <li @click="changeLanguage('ru')">🇷🇺 Русский</li>
          </ul>
        </div>

        <!-- Mobil/Tablet: Hamburger Menü Butonu -->
        <button
          class="fehu-hamburger mobile-only"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Mobil/Tablet: Dil Paneli Butonu -->
        <button
          class="fehu-language-mobile-icon mobile-only"
          :class="{ active: isLanguagePanelOpen }"
          @click="toggleLanguagePanel"
        >
          <span class="globe-icon">🌐</span>
        </button>
      </div>

      <!-- Overlay'lar (her panel için ayrı) -->
      <div class="fehu-nav-overlay" v-if="isMenuOpen" @click="closeMenu"></div>
      <div class="fehu-lang-overlay" v-if="isLanguagePanelOpen" @click="closeLanguagePanel"></div>

      <!-- Mobil/Tablet Yan Menü (Hamburger) -->
      <div class="fehu-nav-links mobile-only" :class="{ active: isMenuOpen }">
        <button class="fehu-close-btn" @click="closeMenu">✕</button>
        <router-link to="/" exact class="fehu-link" @click="closeMenu">Anasayfa</router-link>
        <router-link to="/country-data" class="fehu-link" @click="closeMenu"
          >Ülke Bazlı Veriler</router-link
        >
        <router-link to="/world-data" class="fehu-link" @click="closeMenu"
          >Dünya Bazlı Veriler</router-link
        >
        <router-link to="/open-source" class="fehu-link" @click="closeMenu"
          >Açık Kaynak</router-link
        >
      </div>

      <!-- Mobil/Tablet Dil Paneli -->
      <div class="fehu-language-panel mobile-only" :class="{ active: isLanguagePanelOpen }">
        <button class="fehu-close-btn" @click="closeLanguagePanel">✕</button>
        <div @click="changeLanguage('tr')">🇹🇷 Türkçe</div>
        <div @click="changeLanguage('en')">🇬🇧 English</div>
        <div @click="changeLanguage('de')">🇩🇪 Deutsch</div>
        <div @click="changeLanguage('fr')">🇫🇷 Français</div>
        <div @click="changeLanguage('es')">🇪🇸 Español</div>
        <div @click="changeLanguage('nl')">🇳🇱 Nederlands</div>
        <div @click="changeLanguage('ja')">🇯🇵 日本語</div>
        <div @click="changeLanguage('zh')">🇨🇳 中文</div>
        <div @click="changeLanguage('ru')">🇷🇺 Русский</div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'FehuHeader',
  data() {
    return {
      isMenuOpen: false, // Hamburger menü (mobil/tablet) açık mı
      isLanguageDropdownOpen: false, // Masaüstü dil dropdown açık mı
      isLanguagePanelOpen: false, // Mobil/Tablet dil paneli açık mı
    }
  },
  methods: {
    toggleLanguageDropdown() {
      this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      if (this.isMenuOpen) {
        document.body.classList.add('menu-open')
        this.isLanguagePanelOpen = false
      } else {
        document.body.classList.remove('menu-open')
      }
      this.isLanguageDropdownOpen = false
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.classList.remove('menu-open')
    },
    toggleLanguagePanel() {
      this.isLanguagePanelOpen = !this.isLanguagePanelOpen
      if (this.isLanguagePanelOpen) {
        document.body.classList.add('menu-open')
        this.isMenuOpen = false
      } else {
        document.body.classList.remove('menu-open')
      }
      this.isLanguageDropdownOpen = false
    },
    closeLanguagePanel() {
      this.isLanguagePanelOpen = false
      document.body.classList.remove('menu-open')
    },
    changeLanguage(lang) {
      console.log('Dil değiştirildi:', lang)
      // Mobil/Tablet panelinde dil seçildikten sonra kapat
      this.closeMenu()
      this.closeLanguagePanel()
      this.isLanguageDropdownOpen = false
    },
    handleClickOutside(event) {
      if (!event.target.closest('.fehu-nav')) {
        this.closeMenu()
        this.closeLanguagePanel()
        this.isLanguageDropdownOpen = false
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
}
</script>

<style scoped>
/* Renk Değişkenleri */
:root {
  --fehu-background-color: #000;
  --fehu-text-color: #fff;
  --fehu-border-color: #333;
  --fehu-hover-color: #222;
}

/* Body: Menü açıkken kaydırmayı kapat */
body.menu-open {
  overflow: hidden;
}

/* Header */
.fehu-header {
  background-color: var(--fehu-background-color);
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  position: relative;
}

/* Nav */
.fehu-nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.fehu-logo {
  font-family: 'Saira Stencil One', sans-serif;
  color: var(--fehu-text-color);
  transition: font-size 0.3s;
  z-index: 2;
  font-size: 1.6rem;
}

/* Sağ kısım: Menü + Dil ikonu + Mobil butonlar */
.fehu-nav-right {
  display: flex;
  align-items: center;
  gap: 1.7rem;
}

/* Masaüstü Menü Linkleri */
.fehu-desktop-links {
  display: flex;
  gap: 1.7rem;
}

/* desktop-only ve mobile-only */
.desktop-only {
  display: none;
}
.mobile-only {
  display: block;
}
@media (min-width: 1281px) {
  .desktop-only {
    display: flex !important;
  }
  .mobile-only {
    display: none !important;
  }
}

/* Hamburger Buton (mobil/tablet) */
.fehu-hamburger {
  background: #000;
  border: 1px solid var(--fehu-border-color);
  border-radius: 4px;
  cursor: pointer;
  padding: 6px 8px;
  z-index: 3;
  transition: transform 0.3s;
  outline: none;
}
.fehu-hamburger span {
  display: block;
  width: 24px;
  height: 3px;
  background: var(--fehu-text-color);
  margin: 4px 0;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.fehu-hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.fehu-hamburger.active span:nth-child(2) {
  opacity: 0;
}
.fehu-hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobil/Tablet Dil Butonu */
.fehu-language-mobile-icon {
  background: none;
  border: 1px solid var(--fehu-border-color);
  border-radius: 4px;
  cursor: pointer;
  padding: 6px 8px;
  color: var(--fehu-text-color);
  z-index: 3;
  outline: none;
}

/* Overlay'lar */
.fehu-nav-overlay,
.fehu-lang-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

/* Mobil/Tablet Yan Menü (Hamburger) - arka plan siyaha yakın gri (#111) */
.fehu-nav-links {
  position: fixed;
  top: 0;
  right: -280px;
  height: 100vh;
  width: 280px;
  background: #111;
  flex-direction: column;
  transition: all 0.4s ease-in-out;
  z-index: 11;
  padding: 3rem 1rem;
  display: flex;
  align-items: flex-start;
}
.fehu-nav-links.active {
  right: 0;
}
/* Menü linkleri arasında ince çizgi */
.fehu-nav-links .fehu-link:not(:last-child) {
  border-bottom: 1px solid var(--fehu-border-color);
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
}

/* Mobil/Tablet Dil Paneli - arka plan siyaha yakın gri (#111) */
.fehu-language-panel {
  position: fixed;
  top: 0;
  right: -280px;
  height: 100vh;
  width: 280px;
  background: #111;
  flex-direction: column;
  transition: all 0.4s ease-in-out;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  z-index: 11;
  padding: 3rem 1rem;
  display: flex;
  align-items: flex-start;
}
.fehu-language-panel.active {
  right: 0;
}
/* Dil paneli seçenekleri arasında çizgi */
.fehu-language-panel > div:not(:last-child) {
  border-bottom: 1px solid var(--fehu-border-color);
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
}

/* Kapatma Butonu (X) */
.fehu-close-btn {
  background: none;
  border: none;
  color: var(--fehu-text-color);
  font-size: 1.5rem;
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 1rem;
}

/* Menü Linkleri */
.fehu-link {
  white-space: nowrap;
  font-weight: 500;
  text-decoration: none;
  color: var(--fehu-text-color);
  transition:
    color 0.3s,
    background-color 0.3s;
  padding: 0.5rem 0;
}
.fehu-link:hover {
  background-color: var(--fehu-hover-color);
  border-radius: 4px;
  color: #fff;
}
.fehu-link.router-link-exact-active {
  border-bottom: 2px solid #fff;
}

/* Masaüstü Dil Dropdown */
.fehu-language-dropdown {
  position: relative;
}
.fehu-language-dropdown button {
  background: none;
  border: none;
  color: var(--fehu-text-color);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.4rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}
.fehu-language-dropdown button:hover {
  background: var(--fehu-hover-color);
  border-radius: 4px;
}
.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid var(--fehu-text-color);
  transition: transform 0.3s ease;
}
.arrow.open {
  transform: rotate(180deg);
}
.fehu-language-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #000;
  border: 1px solid var(--fehu-border-color);
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  padding: 0;
  list-style: none;
  min-width: 140px;
  z-index: 1000;
  margin: 0;
}
.fehu-language-menu li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--fehu-text-color);
}
.fehu-language-menu li:hover {
  background: var(--fehu-hover-color);
  color: #fff;
}

/* Küçük ekranlarda logo ve link boyutlarını küçültme */
@media (max-width: 768px) {
  /* Header logo boyutunu büyüt ve üstten boşluk ekle */
  .fehu-logo {
    font-size: 1.8rem; /* Önceki 1.4rem'den büyütüldü */
    margin-top: 0.5rem; /* Üst boşluk eklendi */
  }

  /* Hamburger menü boyutunu artır */
  .fehu-hamburger {
    padding: 8px 10px; /* Daha geniş ve yüksek tıklanabilir alan */
  }

  .fehu-hamburger span {
    width: 28px; /* Hamburger çizgilerinin genişliği artırıldı */
    height: 4px; /* Çizgi kalınlığı hafif artırıldı */
    margin: 5px 0; /* Çizgiler arasına biraz boşluk eklendi */
  }
}

@media (max-width: 480px) {
  .fehu-logo {
    font-size: 1.2rem;
  }
  .fehu-link {
    font-size: 0.9rem;
  }
  .fehu-hamburger span {
    width: 20px;
    margin: 3px 0;
  }
  .fehu-nav-links,
  .fehu-language-panel {
    width: 70%;
    right: -70%;
  }
  .fehu-nav-links.active,
  .fehu-language-panel.active {
    right: 0;
  }
}
/* Daha büyük ekranlar (1281px ve üstü) */
@media (min-width: 1281px) {
  .fehu-header {
    margin-top: 1.5rem;
  }
  .fehu-logo {
    font-size: 1.8rem;
  }
  .fehu-link {
    font-size: 1rem;
  }
}
/* Full HD (1920px) ve üstü */
@media (min-width: 1920px) {
  .fehu-header {
    margin-top: 2rem;
  }
  .fehu-logo {
    font-size: 1.6rem;
  }
  .fehu-link {
    font-size: 0.95rem;
  }
}

/* Eklenen HomeResponsive.css responsive ayarları */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem;
    height: auto;
  }
  .hero-left,
  .hero-right {
    align-items: center;
    margin-left: 0;
  }
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-map {
    max-width: 80%;
  }
}

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

@media (max-width: 768px) {
  .open-source-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
  .open-source-header h1,
  .open-source-header .open-source-description {
    max-width: 100%;
    margin-bottom: 2rem;
  }
  .open-source-grid {
    grid-template-columns: 1fr;
  }
}
</style>
