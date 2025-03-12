describe('Home Page Tests - 1920x1200 Resolution', () => {
  beforeEach(() => {
    cy.viewport(1920, 1200) // 1920x1200 çözünürlük ayarı
    cy.visit('/') // Uygulama ana sayfasını ziyaret et
  })

  // TEMEL YAPI TESTLERİ
  it('Hero Section Elements Exist and Visible', () => {
    // Hero section ana elementleri
    cy.get('.hero').should('exist').and('be.visible')

    // Başlık ve görseller
    cy.contains('h1.hero-title', 'GERÇEK ZAMANLI').should('be.visible')
    cy.get('.hero-map').should('be.visible')

    // Sosyal ikonlar
    cy.get('.social-icons').should('be.visible')
    cy.get('.social-icons a').should('have.length', 3)

    // Buton grupları
    cy.get('.button-group').should('be.visible')
    cy.contains('button', 'Ülke Bazlı').should('be.visible')
    cy.contains('button', 'Dünya Bazlı').should('be.visible')
  })

  // ANLIK VERİ KUTUCUKLARI TESTİ
  it('Real-time Data Boxes Functionality', () => {
    cy.get('.equal-boxes').scrollIntoView()

    // Başlık ve açıklama
    cy.contains('h1', 'ANLIK DÜNYA NÜFUS AKIŞI').should('be.visible')
    cy.get('.section-description').should('contain', 'Dakikalar önce güncellenen')

    // Kutucuk sayısı ve içerik
    cy.get('.boxes-grid .box').should('have.length', 3)
    cy.get('.box').each(($box) => {
      cy.wrap($box).find('h3').should('be.visible')
      cy.wrap($box).find('button').should('be.visible')
    })
  })

  // AÇIK KAYNAK BİLEŞENLERİ TESTİ
  it('Open Source Section Validation', () => {
    cy.get('.open-source-section').scrollIntoView()

    // Grid yapısı kontrolü
    cy.get('.open-source-grid').should('be.visible')
    cy.get('.open-source-box').should('have.length', 6)

    // Logo ve metin kontrolleri
    cy.get('.open-source-box img').should('have.length', 6)
    cy.contains('h3', 'Worldometer').should('be.visible')
    cy.contains('h3', 'Vue').should('be.visible')

    // Açık kaynak butonu
    cy.get('.open-source-button').should('contain', 'Açık Kaynak Kodları')
  })

  // SSS BÖLÜMÜ TESTİ
  it('FAQ Section Renders Correctly', () => {
    cy.get('section').contains('PROJE HAKKINDA BİLMENİZ GEREKENLER').scrollIntoView()

    // Component varlığı
    cy.get('section').find('img[src="/img/Faq-img.png"]').should('be.visible')

    // Soruların yüklenmesi
    cy.get('.faq-item').should('have.length.at.least', 1)
  })

  // ANİMASYON TESTLERİ (IntersectionObserver Uyumlu)
  it('Fade-in Animations Applied', () => {
    // Tüm animasyonlu elementler için genel kontrol
    cy.get('.fade-init').should('have.length.gt', 10) // En az 10 elementte fade-init class'ı var

    // Tüm fade-init class'ına sahip elementleri görünür hale getir
    cy.get('.fade-init').each(($el) => {
      cy.wrap($el).scrollIntoView({ duration: 500 }) // Her bir elementi yavaşça kaydır
      cy.wrap($el).should('have.class', 'fade-in') // fade-in class'ının eklendiğini kontrol et
    })

    // fade-in class'ının eklenip eklenmediğini kontrol et
    cy.get('.fade-in').should('have.length.gte', 8) // En az 8 elementte fade-in class'ı var

    // Örnek spesifik kontroller
    cy.get('.hero-title').should('have.class', 'fade-in') // hero-title'da fade-in class'ı var mı?
    cy.get('.social-icons').should('have.class', 'fade-in') // social-icons'da fade-in class'ı var mı?
  })
})

describe('Sayfa Yükleme Süresi Testi', () => {
  it('Sayfa Açılış Süresini Ölç', () => {
    // Sayfa yükleme başlangıcını kaydet

    // Sayfayı ziyaret et
    cy.visit('/', {
      onBeforeLoad: () => {
        window.performance.mark('start-load')
      },
      onLoad: () => {
        window.performance.mark('end-load')
      },
    })

    // Performans verilerini al
    cy.window().then((win) => {
      const [entry] = win.performance.getEntriesByType('navigation')
      const loadTime = entry.duration.toFixed(2) // Milisaniye cinsinden

      // Alternatif: Manuel hesaplama
      // const loadTime = Date.now() - startTime;

      cy.log(`Sayfa tam yükleme süresi: ${loadTime} ms`)
      cy.log(`Detaylı performans verisi:`, entry)
    })
  })
})
