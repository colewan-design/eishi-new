import { defineStore } from 'pinia'
import translations from '~/lang/translation'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    selectedLanguage: (process.client ? localStorage.getItem('lang') : null) || 'Japanese',
    translations,
  }),
  getters: {
    t(state) {
      return state.translations[state.selectedLanguage]
    },
  },
  actions: {
    changeLanguage(lang: string) {
      this.selectedLanguage = lang
      if (process.client) localStorage.setItem('lang', lang)
    },
  },
})
