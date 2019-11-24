<template>
  <div>
    <the-hero-title main-text="サービス" />
    <the-consulting />
    <the-development />
    <the-salon />
    <the-media />
  </div>
</template>

<script>
import TheHeroTitle from '~/components/pages/common/TheHeroTitle.vue'
import TheConsulting from '~/components/pages/service/TheConsulting.vue'
import TheDevelopment from '~/components/pages/service/TheDevelopment.vue'
import TheSalon from '~/components/pages/service/TheSalon.vue'
import TheMedia from '~/components/pages/service/TheMedia.vue'

export default {
  components: {
    TheHeroTitle,
    TheConsulting,
    TheDevelopment,
    TheSalon,
    TheMedia
  }
}
</script>

<style lang="scss" scoped>
</style>
