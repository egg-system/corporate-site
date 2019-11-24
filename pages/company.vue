<template>
  <div>
    <the-hero-title main-text="会社概要" />
    <div class="content">
      <the-sub-header :is-line="true" text="mission" />
      <the-mission />

      <the-sub-header :is-line="true" text="vision" />
      <the-vision />

      <the-sub-header :is-line="true" text="value" />
      <the-value />

      <the-sub-header class="blank" text="会社概要" />
      <the-info />

      <the-sub-header class="blank" text="代表メッセージ" />
      <the-message class="end" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/company/TheSubHeader.vue'
import TheInfo from '~/components/pages/company/TheInfo.vue'
import TheMission from '~/components/pages/company/TheMission.vue'
import TheVision from '~/components/pages/company/TheVision.vue'
import TheValue from '~/components/pages/company/TheValue.vue'
import TheMessage from '~/components/pages/company/TheMessage.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheInfo,
    TheMission,
    TheVision,
    TheValue,
    TheMessage
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
.blank {
  margin-top: 100px;
}
.end {
  margin-bottom: 50px;
}
</style>
