<template>
  <div>
    <the-hero-image />
    <the-mission />
    <the-vision />
    <the-value />
    <the-service />
  </div>
</template>


<script>
import TheHeroImage from '~/components/pages/top/TheHeroImage.vue'
import TheMission from '~/components/pages/top/TheMission.vue'
import TheVision from '~/components/pages/top/TheVision.vue'
import TheValue from '~/components/pages/top/TheValue.vue'
import TheService from '~/components/pages/top/TheService.vue'

export default {
  components: {
    TheHeroImage,
    TheMission,
    TheVision,
    TheValue,
    TheService
  }
}
</script>

<style lang="scss" scoped>
</style>
