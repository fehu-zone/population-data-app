<template>
  <header>
    <nav>
      <h1>FEHU.POPULATION</h1>

      <!-- Hamburger -->
      <button class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Kapanma için tıklanacak overlay -->
      <div class="nav-overlay" :class="{ active: isMenuOpen }" @click="closeMenu"></div>

      <!-- Mobil menü -->
      <div class="nav-links" :class="{ active: isMenuOpen }">
        <!-- Kapatma butonu (sadece mobil/tablette gözükecek) -->
        <button class="close-btn" @click="closeMenu">×</button>

        <router-link to="/" @click="closeMenu">Anasayfa</router-link>
        <router-link to="/country-data" @click="closeMenu">Ülke Bazlı Veriler</router-link>
        <router-link to="/world-data" @click="closeMenu">Dünya Bazlı Veriler</router-link>
        <router-link to="/open-source" @click="closeMenu">Açık Kaynak</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    handleClickOutside(event) {
      // nav dışında bir yere tıklanınca menüyü kapat
      if (!event.target.closest('nav') && this.isMenuOpen) {
        this.isMenuOpen = false
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
@import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');

/* Header Genel Ayarlar */
header {
  padding: 1.5rem 2rem;
  margin-top: 1rem;
  position: relative;
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

/* Logo */
h1 {
  font-family: 'Saira Stencil One', sans-serif;
  font-size: 1.8rem;
  transition: font-size 0.3s;
  z-index: 2;
}

/* Masaüstü Linkler */
.nav-links {
  display: flex;
  gap: 2rem;
  transition: all 0.3s;
}

/* Linkler */
.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  padding: 0.5rem 0;
}

/* Hover Efekti (alt çizgi) */
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--text-color);
  transition: width 0.3s;
}
.nav-links a:hover::after {
  width: 100%;
}

/* Aktif Sayfa Alt Çizgi */
.nav-links a.router-link-exact-active {
  border-bottom: 2px solid var(--text-color);
}

/* Hamburger */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 3;
  transition: transform 0.3s;
}
.hamburger span {
  display: block;
  width: 28px;
  height: 3px;
  background: var(--text-color);
  margin: 5px 0;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Overlay */
.nav-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

/* Mobil Menü Ayarları */
@media (max-width: 1024px) {
  .hamburger {
    display: block;
  }
  .nav-links {
    position: fixed;
    top: 0;
    right: -300px; /* İlk başta görünmez */
    height: 100vh;
    width: 300px; /* Sabit genişlik */
    background: linear-gradient(135deg, #1a1a1a, #2e2e2e);
    flex-direction: column;
    transition: all 0.4s ease-in-out;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 11;
    padding: 4rem 2rem;
    align-items: flex-start;
    text-align: left;
  }
  .nav-links.active {
    right: 0;
  }
  .nav-overlay.active {
    display: block;
  }
  .close-btn {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
  }
}

/* Masaüstünde Kapatma Butonu Gizli */
@media (min-width: 1025px) {
  .close-btn {
    display: none !important;
  }
}

/* Mobilde Linkler Arası Çizgi */
@media (max-width: 768px) {
  .nav-links a + a {
    border-top: 1px solid #666;
    margin-top: 1rem;
    padding-top: 1rem;
  }
}

/* Tablet ve Mobilde Yazı Boyutları */
@media (max-width: 1024px) {
  .nav-links a {
    font-size: 1.2rem;
  }
}
@media (max-width: 768px) {
  h1 {
    font-size: 1.4rem;
  }
  .nav-links a {
    font-size: 1.3rem;
  }
}
@media (max-width: 480px) {
  h1 {
    font-size: 1.2rem;
  }
  .nav-links {
    width: 80%;
    right: -80%;
  }
  .nav-links.active {
    right: 0;
  }
  .nav-links a {
    font-size: 1.4rem;
  }
}

/* Responsive Ayarlar: Full HD, QHD, 4K UHD, 8K UHD */
@media (min-width: 1920px) {
  header {
    padding: 2rem 3rem;
  }
  nav {
    max-width: 1600px;
  }
  h1 {
    font-size: 2.4rem;
  }
  .nav-links {
    gap: 2.5rem;
  }
  .nav-links a {
    font-size: 1.6rem;
    padding: 0.6rem 0;
  }
  .hamburger span {
    width: 32px;
    height: 4px;
    margin: 6px 0;
  }
}

@media (min-width: 2560px) {
  header {
    padding: 2.5rem 3.5rem;
  }
  nav {
    max-width: 2000px;
  }
  h1 {
    font-size: 3rem;
  }
  .nav-links {
    gap: 3rem;
  }
  .nav-links a {
    font-size: 1.8rem;
    padding: 0.7rem 0;
  }
  .hamburger span {
    width: 36px;
    height: 4px;
    margin: 7px 0;
  }
}

@media (min-width: 3840px) {
  header {
    padding: 3rem 4rem;
  }
  nav {
    max-width: 2800px;
  }
  h1 {
    font-size: 3.5rem;
  }
  .nav-links {
    gap: 3.5rem;
  }
  .nav-links a {
    font-size: 2rem;
    padding: 0.8rem 0;
  }
  .hamburger span {
    width: 40px;
    height: 5px;
    margin: 8px 0;
  }
}

@media (min-width: 7680px) {
  header {
    padding: 4rem 5rem;
  }
  nav {
    max-width: 4000px;
  }
  h1 {
    font-size: 4.5rem;
  }
  .nav-links {
    gap: 4.5rem;
  }
  .nav-links a {
    font-size: 2.5rem;
    padding: 1rem 0;
  }
  .hamburger span {
    width: 50px;
    height: 6px;
    margin: 10px 0;
  }
}
</style>
