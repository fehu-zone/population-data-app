<template>
  <div class="country-data-container">
    <iframe
      src="http://localhost:5601/app/dashboards#/view/46dc29e6-8138-4fe3-9dea-d2f037007c02?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-1M%2Cto%3Anow))&show-top-menu=true&show-query-input=true&show-time-filter=true"
      height="1000"
      width="1450"
    ></iframe>
  </div>
</template>

<style scoped>
.country-data-container {
  margin-top: 3rem; /* Header ile iframe arasında 20px boşluk bırakır */
}
</style>
