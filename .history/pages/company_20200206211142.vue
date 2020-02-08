<template>
  <div>
    <the-hero-title main-text="会社概要" />
    <div class="content page-content">
      

      <the-sub-header class="blank" text="会社概要" />
      <the-info />
      <the-map />

      <the-sub-header class="blank" text="代表メッセージ" />
      <the-message class="end" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import TheInfo from '~/components/pages/company/TheInfo.vue'
import TheMap from '~/components/pages/company/TheMap.vue'
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
    TheMessage,
    TheMap
  }
}
</script>

<style lang="scss" scoped>
.blank {
  margin-top: 100px;
  margin-bottom: 30px;
}
.end {
  margin-bottom: 50px;
}
</style>
