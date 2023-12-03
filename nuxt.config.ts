// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import localeJa from './config/locales/ja.json'
import localeEn from './config/locales/en.json'

export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    [
      '@nuxtjs/i18n',

      {
        legacy: false,
        defaultLocale: 'ja',
        locale: ['ja', 'en'],
        messages: {
          en: localeEn,
          jp: localeJa
        }
      },

    ],

    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/css/main.scss'],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  components:[
    {
      path: '~/components/',
      pathPrefix: false,
    }
  ]
})
