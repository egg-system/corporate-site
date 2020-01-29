<template>
  <div>
    <the-hero-title main-text="サービス" sub-text="システムコンサルティング" />
    <div class="content page-content">
      <the-sub-header text="サービス概要" />
      <the-overview />

      <the-sub-header class="blank" text="サービスの特徴" />
      <the-characteristic />

      <the-sub-header class="blank" text="当社サービスに向いているお客様" />
      <the-target />

      <the-sub-header class="blank" text="事例紹介" />
      <the-case />

      <the-contact />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import TheOverview from '~/components/pages/service/consulting/TheOverview.vue'
import TheCharacteristic from '~/components/pages/service/consulting/TheCharacteristic.vue'
import TheTarget from '~/components/pages/service/consulting/TheTarget.vue'
import TheCase from '~/components/pages/service/consulting/TheCase.vue'
import TheContact from '~/components/pages/common/TheContact.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheOverview,
    TheCharacteristic,
    TheTarget,
    TheCase,
    TheContact
  }
}
</script>

<style lang="scss" scoped>
.blank {
  margin-top: 100px;
}
</style>
