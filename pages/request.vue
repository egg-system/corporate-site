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
      title: this.title,
      meta: [
        {
          hid: 'request',
          name: 'ご依頼について',
          content:
            'ご要件やご予算が決まっていない段階でのご相談でも問題ありません。「こんな相談をしてよいのかどうか分からないけど・・・」「まずは調査と分析だけ依頼したい」「このくらいのシステムを作る場合の費用を知りたい」など、どんな内容もまずはお気軽にご相談ください。'
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
