<template>
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
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
<style scoped>
header {
  padding: 1.5rem 2rem;
  margin-top: 1rem;
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
  font-weight: 500; /* Medium */
}

.nav-links a:hover {
  color: var(--text-secondary);
}
</style>
