<template>
  <div>
    <the-hero-title main-text="ご依頼について" />
    <div class="content  page-content">
      <div class="message lightgray-underline">
        <p>ご要件やご予算が決まっていない段階でのご相談でも問題ありません。</p>
        <br>
        <p>「こんな相談をしてよいのかどうか分からないけど・・・」</p>
        <p>「まずは調査と分析だけ依頼したい」</p>
        <p>「このくらいのシステムを作る場合の費用を知りたい」</p>
        <br>
        <p>など、どんな内容もまずはお気軽にご相談ください。</p>
      </div>
      <the-sub-header :is-line="true" text="ご依頼の流れ" class="subheader" />
      <the-flow class="lightgray-underline" />
      <the-sub-header :is-line="true" text="当社サービスについて" class="subheader" />
      <the-service :services="services" class="service lightgray-underline"/>
      <the-message />
      <!-- <the-sub-header :is-line="true" text="最近の活動・コラム" class="subheader" />
      <the-column /> -->
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/request/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/request/TheSubHeader.vue'
import TheFlow from '~/components/pages/request/TheFlow.vue'
import TheService from '~/components/pages/request/TheService.vue'
import TheMessage from '~/components/pages/request/TheMessage.vue'
import TheColumn from '~/components/pages/request/TheColumn.vue'
import services from '~/assets/request/js/services.js'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheFlow,
    TheService,
    TheMessage,
    TheColumn
  },
  data: () => ({
    services: services.services
  }),
  head() {
    return {
      title: 'ご依頼について',
      meta: [
        {
          hid: 'request-description',
          name: 'description',
          content:
            'ご要件やご予算が決まっていない段階でのご相談でも問題ありません。「こんな相談をしてよいのかどうか分からないけど・・・」「まずは調査と分析だけ依頼したい」「このくらいのシステムを作る場合の費用を知りたい」など、どんな内容もまずはお気軽にご相談ください。'
        },
        {
          hid: 'request-keywords',
          name: 'keywords',
          content:
            'お問い合わせ, ご依頼について, ご依頼の流れ, 要件, 予算, 予算がきまっていない, 相談, 調査, 分析, 見積もり, 打合せ, サロン, 整体, エステ, 接骨院, マッサージ, トレーニングジム, EGG'
        },
        {
          hid: 'request-og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'request-og:title',
          property: 'og:title',
          content: 'ご依頼について'
        },
        {
          hid: 'request-og:description',
          property: 'og:description',
          content:
            'ご要件やご予算が決まっていない段階でのご相談でも問題ありません。「こんな相談をしてよいのかどうか分からないけど・・・」「まずは調査と分析だけ依頼したい」「このくらいのシステムを作る場合の費用を知りたい」など、どんな内容もまずはお気軽にご相談ください。'
        },
        {
          hid: 'request-og:url',
          property: 'og:url',
          content: 'https://eggsystem.co.jp/request'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  background-color: inherit;
  padding-bottom: 4rem;
}
.subheader {
  margin-top: 1rem;
}
.link {
  text-align: right;
}
/* スマホの場合は幅を広くする */
@media screen and (max-width: 400px) {
  .content {
    width: 90%;
    margin: 0 auto;
  }
}
.blank {
  margin-top: 100px;
  margin-bottom: 30px;
}
.end {
  margin-bottom: 50px;
}
</style>
