export default [
  {
    question: 'Proje hangi teknolojileri kullanıyor?',
    answer:
      "Proje, Vue.js 3 Composition API ile geliştirildi. Veri kazıması için Python Selenium kullanılıyor ve veriler Elasticsearch'e aktarılıyor. AWS, veri akışı ve sunucu ihtiyacını karşılamak için kullanılıyor. Tailwind CSS ile stil yönetimi sağlanıyor.",
  },
  {
    question: 'Veri güvenliği nasıl sağlanıyor?',
    answer:
      "Veriler, güvenli bir bağlantı üzerinden Elasticsearch'e aktarılıyor ve yetkisiz erişime karşı AWS güvenlik önlemleri ile korunuyor.",
  },
  {
    question: 'Nasıl katkıda bulunabilirim?',
    answer:
      'Projemiz açık kaynaklıdır. GitHub deposundan issue açabilir veya pull request gönderebilirsiniz.',
  },
  {
    question: 'Verilerin Güncelleme sıklığı nedir?',
    answer:
      'Veriler, AWS üzerinde sürekli çalışan bir Python kodu sayesinde 5-15 dakika aralığında yenilenir.',
  },
  {
    question: 'Dashboardlar nasıl çalışıyor?',
    answer:
      'Kibana, Elasticsearch verilerini kullanarak dinamik ve etkileşimli görselleştirmeler oluşturur. Kullanıcılar farklı paneller arasında filtreleme yaparak verileri detaylı inceleyebilir.',
  },
]
