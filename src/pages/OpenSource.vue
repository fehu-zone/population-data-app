<template>
  <section class="open-source-section" v-fade>
    <div class="open-source-header" v-fade>
      <h1>ÖZGÜR VE AÇIK KAYNAK BİLDİRİMİ</h1>
      <p class="open-source-description">
        Projemizde kullandığımız açık kaynak teknolojiler ile dünya nüfus verilerini gerçek zamanlı
        takip ediyoruz.
      </p>
    </div>
    <div class="open-source-grid">
      <!-- Kutucuk 1: Worldometer -->
      <div class="open-source-box" v-fade>
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
      <div class="open-source-box" v-fade>
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
      <div class="open-source-box" v-fade>
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
      <div class="open-source-box" v-fade>
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
      <div class="open-source-box" v-fade>
        <div class="open-source-icon-box">
          <img src="/img/Vue.svg" alt="Vue" width="64" height="64" />
        </div>
        <h3>Vue</h3>
        <p>Bu web sitesi, modern JavaScript çerçevesi Vue ile geliştirilmiştir.</p>
      </div>
      <!-- Kutucuk 6: Python -->
      <div class="open-source-box" v-fade>
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
    <div class="open-source-button-wrapper" v-fade>
      <button class="open-source-button">Açık Kaynak Kodları İncelemek İçin Tıklayın</button>
    </div>
  </section>
</template>
