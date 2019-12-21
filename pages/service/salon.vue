<template>
  <div>
    <the-hero-title main-text="サービス" sub-text="サロン開業支援サービス" />
    <div class="overview">
      <the-overview />
    </div>

    <div class="content">
      <the-sub-header class="blank" text="サービスの特徴" />
      <the-characteristic />

      <the-sub-header class="blank" text="当社サービスに向いているお客様" />
      <the-target />

      <the-sub-header class="blank" text="お客様の声" />
      <the-voice />

      <the-contact />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import TheOverview from '~/components/pages/service/salon/TheOverview.vue'
import TheCharacteristic from '~/components/pages/service/salon/TheCharacteristic.vue'
import TheTarget from '~/components/pages/service/salon/TheTarget.vue'
import TheVoice from '~/components/pages/service/salon/TheVoice.vue'
import TheContact from '~/components/pages/common/TheContact.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheOverview,
    TheCharacteristic,
    TheTarget,
    TheVoice,
    TheContact
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
</style>
