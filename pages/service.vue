<template>
  <div>
    <the-hero-title main-text="サービス紹介" />
    <div class="content page-content">
      <div class="columns">
        <div class="consulting column is-half">
          <figure class="image">
            <img :src="consultingImage">
          </figure>
          <div class="is-size-5">システムコンサルティングサービス</div>
          <div class="link">
            <nuxt-link v-scroll-to="'#the-consulting'" to class="button is-dark">
              <div class="link-message">詳細へ</div>
              <div class="arrow">></div>
            </nuxt-link>
          </div>
        </div>
        <div class="development column is-half">
          <figure class="image">
            <img :src="systemImage">
          </figure>
          <div class="is-size-5">システム開発</div>
          <div class="link">
            <nuxt-link v-scroll-to="'#the-development'" to class="button is-dark">
              <div class="link-message">詳細へ</div>
              <div class="arrow">></div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <the-consulting id="the-consulting" />
      <the-development id="the-development" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheConsulting from '~/components/pages/service/TheConsulting.vue'
import TheDevelopment from '~/components/pages/service/TheDevelopment.vue'
import consultingImage from '~/assets/service/img/service-consult01.JPG'
import systemImage from '~/assets/service/img/service-system01.JPG'

export default {
  components: {
    TheHeroTitle,
    TheConsulting,
    TheDevelopment
  },
  data: () => ({
    consultingImage,
    systemImage
  }),
  head() {
    return {
      title: 'サービス',
      meta: [
        {
          hid: 'service-description',
          name: 'description',
          content:
            'システム導入や導入後の運用を軸に、「計画」「推進」「管理」の3つのサービスを提供します。サロン・整体・エステ・接骨院・マッサージ・トレーニングジムの業界に特化したコンサルティングサービスを行っています。事業戦力の策定や集客の支援から、手間がかかるホームページ等のシステム面のサポートまでオールインワンで行います。ご要望に合わせてスクラッチやWebシステムや業務システムの開発を行います。'
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
            'システム導入や導入後の運用を軸に、「計画」「推進」「管理」の3つのサービスを提供します。サロン・整体・エステ・接骨院・マッサージ・トレーニングジムの業界に特化したコンサルティングサービスを行っています。事業戦力の策定や集客の支援から、手間がかかるホームページ等のシステム面のサポートまでオールインワンで行います。ご要望に合わせてスクラッチやWebシステムや業務システムの開発を行います。'
        },
        {
          hid: 'service-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/service'
        },
        {
          hid: 'service-og:image',
          property: 'og:image',
          content: 'https://eggsystem.co.jp/_nuxt/img/13111c3.JPG'
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
.link .button {
  width: 80%;
}
</style>
