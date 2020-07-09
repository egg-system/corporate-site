<template>
  <div class="first-view columns">
    <div-image class="column is-5" message="DivImage" />
    <div class="column is-7 align-center">
      <large-message message="貴社のITコストは妥当でしょうか？" class="margin-bottom-2rem" />
      <medium-message message="先行きが不透明な今、" class="margin-bottom-2rem margin-left-1rem" />
      <medium-message message="コスト削減で足場を固めるチャンスです。" class="margin-left-1rem" />
    </div>
  </div>
</template>

<script>
import DivImage from '~/components/atoms/img/DivImage.vue'
import LargeMessage from '~/components/atoms/message/LargeMessage.vue'
import MediumMessage from '~/components/atoms/message/MediumMessage.vue'

export default {
  name: 'FirstView',
  components: {
    DivImage,
    LargeMessage,
    MediumMessage
  }
}
</script>
<style lang="scss" scoped>
.first-view {
}
.align-center {
  margin: auto 0;
}
.margin-bottom-2rem {
  margin-bottom: 2rem;
}
.margin-left-1rem {
  margin-left: 2rem;
}
</style>
