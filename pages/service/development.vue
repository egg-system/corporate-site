<template>
  <div>
    <the-hero-title main-text="サービス" sub-text="ホームページ・web開発" />
    <div class="content">
      <the-sub-header text="サービス概要" />
      <the-overview />

      <the-sub-header class="blank" text="サービスの特徴" />
      <the-characteristic />

      <the-sub-header class="blank" text="事例紹介" />
      <the-case />

      <div class="contact">
        <p>
          サービス内容や事例について等、お気軽にお問い合わせください。<br>
          依頼するかどうかまだ決まっていない、問い合わせるべきかどうか迷っている、<br>
          といった状態でもご相談を受け付けております。<br>
        </p>
        <div class="contact-button">
          <button class="button is-large is-fullwidth" @click="go('/contact')">お問い合わせ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import TheOverview from '~/components/pages/service/development/TheOverview.vue'
import TheCharacteristic from '~/components/pages/service/development/TheCharacteristic.vue'
import TheCase from '~/components/pages/service/development/TheCase.vue'
import method from '~/mixins/method'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheOverview,
    TheCharacteristic,
    TheCase
  },
  mixins: [method]
}
</script>

<style lang="scss" scoped>
.content {
  width: 80%;
  margin: 0 auto;
}
/* スマホの場合は幅を広くする */
@media screen and (max-width: 400px) {
  .content {
    width: 90%;
    margin: 0 auto;
  }
}
.contact {
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
}
.contact-button {
  width: 50%;
  margin: auto;
}
</style>
