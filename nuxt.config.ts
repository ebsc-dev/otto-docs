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
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        }
      ]
    }
  },

  compatibilityDate: '2024-11-01'
})
