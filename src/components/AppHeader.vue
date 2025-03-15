<template>
  <header class="fehu-header">
    <nav class="fehu-nav">
      <!-- Logo -->
      <a href="/" class="fehu-logo">
        <h1>{{ t('header.logo') }}</h1>
      </a>

      <!-- Sağ Kısım: Masaüstü Menü + Dil Seçici + Mobil Butonlar -->
      <div class="fehu-nav-right">
        <!-- Masaüstü Menü -->
        <div class="fehu-desktop-links desktop-only">
          <router-link to="/" exact class="fehu-link">{{ t('menu.home') }}</router-link>
          <router-link to="/country-data" class="fehu-link">{{ t('menu.countryData') }}</router-link>
          <router-link to="/world-data" class="fehu-link">{{ t('menu.worldData') }}</router-link>
          <router-link to="/open-source" class="fehu-link">{{ t('menu.openSource') }}</router-link>
        </div>

        <!-- Masaüstü Dil Seçici -->
        <div class="fehu-language-dropdown desktop-only">
          <button aria-label="Select Language" @click="toggleLanguageDropdown">
            <span class="globe-icon">{{ currentLanguage.flag }}</span>
            <span class="arrow" :class="{ open: isLanguageDropdownOpen }"></span>
          </button>
          <ul v-if="isLanguageDropdownOpen" class="fehu-language-menu">
            <li
              v-for="lang in availableLanguages"
              :key="lang.code"
              @click="changeLanguage(lang.code)"
              :class="{ active: currentLanguage.code === lang.code }"
            >
              {{ lang.flag }} {{ t(`languages.${lang.code}`) }}
            </li>
          </ul>
        </div>

        <!-- Mobil Butonlar -->
        <button
          class="fehu-hamburger mobile-only"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
          :aria-label="t('header.toggleMenu')"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button
          class="fehu-language-mobile-icon mobile-only"
          :class="{ active: isLanguagePanelOpen }"
          @click="toggleLanguagePanel"
          :aria-label="t('header.selectLanguage')"
        >
          <span class="globe-icon">{{ currentLanguage.flag }}</span>
        </button>
      </div>

      <!-- Overlay'lar -->
      <div class="fehu-nav-overlay" v-if="isMenuOpen" @click="closeAll"></div>
      <div class="fehu-lang-overlay" v-if="isLanguagePanelOpen" @click="closeAll"></div>

      <!-- Mobil Menü -->
      <div class="fehu-nav-links mobile-only" :class="{ active: isMenuOpen }">
        <button class="fehu-close-btn" @click="closeAll">{{ t('header.close') }}</button>
        <router-link to="/" exact class="fehu-link" @click="closeAll">{{ t('menu.home') }}</router-link>
        <router-link to="/country-data" class="fehu-link" @click="closeAll">{{ t('menu.countryData') }}</router-link>
        <router-link to="/world-data" class="fehu-link" @click="closeAll">{{ t('menu.worldData') }}</router-link>
        <router-link to="/open-source" class="fehu-link" @click="closeAll">{{ t('menu.openSource') }}</router-link>
      </div>

      <!-- Mobil Dil Paneli -->
      <div class="fehu-language-panel mobile-only" :class="{ active: isLanguagePanelOpen }">
        <button class="fehu-close-btn" @click="closeAll">{{ t('header.close') }}</button>
        <div
          v-for="lang in availableLanguages"
          :key="lang.code"
          @click="changeLanguage(lang.code)"
          :class="{ active: currentLanguage.code === lang.code }"
        >
          {{ lang.flag }} {{ t(`languages.${lang.code}`) }}
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'FehuHeader',
  setup() {
    const i18n = useI18n()
    const { t } = i18n

    const isMenuOpen = ref(false)
    const isLanguageDropdownOpen = ref(false)
    const isLanguagePanelOpen = ref(false)

    const availableLanguages = [
      { code: 'tr', flag: '🇹🇷' },
      { code: 'en', flag: '🇬🇧' },
      { code: 'de', flag: '🇩🇪' },
      { code: 'fr', flag: '🇫🇷' },
      { code: 'es', flag: '🇪🇸' },
      { code: 'nl', flag: '🇳🇱' },
      { code: 'ja', flag: '🇯🇵' },
      { code: 'zh', flag: '🇨🇳' },
      { code: 'ru', flag: '🇷🇺' }
    ]

    const currentLanguage = computed(() => {
      return availableLanguages.find(lang => lang.code === i18n.locale.value) || availableLanguages[0]
    })

    const toggleLanguageDropdown = () => {
      isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
      if (isLanguageDropdownOpen.value) {
        isMenuOpen.value = false
        isLanguagePanelOpen.value = false
      }
    }

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
      isLanguagePanelOpen.value = false
      toggleBodyOverflow(isMenuOpen.value)
      if (isMenuOpen.value) isLanguageDropdownOpen.value = false
    }

    const toggleLanguagePanel = () => {
      isLanguagePanelOpen.value = !isLanguagePanelOpen.value
      isMenuOpen.value = false
      toggleBodyOverflow(isLanguagePanelOpen.value)
      if (isLanguagePanelOpen.value) isLanguageDropdownOpen.value = false
    }

    const closeAll = () => {
      isMenuOpen.value = false
      isLanguagePanelOpen.value = false
      isLanguageDropdownOpen.value = false
      toggleBodyOverflow(false)
    }

    const toggleBodyOverflow = (open) => {
      document.body.classList.toggle('menu-open', open)
      if (open) {
        document.documentElement.style.position = 'fixed'
      } else {
        document.documentElement.style.position = ''
      }
    }

    const changeLanguage = (langCode) => {
      try {
        i18n.locale.value = langCode
        localStorage.setItem('language', langCode)
        document.documentElement.lang = langCode
        closeAll()
      } catch (error) {
        console.error('Dil değiştirme hatası:', error)
        i18n.locale.value = 'en'
      }
    }

    // Load saved language on mount
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      i18n.locale.value = savedLanguage
    }

    return {
      t,
      isMenuOpen,
      isLanguageDropdownOpen,
      isLanguagePanelOpen,
      availableLanguages,
      currentLanguage,
      toggleLanguageDropdown,
      toggleMenu,
      toggleLanguagePanel,
      closeAll,
      changeLanguage
    }
  }
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

/* Header: Tüm ekranlarda tam siyah arka plan */
.fehu-header {
  background-color: #000 !important;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  position: relative;
}

/* HDR ekranlarda tam siyah koruması */
@media (color-gamut: p3) {
  .fehu-header {
    background-color: #000 !important;
  }
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
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-family: 'Saira Stencil One', sans-serif;
  color: #fff;
  transition: font-size 0.3s;
  z-index: 2;
  font-size: 2rem;
}

.fehu-logo h1 {
  margin: 0;
  font-size: inherit;
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

/* Mobil/Tablet Yan Menü (Hamburger) */
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
.fehu-nav-links .fehu-link:not(:last-child) {
  border-bottom: 1px solid var(--fehu-border-color);
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
}

/* Mobil/Tablet Dil Paneli */
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
  .fehu-logo {
    font-size: 1.8rem;
    margin-top: 0.5rem;
  }
  .fehu-hamburger {
    padding: 8px 10px;
  }
  .fehu-hamburger span {
    width: 28px;
    height: 4px;
    margin: 5px 0;
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

/* Full HD (1920px ve üstü) */
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

/* 2K (2560px ve üstü) */
@media (min-width: 2560px) {
  .fehu-nav {
    max-width: 1400px;
  }
}

/* 4K (3840px ve üstü) */
@media (min-width: 3840px) {
  .fehu-nav {
    max-width: 1600px;
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
