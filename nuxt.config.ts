export default defineNuxtConfig({
  css: [
    '@progress/kendo-theme-default/dist/all.css',
    '@unocss/reset/tailwind.css',
  ],
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  colorMode: {
    classSuffix: '',
  },
})
