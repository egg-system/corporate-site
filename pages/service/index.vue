<template>
  <div>
    <div class="content page-content">
      <the-hero-title main-text="サービス紹介" />
      <div class="service-message service-message-main">
        <div class="service-message-title">
          『あなたじゃないと困る。』<br>
          そう言っていただける関係を目指しています
        </div>
      </div>
      <div class="service-message">
        <div class="service-message-title">
          ３つの強み<br>
          （１）システムを売らない中立的な立場　<br>
          （２）コンサルと開発の豊富な経験とノウハウ　<br>
          （３）アドバイスで終わらない 
        </div>
        <br class="sp-br">
        <p class="service-message-content">
          ベンチャー中小企業が抱える課題を解決するために<br class="pc-br">戦略や計画策定といった企画段階から開発・運用まで一貫して行うことができる<br class="pc-br">コンサルティングエンジニア集団です。<br>
          （システムコンサルティング + エンジニアリング）
        </p>
      </div>
      <section class="case-list-wrapper">
        <div class="sub-header-wrapper">
          <the-sub-header text="顧客インタビュー・事例紹介" />
        </div>
        <the-case-list :cases="cases" />
        <the-to-details-button to="/cases" />
      </section>
      <section class="service-details">
        <the-sub-header text="ITプロシェアサービス" />
        <the-consulting-engneer-detail />
      </section>
      <section class="it-control-details">
        <the-sub-header text="IT統制サポート" />
        <the-it-control-detail />
      </section>
      <section class="other-details">
        <the-sub-header text="個別サービス" />
        <the-other-service-detail />
      </section>
      <div class="contact-area">
        <the-contact />
      </div>
      <div class="link-area">
        <the-service-links />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchCmsListDataCase } from '~/lib/cms'
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/service/common/TheSubHeader.vue'
import TheToDetailsButton from '~/components/pages/common/TheToDetailsButton.vue'
import TheCaseList from '~/components/pages/common/TheCaseList.vue'
import TheConsultingEngneerDetail from '~/components/pages/service/common/TheConsultingEngneerDetail.vue'
import TheItControlDetail from '~/components/pages/service/common/TheItControlDetail.vue'
import TheOtherServiceDetail from '~/components/pages/service/common/TheOtherServiceDetail.vue'
import TheContact from '~/components/pages/top/TheContact.vue'
import BlackLink from '~/components/atoms/BlackLink.vue'
import TheServiceLinks from '~/components/pages/service/common/TheServiceLinks.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheToDetailsButton,
    TheCaseList,
    TheConsultingEngneerDetail,
    TheItControlDetail,
    TheOtherServiceDetail,
    TheContact,
    TheServiceLinks
  },
  async asyncData() {
    const data = await fetchCmsListDataCase(3)
    return { cases: data.listData }
  },
  head() {
    return {
      title: 'サービス',
      meta: [
        {
          hid: 'service-description',
          name: 'description',
          content:
            '中小企業が抱える「経験豊富な人材の不足」「システムを有効活用できない」という課題を解決するコンサルティングからシステム開発まで一貫して行うコンサルティングエンジニア集団です。月額定額のITプロシェアサービス、IT戦略/IT投資計画策定サービス 、IT統制サポート、RPA導入サービス、システム開発を行っています。'
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
            '中小企業が抱える「経験豊富な人材の不足」「システムを有効活用できない」という課題を解決するコンサルティングからシステム開発まで一貫して行うコンサルティングエンジニア集団です。月額定額のITプロシェアサービス、IT戦略/IT投資計画策定サービス 、IT統制サポート、RPA導入サービス、システム開発を行っています。'
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
  },
  computed: {
    serviceImage() {
      return ServiceImage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/service/scss/service-footer.scss';

.case-list-wrapper {
  margin-bottom: 6rem;

  .sub-header-wrapper {
    margin-bottom: 3rem;
  }

  .cast-list {
    margin: 2rem;
  }
}

.servce-image-wrapper {
  margin: 0 auto 5rem;

  @media screen and (min-width: 1024px) {
    width: 50%;
  }

  figure {
    font-size: 0.8rem;
  }
}

.service-message {
  text-align: center;
  margin-bottom: 4rem;
  border-top: 1px solid #dbdbdb;

  &-title {
    line-height: 3rem;
    margin: 2rem;
    font-size: 1.2rem;

    @media screen and (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }

  &-content {
    line-height: 2rem;
  }
}

.service-message-main {
  margin-bottom: 0 !important;
}

.service-details {
  margin-top: 8rem;
}

.service-details,
.it-control-details,
.other-details {
  line-height: 2rem;
}

.service-message-title {
  @media screen and (max-width: 768px) {
    margin: 1rem;
  }
}
</style>
