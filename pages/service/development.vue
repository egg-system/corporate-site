<template>
  <div>
    <the-hero-title main-text="サービス" sub-text="ホームページ・web開発" />
    <div class="overview">
      <the-overview />
    </div>

    <div class="content page-content">
      <the-sub-header class="blank" text="サービスの特徴" />
      <the-characteristic />

      <the-sub-header class="blank" text="事例紹介" />
      <the-case />

      <the-contact />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import TheOverview from '~/components/pages/service/development/TheOverview.vue'
import TheCharacteristic from '~/components/pages/service/development/TheCharacteristic.vue'
import TheCase from '~/components/pages/service/development/TheCase.vue'
import TheContact from '~/components/pages/common/TheContact.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheOverview,
    TheCharacteristic,
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
