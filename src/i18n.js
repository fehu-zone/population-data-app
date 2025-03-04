import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
import nl from './locales/nl.json'
import ru from './locales/ru.json'
import tr from './locales/tr.json'
import zh from './locales/zh.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en', // Varsayılan dil
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    fr,
    ja,
    nl,
    ru,
    tr,
    zh,
  },
})

export default i18n
