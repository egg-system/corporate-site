<template>
  <div>
    <the-hero-title main-text="x-face" />
    <div class="overview">
      <the-overview />
    </div>
    <div class="content">
      <the-sub-header class="blank" text="x-faceとは" />
      <the-characteristic />

      <the-sub-header class="blank" text="value" />
      <the-value />

      <the-sub-header class="blank" text="活動内容" />

      <the-sub-header class="blank" text="メンバー紹介" />

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
import TheContact from '~/components/pages/common/TheContact.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheOverview,
    TheCharacteristic,
    TheValue,
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
  margin-top: 50px;
}
</style>
