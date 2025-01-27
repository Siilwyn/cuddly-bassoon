import pluginGraphql from '@rollup/plugin-graphql';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  components: { dirs: [] },

  // Disable confusing @ alias in favor of ~ alias
  alias: { '@': '' },

  routeRules: {
    '*': { prerender: false },
  },

  compatibilityDate: '2024-07-26',
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  vite: {
    plugins: [pluginGraphql()],
  },

  experimental: {
    componentIslands: true,
    defaults: {
      nuxtLink: {
        trailingSlash: 'append',
      },
    },
  },
});
