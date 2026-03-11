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
    colors: {
      primary: 'cyan',
      neutral: 'zinc'
    },
    icons: ['heroicons']
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Otto Docs',
      meta: [
        { name: 'description', content: 'Documentation for Otto - AI-powered development automation' }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap'
        }
      ]
    }
  },

  compatibilityDate: '2024-11-01'
})
