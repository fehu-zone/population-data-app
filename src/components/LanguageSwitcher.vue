<template>
  <div class="language-switcher">
    <select v-model="selectedLanguage" @change="changeLanguage" aria-label="Select Language">
      <option v-for="lang in availableLanguages" :key="lang.code" :value="lang.code">
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      selectedLanguage: this.$i18n.locale,
      availableLanguages: [
        { code: 'en', name: 'English' },
        { code: 'tr', name: 'Türkçe' },
        { code: 'de', name: 'Deutsch' },
        { code: 'fr', name: 'Français' },
        { code: 'es', name: 'Español' },
        { code: 'ja', name: '日本語' },
        { code: 'zh', name: '中文' },
        { code: 'ru', name: 'Русский' },
      ],
    }
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage
      localStorage.setItem('lang', this.selectedLanguage)

      // Sayfayı yenile (isteğe bağlı)
      if (this.$route.path !== '/') {
        this.$router.push('/')
        setTimeout(() => {
          window.location.reload()
        }, 50)
      }
    },
  },
  mounted() {
    // Kayıtlı dil tercihini yükle
    const savedLang = localStorage.getItem('lang')
    if (savedLang && this.availableLanguages.some((lang) => lang.code === savedLang)) {
      this.selectedLanguage = savedLang
      this.$i18n.locale = savedLang
    }
  },
}
</script>
