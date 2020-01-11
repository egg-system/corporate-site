<template>
  <div>
    <the-hero-image />
    <the-mission />
    <the-vision />
    <the-value />
    <the-service />
    <the-news-list />
    <the-column-list />
    <the-recruit />
  </div>
</template>

<script>
import TheHeroImage from '~/components/pages/top/TheHeroImage.vue'
import TheMission from '~/components/pages/top/TheMission.vue'
import TheVision from '~/components/pages/top/TheVision.vue'
import TheValue from '~/components/pages/top/TheValue.vue'
import TheService from '~/components/pages/top/TheService.vue'
import TheNewsList from '~/components/pages/top/TheNewsList.vue'
import TheSubHeader from '~/components/pages/top/TheSubHeader.vue'
import TheColumnList from '~/components/pages/top/TheColumnList.vue'
import TheRecruit from '~/components/pages/top/TheRecruit.vue'

export default {
  components: {
    TheHeroImage,
    TheMission,
    TheVision,
    TheValue,
    TheService,
    TheNewsList,
    TheSubHeader,
    TheColumnList,
    TheRecruit
  }
}
</script>

<style lang="scss" scoped>
</style>
