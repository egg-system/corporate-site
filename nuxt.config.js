require('dotenv').config()
import { routing } from './lib/cms'
const { microCmsApiKey, microCmsApiDomain } = process.env

export default {
  env: {
    microCmsApiKey,
    microCmsApiDomain
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '株式会社エッグシステム',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'eggsystem, エッグシステム, x-faCE, コンサルティング, コンサルティングエンジニア, ITシステム, 株式会社エッグシステム'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '中小企業向けに、事業成長を目的としたシステム企画から開発・運用まで行います。株式会社エッグシステムのコンサルティングエンジニア集団「x-faCE（for all Consulting Engineer）」では《「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会》の実現のために、ITシステムを活用します。'
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'eggsystem' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://eggsystem.co.jp/'
      },
      { hid: 'og:title', property: 'og:title', content: 'eggsystem' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '中小企業向けに、事業成長を目的としたシステム企画から開発・運用まで行います。株式会社エッグシステムのコンサルティングエンジニア集団「x-faCE（for all Consulting Engineer）」では《「目の前の人に喜んでもらうこと」を目的とし行動する人が報われる社会》の実現のために、ITシステムを活用します。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://eggsystem.co.jp/ogp/top_pc.jpg'
      }
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
  ** generateオプション
  */
  generate: {
    async routes() {
      return routing()
    }
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
    '~/plugins/filters.js',
    '~plugins/vue-scrollto',
    { src: '~plugins/slick-slide.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://eggsystem.co.jp/',
    generate: false,
    exclude: ['/404', '/contact/complete'],
    async routes() {
      return routing()
    }
  },

  styleResources: {
    scss: ['~/assets/common.scss']
  },

  googleAnalytics: {
    id: 'UA-118871797-1'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      }
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
