import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import CountryData from '@/pages/CountryData.vue'
import WorldData from '@/pages/WorldData.vue'
import OpenSource from '@/pages/OpenSource.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home, // Home.vue ana sayfa olarak ayarlanıyor
  },
  {
    path: '/country-data',
    name: 'countryData',
    component: CountryData,
  },
  {
    path: '/open-source',
    name: 'openSource',
    component: OpenSource,
  },
  {
    path: '/world-data',
    name: 'worldData',
    component: WorldData,
  },
]

const router = createRouter({
  history: createWebHashHistory(), // Yerel geliştirme için hash history
  routes,
})

export default router
