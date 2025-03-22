# Proje Genel Bakış / Project Overview 🚀

**Türkçe**  
Bu proje, modern web teknolojilerini kullanarak güçlü ve esnek bir altyapı sunar. **Vue.js**, **Elasticsearch**, **Kibana**, **Python** ve **Docker** gibi teknolojilerle geliştirilmiştir. Proje, **AWS** altyapısı üzerinde çalışarak yüksek performans ve ölçeklenebilirlik sağlar.

**English**  
This project provides a robust and flexible infrastructure using modern web technologies. It's built with **Vue.js**, **Elasticsearch**, **Kibana**, **Python**, and **Docker**, and runs on **AWS** infrastructure to ensure high performance and scalability.

---

## Kullanılan Teknolojiler / Used Technologies 🛠️

<div align="center">
  <!-- Same icons for both languages -->
  <a href="https://www.python.org/" title="Python" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" width="50" height="50" />
  </a>
  <a href="https://vuejs.org/" title="Vue.js" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue.js" width="50" height="50" />
  </a>
  <a href="https://www.elastic.co/elasticsearch/" title="Elasticsearch" target="_blank">
    <img src="https://cdn.simpleicons.org/elasticsearch/005571" alt="Elasticsearch" width="50" height="50" style="filter: brightness(1.2);" />
  </a>
  <a href="https://www.elastic.co/kibana/" title="Kibana" target="_blank">
    <img src="https://cdn.simpleicons.org/kibana/005571" alt="Kibana" width="50" height="50" style="filter: brightness(1.2);" />
  </a>
  <a href="https://aws.amazon.com/" title="AWS" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" width="80" height="50" />
  </a>
  <a href="https://www.docker.com/" title="Docker" target="_blank">
    <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" width="50" height="50" style="filter: brightness(1.2);" />
  </a>
</div>

---

## Proje Açıklaması / Project Description 📌

### 🚀 Proje Teknolojileri ve Altyapı / Project Technologies & Infrastructure

**Türkçe**  
Bu projede, **Vue.js (Pinia ile birlikte)**, **Elasticsearch**, **Kibana** ve **Python** teknolojilerini bir araya getirerek güçlü bir altyapı oluşturdum. **Docker** kullanarak uygulama ortamını standartlaştırdım, böylece kurulum ve yönetimi kolaylaştırdım. Sunucu tarafında **AWS** altyapısını kullanarak güvenilir ve yüksek performanslı bir sistem sundum.

**English**  
In this project, I combined **Vue.js (with Pinia)**, **Elasticsearch**, **Kibana**, and **Python** to create a powerful infrastructure. By using **Docker**, I standardized the application environment, simplifying setup and management. The server-side leverages **AWS** infrastructure for reliability and high performance.

### 🔧 Özelleştirme ve Genişletilebilirlik / Customization & Extensibility

**Türkçe**  
Projenin ihtiyaçlarına bağlı olarak:

- **Elasticsearch yerine farklı bir arama ve analiz teknolojisi** entegre edebilirsiniz.
- Veri akışını optimize ederek sistem performansını artırabilirsiniz.
- Diğer bileşenleri özelleştirerek projenin gereksinimlerine uygun hale getirebilirsiniz.

**English**  
Depending on project needs:

- You can integrate **alternative search/analytics tools instead of Elasticsearch**.
- Optimize data flow to enhance system performance.
- Customize other components to meet specific requirements.

**Türkçe**  
Bu proje, [bu Python kodunu](https://github.com/fehu-zone/population_scraper) kullanarak **Worldometer** sitesinden veri çeker, **Elasticsearch**'e gönderir ve **Kibana**'da interaktif grafikler elde edilir. **Vue** tabanlı web arayüzünde sunulur. İki ana bileşenden oluşur:

1. **Veri İşleme:** [Bu repoda](https://github.com/fehu-zone/population_scraper) yürütülür.
2. **Web Arayüzü:** Bu repoda yönetilir.

**English**  
This project uses [this Python script](https://github.com/fehu-zone/population_scraper) to scrape data from **Worldometer**, send it to **Elasticsearch**, and visualize interactive dashboards in **Kibana**. The **Vue**-based web interface displays the results. It consists of two core components:

1. **Data Processing:** Handled in [this repository](https://github.com/fehu-zone/population_scraper).
2. **Web Interface:** Managed in this repository.

**Türkçe**  
Özel olarak **Worldometer**'i onore etmek istiyorum! ❤️  
📩 **İletişim:** ahmett.karadas@icloud.com

**English**  
A special shoutout to **Worldometer** for their incredible service! ❤️  
📩 **Contact:** ahmett.karadas@icloud.com

---

## Kurulum Talimatları / Installation Instructions 🔧

**Türkçe**

### 📌 Geliştirme Ortamını Kurma

```bash
# Gerekli paketlerin kurulumu:
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
```
