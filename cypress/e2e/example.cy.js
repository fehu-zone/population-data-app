describe('Header Testi', () => {
  it('Sayfanın başlık bölümü doğru metinleri içermeli', () => {
    // Uygulamanın ana sayfasını ziyaret et
    cy.visit('/')

    // h1 elementinin görünür olduğunu ve içeriğinde hem "GERÇEK ZAMANLI" hem de "DÜNYA NÜFUS VERİLERİ" metinlerinin bulunduğunu doğrula
    cy.get('h1.hero-title')
      .should('be.visible')
      .and('contain', 'GERÇEK ZAMANLI')
      .and('contain', 'DÜNYA NÜFUS VERİLERİ')
  })
})

describe('Ana Sayfa Testleri', () => {
  beforeEach(() => {
    cy.visit('/') // Ana sayfayı aç
  })

  it('Ana sayfa düzgün şekilde yüklenmeli', () => {
    cy.url().should('include', '/') // URL doğrulaması
    cy.get('h1.hero-title').should('be.visible') // Başlık görünür olmalı
  })

  it('Başlık metni doğru şekilde gösterilmeli', () => {
    cy.get('h1.hero-title')
      .should('be.visible')
      .and('contain', 'GERÇEK ZAMANLI')
      .and('contain', 'DÜNYA NÜFUS VERİLERİ')
  })

  it('Sosyal medya ikonları mevcut olmalı ve bağlantılar içermeli', () => {
    cy.get('.social-icons a').should('have.length', 3) // 3 ikon olmalı
    cy.get('.social-icons a').each(($el) => {
      cy.wrap($el).should('have.attr', 'href') // Her ikon bir bağlantı içermeli
    })
  })

  it('Tanıtım metni doğru şekilde gösterilmeli', () => {
    cy.get('.hero-text')
      .should('be.visible')
      .and(
        'contain',
        'Dünya nüfus verilerini dakikalar önce güncellenen en yeni verilerle keşfedin',
      )
  })

  it('Ana butonlar görünmeli ve çalışmalı', () => {
    cy.get('.primary-btn').should('be.visible').and('contain', 'Ülke Bazlı Nüfus Verileri').click()

    cy.get('.secondary-btn')
      .should('be.visible')
      .and('contain', 'Dünya Bazlı Nüfus Verileri')
      .click()
  })

  it('Nüfus akışı kutucukları görünmeli ve içerikleri doğru olmalı', () => {
    cy.get('.box').should('have.length', 3) // 3 kutucuk olmalı
    cy.get('.box').eq(0).should('contain', 'Küresel Veri')
    cy.get('.box').eq(1).should('contain', 'Ülke Analizi')
    cy.get('.box').eq(2).should('contain', 'Açık Kaynak Kod')
  })

  it('Açık kaynak teknolojileri listelenmeli ve görselleri içermeli', () => {
    cy.get('.open-source-box').should('have.length', 6) // 6 açık kaynak teknolojisi olmalı

    cy.get('.open-source-box').each(($el) => {
      cy.wrap($el)
        .should('be.visible') // Görünür olana kadar bekle
        .should('have.css', 'opacity') // Opacity kontrolü yap
        .then((opacity) => {
          expect(opacity).to.not.equal('0') // Opacity 0 olmamalı
        })

      cy.wrap($el).find('h3').should('not.be.empty') // Her kutuda bir başlık olmalı

      cy.wrap($el).find('img').should('be.visible') // Görsel içermeli
    })
  })

  it('SSS bölümü yüklenmeli ve görünür olmalı', () => {
    cy.get('.faq-section').should('be.visible') // SSS bölümü görünür mü?
  })
})
