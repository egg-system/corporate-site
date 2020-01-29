<template>
  <div>
    <the-hero-title main-text="x-face" />
    <div class="overview">
      <the-overview />
    </div>
    <div class="content page-content">
      <the-sub-header class="blank" text="x-faceとは" />
      <the-characteristic />

      <the-sub-header class="blank" text="value" />
      <the-value />

      <the-sub-header class="blank" text="活動内容" />
      <the-activity />

      <the-sub-header class="blank" text="メンバー紹介" />
      <the-member />

      <the-contact />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import TheOverview from '~/components/pages/service/xface/TheOverview.vue'
import TheCharacteristic from '~/components/pages/service/xface/TheCharacteristic.vue'
import TheValue from '~/components/pages/service/xface/TheValue.vue'
import TheActivity from '~/components/pages/service/xface/TheActivity.vue'
import TheMember from '~/components/pages/service/xface/TheMember.vue'
import TheContact from '~/components/pages/common/TheContact.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheOverview,
    TheCharacteristic,
    TheValue,
    TheActivity,
    TheMember,
    TheContact
  }
}
</script>

<style lang="scss" scoped>
.blank {
  margin-top: 50px;
}
</style>
