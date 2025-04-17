<template>
  <section class="open-source-section" v-fade>
    <div class="open-source-header" v-fade>
      <h1>{{ $t('opensource.title') }}</h1>
      <p class="open-source-description">
        {{ $t('opensource.description') }}
      </p>
    </div>
    <div class="open-source-grid">
      <!-- Kutucuk 1: Worldometer -->
      <div class="open-source-box" v-fade>
        <div class="open-source-icon-box">
          <img src="/img/Worldometer.svg" alt="Worldometer" width="64" height="64" />
        </div>
        <h3>Worldometer</h3>
        <p>{{ $t('opensource.technologies[0]') }}</p>
      </div>
      <!-- Kutucuk 2: Elasticsearch -->
      <div class="open-source-box" v-fade>
        <div class="open-source-icon-box">
          <img src="/img/Elasticsearch.svg" alt="Elasticsearch" width="64" height="64" />
        </div>
        <h3>Elasticsearch</h3>
        <p>{{ $t('opensource.technologies[1]') }}</p>
      </div>
      <!-- Kutucuk 3: Kibana -->
      <div class="open-source-box" v-fade>
        <div class="open-source-icon-box">
          <img src="/img/Kibana.svg" alt="Kibana" width="64" height="64" />
        </div>
        <h3>Kibana</h3>
        <p>{{ $t('opensource.technologies[2]') }}</p>
      </div>
      <!-- Kutucuk 4: Docker -->
      <div class="open-source-box" v-fade>
        <div class="open-source-icon-box">
          <img src="/img/Dockerr.svg" alt="Docker" width="64" height="64" />
        </div>
        <h3>Docker</h3>
        <p>{{ $t('opensource.technologies[3]') }}</p>
      </div>
      <!-- Kutucuk 5: Vue -->
      <div class="open-source-box" v-fade>
        <div class="open-source-icon-box">
          <img src="/img/Vue.svg" alt="Vue" width="64" height="64" />
        </div>
        <h3>Vue</h3>
        <p>{{ $t('opensource.technologies[4]') }}</p>
      </div>
      <!-- Kutucuk 6: Python -->
      <div class="open-source-box" v-fade>
        <div class="open-source-icon-box">
          <img src="/img/Python.svg" alt="Python" width="64" height="64" />
        </div>
        <h3>Python</h3>
        <p>{{ $t('opensource.technologies[5]') }}</p>
      </div>
    </div>
    <div class="open-source-button-wrapper" v-fade>
      <a
        href="https://github.com/fehu-zone/population-scraper-node"
        target="_blank"
        class="open-source-button no-style-link"
      >
        {{ $t('opensource.viewSource') }}
      </a>
    </div>
  </section>
</template>
