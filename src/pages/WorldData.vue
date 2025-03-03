<template>
  <div class="world-data-container">
    <iframe
      src="http://localhost:5601/app/dashboards#/view/1cac334e-75c8-447c-91a9-8ab73a4022f8?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-1M%2Cto%3Anow))&show-top-menu=false&show-query-input=false&show-time-filter=false"
      style="border: none; outline: none"
    ></iframe>
  </div>
</template>

<style scoped>
.world-data-container {
  margin-top: 3rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: 58.62%; /* 850/1450 = 0.5862 aspect ratio */
}

.world-data-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Ekstra responsive ayarlar */
@media (max-width: 768px) {
  .world-data-container {
    padding-top: 85%; /* Mobil cihazlar için daha yüksek aspect ratio */
  }
}

@media (max-width: 480px) {
  .world-data-container {
    padding-top: 100%; /* Küçük mobil cihazlar için kareye yakın oran */
  }
}

@media (min-width: 3840px) {
  .world-data-container {
    max-width: 3840px; /* 4K ekranlar için maksimum genişlik */
    margin: 3rem auto 0; /* Ortalama */
  }
}
</style>
