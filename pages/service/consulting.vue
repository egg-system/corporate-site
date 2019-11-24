<template>
  <div>
    <the-hero-title main-text="サービス" sub-text="システムコンサルティング" />
    <div class="content">
      <the-sub-header text="サービス概要" />
      <p>
        システム導入およびシステム導入後の運用における<br><b>「計画」「推進」「管理」</b>に沿ったコンサルティングサービスを提供します。
      </p>
      <p>
        ①<b>【計画】</b>IT戦略・IT投資計画策定サービス<br>
        ②<b>【推進】</b>業務改善コンサルティングサービス<br>
        ③<b>【管理】</b>プロジェクトマネジメントサービス<br>
      </p>
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader
  }
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
</style>
