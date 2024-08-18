// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-preset-env': {}
    }
  },

  modules: [
    'nuxt-icons',
    '@nuxt/image',
    '@nuxtjs/sanity',
    '@nuxtjs/i18n',
    '@nuxt/content'
  ],

  image: {
    dir: 'assets/images'
  },

  sanity: {
    projectId: 'gsemtvsw'
  },

  i18n: {
    compilation: {
      strictMessage: false
    },
    locales: [
      {
        name: 'English',
        code: 'en',
        file: 'en.yaml',
        iso: 'en',
        dir: 'ltr'
      }
    ],
    lazy: true,
    langDir: './locales',
    defaultLocale: 'en'
  }
});
