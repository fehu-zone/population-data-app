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
      selectedLanguage: this.$i18n.global.locale.value,
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
      console.log('Changing language to:', this.selectedLanguage);
      this.$i18n.global.locale.value = this.selectedLanguage;
      localStorage.setItem('lang', this.selectedLanguage);

      // Sayfayı yenile (isteğe bağlı)
      if (this.$route.path !== '/') {
        console.log('Redirecting to home and reloading page.');
        this.$router.push('/');
        setTimeout(() => {
          window.location.reload();
        }, 50);
      }
    },
  },
  mounted() {
    // Kayıtlı dil tercihini yükle
    const savedLang = localStorage.getItem('lang')
    if (savedLang && this.availableLanguages.some((lang) => lang.code === savedLang)) {
      this.selectedLanguage = savedLang
      this.$i18n.global.locale.value = savedLang
    }
  },
}
</script>
