<template>
  <div>
    <hero-image />
    <section-mission />
    <section-vision />
    <section-value />
    <section-service />

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Egg System
          </h1>
          <h2 class="subtitle">
            x-faCE
          </h2>
          エッグシステム
          <p><nuxt-link to="/about">about</nuxt-link></p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import HeroImage from '~/components/pages/top/HeroImage.vue'
import SectionMission from '~/components/pages/top/SectionMission.vue'
import SectionVision from '~/components/pages/top/SectionVision.vue'
import SectionValue from '~/components/pages/top/SectionValue.vue'
import SectionService from '~/components/pages/top/SectionService.vue'

export default {
  components: {
    HeroImage,
    SectionMission,
    SectionVision,
    SectionValue,
    SectionService
  }
}
</script>

<style lang="scss" scoped>
</style>
