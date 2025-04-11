<template>
  <div class="world-data-container">
    <iframe
      src="https://3.93.195.189:5601/app/dashboards#/view/b1fc84e0-12f1-11f0-9d66-4defeddf9119?embed=true&_g=(refreshInterval:(pause:!f,value:10000),time:(from:now-15m,to:now))&_a=(viewMode:view)&hide-filter-bar=true"
      height="600"
      width="800"
    >
    </iframe>
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
