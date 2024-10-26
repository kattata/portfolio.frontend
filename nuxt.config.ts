// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-26',

  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-preset-env': {},
      'postcss-inline-media': {}
    }
  },

  components: [
    { path: '~/components' },
    { path: '~/components/base' },
    { path: '~/components/front-page' },
    { path: '~/components/global' }
  ],

  modules: ['nuxt-icons', '@nuxt/image'],

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => ['swiper-container', 'swiper-slide'].includes(tag)
    }
  }
});
