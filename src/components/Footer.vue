<template>
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
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
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
  font-weight: 600; /* Semibold */
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-weight: 400;
}
</style>
