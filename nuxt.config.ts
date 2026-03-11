export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],

  content: {
    highlight: {
      theme: 'github-dark'
    }
  },

  ui: {
    icons: ['heroicons', 'simple-icons']
  },

  app: {
    head: {
      title: 'Otto Docs',
      meta: [
        { name: 'description', content: 'Documentation for Otto - AI-powered development automation' }
      ]
    }
  },

  compatibilityDate: '2024-11-01'
})
