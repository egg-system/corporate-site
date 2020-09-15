<template>
  <div>
    <div class="content page-content">
      <the-hero-title main-text="サービス紹介" />
      <div class="service-message">
        <div class="service-message-title">
          『あなたじゃないと困る。』<br>
          そう言っていただける関係を目指しています
        </div>
        <p class="service-message-content">
          中小企業が抱える「経験豊富な人材の不足」「システムを有効活用できない」という課題を解決する<br>
          コンサルティングからシステム開発まで一貫して行うコンサルティングエンジニア集団です。
        </p>
      </div>
      <the-sub-header text="特徴" />
      <the-service-feature />
      <the-sub-header text="対応範囲" />
      <the-service-scope />
      <the-sub-header text="サービスメニュー" />
      <the-service-menu-table />
      <the-sub-header text="コンサルティングサービス　作業実績" />
      <the-service-performance />
      <div class="contact-area">
        <black-link label="お問い合わせ・ご相談はこちらから" link="/contact" />
      </div>
      <the-sub-header text="個別サービスメニュー" />
      <the-service-details-table />
      <the-service-details />
      <the-sub-header text="顧客インタビュー・事例紹介" />
      <the-case-list :cases="cases" />
    </div>
  </div>
</template>

<script>
import { fetchCmsListDataCase } from '~/lib/cms'
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/service/common/TheSubHeader.vue'
import BlackLink from '~/components/atoms/BlackLink.vue'
import TheServiceFeature from '~/components/pages/service/TheServiceFeature.vue'
import TheServiceScope from '~/components/pages/service/TheServiceScope.vue'
import TheServiceMenuTable from '~/components/pages/service/TheServiceMenuTable.vue'
import TheServicePerformance from '~/components/pages/service/TheServicePerformance.vue'
import TheServiceDetailsTable from '~/components/pages/service/TheServiceDetailsTable.vue'
import TheServiceDetails from '~/components/pages/service/TheServiceDetails.vue'
import TheCaseList from '~/components/pages/common/TheCaseList.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    BlackLink,
    TheServiceFeature,
    TheServiceScope,
    TheServiceMenuTable,
    TheServicePerformance,
    TheServiceDetailsTable,
    TheServiceDetails,
    TheCaseList
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
.service-message {
  text-align: center;
  margin-bottom: 4rem;

  &-title {
    line-height: 3rem;
    margin-bottom: 2rem;
    font-size: 1.2rem;

    @media screen and (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }

  &-content {
    line-height: 2rem;
  }
}

.contact-area {
  margin-bottom: 4rem;
  padding: 4rem 10% 6rem;

  @media screen and (min-width: 1024px) {
    padding: 4rem 30% 6rem;
  }

  @media screen and (max-width: 769px) {
    padding: 4rem 0 6rem;
  }

  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
}
</style>
