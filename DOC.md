📂 population-data-app
📌 Bu doküman, proje içindeki dosya ve klasör yapısını açıklamaktadır.

📂 population-data-app
│── 📂 cypress
│ └── 📂 e2e
│ └── 📄 example.cy.js # 🧪 Test Kodları burada
│
│── 📂 src
│ ├── 📂 assets
│ │ ├── 🖼️ fehu-logo.svg
│ │ └── 🎨 global.css # Vue'nin otomatik verdiği global CSS
│ │
│ ├── 📂 components
│ │ ├── 📂 Design and Responsive
│ │ │ ├── 🎨 faq.css # S.S.S bileşeninin tüm CSS kodları burada
│ │ │ ├── 🎨 home.css # Anlık Dünya Nüfus Akışı ve hero section CSS'leri burada
│ │ │ └── 🎨 open-source-styles.css # Açık Kaynak Bildirimi CSS'leri
│ │ │
│ │ ├── 📂 faq # Sıkça sorulan sorulara dair CSS dışı kodlamalar burada yer alır
│ │ │ ├── 📜 faqData.js
│ │ │ ├── 📜 FaqItem.vue
│ │ │ ├── 📜 FaqList.vue
│ │ │ └── 📜 FaqSection.vue
│ │ │
│ │ ├── 📂 icons # Bunun içinde çok da önemli bir şey yok 😄
│ │ │
│ │ ├── 🧩 AppFooter.vue # Tüm footer kodları CSS dahil burada
│ │ ├── 🧩 AppHeader.vue # Tüm Header kodları CSS dahil burada
│ │ └── 🌍 LanguageSwitcher.vue # Header'da bulunan dil seçimi kodları burada
│ │
│ ├── 📂 locales # Dil çeviri JSON dosyaları burada yer alır
│ │
│ ├── 📂 pages # Bu kısımda sayfalar mevcuttur.
│ │ ├── 🌎 CountryData.vue
│ │ ├── 🏠 Home.vue
│ │ ├── 🛠️ OpenSource.vue
│ │ └── 🌍 WorldData.vue
│ │
│ ├── 📂 router # Router ayarları aşağıdaki gibidir
│ │ └── 🔗 index.js
│ │
│ ├── 📜 App.vue # 🏠 Vue.js'in ana bileşeni
│ ├── ⚙️ directives.js # Fade animasyonu tüm sayfaya yedirilir
│ ├── 🌐 i18n.js # Dil ayarları burada yapılır
│ ├── 🚀 main.js # Vue.js uygulamasının başlatıldığı (entry point) dosyadır
│ └── 🔄 share.js # Paylaş butonuna tıklandığında çıkan ekranın kodları
