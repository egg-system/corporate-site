<template>
  <div>
    <div class="content page-content">
      <the-hero-title main-text="自社サービス紹介" />
      <the-data-convert id="the-data-convert" />
      <the-borderless-gym id="the-borderless-gym" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheDataConvert from '~/components/pages/own_site/TheDataConvert.vue'
import TheBorderlessGym from '~/components/pages/own_site/TheBorderlessGym.vue'
import consultingImage from '~/assets/service/img/service-consult01.JPG'
import dataconvertImage from '~/assets/own_site/dataconvert-screen.png'
import TheContact from '~/components/pages/top/TheContact.vue'

export default {
  components: {
    TheHeroTitle,
    TheDataConvert,
    TheBorderlessGym,
    TheContact
  },
  data: () => ({
    consultingImage,
    dataconvertImage
  }),
  head() {
    return {
      title: 'サービス',
      meta: [
        {
          hid: 'service-description',
          name: 'description',
          content:
            'システム導入や導入後の運用を軸に「計画」「推進」「管理」に沿った3つのシステムコンサルティングサービス（IT戦略/IT投資計画策定、システム化支援/業務改善、プロジェクトマネジメント）を提供しています。また、ご要望に合わせてWebシステムや業務システムの開発を行います。'
        },
        {
          hid: 'service-keywords',
          name: 'keywords',
          content:
            'サービス紹介, システムコンサルティング, 開発, IT戦略, IT投資計画策定, システム化支援, 業務改善, ToBe, CanBe, プロジェクトマネジメント, サロン, 整体, エステ, 接骨院, マッサージ, トレーニングジム, EGG'
        },
        {
          hid: 'service-twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'service-og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'service-og:title',
          property: 'og:title',
          content: 'サービス'
        },
        {
          hid: 'service-og:description',
          property: 'og:description',
          content:
            'システム導入や導入後の運用を軸に「計画」「推進」「管理」に沿った3つのシステムコンサルティングサービス（IT戦略/IT投資計画策定、システム化支援/業務改善、プロジェクトマネジメント）を提供しています。また、ご要望に合わせてWebシステムや業務システムの開発を行います。'
        },
        {
          hid: 'service-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/'
        },
        {
          hid: 'service-og:image',
          property: 'og:image',
          content: 'https://eggsystem.co.jp/ogp/service-system01.JPG'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  letter-spacing: 1px;
}
.columns {
  text-align: center;
  position: relative;
  margin: auto;
  .column {
    padding: 2rem;
    margin-bottom: 3rem;
  }
}
figure.image {
  margin-bottom: 1rem;
}
.is-size-5 {
  margin-bottom: 1rem;
}
#the-data-convert {
  border-bottom: 1px solid $lightgray;
  padding-bottom: 80px;
}
@media screen and (min-width: 769px) {
  .consulting::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 80%;
    top: 5%;
    left: 50%;
    background: $lightgray;
  }
}
@media screen and (max-width: 768px) {
  .consulting::after {
    position: absolute;
    content: '';
    width: 90%;
    height: 1px;
    left: 5%;
    background: $lightgray;
    margin-top: 3rem;
  }
}
.link {
  width: auto;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;
}
</style>
