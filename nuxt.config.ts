// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools:true,
  app: {
    head: {
      title: 'Lutfi Bf',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'NUXT JS Application' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt'
  ],
  elementPlus: { /** Options */ }
})
