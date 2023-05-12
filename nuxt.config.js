require('dotenv').config()
import { routing } from './lib/cms'
const { microCmsApiKey, microCmsApiDomain } = process.env
const hotJarFunction =
  "(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:2178076,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');"

export default {
  env: {
    microCmsApiKey,
    microCmsApiDomain
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '株式会社エッグシステム｜システムコンサルティング',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'エッグシステムでは【中小企業向けにバックヤード業務のDX推進・IT統制】のシステムコンサルティングを行います。コンサルと開発のスキルを持ったITプロ人材が、大手コンサル会社の50%以下の単価でアドバイスから実務まで対応します。'
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
          'エッグシステムでは【中小企業向けにバックヤード業務のDX推進・IT統制】のシステムコンサルティングを行います。コンサルと開発のスキルを持ったITプロ人材が、大手コンサル会社の50%以下の単価でアドバイスから実務まで対応します。'
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
    ],
    script: [
      {
        hid: 'hotJarFunction',
        type: 'text/javascript',
        innerHTML: hotJarFunction
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      hotJarFunction: ['innerHTML']
    }
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
    '@nuxtjs/device',
    '@nuxtjs/google-analytics',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-adsense'
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

  googleAdsense: {
    id: 'ca-pub-1776210800611691'
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
