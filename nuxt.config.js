export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '中小企業やサロン・整体オーナー向けに、事業成長を目的としたシステム企画から開発・運用まで行います。【エッグシステム】では貴方の企業・店舗の魅力を「カタチ」にします。'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'eggsystem' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://eggsystem.co.jp' },
      { hid: 'og:title', property: 'og:title', content: 'eggsystem' },
      { hid: 'og:description', property: 'og:description', content: '中小企業やサロン・整体オーナー向けに、事業成長を目的としたシステム企画から開発・運用まで行います。【エッグシステム】では貴方の企業・店舗の魅力を「カタチ」にします。' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Quicksand'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#1f55a5' },
  /*
   ** Global CSS
   */
  css: [{ src: '~assets/main.scss', lang: 'scss' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vue-scrollto',
    { src: '~plugins/slick-slide.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],

  styleResources: {
    scss: ['~/assets/common.scss']
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.json5$/,
        loader: 'json5-loader',
        exclude: /(node_modules)/
      })
    }
  }
}
