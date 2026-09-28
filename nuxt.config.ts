export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: false },

  experimental: {
    viteEnvironmentApi: true,
  },

  modules: [
    'vuetify-nuxt-module',
    '@pinia/nuxt',
  ],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              primary: '#0066CC',
              secondary: '#00B4D8',
              accent: '#6D28D9',
              background: '#FFFFFF',
              surface: '#F8FAFC',
              'surface-variant': '#F1F5F9',
              success: '#10B981',
              error: '#EF4444',
              warning: '#F59E0B',
              info: '#06B6D4',
              'text-primary': '#1E293B',
              'text-secondary': '#64748B',
              'text-tertiary': '#94A3B8',
              border: '#E2E8F0',
              divider: '#E2E8F0',
            },
          },
        },
      },
      icons: {
        defaultSet: 'mdi',
      },
    },
  },

  css: [
    '~/assets/css/main.css',
    '@mdi/font/css/materialdesignicons.css',
    '@flaticon/flaticon-uicons/css/all/all.css',
    'swiper/css',
    'swiper/css/autoplay',
    'swiper/css/pagination',
    'swiper/css/navigation',
    'swiper/css/effect-fade',
    'aos/dist/aos.css',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en-PH' },
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'apple-mobile-web-app-title', content: 'EISHI Partners' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
      ],
      script: [
        {
          innerHTML: `window._analyticsId = '8jz5QPrSsMf7PQKX5z8yOl6IwhInGBnA'; window._analyticsUrl = 'https://alyse.salidumay.com';`,
        },
        {
          src: 'https://alyse.salidumay.com/tracker.js',
          defer: true,
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      mapboxToken: process.env.NUXT_PUBLIC_MAPBOX_TOKEN || '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
    },
  },

  compatibilityDate: '2025-06-06',
})
