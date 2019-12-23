<template>
  <div>
    <the-hero-title main-text="x-face" />
    <div class="overview">
      <the-overview />
    </div>
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheOverview from '~/components/pages/service/xface/TheOverview.vue'

export default {
  components: {
    TheHeroTitle,
    TheOverview
  }
}
</script>

<style lang="scss" scoped>
</style>
