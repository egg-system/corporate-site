<template>
  <div>
    <div class="content  page-content">
      <the-hero-title main-text="ご依頼について" />
      <div class="message lightgray-underline">
        <p>ご要件やご予算が決まっていない段階でのご相談でも問題ありません。</p>
        <br>
        <p>「こんな相談をしてよいのかどうか分からないけど・・・」</p>
        <p>「まずは調査と分析だけ依頼したい」</p>
        <p>「このくらいのシステムを作る場合の費用を知りたい」</p>
        <br>
        <p>など、どんな内容もまずはお気軽にご相談ください。</p>
      </div>
      <section>
        <the-sub-header :is-line="true" text="ご依頼の流れ" class="subheader" />
        <the-flow class="lightgray-underline" />
      </section>
      <section>
        <the-sub-header :is-line="true" text="当社サービスについて" class="subheader" />
        <the-service :services="services" class="service"/>
      </section>
      <section>
        <div class="link">
          <a class="button is-dark" href="https://eggsystem.co.jp/service/">
            サービス詳細へ
          </a>
        </div>
        <div class="lightgray-underline"/>
      </section>
      <the-contact />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/request/TheSubHeader.vue'
import TheFlow from '~/components/pages/request/TheFlow.vue'
import TheService from '~/components/pages/request/TheService.vue'
import TheContact from '~/components/pages/top/TheContact.vue'
import TheColumn from '~/components/pages/request/TheColumn.vue'
import services from '~/assets/request/js/services.js'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheFlow,
    TheService,
    TheContact,
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
          hid: 'request-twitter:card',
          property: 'twitter:card',
          content: 'summary'
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
          content: 'https://eggsystem.co.jp/'
        },
        {
          hid: 'request-og:image',
          property: 'og:image',
          content: 'https://eggsystem.co.jp/ogp/request-service3.JPG'
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
  width: 30rem;
  margin: 30px auto;
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
@media screen and (max-width: 768px) {
  .link {
    width: 18rem;
  }
}
</style>
