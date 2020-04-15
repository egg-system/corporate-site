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
      <the-sub-header :is-line="true" text="ご依頼の流れ" class="subheader" />
      <the-flow class="lightgray-underline" />
      <the-sub-header :is-line="true" text="当社サービスについて" class="subheader" />
      <the-service :services="services" class="service lightgray-underline"/>
      <the-contact class="lightgray-underline"/>
      <div class="column-header blank">
        <the-sub-header :is-line="true" text="最近の活動・コラム" class="subheader"/>
        <div class="link">
          <nuxt-link class="column-button" to="/column">
            <div class="left">一覧を見る</div>
            <div class="right">></div>
          </nuxt-link>
        </div>
      </div>
      <the-column-list :columns="columns" class="end"/>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/request/TheSubHeader.vue'
import TheFlow from '~/components/pages/request/TheFlow.vue'
import TheService from '~/components/pages/request/TheService.vue'
import TheContact from '~/components/pages/top/TheContact.vue'
import TheColumnList from '~/components/pages/common/TheColumnList.vue'
import { fetchCmsListDataColumn, fetchCmsListDataNews } from '~/lib/cms'
import services from '~/assets/request/js/services.js'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheFlow,
    TheService,
    TheContact,
    TheColumnList
  },
  async asyncData() {
    const data = await Promise.all([
      fetchCmsListDataColumn(3),
      fetchCmsListDataNews(3)
    ])
    return { columns: data[0].listData, news: data[1].listData }
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
.contact {
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 2rem;
}
.subheader {
  margin-top: 1rem;
}
.link {
  text-align: right;
}
.column-header {
  display: flex;
  .link {
    margin: auto;
    margin-right: 0;
    margin-bottom: 0;
    a {
      display: flex;
      width: 8rem;
      margin-right: 2rem;
      color: inherit;
      .left {
        margin-right: auto;
      }
      .right {
        margin-left: auto;
      }
    }
  }
}
/* スマホの場合は幅を広くする */
@media screen and (max-width: 400px) {
  .content {
    width: 90%;
    margin: 0 auto;
  }
  .column-header {
    display: block;
    .link a {
      margin-left: auto;
      margin-right: 1rem;
    }
  }
}
.blank {
  margin-top: 50px;
  margin-bottom: 30px;
}
.end {
  margin-bottom: 50px;
}
</style>
