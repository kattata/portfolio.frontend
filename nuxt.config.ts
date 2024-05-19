// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-preset-env': {},
    },
  },

  modules: ['nuxt-icons', '@nuxt/image', '@nuxtjs/sanity'],

  image: {
    dir: 'assets/images',
  },

  sanity: {
    projectId: 'gsemtvsw',
  },
});
