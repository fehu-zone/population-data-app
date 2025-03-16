# Proje Genel Bakış 🚀

<div id="kurulum-talimatlari"></div>
Not: Kurulum talimatları için lütfen hızlıca kurulum bölümüne kaydırın. 

---

## Kullanılan Teknolojiler 🛠️
<div align="center">
  <!-- Türkçe İpuçları -->
  <a href="https://www.python.org/" title="Python" target="_blank">
    <img src="https://cdn.simpleicons.org/python/ffffff" alt="Python" width="50" height="50" />
  </a>
  <a href="https://vuejs.org/" title="Vue.js" target="_blank">
    <img src="https://cdn.simpleicons.org/vuedotjs/ffffff" alt="Vue.js" width="50" height="50" />
  </a>
  <a href="https://www.elastic.co/elasticsearch/" title="Elasticsearch" target="_blank">
    <img src="https://cdn.simpleicons.org/elasticsearch/ffffff" alt="Elasticsearch" width="50" height="50" />
  </a>
  <a href="https://www.elastic.co/kibana/" title="Kibana" target="_blank">
    <img src="https://cdn.simpleicons.org/kibana/ffffff" alt="Kibana" width="50" height="50" />
  </a>
  <a href="https://aws.amazon.com/" title="AWS" target="_blank">
    <img src="https://cdn.simpleicons.org/amazonaws/ffffff" alt="AWS" width="50" height="50" />
  </a>
  <a href="https://www.docker.com/" title="Docker" target="_blank">
    <img src="https://cdn.simpleicons.org/docker/ffffff" alt="Docker" width="50" height="50" />
  </a>
</div>

---

## Proje Açıklaması 📌

## 🚀 Proje Teknolojileri ve Altyapı

Bu projede **Vue.js (Pinia ile birlikte), Elasticsearch, Kibana ve Python** teknolojilerini bir araya getirerek güçlü ve esnek bir altyapı oluşturdum. **Docker** kullanarak uygulama ortamını standartlaştırdım, böylece kurulum ve yönetimi sorunsuz hale getirdim. Sunucu tarafında **AWS'nin ölçeklenebilir altyapısını** tercih ederek güvenilir ve yüksek performanslı bir sistem sundum.  

### 🔧 Özelleştirme ve Genişletilebilirlik  

Projenin ihtiyaçlarına bağlı olarak:  
- **Elasticsearch yerine farklı bir arama ve analiz teknolojisi** entegre edebilirsiniz.  
- Veri akışını optimize ederek sistem performansını artırabilirsiniz.  
- Diğer bileşenleri özelleştirerek projenin gereksinimlerine uygun hale getirebilirsiniz.  

Esneklik ve sürdürülebilirlik odaklı bu mimari, gelecekteki genişlemelere ve ölçeklenebilir çözümlere açık olacak şekilde tasarlandı.  

Bu proje, [bu Python kodunu](https://github.com/fehu-zone/population_scraper) kullanarak Worldometer sitesinden veri çeker, **Elasticsearch**'e gönderir ve **Kibanada'da** interaktif grafikler elde edilir. **Vue** tabanlı web arayüzünde sunulur. İki ana bileşenden oluşur:

1. **Veri İşleme:** [Bu repoda](https://github.com/fehu-zone/population_scraper) yürütülür.
2. **Web Arayüzü:** Bu repoda yönetilir.

Özel olarak **Worldometer**'i onore etmek istiyorum! ❤️


İletişim: **ahmett.karadas@icloud.com**

---

## Kurulum Talimatları🔧

### Türkçe Adımlar

```bash
# Geliştirme için gerekli paketlerin kurulumu:
npm install

# Geliştirme modunda başlat:
npm run dev

# Üretim build'i oluştur:
npm run build

# Birim testlerini çalıştır:
npm run test:unit

# Uçtan uca testleri (geliştirme sunucusunda) çalıştır:
npm run test:e2e:dev

# Üretim build'ini test etmek (CI ortamlarında önerilir):
npm run build
npm run test:e2e

# Kod kalitesini kontrol etmek için (ESLint):
npm run lint
