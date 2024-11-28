// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/style.css'],
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/hga7qas.css' }]
    }
  }
})
