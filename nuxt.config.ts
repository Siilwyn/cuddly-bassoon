import pluginGraphql from '@rollup/plugin-graphql';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  routeRules: {
    '*': { prerender: false },
  },
  nitro: {
    preset: 'netlify',
    prerender: {
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [pluginGraphql()],
  },
  $development: {
    vite: {
      server: {
        allowedHosts: true,
      },
    },
  },
});
