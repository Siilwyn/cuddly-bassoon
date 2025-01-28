// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  routeRules: {
    '*': { prerender: false },
  },
  compatibilityDate: '2024-07-26',
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
});
