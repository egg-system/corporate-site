<template>
  <div>
    <div class="content page-content">
      <the-sub-header class="blank" text="わたしたちについて" />
      <the-message class="end" />
      <the-sub-header class="blank" text="当社の強み" />
      <the-value class="end" />
      <the-sub-header class="blank" text="最近の活動・コラム" />
      <the-column class="end" />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheSubHeader from '~/components/pages/common/TheSubHeader.vue'
import TheValue from '~/components/pages/about/TheValue.vue'
import TheMessage from '~/components/pages/about/TheMessage.vue'
import TheColumn from '~/components/pages/about/TheColumn.vue'

export default {
  components: {
    TheHeroTitle,
    TheSubHeader,
    TheValue,
    TheMessage,
    TheColumn
  }
}
</script>

<style lang="scss" scoped>
.blank {
  margin-top: 70px;
  margin-bottom: 30px;
}
.end {
  margin: 0 0 50px;
}
@media screen and (max-width: 600px) {
  .end {
    margin: 0;
    padding-bottom: 0;
  }
}
</style>
