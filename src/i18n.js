import { createI18n } from 'vue-i18n'

// Tüm dil dosyalarını import ediyoruz
import en from './locales/en.json'
import de from './locales/de.json' // Eksik olan Almanca ekledim
import es from './locales/es.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
import nl from './locales/nl.json'
import ru from './locales/ru.json'
import tr from './locales/tr.json'
import zh from './locales/zh.json'

const i18n = createI18n({
  legacy: false, // Composition API modu
  locale: localStorage.getItem('lang') || 'en', // localStorage'tan dil tercihini oku
  fallbackLocale: 'en',
  globalInjection: true, // Tüm bileşenlerde $t kullanımı için
  messages: {
    en,
    de, // Almanca'yı mesajlara ekledim
    es,
    fr,
    ja,
    nl,
    ru,
    tr,
    zh,
  },
  numberFormats: {
    // İsteğe bağlı: Sayı formatlama
    en: {
      currency: {
        style: 'currency',
        currency: 'USD',
      },
    },
    tr: {
      currency: {
        style: 'currency',
        currency: 'TRY',
      },
    },
  },
})

export default i18n
